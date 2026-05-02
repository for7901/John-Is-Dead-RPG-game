//=============================================================================
// JM_MapPickupItems
// 地图拾取 → 入库；需在事件中写插件指令 JM_MapPickup <类型>
//=============================================================================

var Imported = Imported || {};
Imported.JM_MapPickupItems = true;

/*:
 * @plugindesc 地图预制拾取物品：插件指令 JM_MapPickup HP | MP | STR（或道具ID数字）
 * @author John Is Dead / Project
 *
 * @param HealthPotionId
 * @text 血瓶物品ID
 * @type item
 * @default 51
 *
 * @param ManaPotionId
 * @text 蓝瓶物品ID
 * @type item
 * @default 52
 *
 * @param StrengthPotionId
 * @text 力量药水物品ID
 * @type item
 * @default 53
 *
 * @param PickupSeName
 * @text 拾取音效
 * @default Item3
 *
 * @param PickupVolume
 * @text 拾取音效音量
 * @type number
 * @max 100
 * @default 90
 *
 * @help
 * ============================================================================
 * 用法（RPG Maker MV「事件 → 插件指令」）
 * ============================================================================
 *
 * JM_MapPickup HP        → 獲得一個「血瓶」
 * JM_MapPickup MP        → 獲得一個「藍瓶」
 * JM_MapPickup STR       → 獲得一個「力量藥水」
 * JM_MapPickup 53        → 也可直接填數據庫道具 ID
 *
 * 執行成功後自動從當前地圖擦除此事件（含複製到其他地圖的實例）。
 * 對應三種物品的戰鬥效果由數據庫 Items.json 設定（回血/魔 50%，攻擊+50%Buff）。
 */

(function () {
    'use strict';

    var parameters = PluginManager.parameters('JM_MapPickupItems');
    var HealthPotionId = Number(parameters['HealthPotionId'] || 51);
    var ManaPotionId = Number(parameters['ManaPotionId'] || 52);
    var StrengthPotionId = Number(parameters['StrengthPotionId'] || 53);
    var PickupSeName = String(parameters['PickupSeName'] || 'Item3');
    var PickupVolume = Number(parameters['PickupVolume'] || 90);

    Game_Interpreter.prototype.pluginCommandJM_MapPickup_resolveItemId = function (argRaw) {
        if (argRaw === undefined || argRaw === null) {
            return 0;
        }
        var upper = String(argRaw).trim().toUpperCase();
        if (upper === 'HP' || upper === 'HEALTH') {
            return HealthPotionId;
        }
        if (upper === 'MP' || upper === 'MPBOTTLE' || upper === 'MANA') {
            return ManaPotionId;
        }
        if (upper === 'STR' || upper === 'STRENGTH' || upper === 'ATK') {
            return StrengthPotionId;
        }
        var numeric = Number(argRaw);
        if (!isNaN(numeric) && numeric > 0) {
            return numeric | 0;
        }
        return 0;
    };

    Game_Interpreter.prototype.pluginCommandJM_MapPickup_gainAndErase = function (itemId) {
        var item = $dataItems[itemId];
        if (!item) {
            console.warn('[JM_MapPickupItems] Missing item #' + itemId);
            return;
        }
        $gameParty.gainItem(item, 1);
        if (PickupSeName) {
            AudioManager.playSe({ name: PickupSeName, volume: PickupVolume, pitch: 100, pan: 0 });
        }
        $gameMessage.add('拾取了【' + item.name + '】！');
        this.setWaitMode('message');
        if (this.isOnCurrentMap() && this._eventId > 0) {
            $gameMap.eraseEvent(this._eventId);
        }
    };

    var _JM_MapPickup_Game_Interpreter_pluginCommand =
        Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _JM_MapPickup_Game_Interpreter_pluginCommand.call(this, command, args);
        var cmd = command ? String(command) : '';
        if (cmd === 'JM_MapPickup') {
            var itemId = this.pluginCommandJM_MapPickup_resolveItemId(args[0]);
            if (itemId > 0 && $dataItems[itemId]) {
                this.pluginCommandJM_MapPickup_gainAndErase(itemId);
            }
        }
    };
})();
