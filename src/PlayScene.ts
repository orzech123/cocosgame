/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="Globals.ts"/>
/// <reference path="BackgroundLayer.ts"/>
/// <reference path="AnimationLayer.ts"/>
/// <reference path="StatusLayer.ts"/>

class PlayScene extends cc.Scene
{
    space : cp.Space;

    constructor()
    {
        super();

        this.onEnter = this.onEnterOverride;
        this.update = this.updateOvierride;
    }

    initPhysics = () => {
        this.space = new cp.Space();
        // Gravity
        this.space.gravity = new cp.v(0, -350);
        // set up Walls
        var wallBottom = new cp.SegmentShape(this.space.staticBody,
            new cp.v(0, g_groundHeight),// start point
            new cp.v(4294967295, g_groundHeight),// MAX INT:4294967295
            0);// thickness of wall
        this.space.addStaticShape(wallBottom);
    }

    onEnterOverride = () => {
        super.onEnter();
        this.initPhysics();

        //add three layer in the right order
        this.addChild(new BackgroundLayer());
        this.addChild(new AnimationLayer(this.space));
        this.addChild(new StatusLayer());

        this.scheduleUpdate();
    }

    updateOvierride = (dt) => {
        // chipmunk step
        this.space.step(dt);
    }

}