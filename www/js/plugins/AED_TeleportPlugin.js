/*:
 * @plugindesc Teleports an event or the player to a specific coordinate in RPG Maker MV.
 * @author AdamElDev
 *
 * @help This plugin teleports an event or player to a specific coordinate in RPG Maker MV.
 *
 * Plugin command:
 *   Teleport x y eventId
 *     - x: X coordinate of the destination.
 *     - y: Y coordinate of the destination.
 *     - eventId: ID of the event to be teleported. Use 0 to teleport the player.
 */
//AdamElDev plugin//
//https://adameldev.itch.io//
(function() {
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        if (command === 'Teleport') {
            var x = Number(args[0]);
            var y = Number(args[1]);
            var eventId = Number(args[2]);

            if (eventId === 0) {
                $gamePlayer.locate(x, y);
            } else {
                var event = $gameMap.event(eventId);
                if (event) {
                    event.locate(x, y);
                }
            }
        }
    };
})();
//AdamElDev plugin//
//https://adameldev.itch.io//