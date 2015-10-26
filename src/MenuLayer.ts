/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
// <reference path="PlayScene.ts"/>

class MenuLayer extends cc.Layer
{
    constructor(){
        super();

        //2. get the screen size of your game canvas
        var winsize = cc.director.getWinSize();

        this.setAnchorPoint(0, 0);
        this.setPosition(-winsize.width/2, -winsize.height/2);

        //this.init = this.initOverride;

        //3. calculate the center point
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //4. create a background image and set it's position at the center of the screen
        var spritebg = new cc.Sprite();

        //var newWidth = 300;
        //var newHeight = 200;
        //
        //var startWidth = spritebg.getContentSize().width;
        //var startHeight = spritebg.getContentSize().height;
        //
        //var newScaleX = newWidth/startWidth;
        //var newScaleY = newHeight/startHeight;
        //
        //spritebg.scaleX = newScaleX;
        //spritebg.scaleY = newScaleY;

        spritebg.initWithFile(Resources.helloBG_png);
        spritebg.setAnchorPoint(0,0);
        spritebg.setPosition(0, 0);
        spritebg.scaleX = winsize.width / spritebg.getContentSize().width;
        spritebg.scaleY = winsize.height / spritebg.getContentSize().height;

        setInterval(() => {
            cc.log("asd");
        }, 1000);

        //spritebg.setScaleX(winsize.width / spritebg.getContentSize().width);
        //spritebg.setScaleY(winsize.height / spritebg.getContentSize().height);
        //spritebg.setPositionX(40);
        //spritebg.setPositionY(50);

        spritebg.setPosition(centerpos);
        this.addChild(spritebg);

        //5.
        //cc.MenuItemFont.setFontSize(60);

        var startNSprite = new cc.Sprite();
        startNSprite.initWithFile(Resources.start_n_png);
        var startSSprite = new cc.Sprite();
        startSSprite.initWithFile(Resources.start_s_png);

        //6.create a menu and assign onPlay event callback to it
        var menuItemPlay = cc.MenuItemSprite.create(startNSprite, startSSprite, this.play, this);
        var menu = cc.Menu.create(menuItemPlay);  //7. create the menu
        menu.setPosition(centerpos);
        //menu.setAnchorPoint(0,0);
        //menu.setPosition(0, 0);
        this.addChild(menu);
    }

    play = () => {
        cc.log("==onplay clicked");
        //cc.director.runScene(new PlayScene());
    }
}