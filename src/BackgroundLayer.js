/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="Globals.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BackgroundLayer = (function (_super) {
    __extends(BackgroundLayer, _super);
    BackgroundLayer["__ts"]=true;
    function BackgroundLayer() {
        var _this = this;
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
        this.initOverride = function () {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            //call super class's super function
            _super.prototype.init.call(_this, args);
            var winsize = cc.director.getWinSize();

            //create the background image and position it at the center of screen
            var centerPos = cc.p(winsize.width / 2, winsize.height / 2);
            var spriteBG = new cc.Sprite();
            spriteBG.initWithFile(Resources.PlayBG_png);
            spriteBG.setPosition(centerPos);
            _this.addChild(spriteBG);

            return true;
        };
        this.init = this.initOverride;

        this.init();
    }
    return BackgroundLayer;
})(cc.Layer);
//# sourceMappingURL=BackgroundLayer.js.map
