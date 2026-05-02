//=============================================================================
// Quick Escape Button
// 战斗中添加逃跑按钮，点击后可以直接退出战斗
//=============================================================================

var Imported = Imported || {};
Imported.QuickEscapeButton = true;

var QuickEscape = QuickEscape || {};
QuickEscape.version = '1.0.0';

/*:
 * @plugindesc v1.0.0 在战斗中的角色命令窗口添加逃跑按钮，点击后可以直接退出战斗
 * @author Custom Plugin
 *
 * @param Escape Text
 * @desc 逃跑按钮显示的文字
 * @default 逃跑
 *
 * @param Escape Icon
 * @desc 逃跑按钮显示的图标ID（0为不显示图标）
 * @default 0
 *
 * @param Escape Position
 * @desc 逃跑按钮的位置（0=最后，1=最前）
 * @type select
 * @option 最后
 * @value 0
 * @option 最前
 * @value 1
 * @default 0
 *
 * @help
 * ============================================================================
 * 功能说明
 * ============================================================================
 * 
 * 此插件在战斗中的角色命令窗口添加一个"逃跑"按钮。
 * 点击逃跑按钮后，队伍将直接退出战斗，无需成功率判定。
 * 
 * ============================================================================
 * 使用方法
 * ============================================================================
 * 
 * 1. 将此插件放入 js/plugins/ 目录
 * 2. 在插件管理器中启用此插件
 * 3. 建议放在 YEP_BattleEngineCore 之后
 * 
 * ============================================================================
 * 参数说明
 * ============================================================================
 * 
 * Escape Text    - 逃跑按钮显示的文字（默认：逃跑）
 * Escape Icon    - 逃跑按钮显示的图标ID（0为不显示图标）
 * Escape Position - 逃跑按钮的位置（0=最后，1=最前）
 * 
 * ============================================================================
 * 注意事项
 * ============================================================================
 * 
 * - 逃跑后战斗直接结束，不会触发战斗失败
 * - 逃跑成功后会返回到逃跑前的地图位置
 * - 此逃跑功能不受 BattleManager.canEscape() 限制
 * 
 */

(function() {
    'use strict';

    var parameters = PluginManager.parameters('QuickEscapeButton');
    var escapeText = String(parameters['Escape Text'] || '逃跑');
    var escapeIcon = Number(parameters['Escape Icon'] || 0);
    var escapePosition = Number(parameters['Escape Position'] || 0);

    //=============================================================================
    // Window_ActorCommand
    //=============================================================================

    var _QuickEscape_Window_ActorCommand_makeCommandList = 
        Window_ActorCommand.prototype.makeCommandList;
    
    Window_ActorCommand.prototype.makeCommandList = function() {
        _QuickEscape_Window_ActorCommand_makeCommandList.call(this);
        if (this._actor) {
            this.addEscapeCommand();
        }
    };

    Window_ActorCommand.prototype.addEscapeCommand = function() {
        var enabled = true; // 始终允许逃跑
        if (escapePosition === 1) {
            // 添加到最前面
            this._list.unshift({ 
                name: escapeIcon > 0 ? '\\i[' + escapeIcon + ']' + escapeText : escapeText, 
                symbol: 'quickEscape', 
                enabled: enabled, 
                ext: null 
            });
        } else {
            // 添加到最后面
            this.addCommand(
                escapeIcon > 0 ? '\\i[' + escapeIcon + ']' + escapeText : escapeText, 
                'quickEscape', 
                enabled
            );
        }
    };

    //=============================================================================
    // Scene_Battle
    //=============================================================================

    var _QuickEscape_Scene_Battle_createActorCommandWindow = 
        Scene_Battle.prototype.createActorCommandWindow;
    
    Scene_Battle.prototype.createActorCommandWindow = function() {
        _QuickEscape_Scene_Battle_createActorCommandWindow.call(this);
        this._actorCommandWindow.setHandler('quickEscape', this.commandQuickEscape.bind(this));
    };

    Scene_Battle.prototype.commandQuickEscape = function() {
        // 直接退出战斗，不进行成功率判定
        this.performQuickEscape();
    };

    Scene_Battle.prototype.performQuickEscape = function() {
        // 播放逃跑音效
        SoundManager.playEscape();
        
        // 显示逃跑成功消息
        $gameMessage.add(TextManager.escapeSuccess);
        
        // 设置逃跑状态
        BattleManager._escaped = true;
        
        // 结束战斗
        BattleManager.processAbort();
        
        // 关闭输入窗口
        this.changeInputWindow();
    };

})();
