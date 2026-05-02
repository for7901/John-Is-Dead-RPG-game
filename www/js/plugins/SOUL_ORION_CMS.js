/*:
* @plugindesc v1.00 This plugin changes your menu with a new adorable layout.
* @author soulpour777 - soulxregalia.wordpress.com
*
* @param -- MENU --
*
* @param Menu Background
* @desc What is the background of your menu?
* @default Crystal
*
* @param -- COMMANDS --
*
* @param DEF | CMD Alignment
* @desc Default main menu item alignment. (Without Yanfly's plugin)	left		center		right
* @default center
*
* @param DEF | Command X 
* @desc Default command window x position on the screen. (Without Yanfly's plugin) W: This is an eval.
* @default 575
*
* @param DEF | Command Y 
* @desc Default command window y position on the screen. (Without Yanfly's plugin) W: This is an eval.
* @default 0
*
* @param YF | Command X 
* @desc Default command window x position on the screen. (WITH Yanfly's plugin) W: This is an eval.
* @default 575
*
* @param YF | Command Y 
* @desc Default command window y position on the screen. (WITH Yanfly's plugin) W: This is an eval.
* @default 0
*
* @param -- HELP --
*
* @param Help X 
* @desc Default Help window x position on the screen. W: This is an eval.
* @default 0
*
* @param Help Y 
* @desc Default Help window y position on the screen. W: This is an eval.
* @default 0
*
* @param Help W 
* @desc Default Help window width on the screen. W: This is an eval.
* @default Graphics.boxHeight - 50;
*
* @param Help H 
* @desc Default Help window height on the screen. W: This is an eval.
* @default 70
*
* @param -- PLAYTIME --
*
* @param Playtime Label 
* @desc The default text to label the time name.
* @default Time: 
*
* @param Playtime X 
* @desc Default Playtime window x position on the screen. W: This is an eval.
* @default 575
*
* @param Playtime Y 
* @desc Default Playtime window y position on the screen. W: This is an eval.
* @default 370
*
* @param Playtime W 
* @desc Default Playtime window width on the screen. W: This is an eval.
* @default 240
*
* @param Playtime H 
* @desc Default Playtime window height on the screen. W: This is an eval.
* @default this.fittingHeight(1);
*
* @param -- GOLD --
*
* @param Gold X 
* @desc Default Gold window x position on the screen. W: This is an eval.
* @default 575
*
* @param Gold Y 
* @desc Default Gold window y position on the screen. W: This is an eval.
* @default 445
*
* @param -- LOCATION --
*
* @param Location Label X 
* @desc Default Location window x position on the screen. W: This is an eval.
* @default 0
*
* @param Location Label Y 
* @desc Default Location window x position on the screen. W: This is an eval.
* @default 0
*
* @param Location X 
* @desc Default Location window x position on the screen. W: This is an eval.
* @default 515
*
* @param Location Y 
* @desc Default Location window y position on the screen. W: This is an eval.
* @default 555
*
* @param Location W 
* @desc Default Location window width on the screen. W: This is an eval.
* @default 300
*
* @param Location H 
* @desc Default Location window height on the screen. W: This is an eval.
* @default this.fittingHeight(1);
*
* @param -- STATUS --
*
* @param Status X 
* @desc Default Status window x position on the screen. W: This is an eval.
* @default 0
*
* @param Status Y 
* @desc Default Status window y position on the screen. W: This is an eval.
* @default 70
*
* @param Status W
* @desc Default Status window width on the screen. W: This is an eval.
* @default Graphics.boxWidth - 220;
*
* @param Status H 
* @desc Default Status window height on the screen. W: This is an eval.
* @default Graphics.boxHeight - 120;
*
* @param -- QUEST --
*
* @param NoQuest
* @desc Default dialogue when there's no quest being done.
* @default Current Quest: None
*
* @param Quest X 
* @desc Default Quest window x position on the screen. W: This is an eval.
* @default 0
*
* @param Quest Y 
* @desc Default Quest window y position on the screen. W: This is an eval.
* @default 555
*
* @param Quest W
* @desc Default Quest window width on the screen. W: This is an eval.
* @default 420
*
* @param Quest H 
* @desc Default Quest window height on the screen. W: This is an eval.
* @default this.fittingHeight(1);
*
* @param -- CUSTOM --
*
* @param Menu1 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu2 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu3 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu4 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu5 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu6 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu7 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu8 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu9 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu10 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu11 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu12 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu13 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu14 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu15 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu16 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu17 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu18 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu19 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu20 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu21 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu22 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu23 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu24 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu25 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu26 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu27 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu28 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu29 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu30 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu31 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu32 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu33 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu34 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu35 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu36 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu37 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu38 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu39 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu40 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu41 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu42 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu43 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu44 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu45 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu46 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu47 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu48 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu49 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu50 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu51 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu52 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu53 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu54 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu55 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu56 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu57 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu58 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu59 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu60 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu61 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu62 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu63 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu64 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu65 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu66 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu67 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu68 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu69 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu70 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu71 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu72 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu73 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu74 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu75 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu76 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu77 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu78 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu79 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu80 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu81 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu82 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu83 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu84 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu85 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu86 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu87 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu88 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu89 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu90 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu91 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu92 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu93 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu94 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu95 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu96 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu97 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu98 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu99 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @param Menu100 Help
* @desc Menu index value help dialog. This follows the index rather than menu arrangement.
* @default 
*
* @help

-----------------------------------
ORION CUSTOM MENU SYSTEM
Author: Soulpour777
-----------------------------------

Current Version: 1.0
Compatible with: YEP_CoreEngine and YEP_MainMenuManager.

If both plugins are used, the order should be:

	YEP_CoreEngine
	YEP_MainMenuManager
	SOUL_ORION_CMS

INTRODUCTION:

	This plugin allows you to give your menu a new design, look and
	feel. It gives you the vibe of those RPGs you played, but still
	gives you a fresh look of your game.

	This plugin is very Yanfly friendly, and you will surely be
	able to use this plugin with his.

FEATURES:
	
	Playtime Window - this menu has a feature that can display
	your current game time.

	Location Window - this menu has a feature that can display
	your current location in the game.

	CustomWindow - this menu has a feature that allows the
	developer to display desired text content below. It
	doesn't have to be a mini quest, it can be the game's
	title, a quote, etc.

	Menu Background - you can change the main menu
	background.

CUSTOM PARAMETERS

	You may have noticed the Menu Help Parameters labeled from 1
	to 100. What are those?

	If you're using Yanfly's Main Menu Manager, he specified 
	100 extra menu items that you can add for your menu. This
	plugin supports that by default, so you can the text
	dialogue displayed above for each item. The custom
	menu items will still work without the Yanfly Menu
	Manager.

MENU BACKGROUND
	
	With this plugin, you can change the main menu background.
	Place all background images at img / system folder.

SCRIPT COMMANDS:

This plugin has a script command as follows:

	$gameSystem.miniQuestTXT = x;

	where x should be a string, or in other words, set of words or text.

example:

	$gameSystem.miniQuestTXT = "Current Quest: Find Lala's Cat!";

	The mini quest will be displayed on the custom window on the
	lower left corner of the menu.

FAQ:
	
	Q: I always see that the parameters are tagged with eval.
	What is an eval?

	A: eval is a function that basically converts a string
	into a function or interpreters any given value into
	function or numerical figure. So in that sense,
	if you know a bit of javascript, you can input a string
	function so the eval can convert it for you. This lessens
	the developer's time to worry what the exact measurement
	or x / y position they want to draft their windows in,
	if they know a variable inside the scripts that they
	can manipulate.
*
*/

(function(){
	var Imported = Imported || {};
	Imported.SOUL_FF7Menu = true;
	var Soul = Soul || {};
	Soul.ORION = Soul.F7FMM || {};
	Soul.ORION.params = PluginManager.parameters('SOUL_ORION_CMS');

	var menu1 = Soul.ORION.params['Menu1 Help'];
	var menu2 = Soul.ORION.params['Menu2 Help'];
	var menu3 = Soul.ORION.params['Menu3 Help'];
	var menu4 = Soul.ORION.params['Menu4 Help'];
	var menu5 = Soul.ORION.params['Menu5 Help'];
	var menu6 = Soul.ORION.params['Menu6 Help'];
	var menu7 = Soul.ORION.params['Menu7 Help'];
	var menu8 = Soul.ORION.params['Menu8 Help'];
	var menu9 = Soul.ORION.params['Menu9 Help'];
	var menu10 = Soul.ORION.params['Menu10 Help'];
	var menu11 = Soul.ORION.params['Menu11 Help'];
	var menu12 = Soul.ORION.params['Menu12 Help'];
	var menu13 = Soul.ORION.params['Menu13 Help'];
	var menu14 = Soul.ORION.params['Menu14 Help'];
	var menu15 = Soul.ORION.params['Menu15 Help'];
	var menu16 = Soul.ORION.params['Menu16 Help'];
	var menu17 = Soul.ORION.params['Menu17 Help'];
	var menu18 = Soul.ORION.params['Menu18 Help'];
	var menu19 = Soul.ORION.params['Menu19 Help'];
	var menu20 = Soul.ORION.params['Menu20 Help'];
	var menu21 = Soul.ORION.params['Menu21 Help'];
	var menu22 = Soul.ORION.params['Menu22 Help'];
	var menu23 = Soul.ORION.params['Menu23 Help'];
	var menu24 = Soul.ORION.params['Menu24 Help'];
	var menu25 = Soul.ORION.params['Menu25 Help'];
	var menu26 = Soul.ORION.params['Menu26 Help'];
	var menu27 = Soul.ORION.params['Menu27 Help'];
	var menu28 = Soul.ORION.params['Menu28 Help'];
	var menu29 = Soul.ORION.params['Menu29 Help'];
	var menu30 = Soul.ORION.params['Menu30 Help'];
	var menu31 = Soul.ORION.params['Menu31 Help'];
	var menu32 = Soul.ORION.params['Menu32 Help'];
	var menu33 = Soul.ORION.params['Menu33 Help'];
	var menu34 = Soul.ORION.params['Menu34 Help'];
	var menu35 = Soul.ORION.params['Menu35 Help'];
	var menu36 = Soul.ORION.params['Menu36 Help'];
	var menu37 = Soul.ORION.params['Menu37 Help'];
	var menu38 = Soul.ORION.params['Menu38 Help'];
	var menu39 = Soul.ORION.params['Menu39 Help'];
	var menu40 = Soul.ORION.params['Menu40 Help'];
	var menu41 = Soul.ORION.params['Menu41 Help'];
	var menu42 = Soul.ORION.params['Menu42 Help'];
	var menu43 = Soul.ORION.params['Menu43 Help'];
	var menu44 = Soul.ORION.params['Menu44 Help'];
	var menu45 = Soul.ORION.params['Menu45 Help'];
	var menu46 = Soul.ORION.params['Menu46 Help'];
	var menu47 = Soul.ORION.params['Menu47 Help'];
	var menu48 = Soul.ORION.params['Menu48 Help'];
	var menu49 = Soul.ORION.params['Menu49 Help'];
	var menu50 = Soul.ORION.params['Menu50 Help'];
	var menu51 = Soul.ORION.params['Menu51 Help'];
	var menu52 = Soul.ORION.params['Menu52 Help'];
	var menu53 = Soul.ORION.params['Menu53 Help'];
	var menu54 = Soul.ORION.params['Menu54 Help'];
	var menu55 = Soul.ORION.params['Menu55 Help'];
	var menu56 = Soul.ORION.params['Menu56 Help'];
	var menu57 = Soul.ORION.params['Menu57 Help'];
	var menu58 = Soul.ORION.params['Menu58 Help'];
	var menu59 = Soul.ORION.params['Menu59 Help'];
	var menu60 = Soul.ORION.params['Menu60 Help'];
	var menu61 = Soul.ORION.params['Menu61 Help'];
	var menu62 = Soul.ORION.params['Menu62 Help'];
	var menu63 = Soul.ORION.params['Menu63 Help'];
	var menu64 = Soul.ORION.params['Menu64 Help'];
	var menu65 = Soul.ORION.params['Menu65 Help'];
	var menu66 = Soul.ORION.params['Menu66 Help'];
	var menu67 = Soul.ORION.params['Menu67 Help'];
	var menu68 = Soul.ORION.params['Menu68 Help'];
	var menu69 = Soul.ORION.params['Menu69 Help'];
	var menu70 = Soul.ORION.params['Menu70 Help'];
	var menu71 = Soul.ORION.params['Menu71 Help'];
	var menu72 = Soul.ORION.params['Menu72 Help'];
	var menu73 = Soul.ORION.params['Menu73 Help'];
	var menu74 = Soul.ORION.params['Menu74 Help'];
	var menu75 = Soul.ORION.params['Menu75 Help'];
	var menu76 = Soul.ORION.params['Menu76 Help'];
	var menu77 = Soul.ORION.params['Menu77 Help'];
	var menu78 = Soul.ORION.params['Menu78 Help'];
	var menu79 = Soul.ORION.params['Menu79 Help'];
	var menu80 = Soul.ORION.params['Menu80 Help'];
	var menu81 = Soul.ORION.params['Menu81 Help'];
	var menu82 = Soul.ORION.params['Menu82 Help'];
	var menu83 = Soul.ORION.params['Menu83 Help'];
	var menu84 = Soul.ORION.params['Menu84 Help'];
	var menu85 = Soul.ORION.params['Menu85 Help'];
	var menu86 = Soul.ORION.params['Menu86 Help'];
	var menu87 = Soul.ORION.params['Menu87 Help'];
	var menu88 = Soul.ORION.params['Menu88 Help'];
	var menu89 = Soul.ORION.params['Menu89 Help'];
	var menu90 = Soul.ORION.params['Menu90 Help'];
	var menu91 = Soul.ORION.params['Menu91 Help'];
	var menu92 = Soul.ORION.params['Menu92 Help'];
	var menu93 = Soul.ORION.params['Menu93 Help'];
	var menu94 = Soul.ORION.params['Menu94 Help'];
	var menu95 = Soul.ORION.params['Menu95 Help'];
	var menu96 = Soul.ORION.params['Menu96 Help'];
	var menu97 = Soul.ORION.params['Menu97 Help'];
	var menu98 = Soul.ORION.params['Menu98 Help'];
	var menu99 = Soul.ORION.params['Menu99 Help'];
	var menu100 = Soul.ORION.params['Menu100 Help'];

	var menuHelper = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10,
	menu11, menu12, menu13, menu14, menu15, menu16, menu17, menu18, menu19, menu20,
	menu21, menu22, menu23, menu24, menu25, menu26, menu27, menu28, menu29, menu30,
	menu31, menu32, menu33, menu34, menu35, menu36, menu37, menu38, menu39, menu40,
	menu41, menu42, menu43, menu44, menu45, menu46, menu47, menu48, menu49, menu50,
	menu51, menu52, menu53, menu54, menu55, menu56, menu57, menu58, menu59, menu60,
	menu61, menu62, menu63, menu64, menu65, menu66, menu67, menu68, menu69, menu70,
	menu71, menu72, menu73, menu74, menu75, menu76, menu77, menu78, menu79, menu80,
	menu81, menu82, menu83, menu84, menu85, menu86, menu87, menu88, menu89, menu90,
	menu91, menu92, menu93, menu94, menu95, menu96, menu97, menu98, menu99, menu100,
	];		

	Soul.ORION.backgroundX = Soul.ORION.params['Menu Background'];
	Soul.ORION.itemAlignment_default = Soul.ORION.params['DEF | CMD Alignment'];
	Soul.ORION.command_x_default = Soul.ORION.params['DEF | Command X'];
	Soul.ORION.command_y_default = Soul.ORION.params['DEF | Command Y'];
	Soul.ORION.command_x_yf = Soul.ORION.params['DEF | Command X'];
	Soul.ORION.command_y_yf = Soul.ORION.params['DEF | Command Y'];
	Soul.ORION.playtime_x = Soul.ORION.params['Playtime X'];
	Soul.ORION.playtime_y = Soul.ORION.params['Playtime Y'];
	Soul.ORION.playtime_w = Soul.ORION.params['Playtime W'];
	Soul.ORION.playtime_h = Soul.ORION.params['Playtime H'];	
	Soul.ORION.gold_x = Soul.ORION.params['Gold X'];
	Soul.ORION.gold_y = Soul.ORION.params['Gold Y'];	
	Soul.ORION.location_x = Soul.ORION.params['Location X'];
	Soul.ORION.location_y = Soul.ORION.params['Location Y'];	
	Soul.ORION.location_w = Soul.ORION.params['Location W'];
	Soul.ORION.location_h = Soul.ORION.params['Location H'];		
	Soul.ORION.status_x = Soul.ORION.params['Status X'];
	Soul.ORION.status_y = Soul.ORION.params['Status Y'];
	Soul.ORION.status_w = Soul.ORION.params['Status W'];
	Soul.ORION.status_h = Soul.ORION.params['Status H'];
	Soul.ORION.help_x = Soul.ORION.params['Help X'];
	Soul.ORION.help_y = Soul.ORION.params['Help Y'];
	Soul.ORION.help_w = Soul.ORION.params['Help W'];
	Soul.ORION.help_h = Soul.ORION.params['Help H'];
	Soul.ORION.quest_x = Soul.ORION.params['Quest X'];
	Soul.ORION.quest_y = Soul.ORION.params['Quest Y'];
	Soul.ORION.quest_w = Soul.ORION.params['Quest W'];
	Soul.ORION.quest_h = Soul.ORION.params['Quest H'];

	Soul.ORION.quest_zero = Soul.ORION.params['NoQuest'];
	Soul.ORION.playtime_lb = Soul.ORION.params['Playtime Label'];

	// we are going to add a new object called miniQuestTXT which gives us the quest
	// available or currently being taken by the player.
	Soul.ORION.Game_System_initialize = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function() {
	    Soul.ORION.Game_System_initialize.call(this);
	    this.miniQuestTXT = Soul.ORION.quest_zero;
	};


	// First, we have to set the window command's item alignment based on what's in
	// the parameters, yanfly / default.
	Window_MenuCommand.prototype.itemTextAlign = function() {
		if (Imported.YEP_MainMenuManager) {
			return Yanfly.Param.MMMCmdAlign;
		} else {
			return Soul.ORION.itemAlignment_default;
		}
	    
	};

	// let us set the menu background as well. It should be something
	// interchangable as always.
	Scene_MenuBase.prototype.createBackground = function() {
	    this._backgroundSprite = new Sprite();
	    this._backgroundSprite.bitmap = ImageManager.loadSystem(Soul.ORION.backgroundX);
	    this.addChild(this._backgroundSprite);
	};	

	// We are going to create a new help window on the menu. This should indicate what
	// we are selecting.
	Scene_Menu.prototype.createHelpWindow = function() {
	    this._helpWindow = new Window_Help();
	    this._helpWindow.x = eval(Soul.ORION.help_x);
	    this._helpWindow.y = eval(Soul.ORION.help_y);
	    this._helpWindow.width = eval(Soul.ORION.help_w);
	    this._helpWindow.height = eval(Soul.ORION.help_h);
	    this.addWindow(this._helpWindow);
	};	

	//we are going to add new this. we are going to alias it first so there's
	// no clashes with the standalone program.
	Soul.ORION.Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    Soul.ORION.Scene_Menu_create.call(this);
	    this.createPlaytimeWindow(); // creates the playtime window
	    this.createLocationWindow(); // creates the location window
	    this.createHelpWindow(); // creates the help window
	    this.createMiniQuestWindow(); // creates the mini quest window
	};

	// We are going to setup the createMiniQuestWindow and the locations for it.
	// It should be below the on the left side of the location window.
	Scene_Menu.prototype.createMiniQuestWindow = function() {
		this._miniQuestWindow = new Window_CustomWindow();
		this._miniQuestWindow.x = eval(Soul.ORION.quest_x);
		this._miniQuestWindow.y = eval(Soul.ORION.quest_y);
		this.addChild(this._miniQuestWindow);
	}

	// We are going to setup the createPlaytimeWindow and the locations for it.
	// It should be below the gold window.
	Scene_Menu.prototype.createPlaytimeWindow = function() {
		this._playtimeWindow = new Window_PlayTime();
		this._playtimeWindow.x = eval(Soul.ORION.playtime_x);
		this._playtimeWindow.y = eval(Soul.ORION.playtime_y);
		this.addChild(this._playtimeWindow);
	}

	// we are going to edit the gold window so that we make sure that it aligns
	//right below the playtimewindow.
	Scene_Menu.prototype.createGoldWindow = function() {
	    this._goldWindow = new Window_Gold(0, 0);
	    this._goldWindow.x = eval(Soul.ORION.gold_x);
	    this._goldWindow.y = eval(Soul.ORION.gold_y);
	    this.addWindow(this._goldWindow);
	};	


	// We are going to setup the createLocationWindow and the locations for it.
	// It should be below the time window.
	Scene_Menu.prototype.createLocationWindow = function() {
		this._LocationWindow = new Window_Location();
		this._LocationWindow.x = eval(Soul.ORION.location_x);
		this._LocationWindow.y = eval(Soul.ORION.location_y);
		this.addChild(this._LocationWindow);
	}

	// we are going to make sure that while we update, the
	// playtime also gets refreshed everytime. We also need to update the help
	// window everytime.
	Scene_Menu.prototype.update = function() {
		Scene_Base.prototype.update.call(this);
		this._playtimeWindow.refresh();
		this._helpWindow.setText(menuHelper[this._commandWindow._index]);
	}

	//change the command window position, but first let us alias it, so any main menu
	// changes will not have a complication once it is used outside Yanfly's Main
	// Menu Core plugin.

	Soul.ORION.Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
	Scene_Menu.prototype.createCommandWindow = function() {
	    Soul.ORION.Scene_Menu_createCommandWindow.call(this);
	    if (Imported.YEP_MainMenuManager) {
		    this._commandWindow.x = eval(Soul.ORION.command_x_yf);
		    this._commandWindow.y = eval(Soul.ORION.command_y_yf);
	    } else {
		    this._commandWindow.x = eval(Soul.ORION.command_x_default);
		    this._commandWindow.y = eval(Soul.ORION.command_y_default);
	    }

	    this.addChild(this._commandWindow);
	};

	// we are going to disregard yanfly's menu movement.
	Scene_Menu.prototype.repositionWindows = function() {};

	// Next, we are going to change the create status window. At this point,
	// I would like the status to expand.
	Scene_Menu.prototype.createStatusWindow = function() {
	    this._statusWindow = new Window_MenuStatus(0, 0);
	    this._statusWindow.x = eval(Soul.ORION.status_x);
	    this._statusWindow.y = eval(Soul.ORION.status_y);
	    this._statusWindow.height = eval(Soul.ORION.status_h);
	    this._statusWindow.width = eval(Soul.ORION.status_w);
	    this.addChildAt(this._statusWindow, 1);
	};


	// Next, We are going to create the Window_PlayTime class which allows us
	// to display time.
	function Window_PlayTime() {
	    this.initialize.apply(this, arguments);
	}

	Window_PlayTime.prototype = Object.create(Window_Base.prototype);
	Window_PlayTime.prototype.constructor = Window_PlayTime;

	Window_PlayTime.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this.refresh();
	};

	Window_PlayTime.prototype.windowWidth = function() {
	    return eval(Soul.ORION.playtime_w);
	};

	Window_PlayTime.prototype.windowHeight = function() {
		return eval(Soul.ORION.playtime_h);
	};

	Window_PlayTime.prototype.refresh = function() {
	    var x = this.textPadding();
	    var width = this.contents.width - this.textPadding() * 2;
	    this.contents.clear();
	    this.drawTextEx(Soul.ORION.playtime_lb + String(this.currentTime()), 0, 0);
	};

	Window_PlayTime.prototype.currentTime = function() {
	    return $gameSystem.playtimeText();
	};

	Window_PlayTime.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};


	// Next, We are going to create the Window_Location class which allows us
	// to display our current location.
	function Window_Location() {
	    this.initialize.apply(this, arguments);
	}

	Window_Location.prototype = Object.create(Window_Base.prototype);
	Window_Location.prototype.constructor = Window_Location;

	Window_Location.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this.refresh();
	};

	Window_Location.prototype.windowWidth = function() {
	    return eval(Soul.ORION.location_w);
	};

	Window_Location.prototype.windowHeight = function() {
	    return eval(Soul.ORION.location_h);
	};

	Window_Location.prototype.refresh = function() {
	    var x = this.textPadding();
	    var width = this.contents.width - this.textPadding() * 2;
	    this.contents.clear();
	    this.drawTextEx(String($gameMap.displayName()), 0, 0);
	};


	Window_Location.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};


	function Window_CustomWindow() {
	    this.initialize.apply(this, arguments);
	}

	Window_CustomWindow.prototype = Object.create(Window_Base.prototype);
	Window_CustomWindow.prototype.constructor = Window_CustomWindow;

	Window_CustomWindow.prototype.initialize = function(x, y) {
	    var width = this.windowWidth();
	    var height = this.windowHeight();
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	    this.refresh();
	};

	Window_CustomWindow.prototype.windowWidth = function() {
	    return eval(Soul.ORION.quest_w);
	};

	Window_CustomWindow.prototype.windowHeight = function() {
	    return eval(Soul.ORION.quest_h);
	};

	Window_CustomWindow.prototype.refresh = function() {
	    var x = this.textPadding();
	    var width = this.contents.width - this.textPadding() * 2;
	    this.contents.clear();
	    this.drawTextEx($gameSystem.miniQuestTXT, 0, 0);
	};
	Window_CustomWindow.prototype.open = function() {
	    this.refresh();
	    Window_Base.prototype.open.call(this);
	};	
})();