var game;

cc.game.onStart = function(){
    game = new Game(cc.director, cc.view, cc.LoaderScene, cc.sys, cc.game);
};

cc.game.run();