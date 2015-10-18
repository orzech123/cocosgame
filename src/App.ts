/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="MenuScene.ts"/>

class Game
{
    director : any;
    view : any;
    loaderScene : any;
    game : any;
    sys : any;


    constructor(director : cc.Director, view : cc.GLView, loaderScene : cc.LoaderScene, sys : any, game : any)
    {
        this.director = director;
        this.loaderScene = loaderScene;
        this.view = view;
        this.game = game;
        this.sys = sys;

        this.onStart();
    }

    onStart = () => {
        if(!this.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
            document.body.removeChild(document.getElementById("cocosLoading"));

        // Pass true to enable retina display, disabled by default to improve performance
        this.view.enableRetina(false);
        // Adjust viewport meta
        this.view.adjustViewPort(true);
        // Setup the resolution policy and design resolution size
        this.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
        // The game will be resized when browser size change
        this.view.resizeWithBrowserSize(true);
        //load resources

        var that = this;
        this.loaderScene.preload(g_resources, () => {
            that.director.runScene(new MenuScene());
        }, this.game);
    }
}