/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="Globals.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AnimationLayer = (function (_super) {
    __extends(AnimationLayer, _super);
    AnimationLayer["__ts"]=true;
    function AnimationLayer(space) {
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
            _super.prototype.init.call(_this);

            //alert("!!!");
            //// create sprite sheet
            //cc.spriteFrameCache.addSpriteFrames(Resources.runner_plist);
            //this.spriteSheet = new cc.SpriteBatchNode(Resources.runner_png);
            //this.addChild(this.spriteSheet);
            //
            //
            //// init runningAction
            //var animFrames = [];
            //for (var i = 0; i < 8; i++) {
            //    var str = "runner" + i + ".png";
            //    var frame = cc.spriteFrameCache.getSpriteFrame(str);
            //    animFrames.push(frame);
            //}
            //
            //var animation = new cc.Animation(animFrames, 0.1);
            //this.runningAction = new cc.RepeatForever(new cc.Animate(animation));
            //
            //
            ////create runner through physic engine
            //this.sprite = cc.PhysicsSprite("#runner0.png");
            //var contentSize = this.sprite.getContentSize();
            //// init body
            //this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
            //this.body.p = cc.p(g_runnerStartX, g_groundHeight + contentSize.height / 2);
            //this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));//run speed
            //this.space.addBody(this.body);
            ////init shape
            //this.shape = new cp.BoxShape(this.body, contentSize.width - 14, contentSize.height);
            //this.space.addShape(this.shape);
            //
            //this.sprite.setBody(this.body);
            //this.sprite.runAction(this.runningAction);
            //
            //this.spriteSheet.addChild(this.sprite);
            return true;
        };
        this.space = space;
        this.init = this.initOverride;

        this.init();
    }
    return AnimationLayer;
})(cc.Layer);
//# sourceMappingURL=AnimationLayer.js.map
