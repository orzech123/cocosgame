/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="Globals.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var StatusLayer = (function (_super) {
    __extends(StatusLayer, _super);
    StatusLayer["__ts"]=true;
    function StatusLayer() {
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
        this.coins = 0;
        this.initOverride = function () {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            _super.prototype.init.call(_this);

            var winsize = cc.director.getWinSize();

            _this.labelCoin = cc.LabelTTF.create("Coins:0", "Helvetica", 20);
            _this.labelCoin.setColor(cc.color(0, 0, 0)); //black color
            _this.labelCoin.setPosition(cc.p(70, winsize.height - 20));
            _this.addChild(_this.labelCoin);

            _this.labelMeter = cc.LabelTTF.create("0M", "Helvetica", 20);
            _this.labelMeter.setPosition(cc.p(winsize.width - 70, winsize.height - 20));
            _this.addChild(_this.labelMeter);

            return true;
        };
        this.init = this.initOverride;

        this.init();
    }
    return StatusLayer;
})(cc.Layer);
//# sourceMappingURL=StatusLayer.js.map
