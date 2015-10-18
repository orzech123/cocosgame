/// <reference path="../types/cocos2d-3.0.d.ts"/>
/// <reference path="Resources.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HelloWorldLayer = (function (_super) {
    __extends(HelloWorldLayer, _super);
    HelloWorldLayer["__ts"]=true;
    function HelloWorldLayer() {
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

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var that = this;
        var sss = 10;
        var offset = 0;
        setInterval(function () {
            var helloLabel = new cc.LabelTTF();
            helloLabel.setString("haha rara eh 321... YEAH mhm!!!");

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
    return HelloWorldLayer;
})(cc.Layer);
//# sourceMappingURL=HelloWorldLayer.js.map
