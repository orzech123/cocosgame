/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="Globals.ts"/>

class AnimationLayer extends cc.Layer
{
    spriteSheet: any;
    runningAction: any;
    sprite: any;
    space:any;
    body:any;
    shape:any;

    constructor (space) {
        super();
        this.space = space;
        this.init = this.initOverride;

        this.init();
    }

    initOverride = (...args : any[]) : boolean =>{
        super.init();

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
    }
}