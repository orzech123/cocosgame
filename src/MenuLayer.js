/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
// <reference path="PlayScene.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MenuLayer = (function (_super) {
    __extends(MenuLayer, _super);
    MenuLayer["__ts"]=true;
    function MenuLayer() {
        (function(){
    if(_super.__ts){
        return function(_this){
            _this.__instanceId = ClassManager.getNewInstanceId();
            _super.apply(_this, Array.prototype.slice.call(arguments,1));
        }
    } else if (typeof _super.prototype.ctor === "function") {
        return function(_this){
            _this.__instanceId = ClassManager.getNewInstanceId();
            _super.prototype.ctor.apply(_this, Array.prototype.slice.call(arguments,1));
        }
    } else {
        return function(_this){
            _this.__instanceId = ClassManager.getNewInstanceId();
        };
    }
}())
(this);
        //initOverride = (...args : any[]) : boolean =>{
        //    //call super class's super function
        //    super.init(args);
        //
        //    //2. get the screen size of your game canvas
        //    var winsize = cc.director.getWinSize();
        //
        //    //3. calculate the center point
        //    var centerpos = cc.p(winsize.width / 2, winsize.height / 2);
        //
        //    //4. create a background image and set it's position at the center of the screen
        //    var spritebg = new cc.Sprite();
        //    spritebg.initWithFile(Resources.helloBG_png);
        //    spritebg.setPosition(centerpos);
        //    this.addChild(spritebg);
        //
        //    //5.
        //    //cc.MenuItemFont.setFontSize(60);
        //    var startNSprite = new cc.Sprite();
        //    startNSprite.initWithFile(Resources.start_n_png);
        //    var startSSprite = new cc.Sprite();
        //    startSSprite.initWithFile(Resources.start_s_png);
        //
        //    //6.create a menu and assign onPlay event callback to it
        //    var menuItemPlay = cc.MenuItemSprite.create(startNSprite, startSSprite, this.onPlayOverride, this);
        //    var menu = cc.Menu.create(menuItemPlay);  //7. create the menu
        //    menu.setPosition(centerpos);
        //    this.addChild(menu);
        //
        //    return true;
        //}
        this.onPlayOverride = function () {
            cc.log("==onplay clicked");
            //cc.director.runScene(new PlayScene());
        };

        //this.init = this.initOverride;
        //2. get the screen size of your game canvas
        var winsize = cc.director.getWinSize();

        //3. calculate the center point
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //4. create a background image and set it's position at the center of the screen
        var spritebg = new cc.Sprite();
        spritebg.initWithFile(Resources.helloBG_png);
        spritebg.setPosition(centerpos);
        this.addChild(spritebg);

        //5.
        //cc.MenuItemFont.setFontSize(60);
        var startNSprite = new cc.Sprite();
        startNSprite.initWithFile(Resources.start_n_png);
        var startSSprite = new cc.Sprite();
        startSSprite.initWithFile(Resources.start_s_png);

        //6.create a menu and assign onPlay event callback to it
        var menuItemPlay = cc.MenuItemSprite.create(startNSprite, startSSprite, this.onPlayOverride, this);
        var menu = cc.Menu.create(menuItemPlay);
        menu.setPosition(centerpos);
        this.addChild(menu);
    }
    return MenuLayer;
})(cc.Layer);
//# sourceMappingURL=MenuLayer.js.map
