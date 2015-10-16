///**
// * Created by micha on 14.10.2015.
// */

/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="../types/jquery.d.ts"/>
/// <reference path="Resources.ts"/>

class HelloWorldLayer extends cc.Layer
{
    sprite : cc.Sprite;

    constructor()
    {
        super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var that = this;
        var sss = 10;
        var offset = 0;
        setInterval(() =>{
            var asd = new box2dAPI.Sprite();

            var helloLabel = new cc.LabelTTF();
            helloLabel.setString("zigu z igu 666!!!");

            // position the label on the center of the screen
            helloLabel.x = size.width / 2 + offset;
            helloLabel.y = size.height / 2 + 200;
            // add the label as a child to this layer
            that.addChild(helloLabel, 5);

            sss /= 2;
            offset += 50;
        }, 4000)

        /////////////////////////////
        //// 3. add your codes below...
        //// add a label shows "Hello World"
        //// create and initialize a label
        //var helloLabel = new cc.LabelTTF("X sasasasasa Kocham Patrycje!!!", "Arial", 38);
        //// position the label on the center of the screen
        //helloLabel.x = size.width / 2;
        //helloLabel.y = size.height / 2 + 200;
        //// add the label as a child to this layer
        //this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite();
        this.sprite.initWithFile(Resources.MainMenu_jpg);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
    }
}

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

class Game
{
    director : any;//cc.Director;
    view : any;//cc.GLView;
    loaderScene : any;//cc.LoaderScene;
    game : any;

    constructor(director : cc.Director, view : cc.GLView, loaderScene : cc.LoaderScene, game : any)
    {
        this.director = director;
        this.loaderScene = loaderScene;
        this.view = view;
        this.game = game;

        this.game.onStart = () => {
            this.Start();
            this.game.run();
        }
    }

    Start = () => {
        // Pass true to enable retina display, disabled by default to improve performance
        this.view.enableRetina(false);
        // Adjust viewport meta
        this.view.adjustViewPort(true);
        // Setup the resolution policy and design resolution size
        this.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
        // The game will be resized when browser size change
        this.view.resizeWithBrowserSize(true);
        //load resources
        this.loaderScene.preload(g_resources, function () {
            this.director.runScene(new HelloWorldScene());
        }, this);
    }
}