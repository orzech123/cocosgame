/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
// <reference path="PlayScene.ts"/>

class MenuLayer extends cc.Layer
{
    constructor(){
        super();

        var winsize = cc.director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        var backgroundSprite = new cc.Sprite();
        backgroundSprite.initWithFile(Resources.helloBG_png);
        backgroundSprite.setAnchorPoint(0,0);
        backgroundSprite.setPosition(0, 0);
        backgroundSprite.scaleX = winsize.width / backgroundSprite.getContentSize().width;
        backgroundSprite.scaleY = winsize.height / backgroundSprite.getContentSize().height;
        this.addChild(backgroundSprite);

        var startNSprite = new cc.Sprite();
        startNSprite.initWithFile(Resources.start_n_png);
        var startSSprite = new cc.Sprite();
        startSSprite.initWithFile(Resources.start_s_png);
        var menuItemPlay = cc.MenuItemSprite.create(startNSprite, startSSprite, this.play, this);
        menuItemPlay.setAnchorPoint(0,0);
        menuItemPlay.setPosition(0,0);
        var menu = cc.Menu.create(menuItemPlay);
        menu.setAnchorPoint(0,0);
        menu.setPosition(0,0);
        this.addChild(menu);

        var aaa = cc.LabelTTF.create("Xxxx");
        aaa.setAnchorPoint(0,0);
        aaa.setPosition(250,0);
        this.addChild(aaa);

        if(cc.sys.capabilities.hasOwnProperty("accelerometer"))
        {
            //this.setAccelerometerEnabled(true);
            //this.setAccelerometerInterval(1/10);

            cc.eventManager.addListener(cc.EventListener.create({
                event: cc.EventAcceleration.ACCELERATION,
                callback: (accelEvent, event) => {

                }
            }), this);
        }
    }

    play = () => {
        cc.log("==onplay clicked");
        //cc.director.runScene(new PlayScene());
    }
}