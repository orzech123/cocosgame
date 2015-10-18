/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="HelloWorldLayer.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HelloWorldScene = (function (_super) {
    __extends(HelloWorldScene, _super);
    HelloWorldScene["__ts"]=true;
    function HelloWorldScene() {
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
        this.onEnterOverride = function () {
            _super.prototype.onEnter.call(_this);

            var layer = new HelloWorldLayer();
            _this.addChild(layer);
        };

        this.onEnter = this.onEnterOverride;
    }
    return HelloWorldScene;
})(cc.Scene);
//# sourceMappingURL=HelloWorldScene.js.map
