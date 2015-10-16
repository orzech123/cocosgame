cc.game.onStart = function(){
    var game = new Game(cc.director, cc.view, cc.LoaderScene, cc.game);
    game.Start();
};
cc.game.run();