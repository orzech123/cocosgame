/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
/// <reference path="HelloWorldScene.ts"/>
var Game = (function () {
    function Game(director, view, loaderScene, sys, game) {
        var _this = this;
        this.onStart = function () {
            if (!_this.sys.isNative && document.getElementById("cocosLoading"))
                document.body.removeChild(document.getElementById("cocosLoading"));

            // Pass true to enable retina display, disabled by default to improve performance
            _this.view.enableRetina(false);

            // Adjust viewport meta
            _this.view.adjustViewPort(true);

            // Setup the resolution policy and design resolution size
            _this.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);

            // The game will be resized when browser size change
            _this.view.resizeWithBrowserSize(true);

            //load resources
            var that = _this;
            _this.loaderScene.preload(g_resources, function () {
                that.director.runScene(new HelloWorldScene());
            }, _this.game);
        };
        this.director = director;
        this.loaderScene = loaderScene;
        this.view = view;
        this.game = game;
        this.sys = sys;

        this.onStart();
    }
    return Game;
})();
//# sourceMappingURL=App.js.map
