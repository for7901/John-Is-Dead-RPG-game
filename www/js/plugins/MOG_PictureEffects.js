//=============================================================================
// ** MOG_PictureEffects.js - 修复版
//=============================================================================

/*:
 * @plugindesc (v1.3 MOD)[v1.0]  画面 - 动态图片效果 + 事件头顶图片 [修改版：支持动画播放次数]
 * @author Moghunter （Drill_up翻译）[修改：添加播放次数控制]
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Picture Effects (v1.3 MOD) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * 修改：添加动画播放次数控制
 * =============================================================================
 * 
 * -----------------------------------------------------------------------------
 * ---- 动画播放指令修改
 * 原指令：pic_animated : A : F : G
 * 修改后：pic_animated : A : F : G : H
 *
 * 参数A：图片id
 * 参数F：gif帧数
 * 参数G：gif每帧长度
 * 参数H：播放次数 (新增)
 *        -1 = 无限循环播放
 *        0 = 播放1次后停止
 *        1 = 播放2次后停止
 *        N = 播放N+1次后停止
 *
 * 示例：
 * 显示图片 10 xxxx
 * 插件指令：pic_animated : 10 : 4 : 5 : -1   # 无限循环
 * 插件指令：pic_animated : 10 : 4 : 5 : 0    # 播放1次后停止
 * 插件指令：pic_animated : 10 : 4 : 5 : 2    # 播放3次后停止
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_PictureEffects = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_PictureEffects');

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_picefc_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_picefc_pluginCommand.call(this,command, args);
	if (command.startsWith("pic_") || command.startsWith("picture_")) {
		var picId = Number(args[1]);
		if ($gameScreen.picture(picId)) {
			this.setPictureEffects(command, args);
		}
	}
	return true;
};

//==============================
// * Set Picture Effets
//==============================
Game_Interpreter.prototype.setPictureEffects = function(command, args) {
	this.picEfctSetPos(command, args);
	this.picEfctSetAni(command, args);
};

//==============================
// * pict Effect Set Pos
//==============================
Game_Interpreter.prototype.picEfctSetPos = function(command, args) {
	if (command === "picture_player_position")  { 
	        $gameScreen.picture(Number(args[1]))._positionData[0] = 1;
	} else if (command === "picture_map_position")  { 
	        $gameScreen.picture(Number(args[1]))._positionData[0] = 3;
	} else if (command === "picture_event_position" && args[3])  {	          
	  	$gameMap.events().forEach(function(event) {
		if (!event._erased && event.eventId() === Number(args[3])) {
	    	$gameScreen.picture(Number(args[1]))._positionData[0] = 2;
            $gameScreen.picture(Number(args[1]))._positionData[4] = args[3];
			$gameScreen.picture(Number(args[1]))._positionData[5] = $gameMap._mapId
		};
        }, this);         
	};	
};

//==============================
// * pict Effet Set Ani
//==============================
Game_Interpreter.prototype.picEfctSetAni = function(command, args) {
	if (command === "pic_animated")  {
		var picId = Number(args[1]);
		var frameCount = Math.min(Math.max(Number(args[3]), 1), 999);	
		var frameSpeed = args[5] ? Number(args[5]) : 20;
		var repeatCount = args[7] ? Number(args[7]) : -1; // -1 = 无限循环
		
		console.log('设置动画: 图片ID', picId, '帧数:', frameCount, '速度:', frameSpeed, '重复:', repeatCount);
		
		$gameScreen.picture(picId)._animeData = [
			true,           // 0: 启用
			frameCount,     // 1: 总帧数
			0,              // 2: 计时器
			0,              // 3: 当前帧
			frameSpeed,     // 4: 帧速度
			repeatCount,    // 5: 播放次数 (-1=无限)
			0               // 6: 已播放次数
		];
		return;
	}
	
	// 其他效果保持不变
	var enable = String(args[3]) === "true" ? true : false;
	if (command === "pic_shake")  {
		   var pw = args[5] ? Number(args[5]) : 10;
	       $gameScreen.picture(Number(args[1]))._shake = [enable,20,0,0,pw];
	} else if (command === "pic_shake2")  {
		   var pw = args[5] ? Number(args[5]) : 10;
	   	   $gameScreen.picture(Number(args[1]))._shake2 = [enable,20,0,0,pw,0,0];
	};	
	if (command === "pic_breath")  {
		   var pw = args[5] ? Number(args[5]) : 1;
		   var pw = pw * 0.01
		   var pw2 = args[7] ? Number(args[7]) : 5;
		   var pw2 = 1 + (pw2 * 0.1);
	   	   $gameScreen.picture(Number(args[1]))._breathEffect = [enable,0,0,0,pw,pw2];
	};
	if (command === "pic_float")  {
		   var pw = args[5] ? Number(args[5]) : 1;
		   var pw = pw * 0.1;
		   var pw2 = args[7] ? Number(args[7]) : 15;
		   $gameScreen.picture(Number(args[1]))._floatEffect = [enable,0,0,0,pw2,pw];
	};
	if (command === "pic_smooth")  {
		  var pw = args[5] ? Number(args[5]) : 20;
		  var pw2 = args[7] ? Number(args[7]) : 160;
		  var pw2 = pw2 * 0.01;
     	  $gameScreen.picture(Number(args[1]))._moveEffect = [enable,0,0,160,0,0,pw,pw2,160];
	};			
};

//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * Screen RealX
//==============================
Game_CharacterBase.prototype.screen_realX = function() {
    return this.scrolledX() * $gameMap.tileWidth()
};

//==============================
// * Screen RealY
//==============================
Game_CharacterBase.prototype.screen_realY = function() {
    return this.scrolledY() * $gameMap.tileHeight()
};

//==============================
// * Pict FX
//==============================
Game_Map.prototype.pictFX = function() {
	return this._displayX * this.tileWidth();
};

//==============================
// * Pict FY
//==============================
Game_Map.prototype.pictFY = function() {
	return this._displayY * this.tileHeight();
};

//=============================================================================
// ** Game Picture
//=============================================================================	

//==============================
// * initBasic
//==============================
var _mog_pect_gpicture_initBasic = Game_Picture.prototype.initBasic;
Game_Picture.prototype.initBasic = function() {
	_mog_pect_gpicture_initBasic.call(this);
	this.initPicEffectBasic();
};

//==============================
// * initPicEffectBasic
//==============================
Game_Picture.prototype.initPicEffectBasic = function() {
	this._position = [0,0];
	this._zoom = [100,100];	
	this._effectType = 0;
	this._shake = [false,0,0,0,0];
	this._shake2 = [false,0,0,0,0,0,0];
	this._breathEffect = [false,0,0,0,0];
	this._breathEffect2 = [false,0,0,0,0];
	this._floatEffect = [false,0,0,0];
	this._positionData = [0,0,0,0,0,0,0];
	// 修复：正确的 _animeData 结构
	this._animeData = [false, 1, 0, 0, 20, -1, 0]; // [启用, 总帧数, 计时器, 当前帧, 帧速度, 播放次数, 已播放次数]
	this._moveEffect = [false,0,0,0,0,0,0,0,0];
};

// ... 中间的其他 Game_Picture 方法保持不变 ...

//=============================================================================
// ** Sprite Picture
//=============================================================================	

//==============================
// * Update Bitmap
//==============================
var _mog_picefc_sprpic_updateBitmap = Sprite_Picture.prototype.updateBitmap;
Sprite_Picture.prototype.updateBitmap = function() {
	_mog_picefc_sprpic_updateBitmap.call(this);
	if (this.picture() && this.picture()._animeData[0]) {
		this.updateFrames(this.picture());
	}	
};

//==============================
// * Update Frames - 修复版
//==============================
Sprite_Picture.prototype.updateFrames = function(picture) {
	if (!this.bitmap || !this.bitmap.isReady()) {
		this.visible = false;
		return;
	}
	
	this.visible = true;
	
	// 初始化帧数据
	if (!this._picFrames) {
		this.setPicFrames(picture);
	}
	
	var animeData = picture._animeData;
	
	// 检查是否应该停止播放
	if (animeData[5] >= 0 && animeData[6] > animeData[5]) {
		// 播放次数已达到，停止动画但保持显示当前帧
		return;
	}
	
	// 更新计时器
	animeData[2]++;
	
	// 检查是否需要切换到下一帧
	if (animeData[2] >= animeData[4]) {
		animeData[2] = 0;
		
		// 切换到下一帧
		animeData[3]++;
		
		// 检查是否完成一次循环
		if (animeData[3] >= animeData[1]) {
			animeData[3] = 0;
			// 增加已播放次数
			animeData[6]++;
			
			// 检查是否达到指定播放次数
			if (animeData[5] >= 0 && animeData[6] > animeData[5]) {
				console.log('动画播放完成: 图片ID ' + picture._id + ', 播放了 ' + animeData[6] + ' 次');
			}
		}
		
		// 更新显示帧
		this.updateFrameDisplay(picture);
	}
};

//==============================
// * Update Frame Display - 新增方法
//==============================
Sprite_Picture.prototype.updateFrameDisplay = function(picture) {
	if (!this._picFrames) return;
	
	var frameWidth = this._picFrames[3];
	var currentFrame = picture._animeData[3];
	
	// 设置当前帧的显示区域
	this.setFrame(currentFrame * frameWidth, 0, frameWidth, this._picFrames[4]);
};

//==============================
// * set PicFrames - 修复版
//==============================
Sprite_Picture.prototype.setPicFrames = function(picture) {
	if (!this.bitmap || !this.bitmap.isReady()) return;
	
	var frameCount = picture._animeData[1];
	var totalWidth = this.bitmap.width;
	var totalHeight = this.bitmap.height;
	
	// 计算每帧的宽度
	var frameWidth = totalWidth / frameCount;
	var frameHeight = totalHeight;
	
	console.log('设置帧切分: 总宽度', totalWidth, '帧数', frameCount, '每帧宽度', frameWidth);
	
	this._picFrames = [
		frameCount,     // 0: 总帧数
		0,              // 1: 保留
		0,              // 2: 保留  
		frameWidth,     // 3: 每帧宽度
		frameHeight     // 4: 每帧高度
	];
	
	// 初始显示第一帧
	this.updateFrameDisplay(picture);
};

//==============================
// * Update Origin
//==============================
var _mog_picefc_sprpic_updateOther = Sprite_Picture.prototype.updateOther;
Sprite_Picture.prototype.updateOther = function() {
	_mog_picefc_sprpic_updateOther.call(this)
    this.updatePicEffect();
};

//==============================
// * Update Pic Effect
//==============================
Sprite_Picture.prototype.updatePicEffect = function() {
	if (this.picture()._breathEffect[0]) {
        this.anchor.x = 0.5;
        this.anchor.y = 1;
		this.y += this.height / 2;
	};
	if (this.picture()._positionData[0] === 0) { 
	   this.x += this.picture()._shake[2] + this.picture()._shake2[2];
	   this.y += this.picture()._shake[3] + this.picture()._shake2[3]; 
	   if (this.picture()._floatEffect[0]) {this.y += this.picture()._floatEffect[3]};
	};
};