/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="HelloWorldLayer.ts"/>

class HelloWorldScene extends cc.Scene
{
    constructor()
    {
        super();

        this.onEnter = this.onEnterOverride;
    }

    onEnterOverride = ()  =>{
        super.onEnter();


        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }

}