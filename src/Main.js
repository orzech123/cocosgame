///**
// * Created by micha on 14.10.2015.
// */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="../types/jquery.d.ts"/>
/// <reference path="Resources.ts"/>
var HelloWorldLayer = (function (_super) {
    __extends(HelloWorldLayer, _super);
    function HelloWorldLayer() {
        _super.call(this);
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        var that = this;
        var sss = 10;
        var offset = 0;
        setInterval(function () {
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
        }, 4000);
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
    return HelloWorldLayer;
})(cc.Layer);
var HelloWorldScene = (function (_super) {
    __extends(HelloWorldScene, _super);
    function HelloWorldScene() {
        var _this = this;
        _super.call(this);
        this.onEnterOverride = function () {
            _super.prototype.onEnter.call(_this);
            var layer = new HelloWorldLayer();
            _this.addChild(layer);
        };
        this.onEnter = this.onEnterOverride;
    }
    return HelloWorldScene;
})(cc.Scene);
var Game = (function () {
    function Game(director, view, loaderScene, game) {
        var _this = this;
        this.Start = function () {
            // Pass true to enable retina display, disabled by default to improve performance
            _this.view.enableRetina(false);
            // Adjust viewport meta
            _this.view.adjustViewPort(true);
            // Setup the resolution policy and design resolution size
            _this.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
            // The game will be resized when browser size change
            _this.view.resizeWithBrowserSize(true);
            //load resources
            _this.loaderScene.preload(g_resources, function () {
                this.director.runScene(new HelloWorldScene());
            }, _this);
        };
        this.director = director;
        this.loaderScene = loaderScene;
        this.view = view;
        this.game = game;
        this.game.onStart = function () {
            _this.Start();
            _this.game.run();
        };
    }
    return Game;
})();
//# sourceMappingURL=Main.js.map