/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="Globals.ts"/>
/// <reference path="BackgroundLayer.ts"/>
/// <reference path="AnimationLayer.ts"/>
/// <reference path="StatusLayer.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    PlayScene["__ts"]=true;
    function PlayScene() {
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
        this.initPhysics = function () {
            _this.space = new cp.Space();

            // Gravity
            _this.space.gravity = new cp.v(0, -350);

            // set up Walls
            var wallBottom = new cp.SegmentShape(_this.space.staticBody, new cp.v(0, g_groundHeight), new cp.v(4294967295, g_groundHeight), 0);
            _this.space.addStaticShape(wallBottom);
        };
        this.onEnterOverride = function () {
            _super.prototype.onEnter.call(_this);
            _this.initPhysics();

            //add three layer in the right order
            _this.addChild(new BackgroundLayer());
            _this.addChild(new AnimationLayer(_this.space));
            _this.addChild(new StatusLayer());

            _this.scheduleUpdate();
        };
        this.updateOvierride = function (dt) {
            // chipmunk step
            _this.space.step(dt);
        };

        this.onEnter = this.onEnterOverride;
        this.update = this.updateOvierride;
    }
    return PlayScene;
})(cc.Scene);
//# sourceMappingURL=PlayScene.js.map
