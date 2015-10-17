/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="Globals.ts"/>

class BackgroundLayer extends cc.Layer
{
    constructor()
    {
        super();
        this.init = this.initOverride;

        this.init();
    }

    initOverride = (...args : any[]) : boolean =>{
        //call super class's super function
        super.init(args);
        var winsize = cc.director.getWinSize();

        //create the background image and position it at the center of screen
        var centerPos = cc.p(winsize.width / 2, winsize.height / 2);
        var spriteBG = new cc.Sprite();
        spriteBG.initWithFile(Resources.PlayBG_png);
        spriteBG.setPosition(centerPos);
        this.addChild(spriteBG);

        return true;
    }
}
