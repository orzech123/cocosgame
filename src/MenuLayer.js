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
        this.play = function () {
            cc.log("==onplay clicked");
            //cc.director.runScene(new PlayScene());
        };

        //2. get the screen size of your game canvas
        var winsize = cc.director.getWinSize();

        this.setAnchorPoint(0, 0);
        this.setPosition(-winsize.width / 2, -winsize.height / 2);

        //this.init = this.initOverride;
        //3. calculate the center point
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //4. create a background image and set it's position at the center of the screen
        var spritebg = new cc.Sprite();

        //var newWidth = 300;
        //var newHeight = 200;
        //
        //var startWidth = spritebg.getContentSize().width;
        //var startHeight = spritebg.getContentSize().height;
        //
        //var newScaleX = newWidth/startWidth;
        //var newScaleY = newHeight/startHeight;
        //
        //spritebg.scaleX = newScaleX;
        //spritebg.scaleY = newScaleY;
        spritebg.initWithFile(Resources.helloBG_png);
        spritebg.setAnchorPoint(0, 0);
        spritebg.setPosition(0, 0);
        spritebg.scaleX = winsize.width / spritebg.getContentSize().width;
        spritebg.scaleY = winsize.height / spritebg.getContentSize().height;

        setInterval(function () {
            cc.log("asd");
        }, 1000);

        //spritebg.setScaleX(winsize.width / spritebg.getContentSize().width);
        //spritebg.setScaleY(winsize.height / spritebg.getContentSize().height);
        //spritebg.setPositionX(40);
        //spritebg.setPositionY(50);
        spritebg.setPosition(centerpos);
        this.addChild(spritebg);

        //5.
        //cc.MenuItemFont.setFontSize(60);
        var startNSprite = new cc.Sprite();
        startNSprite.initWithFile(Resources.start_n_png);
        var startSSprite = new cc.Sprite();
        startSSprite.initWithFile(Resources.start_s_png);

        //6.create a menu and assign onPlay event callback to it
        var menuItemPlay = cc.MenuItemSprite.create(startNSprite, startSSprite, this.play, this);
        var menu = cc.Menu.create(menuItemPlay);
        menu.setPosition(centerpos);

        //menu.setAnchorPoint(0,0);
        //menu.setPosition(0, 0);
        this.addChild(menu);
    }
    return MenuLayer;
})(cc.Layer);
//# sourceMappingURL=MenuLayer.js.map
