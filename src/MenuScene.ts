/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="MenuLayer.ts"/>

class MenuScene extends cc.Scene {
    constructor() {
        super();

        this.onEnter = this.onEnterOverride;
    }

    onEnterOverride = ()  => {
        super.onEnter();

        var layer = new MenuLayer();
        //layer.init();
        this.addChild(layer);
    }
}
