//var game;
//
//cc.game.onStart = function(){
//    game = new Game(cc.director, cc.view, cc.LoaderScene, cc.sys, cc.game);
//};
//
//cc.game.run();

cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MenuScene());
    }, this);
};
cc.game.run();