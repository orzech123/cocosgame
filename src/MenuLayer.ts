/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
// <reference path="PlayScene.ts"/>

class MenuLayer extends cc.Layer
{
    constructor(){
        super();

        //this.init = this.initOverride;

        //2. get the screen size of your game canvas
        var winsize = cc.director.getWinSize();

        //3. calculate the center point
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //4. create a background image and set it's position at the center of the screen
        var spritebg = new cc.Sprite();
        spritebg.initWithFile(Resources.helloBG_png);
        spritebg.setPosition(centerpos);
        this.addChild(spritebg);

        //5.
        //cc.MenuItemFont.setFontSize(60);
        var startNSprite = new cc.Sprite();
        startNSprite.initWithFile(Resources.start_n_png);
        var startSSprite = new cc.Sprite();
        startSSprite.initWithFile(Resources.start_s_png);

        //6.create a menu and assign onPlay event callback to it
        var menuItemPlay = cc.MenuItemSprite.create(startNSprite, startSSprite, this.onPlayOverride, this);
        var menu = cc.Menu.create(menuItemPlay);  //7. create the menu
        menu.setPosition(centerpos);
        this.addChild(menu);
    }

    //initOverride = (...args : any[]) : boolean =>{
    //    //call super class's super function
    //    super.init(args);
    //
    //    //2. get the screen size of your game canvas
    //    var winsize = cc.director.getWinSize();
    //
    //    //3. calculate the center point
    //    var centerpos = cc.p(winsize.width / 2, winsize.height / 2);
    //
    //    //4. create a background image and set it's position at the center of the screen
    //    var spritebg = new cc.Sprite();
    //    spritebg.initWithFile(Resources.helloBG_png);
    //    spritebg.setPosition(centerpos);
    //    this.addChild(spritebg);
    //
    //    //5.
    //    //cc.MenuItemFont.setFontSize(60);
    //    var startNSprite = new cc.Sprite();
    //    startNSprite.initWithFile(Resources.start_n_png);
    //    var startSSprite = new cc.Sprite();
    //    startSSprite.initWithFile(Resources.start_s_png);
    //
    //    //6.create a menu and assign onPlay event callback to it
    //    var menuItemPlay = cc.MenuItemSprite.create(startNSprite, startSSprite, this.onPlayOverride, this);
    //    var menu = cc.Menu.create(menuItemPlay);  //7. create the menu
    //    menu.setPosition(centerpos);
    //    this.addChild(menu);
    //
    //    return true;
    //}

    onPlayOverride = () => {
        cc.log("==onplay clicked");
        //cc.director.runScene(new PlayScene());
    }
}