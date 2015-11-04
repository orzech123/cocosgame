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

        var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        this.setAnchorPoint(0, 0);
        this.setPosition(-winsize.width / 2, -winsize.height / 2);

        var backgroundSprite = new cc.Sprite();
        backgroundSprite.initWithFile(Resources.helloBG_png);
        backgroundSprite.setAnchorPoint(0, 0);
        backgroundSprite.setPosition(0, 0);
        backgroundSprite.scaleX = winsize.width / backgroundSprite.getContentSize().width;
        backgroundSprite.scaleY = winsize.height / backgroundSprite.getContentSize().height;
        backgroundSprite.setPosition(centerpos);
        this.addChild(backgroundSprite);

        var startNSprite = new cc.Sprite();
        startNSprite.initWithFile(Resources.start_n_png);
        var startSSprite = new cc.Sprite();
        startSSprite.initWithFile(Resources.start_s_png);
        var menuItemPlay = cc.MenuItemSprite.create(startNSprite, startSSprite, this.play, this);
        menuItemPlay.setPosition(centerpos);
        var menu = cc.Menu.create(menuItemPlay);
        menu.setPosition(centerpos);
        this.addChild(menu);
    }
    return MenuLayer;
})(cc.Layer);
//# sourceMappingURL=MenuLayer.js.map
