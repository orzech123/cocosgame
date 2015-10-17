/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="PlayScene.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MenuLayer = (function (_super) {
    __extends(MenuLayer, _super);
    MenuLayer["__ts"]=true;
    function MenuLayer() {
        var _this = this;
        (function(){
    if(_super.__ts){
        return function(_this){
            _this.__instanceId = ClassManager.getNewInstanceId();
            _super.apply(_this, Array.prototype.slice.call(arguments,1));
        }
    } else if (typeof _super.prototype.ctor === "function") {
        return function(_this){
            _this.__instanceId = ClassManager.getNewInstanceId();
            _super.prototype.ctor.apply(_this, Array.prototype.slice.call(arguments,1));
        }
    } else {
        return function(_this){
            _this.__instanceId = ClassManager.getNewInstanceId();
        };
    }
}())
(this);
        this.initOverride = function () {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            //call super class's super function
            _super.prototype.init.call(_this, args);

            //2. get the screen size of your game canvas
            var winsize = cc.director.getWinSize();

            //3. calculate the center point
            var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

            //4. create a background image and set it's position at the center of the screen
            var spritebg = new cc.Sprite();
            spritebg.initWithFile(Resources.helloBG_png);
            spritebg.setPosition(centerpos);
            _this.addChild(spritebg);

            //5.
            //cc.MenuItemFont.setFontSize(60);
            var startNSprite = new cc.Sprite();
            startNSprite.initWithFile(Resources.start_n_png);
            var startSSprite = new cc.Sprite();
            startSSprite.initWithFile(Resources.start_s_png);

            //6.create a menu and assign onPlay event callback to it
            var menuItemPlay = cc.MenuItemSprite.create(startNSprite, startSSprite, _this.onPlayOverride, _this);
            var menu = cc.Menu.create(menuItemPlay);
            menu.setPosition(centerpos);
            _this.addChild(menu);

            return true;
        };
        this.onPlayOverride = function () {
            cc.log("==onplay clicked");
            cc.director.runScene(new PlayScene());
        };

        this.init = this.initOverride;
    }
    return MenuLayer;
})(cc.Layer);

var MenuScene = (function (_super) {
    __extends(MenuScene, _super);
    MenuScene["__ts"]=true;
    function MenuScene() {
        var _this = this;
        (function(){
    if(_super.__ts){
        return function(_this){
            _this.__instanceId = ClassManager.getNewInstanceId();
            _super.apply(_this, Array.prototype.slice.call(arguments,1));
        }
    } else if (typeof _super.prototype.ctor === "function") {
        return function(_this){
            _this.__instanceId = ClassManager.getNewInstanceId();
            _super.prototype.ctor.apply(_this, Array.prototype.slice.call(arguments,1));
        }
    } else {
        return function(_this){
            _this.__instanceId = ClassManager.getNewInstanceId();
        };
    }
}())
(this);
        this.onEnterOverride = function () {
            _super.prototype.onEnter.call(_this);

            var layer = new MenuLayer();
            layer.init();
            _this.addChild(layer);
        };

        this.onEnter = this.onEnterOverride;
    }
    return MenuScene;
})(cc.Scene);
///// <reference path="../types/cocos2d-3.0.d.ts"/>
///// <reference path="Resources.ts"/>
//
//class HelloWorldLayer extends cc.Layer
//{
//    sprite : cc.Sprite;
//
//    constructor()
//    {
//        super();
//
//        /////////////////////////////
//        // 2. add a menu item with "X" image, which is clicked to quit the program
//        //    you may modify it.
//        // ask the window size
//        var size = cc.winSize;
//
//        var that = this;
//        var sss = 10;
//        var offset = 0;
//        setInterval(() =>{
//            var helloLabel = new cc.LabelTTF();
//            helloLabel.setString("321... YEAH mhm!!!");
//            helloLabel.setPosition(new cc.Point(3,3));
//
//            // position the label on the center of the screen
//            helloLabel.x = size.width / 2 + offset;
//            helloLabel.y = size.height / 2 + 200;
//            // add the label as a child to this layer
//            that.addChild(helloLabel, 5);
//
//            sss /= 2;
//            offset += 50;
//        }, 4000);
//
//        this.sprite = new cc.Sprite();
//        this.sprite.initWithFile(Resources.MainMenu_jpg);
//        this.sprite.attr({
//            x: size.width / 2,
//            y: size.height / 2
//        });
//        this.addChild(this.sprite, 0);
//    }
//}
//
//class HelloWorldScene extends cc.Scene
//{
//    constructor()
//    {
//        super();
//
//        this.onEnter = this.onEnterOverride;
//    }
//
//    onEnterOverride = ()  =>{
//        super.onEnter();
//
//
//        var layer = new HelloWorldLayer();
//        this.addChild(layer);
//    }
//
//}
//
//class Game
//{
//    director : any;
//    view : any;
//    loaderScene : any;
//    game : any;
//    sys : any;
//
//
//    constructor(director : cc.Director, view : cc.GLView, loaderScene : cc.LoaderScene, sys : any, game : any)
//    {
//        this.director = director;
//        this.loaderScene = loaderScene;
//        this.view = view;
//        this.game = game;
//        this.sys = sys;
//
//        this.onStart();
//    }
//
//    onStart = () => {
//        if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
//            document.body.removeChild(document.getElementById("cocosLoading"));
//
//        // Pass true to enable retina display, disabled by default to improve performance
//        this.view.enableRetina(false);
//        // Adjust viewport meta
//        this.view.adjustViewPort(true);
//        // Setup the resolution policy and design resolution size
//        this.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
//        // The game will be resized when browser size change
//        this.view.resizeWithBrowserSize(true);
//        //load resources
//
//        var that = this;
//        this.loaderScene.preload(g_resources, () => {
//            that.director.runScene(new HelloWorldScene());
//        }, this.game);
//    }
//}
//# sourceMappingURL=App.js.map
