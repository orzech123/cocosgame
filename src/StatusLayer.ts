/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="Globals.ts"/>

class StatusLayer extends cc.Layer
{
    labelCoin : any;
    labelMeter : any;
    coins :any = 0;

    constructor() {
        super();
        this.init = this.initOverride;

        this.init();
    }

    initOverride = (...args : any[]) : boolean =>{
        super.init();

        var winsize = cc.director.getWinSize();

        this.labelCoin = cc.LabelTTF.create("Coins:0", "Helvetica", 20);
        this.labelCoin.setColor(cc.color(0,0,0));//black color
        this.labelCoin.setPosition(cc.p(70, winsize.height - 20));
        this.addChild(this.labelCoin);

        this.labelMeter = cc.LabelTTF.create("0M", "Helvetica", 20);
        this.labelMeter.setPosition(cc.p(winsize.width - 70, winsize.height - 20));
        this.addChild(this.labelMeter);

        return true;
    }
}
