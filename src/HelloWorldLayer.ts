/// <reference path="../types/cocos2d-3.0.d.ts"/>
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
            var helloLabel = new cc.LabelTTF();
            helloLabel.setString("eh 321... YEAH mhm!!!");

            // position the label on the center of the screen
            helloLabel.x = size.width / 2 + offset;
            helloLabel.y = size.height / 2 + 200;
            // add the label as a child to this layer
            that.addChild(helloLabel, 5);

            sss /= 2;
            offset += 50;
        }, 4000);

        this.sprite = new cc.Sprite();
        this.sprite.initWithFile(Resources.MainMenu_jpg);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
    }
}