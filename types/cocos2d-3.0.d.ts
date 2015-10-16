﻿/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * TypeScript definitions for https://github.com/cocos2d/cocos2d-html5
 *
 * 29/JUN/2013 - Adam Davidson
 */
declare function require(name:string);
declare module cc {
    var director: Director;
    var winSize:cc.Size;
    var view:GLView;
    var visibleRect : {
        topLeft: cc.Point;
        topRight: cc.Point;
        top: cc.Point;
        bottomLeft: cc.Point;
        bottomRight: cc.Point;
        bottom: cc.Point;
        center: cc.Point;
        left: cc.Point;
        right: cc.Point;
        width: number;
        height: number;
    };
    var KEY : {
        backspace: number;
        tab: number;
        enter: number;
        shift: number; //should use shiftkey instead
        ctrl: number; //should use ctrlkey
        alt: number; //should use altkey
        pause: number;
        capslock: number;
        escape: number;
        pageup: number;
        pagedown: number;
        end: number;
        home: number;
        left: number;
        up: number;
        right: number;
        down: number;
        insert: number;
        Delete: number;
        0: number;
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
        9: number;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        g: number;
        h: number;
        i: number;
        j: number;
        k: number;
        l: number;
        m: number;
        n: number;
        o: number;
        p: number;
        q: number;
        r: number;
        s: number;
        t: number;
        u: number;
        v: number;
        w: number;
        x: number;
        y: number;
        z: number;
        num0: number;
        num1: number;
        num2: number;
        num3: number;
        num4: number;
        num5: number;
        num6: number;
        num7: number;
        num8: number;
        num9: number;
        '*': number;
        '+': number;
        '-': number;
        'numdel': number;
        '/': number;
        f1: number; //f1-f12 dont work on ie
        f2: number;
        f3: number;
        f4: number;
        f5: number;
        f6: number;
        f7: number;
        f8: number;
        f9: number;
        f10: number;
        f11: number;
        f12: number;
        numlock: number;
        scrolllock: number;
        semicolon: number;
        ',': number;
        equal: number;
        '=': number;
        ';': number;
        comma: number;
        dash: number;
        '.': number;
        period: number;
        forwardslash: number;
        grave: number;
        '[': number;
        openbracket: number;
        ']': number;
        closebracket: number;
        backslash: number;
        quote: number;
        space: number
    }
    var SCROLLVIEW_DIRECTION_NONE : number;
    var SCROLLVIEW_DIRECTION_HORIZONTAL : number;
    var SCROLLVIEW_DIRECTION_VERTICAL : number;
    var SCROLLVIEW_DIRECTION_BOTH : number;
    var TABLEVIEW_FILL_TOPDOWN : number;
    var TABLEVIEW_FILL_BOTTOMUP : number;

    var CONTROL_STATE_NORMAL : number;
    var CONTROL_STATE_HIGHLIGHTED : number;
    var CONTROL_STATE_DISABLED : number;
    var CONTROL_STATE_SELECTED : number;
    var CONTROL_STATE_INITIAL : number;

    var _RENDER_TYPE_CANVAS : number;
    var _RENDER_TYPE_WEBGL : number;

    var eventManager: EventDispatcher;

    class Touch extends Class {
        getPreviousLocationInView(): Point;
        getLocation() : Point;
        getDelta();
        getStartLocationInView(): Point;
        getStartLocation(): Point;
        getId();
        setTouchInfo();
        getLocationInView();
        getPreviousLocation();
    }
    class Event extends Class {
        static TOUCH: number;
        static KEYBOARD: number;
        static ACCELERATION: number;
        static MOUSE: number;
        static CUSTOM: number;

        constructor(type: number);
        getType(): number;
        stopPropagation();
        isStopped(): boolean;
        getCurrentTarget();
    }

    class EventCustom extends Event {
        constructor(eventName: string);
        getEventName(): string;
        setUserData(data);
        getUserData();
    }

    class EventTouch extends Event {
        static MAX_TOUCHES: number;
        static EventCode : {BEGAN: number; MOVED: number; ENDED: number; CANCELLED: number};
        constructor(arr: Array<cc.Touch>);
        /**
         * Returns event code
         * @returns {number}
         */
        getEventCode(): number;

        /**
         * Returns touches of event
         * @returns {Array}
         */
        getTouches() : Array<cc.Touch>;
    }

    class EventMouse extends Event {
        static NONE : number;
        static DOWN : number;
        static UP : number;
        static MOVE : number;
        static SCROLL : number;
        static BUTTON_LEFT : number;
        static BUTTON_RIGHT : number;
        static BUTTON_MIDDLE : number;
        static BUTTON_4 : number;
        static BUTTON_5 : number;
        static BUTTON_6 : number;
        static BUTTON_7 : number;
        static BUTTON_8 : number;
        constructor(eventType: number);
        /**
         * Sets scroll data
         * @param {number} scrollX
         * @param {number} scrollY
         */
        setScrollData(scrollX:number, scrollY:number);
        /**
         * Returns the x axis scroll value
         * @returns {number}
         */
        getScrollX():number;
        /**
         * Returns the y axis scroll value
         * @returns {number}
         */
        getScrollY():number;

        /**
         * Sets cursor location
         * @param {number} x
         * @param {number} y
         */
        setLocation(x:number, y:number);
        /**
         * Returns cursor location
         * @return {cc.Point} location
         */
        getLocation():cc.Point;

        /**
         * Returns the current cursor location in screen coordinates
         * @return {cc.Point}
         */
        getLocationInView(): cc.Point;
        /**
         * Returns the delta distance from the previous location to current location
         * @return {cc.Point}
         */
        getDelta(): cc.Point;

        /**
         * Returns the X axis delta distance from the previous location to current location
         * @return {Number}
         */
        getDeltaX() : number;

        /**
         * Returns the Y axis delta distance from the previous location to current location
         * @return {Number}
         */
        getDeltaY() : number;

        /**
         * Sets mouse button
         * @param {number} button
         */
        setButton(button: number);

        /**
         * Returns mouse button
         * @returns {number}
         */
        getButton(): number;

        /**
         * Returns location X axis data
         * @returns {number}
         */
        getLocationX(): number;

        /**
         * Returns location Y axis data
         * @returns {number}
         */
        getLocationY(): number;

    }

    class EventAcceleration extends Event {
        constructor(acc);
    }

    class EventKeyboard extends Event {
        constructor(keyCode: number, isPressed: boolean);
    }

    class EventDispatcher {
        setEnabled(b: boolean);
        removeAllListeners();
        addEventListenerWithSceneGraphPriority();
        addCustomListener();
        addEventListenerWithFixedPriority();
        removeListeners(node: Node);
        resumeTarget();
        setPriority();
        dispatchEvent();
        pauseTarget();
        removeCustomListeners();
        addListener(l: EventListener, nodeOrPriority: any);
        removeListener(l: EventListener);
        isEnabled() : boolean;
    }
    class EventListener extends Class {
        static UNKNOWN:number;
        static TOUCH_ONE_BY_ONE:number;
        static TOUCH_ALL_AT_ONCE:number;
        static KEYBOARD:number;
        static MOUSE:number;
        static ACCELERATION:number;
        static CUSTOM:number;
        static create(obj: Object):EventListener;
    }

    class ClippingNode extends Node {
        isInverted() : boolean;
        setInverted(b: boolean);
        setStencil(n: Node);
        getAlphaThreshold() : number;
        init(n: Node);
        getStencil() : Node;
        setAlphaThreshold(a: number);

        static create(n?: Node) : ClippingNode;

    }

    class MotionStreak extends Node {
        reset();
        setTexture(t: Texture2D);
        getTexture(): Texture2D;
        tintWithColor(c: Color);
        setBlendFunc(func: {src:number; dst:number});
        setStartingPositionInitialized(b:boolean);
        getBlendFunc(): {src:number; dst:number};
        isStartingPositionInitialized() : boolean;
        isFastMode(): boolean;
        initWithFade(fade: number, minSeg: number, stroke: number, color: Color, sp:string);
        initWithFade(fade: number, minSeg: number, stroke: number, color: Color, sp:Texture2D);
        setFastMode(b: boolean);

        static create(fade: number, minSeg: number, stroke: number, color: Color, sp:string);
        static create(fade: number, minSeg: number, stroke: number, color: Color, sp:Texture2D);
    }

    class DrawNode extends Node {
        drawTriangle(p1: Point,p2: Point,p3: Point,p4: Point);
        getBlendFunc();
        onDraw();
        clear();
        setBlendFunc();
        init();
        drawDot(point: Point, radius: number, color?:Color);
        drawQuadBezier();
        drawCubicBezier();
        drawSegment(from: Point, to: Point, radius: number, color?: Color);
        drawPoly(points: Array<Point>, fillColor: Color, borderWidth: number , borderColor?: Color);
        drawCircle(center: Point, radius: number, angle: number, segments, drawLineToCenter: boolean, lineWidth?: number , color?:Color);

        static create() : DrawNode;
    }

    enum ResolutionPolicy {
        // The entire application is visible in the specified area without trying to preserve the original aspect ratio.
        // Distortion can occur, and the application may appear stretched or compressed.
        EXACT_FIT,
        // The entire application fills the specified area, without distortion but possibly with some cropping,
        // while maintaining the original aspect ratio of the application.
        NO_BORDER,
        // The entire application is visible in the specified area without distortion while maintaining the original
        // aspect ratio of the application. Borders can appear on two sides of the application.
        SHOW_ALL,
        // The application takes the height of the design resolution size and modifies the width of the internal
        // canvas so that it fits the aspect ratio of the device
        // no distortion will occur however you must make sure your application works on different
        // aspect ratios
        FIXED_HEIGHT,
        // The application takes the width of the design resolution size and modifies the height of the internal
        // canvas so that it fits the aspect ratio of the device
        // no distortion will occur however you must make sure your application works on different
        // aspect ratios
        FIXED_WIDTH,

        UNKNOWN
    }


    class GLView {
        setDesignResolutionSize(width:number, height:number, resolutionPolicy:ResolutionPolicy);
    }

    class ScrollView extends Layer {
        isClippingToBounds();
        setContainer(node: cc.Node);
        setContentOffsetInDuration();
        setZoomScaleInDuration();
        setBounceable();
        getDirection();
        getContainer();
        updateTweenAction();
        getZoomScale();
        updateInset();
        initWithViewSize(size: Size);
        pause();
        setDirection(d: number);
        init();
        setContentOffset(offset: cc.Point, animate?: boolean);
        isDragging();
        isTouchEnabled();
        isBounceable();
        setTouchEnabled(bool: boolean);
        getContentOffset() : cc.Point;
        resume();
        setClippingToBounds();
        setViewSize(size: cc.Size);
        getViewSize(): cc.Size;
        maxContainerOffset();
        isTouchMoved();
        isNodeVisible();
        minContainerOffset();
        setZoomScale();
        static create(size?: Size, container?: Node);
    }
    class TableView extends ScrollView {
        updateCellAtIndex(idx: number);
        setVerticalFillOrder(order: number);
        scrollViewDidZoom();
        _updateContentSize();
        getVerticalFillOrder();
        removeCellAtIndex();
        scrollViewDidScroll();
        reloadData();
        insertCellAtIndex();
        cellAtIndex(idx: number) : TableViewCell;
        dequeueCell();
        setDelegate(delegate: any);
        setDataSource(dataSource: Object);
        static create(dataSource?: Object, size?: Size, container?: Node);
    }
    class TableViewCell extends Node {
        reset();
        getIdx() : number;
        setIdx(idx: number);
    }
    class BuilderReader {
        static load(fileName:string, owner?:Object, parentSize?:Size);
    }


    class BuilderAnimationManager {
        getRunningSequenceName():string;

        runAnimationsForSequenceNamed(seq:string, reset?:boolean);

        setCompletedAnimationCallback(obj:Object, func:Function);

        getLastCompletedSequenceName():string;
        moveAnimationsFromNode(fromNode: cc.Node, toNode: cc.Node);
        setAutoPlaySequenceId(id: number);
        getDocumentCallbackNames();
        actionForSoundChannel();
        setBaseValue();
        getDocumentOutletNodes();
        setRootNode();
        runAnimationsForSequenceNamedTweenDuration();
        addDocumentOutletName();
        getRootContainerSize();
        setDocumentControllerName();
        setObject();
        getContainerSize();
        actionForCallbackChannel();
        getDocumentOutletNames();
        addDocumentCallbackControlEvents();
        init();
        getKeyframeCallbacks();
        getDocumentCallbackControlEvents();
        setRootContainerSize();
        runAnimationsForSequenceIdTweenDuration();
        getAutoPlaySequenceId();
        addDocumentCallbackName();
        getRootNode();
        addDocumentOutletNode();
        setDelegate();
        getSequenceDuration(seq: string): number;
        addDocumentCallbackNode();
        runAnimationsForSequenceNamed();
        getSequenceId(seq: string) : number;
        setCallFunc();
        getDocumentCallbackNodes();
        setSequences();
        debug();
        getDocumentControllerName();
    }

    export class SpriteFrame {
        clone();
        setRotated();
        setTexture();
        getOffset();
        setRectInPixels();
        getTexture() : Texture2D;
        getRect() : Rect;
        setOffsetInPixels();
        getRectInPixels();
        setOriginalSize();
        getOriginalSizeInPixels();
        setOriginalSizeInPixels();
        setOffset();
        initWithTexture();
        isRotated();
        initWithTextureFilename();
        setRect();
        getOffsetInPixels();
        getOriginalSize();
        static create(fileName: string, rect: Rect, rotated?: boolean, offset?: Point, originalSize?: Size) : SpriteFrame;
        static createWithTexture(texture: Texture2D, rect: Rect, rotated?:boolean, offset?: Point, originalSize?:Size) : SpriteFrame;
    }

    class Scale9Sprite extends Node {
        resizableSpriteWithCapInsets();
        setInsetBottom();
        initWithSpriteFrameName();
        setInsetTop();
        init();
        setPreferredSize();
        setSpriteFrame();
        initWithBatchNode();
        getInsetBottom();
        getCapInsets();
        updateWithBatchNode();
        getInsetRight();
        getOriginalSize();
        initWithFile();
        getInsetTop();
        setInsetLeft();
        initWithSpriteFrame();
        getPreferredSize();
        setCapInsets();
        getInsetLeft();
        setInsetRight();

        static create(): Scale9Sprite;
        static createWithSpriteFrameName(name: string) : Scale9Sprite;
        static createWithSpriteFrame(spFrame: SpriteFrame) : Scale9Sprite;
    }

    class Texture2D {
        getMaxT();
        getStringForFormat();
        initWithImage();
        getMaxS();
        releaseGLTexture();
        hasPremultipliedAlpha();
        initWithMipmaps();
        getPixelsHigh();
        getBitsPerPixelForFormat();
        getName();
        initWithString();
        setMaxT();
        drawInRect();
        getContentSize() : Size;
        setAliasTexParameters();
        setAntiAliasTexParameters();
        generateMipmap();
        getDescription();
        getPixelFormat();
        setGLProgram();
        getContentSizeInPixels();
        getPixelsWide();
        drawAtPoint();
        getGLProgram();
        hasMipmaps();
        setMaxS();

        static setDefaultAlphaPixelFormat();
        static getDefaultAlphaPixelFormat();
        static PVRImagesHavePremultipliedAlpha();
    }

    class TextureCache {
        reloadTexture();
        unbindAllImageAsync();
        removeTextureForKey();
        removeAllTextures();
        addImageAsync();
        getDescription();
        getCachedTextureInfo();
        addImage(fileName: string) : Texture2D;
        unbindImageAsync();
        getTextureForKey();
        removeUnusedTextures();
        removeTexture();
        waitForQuit();
    }
    class CallFunc {
        static create(func:Function, _this?:Object);
    }
    class EaseExponentialOut {
        static create(action:Action);
    }
    class EaseBackOut {
        static create(action:Action);
    }
    class EaseBackIn {
        static create(action:Action);
    }

    function pSub(p1:Point, p2:Point):Point;

    function pAdd(p1:Point, p2:Point):Point;

    function pLerp(p1:Point, p2:Point, alpha:number):Point;

    function pDistanceSQ(p1:Point, p2:Point) : number;
    function pDistance(p1:Point, p2:Point): number;
    function pNeg();
    function pMult(v: Point, r: Number): Point;
    function pMidpoint(): Point;
    function pDot();
    function pCross();
    function pPerp();
    function pRPerp();
    function pProject();
    function pRotate();
    function pNormalize(p: Point): Point;
    function pClamp();
    function pLengthSQ();
    function pLength(v: Point): number;

    var COCOS2D_DEBUG:number;

    class ParticleSystem extends Node {
        getStartSizeVar();
        getTexture();
        isFull();
        getBatchNode();
        getStartColor();
        getPositionType();
        setPosVar();
        getEndSpin();
        setRotatePerSecondVar();
        getStartSpinVar();
        getRadialAccelVar();
        init();
        getEndSizeVar();
        setRotation();
        setTangentialAccel();
        setScaleY();
        setScaleX();
        getRadialAccel();
        setStartRadius();
        setRotatePerSecond();
        setEndSize();
        getGravity();
        getTangentialAccel();
        setEndRadius();
        getSpeed();
        getAngle();
        setEndColor();
        setStartSpin();
        setDuration();
        initWithTotalParticles();
        setTexture();
        getPosVar();
        updateWithNoTime();
        isBlendAdditive();
        getSpeedVar();
        setPositionType();
        stopSystem();
        getSourcePosition();
        setLifeVar();
        setTotalParticles();
        setEndColorVar();
        updateQuadWithParticle();
        getAtlasIndex();
        getStartSize();
        setStartSpinVar();
        resetSystem();
        setAtlasIndex();
        setTangentialAccelVar();
        setEndRadiusVar();
        getEndRadius();
        isOpacityModifyRGB();
        isActive();
        setRadialAccelVar();
        setStartSize();
        setSpeed();
        getStartSpin();
        getRotatePerSecond();
        initParticle();
        setEmitterMode();
        getDuration() : number;
        setSourcePosition();
        getEndSpinVar();
        setBlendAdditive();
        setLife();
        setAngleVar();
        setRotationIsDir();
        setEndSizeVar();
        setAngle();
        setBatchNode();
        getTangentialAccelVar();
        getEmitterMode();
        setEndSpinVar();
        initWithFile();
        getAngleVar();
        setStartColor();
        getRotatePerSecondVar();
        getEndSize();
        getLife();
        setSpeedVar();
        setAutoRemoveOnFinish(b:boolean);
        setGravity();
        postStep();
        setEmissionRate();
        getEndColorVar();
        getRotationIsDir();
        setScale();
        getEmissionRate();
        getEndColor();
        getLifeVar();
        setStartSizeVar();
        setOpacityModifyRGB();
        addParticle();
        getStartRadius();
        getParticleCount();
        getStartRadiusVar();
        getBlendFunc();
        setStartColorVar();
        setEndSpin();
        setRadialAccel();
        initWithDictionary();
        isAutoRemoveOnFinish();
        getTotalParticles();
        setStartRadiusVar();
        setBlendFunc();
        getEndRadiusVar();
        getStartColorVar();
    }

    class ParticleSystemQuad extends ParticleSystem {
        setDisplayFrame(sp: SpriteFrame);
        setTextureWithRect(t: Texture2D, r: Rect);

        static create(dict?:any);
        static createWithTotalParticles(n: number);
    }

    //#region cocos2d/CCCommon.js
    /**
     * copy an new object
     * @function
     * @param {object|Array} obj source object
     * @return {Array|object}
     */
    function clone(obj:any);


    /**
     * Function added for JS bindings compatibility. Not needed in cocos2d-html5.
     * @function
     * @param {object} jsobj subclass
     * @param {object} klass superclass
     */
    function associateWithNative(jsobj:any, superclass:any);

    /**
     * Is show bebug info on web page
     * @constant
     * @type {Boolean}
     */
    var IS_SHOW_DEBUG_ON_PAGE:boolean;

    function log(...any);
    function error(...any);
    function assert(condition: boolean, ...any);
    function warn(...any);


    /**
     * Pop out a message box
     * @param {String} message
     * @function
     */
    function MessageBox(message:string);

    /**
     * Output Assert message.
     * @function
     * @param {Boolean} cond If cond is false, assert.
     * @param {String} message
     */
    function Assert(cond:boolean, message:string);

    /**
     * Update Debug setting.
     * @function
     */
    function initDebugSetting();

    // Enum the language type supportted now
    /**
     * English language code
     * @constant
     * @type Number
     */
    var LANGUAGE_ENGLISH:number;

    /**
     * Chinese language code
     * @constant
     * @type Number
     */
    var LANGUAGE_CHINESE:number;

    /**
     * French language code
     * @constant
     * @type Number
     */
    var LANGUAGE_FRENCH:number;

    /**
     * Italian language code
     * @constant
     * @type Number
     */
    var LANGUAGE_ITALIAN:number;

    /**
     * German language code
     * @constant
     * @type Number
     */
    var LANGUAGE_GERMAN:number;

    /**
     * Spanish language code
     * @constant
     * @type Number
     */
    var LANGUAGE_SPANISH:number;

    /**
     * Russian language code
     * @constant
     * @type Number
     */
    var LANGUAGE_RUSSIAN:number;
    //#endregion cocos2d/CCCommon.js

    //#region cocos2d/CCDirector.js
    /**
     * <p>
     *    Class that creates and handle the main Window and manages how<br/>
     *    and when to execute the Scenes.<br/>
     *    <br/>
     *    The cc.Director is also responsible for:<br/>
     *      - initializing the OpenGL context<br/>
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL buffer depth (default one is 0-bit)<br/>
     *      - setting the projection (default one is 3D)<br/>
     *      - setting the orientation (default one is Protrait)<br/>
     *      <br/>
     *    Since the cc.Director is a singleton, the standard way to use it is by calling:<br/>
     *      - cc.Director.getInstance().methodName(); <br/>
     *    <br/>
     *    The CCDirector also sets the default OpenGL context:<br/>
     *      - GL_TEXTURE_2D is enabled<br/>
     *      - GL_VERTEX_ARRAY is enabled<br/>
     *      - GL_COLOR_ARRAY is enabled<br/>
     *      - GL_TEXTURE_COORD_ARRAY is enabled<br/>
     * </p>
     * @class
     * @extends cc.Class
     */
    export class Director extends Class {
        getScheduler():Scheduler;

        /**
         * returns a shared instance of the director
         * @function
         * @return {cc.Director}
         */
        static getInstance():Director;

        /**
         * initializes cc.Director
         * @return {Boolean}
         */
        init():boolean;

        /**
         *  Draw the scene. This method is called every frame. Don't call it manually.
         */
        drawScene();

        /**
         * end director
         */
        end();

        /**
         * <p>
         *     returns the size of the OpenGL view in points.<br/>
         *     It takes into account any possible rotation (device orientation) of the window
         * </p>
         * @return {cc.Size}
         */
        getWinSize():Size;

        /**
         * Replaces the running scene with a new one. The running scene is terminated. ONLY call it if there is a running scene.
         * @param {cc.Scene} scene
         */
        replaceScene(scene:Scene);

        /**
         * <p>
         *    Enters the Director's main loop with the given Scene.<br/>
         *    Call it to run only your FIRST scene.<br/>
         *    Don't call it if there is already a running scene.
         * </p>
         * @param {cc.Scene} scene
         */
        runWithScene(scene:Scene);

        /**
         * Get the FPS value
         * @return {Number}
         */
        getAnimationInterval():number;

        /**
         * Whether or not to display the FPS on the bottom-left corner
         * @return {Boolean}
         */
        isDisplayStats():boolean;

        /**
         * Display the FPS on the bottom-left corner
         * @param displayFPS
         */
        setDisplayStats(displayStats:boolean);

        /**
         * set Animation Interval
         * @param {Number} value
         */
        setAnimationInterval(value:number);

        getTextureCache(): TextureCache;
    }
    //#endregion cocos2d/CCDirector.js

    //#region cocos2d/CCDrawingPrimitives.js
    /**
     * <p>
     *   Drawing primitives Utility Class. this class is base class, it contain some render type version: Canvas, WebGL, DOM.<br/>
     *   this class contain some primitive Drawing Method: <br/>
     *     - drawPoint<br/>
     *     - drawLine<br/>
     *     - drawPoly<br/>
     *     - drawCircle<br/>
     *     - drawQuadBezier<br/>
     *     - drawCubicBezier<br/>
     *     You can change the color, width and other property by calling these WebGL API:<br/>
     *     glColor4ub(), glLineWidth(), glPointSize().<br/>
     * </p>
     * @class
     * @extends cc.Class
     * @warning These functions draws the Line, Point, Polygon, immediately. They aren't batched. <br/>
     *   If you are going to make a game that depends on these primitives, I suggest creating a batch.
     */
    export class DrawingPrimitive extends Class {
        /**
         * set render context of drawing primitive
         * @param context
         */
        setRenderContext(context:CanvasRenderingContext2D);

        /**
         * returns render context of drawing primitive
         * @return {CanvasContext}
         */
        getRenderContext():CanvasRenderingContext2D;

        /**
         * Constructor
         * @param {CanvasContext} renderContext
         */
        constructor(renderContext:CanvasRenderingContext2D);

        /**
         * draws a point given x and y coordinate measured in points
         * @param {cc.Point} point
         */
        drawPoint(point:Point);

        /**
         * draws an array of points.
         * @param {Array} points point of array
         * @param {Number} numberOfPoints
         */
        drawPoints(points:Point[], numberOfPoints:number);

        /**
         * draws a line given the origin and destination point measured in points
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         */
        drawLine(origin:Point, destination:Point);

        /**
         * draws a rectangle given the origin and destination point measured in points.
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         */
        drawRect(origin:Point, destination:Point);

        /**
         * draws a solid rectangle given the origin and destination point measured in points.
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         * @param {cc.Color} color
         */
        drawSolidRect(origin:Point, destination:Point, color:Color);

        /**
         * draws a poligon given a pointer to cc.Point coordiantes and the number of vertices measured in points.
         * @param {Array} vertices a pointer to cc.Point coordiantes
         * @param {Number} numOfVertices the number of vertices measured in points
         * @param {Boolean} closePolygon The polygon can be closed or open
         * @param {Boolean} fill The polygon can be closed or open and optionally filled with current color
         */
        drawPoly(vertices:Point[], numOfVertices:number, closePolygon:boolean, fill:boolean);

        /**
         * draws a solid polygon given a pointer to CGPoint coordiantes, the number of vertices measured in points, and a color.
         * @param {Array} poli
         * @param {Number} numberOfPoints
         * @param {cc.Color} color
         */
        drawSolidPoly(poli:Point[], numberOfPoints:number, color:Color);

        /**
         * draws a circle given the center, radius and number of segments.
         * @param {cc.Point} center center of circle
         * @param {Number} radius
         * @param {Number} angle angle in radians
         * @param {Number} segments
         * @param {Boolean} drawLineToCenter
         */
        drawCircle(center:Point, radius:number, angle:number, segments:number, drawLineToCenter:boolean);

        /**
         * draws a quad bezier path
         * @param {cc.Point} origin
         * @param {cc.Point} control
         * @param {cc.Point} destination
         * @param {Number} segments
         */
        drawQuadBezier(origin:Point, control:Point, destination:Point, segments:number);

        /**
         * draws a cubic bezier path
         * @param {cc.Point} origin
         * @param {cc.Point} control1
         * @param {cc.Point} control2
         * @param {cc.Point} destination
         * @param {Number} segments
         */
        drawCubicBezier(origin:Point, control1:Point, control2:Point, destination:Point, segments:number);

        /**
         * draw a catmull rom line
         * @param {cc.PointArray} points
         * @param {Number} segments
         */
        drawCatmullRom(points:Point[], segments:number);

        /**
         * draw a cardinal spline path
         * @param {cc.PointArray} config
         * @param {Number} tension
         * @param {Number} segments
         */
        drawCardinalSpline(config:Point[], tension:number, segments:number);

        // FIXME: Typescript doesn't support abstract classes so we have to put the common
        // methods from DrawingPrimitiveCanvas and DrawingPrimitiveWebGL here for convenience

        /**
         * set the drawing color with 4 unsigned bytes
         * @param {Number} r red value (0 to 255)
         * @param {Number} r green value (0 to 255)
         * @param {Number} r blue value (0 to 255)
         * @param {Number} a Alpha value (0 to 255)
         */
        setDrawColor(r:number, g:number, b:number, a:number);

        // ENDFIXME
    }

    /**
     * Canvas of DrawingPrimitive implement version
     * @class
     * @extends cc.DrawingPrimitive
     */
    export class DrawingPrimitiveCanvas extends DrawingPrimitive {
    }

    /**
     * Canvas of DrawingPrimitive implement version
     * @class
     * @extends cc.DrawingPrimitive
     */
    export class DrawingPrimitiveWebGL extends DrawingPrimitive {
    }
    //#endregion cocos2d/CCDrawingPrimitives.js

    //#region cocos2d/CCLoader.js
    /**
     * A class to pre-load resources before engine start game main loop.
     * @class
     * @extends cc.Scene
     */
    export class Loader extends Class {
        static preload(resources:any[], selector:() => void, target:Node):Loader;
    }

    /**
     * Used to display the loading screen
     * @class
     * @extends cc.Scene
     */
    export class LoaderScene extends Scene {
        static preload(resources:any[], selector:() => void, target:Node):LoaderScene;
    }
    //#endregion cocos2d/CCLoader.js

    //#region cocos2d/CCScheduler.js
    /**
     * <p>
     *    Scheduler is responsible of triggering the scheduled callbacks.<br/>
     *    You should not use NSTimer. Instead use this class.<br/>
     *    <br/>
     *    There are 2 different types of callbacks (selectors):<br/>
     *       - update selector: the 'update' selector will be called every frame. You can customize the priority.<br/>
     *       - custom selector: A custom selector will be called every frame, or with a custom interval of time<br/>
     *       <br/>
     *    The 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update selector'. *
     * </p>
     * @class
     * @extends cc.Class
     *
     * @example
     * //register a schedule to scheduler
     * cc.Director.getInstance().getScheduler().scheduleSelector(selector, this, interval, !this._isRunning);
     */
    export class Scheduler extends Class {
        setTimeScale(scale: number);
        performFunctionInCocosThread(func: Function);
        getTimeScale(): number;
    }
    //#endregion cocos2d/CCScheduler.js

    //#region cocos2d/actions/CCAction.js
    /**
     * Base class for cc.Action objects.
     * @class
     * @extends cc.Class
     */
    export class Action extends Class {
        clone():Action;
        startWithTarget(target: cc.Node);
        setOriginalTarget(target: cc.Node);
        getOriginalTarget(): cc.Node;
        stop();
        update(dt: number);
        getTarget(): cc.Node;
        step(dt: number);
        setTag(tag: number);
        getTag(): number;
        setTarget(target: cc.Node);
        isDone(): boolean;
        reverse();
    }

    /**
     * <p>Base class actions that do have a finite time duration.<br/>
     * Possible actions: <br/>
     * - An action with a duration of 0 seconds<br/>
     * - An action with a duration of 35.5 seconds  </p>

     * Infinite time actions are valid
     * @class
     * @extends cc.Action
     */
    export class FiniteTimeAction extends Action {
    }
    //#endregion cocos2d/actions/CCAction.js

    //#region cocos2d/actions/CCActionInterval.js
    /**
     * <p> An interval action is an action that takes place within a certain period of time. <br/>
     * It has an start time, and a finish time. The finish time is the parameter<br/>
     * duration plus the start time.</p>
     *
     * <p>These CCActionInterval actions have some interesting properties, like:<br/>
     * - They can run normally (default)  <br/>
     * - They can run reversed with the reverse method   <br/>
     * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
     *
     * <p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
     * then running it again in Reverse mode. </p>
     *
     * @class
     * @extends cc.FiniteTimeAction
     * @Example
     * // example
     * var pingPongAction = cc.Sequence.create(action, action.reverse());
     */
    export class ActionInterval extends FiniteTimeAction {
    }

    /** Runs actions sequentially, one after another
     * @class
     * @extends cc.ActionInterval
     */
    export class Sequence extends ActionInterval {
        /** helper constructor to create an array of sequenceable actions
         * @param {Array|cc.FiniteTimeAction} tempArray
         * @return {cc.FiniteTimeAction}
         * @example
         * // example
         * // create sequence with actions
         * var seq = cc.Sequence.create(act1, act2);
         *
         * // create sequence with array
         * var seq = cc.Sequence.create(actArray);
         */
        static create(...rest:FiniteTimeAction[]):Sequence;
    }

    /** Repeats an action a number of times.
     * To repeat an action forever use the CCRepeatForever action.
     * @class
     * @extends cc.ActionInterval
     */
    export class Repeat extends ActionInterval {
        /** creates a CCRepeat action. Times is an unsigned integer between 1 and pow(2,30)
         * @param {cc.FiniteTimeAction} action
         * @param {Number} times
         * @return {cc.Repeat}
         * @example
         * // example
         * var rep = cc.Repeat.create(cc.Sequence.create(jump2, jump1), 5);
         */
        static create(action:FiniteTimeAction, times:number):Repeat;
    }

    /**  Repeats an action for ever.  <br/>
     * To repeat the an action for a limited number of times use the Repeat action. <br/>
     * @warning This action can't be Sequenceable because it is not an IntervalAction
     * @class
     * @extends cc.ActionInterval
     */
    export class RepeatForever extends ActionInterval {
        /**
         * Repeat the acton forever
         * @param action
         * @return {cc.RepeatForever}
         * @example
         * // example
         * var repeat = cc.RepeatForever.create(cc.RotateBy.create(1.0, 360));
         */
        static create(action:FiniteTimeAction):RepeatForever;
    }

    /** Spawn a new action immediately
     * @class
     * @extends cc.ActionInterval
     */
    export class Spawn extends ActionInterval {
        /**
         * @param {Array|cc.FiniteTimeAction}tempArray
         * @return {cc.FiniteTimeAction}
         * @example
         * // example
         * var action = cc.Spawn.create(cc.JumpBy.create(2, cc.p(300, 0), 50, 4), cc.RotateBy.create(2, 720));
         */
        static create(...rest:FiniteTimeAction[]):Spawn;
    }

    /** Rotates a cc.Node object to a certain angle by modifying it's
     * rotation attribute. <br/>
     * The direction will be decided by the shortest angle.
     * @class
     * @extends cc.ActionInterval
     */
    export class RotateTo extends ActionInterval {
        /**
         * creates the action with separate rotation angles
         * @param {Number} duration duration in seconds
         * @param {Number} deltaAngleX deltaAngleX in degrees.
         * @param {Number} deltaAngleY deltaAngleY in degrees.
         * @return {cc.RotateTo}
         * @example
         * // example
         * var rotateTo = cc.RotateTo.create(2, 61.0);
         */
        static create(duration:number, deltaAngleX:number, deltaAngleY?:number):RotateTo;
    }

    /** Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
     * @class
     * @extends  cc.ActionInterval
     */
    export class RotateBy extends ActionInterval {
        /**
         * @param {Number} duration druation in seconds
         * @param {Number} deltaAngleX deltaAngleX in degrees
         * @param {Number} deltaAngleY deltaAngleY in degrees
         * @return {cc.RotateBy}
         * @example
         * // example
         * var actionBy = cc.RotateBy.create(2, 360);
         */
        static create(duration:number, deltaAngleX:number, deltaAngleY:number):RotateBy;

        static create(duration:number, angle:number):RotateBy;
    }

    /** Moves a cc.Node object to the position x,y. x and y are absolute coordinates by modifying it's position attribute.
     * @class
     * @extends cc.ActionInterval
     */
    export class MoveTo extends ActionInterval {
        /**
         * @param {Number} duration duration in seconds
         * @param {cc.Point} position
         * @return {cc.MoveTo}
         * @example
         * // example
         * var actionTo = cc.MoveTo.create(2, cc.p(windowSize.width - 40, windowSize.height - 40));
         */
        static create(duration:number, position:Point):MoveTo;
    }

    /** Moves a cc.Node object x,y pixels by modifying it's position attribute. <br/>
     * x and y are relative to the position of the object. <br/>
     * @class
     * @extends cc.MoveTo
     */
    export class MoveBy extends MoveTo {
        /**
         * @param {Number} duration duration in seconds
         * @param {cc.Point} position
         * @return {cc.MoveBy}
         * @example
         * // example
         * var actionBy = cc.MoveBy.create(2, cc.p(80, 80));
         */
        static create(duration:number, position:Point):MoveBy;
    }

    /** Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes
     * @class
     * @extends cc.ActionInterval
     */
    export class SkewTo extends ActionInterval {
        /**
         * @param {Number} t time in seconds
         * @param {Number} sx
         * @param {Number} sy
         * @return {cc.SkewTo}
         * @example
         * // example
         * var actionTo = cc.SkewTo.create(2, 37.2, -37.2);
         */
        static create(t:number, sx:number, sy:number):SkewTo;
    }

    /** Skews a cc.Node object by skewX and skewY degrees
     * @class
     * @extends cc.SkewTo
     */
    export class SkewBy extends SkewTo {
        /**
         * @param {Number} t time in seconds
         * @param {Number} sx sx skew in degrees for X axis
         * @param {Number} sy sy skew in degrees for Y axis
         * @return {cc.SkewBy}
         * @example
         * // example
         * var actionBy = cc.SkewBy.create(2, 0, -90);
         */
        static create(t:number, sx:number, sy:number):SkewBy;
    }

    /**  Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
     * @class
     * @extends cc.ActionInterval
     */
    export class JumpBy extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {cc.Point} position
         * @param {Number} height
         * @param {Number} jumps
         * @return {cc.JumpBy}
         * @example
         * // example
         * var actionBy = cc.JumpBy.create(2, cc.p(300, 0), 50, 4);
         */
        static create(duration:number, position:Point, height:number, jumps:number):JumpBy;
    }

    /**  Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute.
     * @class
     * @extends cc.JumpBy
     */
    export class JumpTo extends JumpBy {
        /**
         * @param {Number} duration
         * @param {cc.Point} position
         * @param {Number} height
         * @param {Number} jumps
         * @return {cc.JumpTo}
         * @example
         * // example
         * var actionTo = cc.JumpTo.create(2, cc.p(300, 300), 50, 4);
         */
        static create(duration:number, position:Point, height:number, jumps:number):JumpTo;
    }

    /** An action that moves the target with a cubic Bezier curve by a certain distance.
     * @class
     * @extends cc.ActionInterval
     */
    export class BezierBy extends ActionInterval {
        /**
         * @param {Number} t time in seconds
         * @param {Array} c Array of points
         * @return {cc.BezierBy}
         * @example
         * // example
         * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
         * var bezierForward = cc.BezierBy.create(3, bezier);
         *
         */
        static create(t:number, c:Point[]):BezierBy;
    }

    /** An action that moves the target with a cubic Bezier curve to a destination point.
     * @class
     * @extends cc.BezierBy
     */
    export class BezierTo extends BezierBy {
        /**
         * @param {Number} t
         * @param {Array} c array of points
         * @return {cc.BezierTo}
         * @example
         * // example
         * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
         * var bezierTo = cc.BezierTo.create(2, bezier);
         */
        static create(t:number, c:Point[]):BezierTo;

    }

    /** Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     */
    export class ScaleTo extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {Number} sx  scale parameter in X
         * @param {Number|Null} sy scale parameter in Y, if Null equal to sx
         * @return {cc.ScaleTo}
         * @example
         * // example
         * // It scales to 0.5 in both X and Y.
         * var actionTo = cc.ScaleTo.create(2, 0.5);
         *
         * // It scales to 0.5 in x and 2 in Y
         * var actionTo = cc.ScaleTo.create(2, 0.5, 2);
         */
        static create(duration:number, sx:number, sy?:number):ScaleTo;
    }

    /** Scales a cc.Node object a zoom factor by modifying it's scale attribute.
     * @class
     * @extends cc.ScaleTo
     */
    export class ScaleBy extends ScaleTo {
        /**
         * @param {Number} duration duration in seconds
         * @param {Number} sx sx  scale parameter in X
         * @param {Number|Null} sy sy scale parameter in Y, if Null equal to sx
         * @return {cc.ScaleBy}
         * @example
         * // example without sy, it scales by 2 both in X and Y
         * var actionBy = cc.ScaleBy.create(2, 2);
         *
         * //example with sy, it scales by 0.25 in X and 4.5 in Y
         * var actionBy2 = cc.ScaleBy.create(2, 0.25, 4.5);
         */
        static create(duration:number, sx:number, sy?:number):ScaleBy;
    }

    /** Blinks a cc.Node object by modifying it's visible attribute
     * @class
     * @extends cc.ActionInterval
     */
    export class Blink extends ActionInterval {
        /**
         * @param {Number} duration  duration in seconds
         * @param blinks blinks in times
         * @return {cc.Blink}
         * @example
         * // example
         * var action = cc.Blink.create(2, 10);
         */
        static create(duration:number, blinks:number):Blink;
    }

    /** Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.<br/>
     * The "reverse" of this action is FadeOut
     * @class
     * @extends cc.ActionInterval
     */
    export class FadeIn extends ActionInterval {
        /**
         * @param {Number} duration duration in seconds
         * @return {cc.FadeIn}
         * @example
         * //example
         * var action = cc.FadeIn.create(1.0);
         */
        static create(duration:number):FadeIn;
    }

    /** Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
     * The "reverse" of this action is FadeIn
     * @class
     * @extends cc.ActionInterval
     */
    export class FadeOut extends ActionInterval {
        /**
         * @param {Number} d  duration in seconds
         * @return {cc.FadeOut}
         * @example
         * // example
         * var action = cc.FadeOut.create(1.0);
         */
        static create(d:number):FadeOut;
    }

    /** Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     */
    export class FadeTo extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {Number} opacity 0-255, 0 is transparent
         * @return {cc.FadeTo}
         * @example
         * // example
         * var action = cc.FadeTo.create(1.0, 0);
         */
        static create(duration:number, opacity:number):FadeTo;
    }

    /** Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     */
    export class TintTo extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {Number} red 0-255
         * @param {Number} green  0-255
         * @param {Number} blue 0-255
         * @return {cc.TintTo}
         * @example
         * // example
         * var action = cc.TintTo.create(2, 255, 0, 255);
         */
        static create(duration:number, red:number, green:number, blue:number):TintTo;
    }

    /**  Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * @class
     * @extends cc.ActionInterval
     */
    export class TintBy extends ActionInterval {
        /**
         * @param {Number} duration  duration in seconds
         * @param {Number} deltaRed
         * @param {Number} deltaGreen
         * @param {Number} deltaBlue
         * @return {cc.TintBy}
         * @example
         * // example
         * var action = cc.TintBy.create(2, -127, -255, -127);
         */
        static create(duration:number, deltaRed:number, deltaGreen:number, deltaBlue:number):TintBy;
    }

    /** Delays the action a certain amount of seconds
     * @class
     * @extends cc.ActionInterval
     */
    export class DelayTime extends ActionInterval {
        /**
         * @param {Number} d duration in seconds
         * @return {cc.DelayTime}
         * @example
         * // example
         * var delay = cc.DelayTime.create(1);
         */
        static create(d:number):DelayTime;
    }

    /**
     * Executes an action in reverse order, from time=duration to time=0
     * @warning Use this action carefully. This action is not
     * sequenceable. Use it as the default "reversed" method
     * of your own actions, but using it outside the "reversed"
     * scope is not recommended.
     * @class
     * @extends cc.ActionInterval
     */
    export class ReverseTime extends ActionInterval {
        /**
         * @param {cc.FiniteTimeAction} action
         * @return {cc.ReverseTime}
         * @example
         * // example
         *  var reverse = cc.ReverseTime.create(this);
         */
        static create(action:FiniteTimeAction):ReverseTime;
    }

    /**  Animates a sprite given the name of an Animation
     * @class
     * @extends cc.ActionInterval
     */
    export class Animate extends ActionInterval {
        /**
         * create the animate with animation
         * @param {cc.Animation} animation
         * @return {cc.Animate}
         * @example
         * // example
         * // create the animation with animation
         * var anim = cc.Animate.create(dance_grey);
         */
        static create(animation:Animation):Animate;
    }
    //#endregion cocos2d/actions/CCActionInterval.js

    //#region cocos2d/actions/CCActionManager.js
    export class ActionManager extends Class {
        getActionByTag();
        removeActionByTag();
        removeAllActions();
        addAction();
        resumeTarget();
        update(dt:number);
        getNumberOfRunningActionsInTarget(target : cc.Node);
        removeAllActionsFromTarget();
        resumeTargets();
        removeAction();
        pauseTarget();
        pauseAllRunningActions();
    }

    /**
     * <p>
     *     Overrides the target of an action so that it always runs on the target<br/>
     *     specified at action creation rather than the one specified by runAction.
     * </p>
     * @class
     * @extends cc.ActionInterval
     */
    export class TargetedAction extends ActionInterval {
    }
    //#endregion cocos2d/actions/CCActionManager.js

    //#region cocos2d/base_nodes/CCNode.js
    /** <p>cc.Node is the main element. Anything thats gets drawn or contains things that get drawn is a cc.Node.<br/>
     The most popular cc.Nodes are: cc.Scene, cc.Layer, cc.Sprite, cc.Menu. (WebGL implement)<br/></p>

     <p>The main features of a cc.Node are: <br/>
     - They can contain other cc.Node nodes (addChild, getChildByTag, removeChild, etc) <br/>
     - They can schedule periodic callback (schedule, unschedule, etc) <br/>
     - They can execute actions (runAction, stopAction, etc) <br/></p>

     <p>Some cc.Node nodes provide extra functionality for them or their children.</p>

     <p>Subclassing a cc.Node usually means (one/all) of: <br/>
     - overriding init to initialize resources and schedule callbacks  <br/>
     - create callbacks to handle the advancement of time <br/>
     - overriding draw to render the node   <br/></p>

     <p>Features of cc.Node: <br/>
     - position  <br/>
     - scale (x, y) <br/>
     - rotation (in degrees, clockwise) <br/>
     - cc.Camera (an interface to gluLookAt ) <br/>
     - cc.GridBase (to do mesh transformations)  <br/>
     - anchor point<br/>
     - size <br/>
     - visible<br/>
     - z-order <br/>
     - openGL z position <br/></P>

     <p> Default values: <br/>
     - rotation: 0 <br/>
     - position: (x=0,y=0) <br/>
     - scale: (x=1,y=1) <br/>
     - contentSize: (x=0,y=0)<br/>
     - anchorPoint: (x=0,y=0)<br/></p>

     <p> Limitations:<br/>
     - A cc.Node is a "void" object. It doesn't have a texture <br/></P>

     <p>Order in transformations with grid disabled <br/>
     -# The node will be translated (position)  <br/>
     -# The node will be rotated (rotation)<br/>
     -# The node will be scaled (scale)  <br/>
     -# The node will be moved according to the camera values (camera) <br/></p>

     <p>Order in transformations with grid enabled<br/>
     -# The node will be translated (position)<br/>
     -# The node will be rotated (rotation) <br/>
     -# The node will be scaled (scale) <br/>
     -# The grid will capture the screen <br/>
     -# The node will be moved according to the camera values (camera) <br/>
     -# The grid will render the captured screen <br/></P>

     <p>Camera:  <br/>
     - Each node has a camera. By default it points to the center of the cc.Node.</P>
     * @class
     * @extends cc.Class
     * @example
     * // example
     * cc.Sprite = cc.Node.extend({});
     * cc.Sprite.initWithImage = function(){
     * };
     */
    export class Node extends Class {
        x:number;
        y:number;
        width:number;
        height:number;
        anchorX:number;
        anchorY:number;
        skewX:number;
        skewY:number;
        zIndex:number;
        vertexZ:number;
        rotation:number;
        rotationX:number;
        rotationY:number;
        scale:number;
        scaleX:number;
        scaleY:number;
        children:Array<Node>;
        childrenCount:number;
        parent:Node;
        visible:boolean;
        running:boolean;
        ignoreAnchor:boolean;
        actionManager:ActionManager;
        scheduler:Scheduler;
        shaderProgram:any;
        glServerState:any;
        tag:number;
        userData:any;
        userObject:any;
        arrivalOrder:number;
        animationManager:BuilderAnimationManager;
        controller:any;

        attr(props:Object);
        getColor(): Color;
        setColor(color: Color);

        /**
         * @deprecated
         * @param order
         */
        setZOrder(order:number);

        setLocalZOrder(order:number);
        setGlobalZOrder(order:number);

        /**
         * set the dirty node
         */
        setNodeDirty();

        /**
         *  <p>get the skew degrees in X </br>
         *  The X skew angle of the node in degrees.  <br/>
         *  This angle describes the shear distortion in the X direction.<br/>
         *  Thus, it is the angle between the Y axis and the left edge of the shape </br>
         *  The default skewX angle is 0. Positive values distort the node in a CW direction.</br>
         *  </p>
         * @return {Number}
         */
        getSkewX():number;

        /**
         * set the skew degrees in X
         * @param {Number} newSkewX
         */
        setSkewX(newSkewX:number);

        /**
         * <p>get the skew degrees in Y               <br/>
         * The Y skew angle of the node in degrees.                            <br/>
         * This angle describes the shear distortion in the Y direction.       <br/>
         * Thus, it is the angle between the X axis and the bottom edge of the shape       <br/>
         * The default skewY angle is 0. Positive values distort the node in a CCW direction.    <br/>
         * </p>
         * @return {Number}
         */
        getSkewY():number;

        /**
         * set the skew degrees in Y
         * @param {Number} newSkewY
         */
        setSkewY(newSkewY:number);

        /**
         * zOrder getter
         * @return {Number}
         */
        getZOrder():number;

        /**
         * ertexZ getter
         * @return {Number}
         */
        getVertexZ():number;

        /**
         * vertexZ setter
         * @param {Number} Var
         */
        setVertexZ(Var:number);

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle. Positive values rotate node CW.
         * @return {Number}
         */
        getRotation():number;

        /**
         * rotation setter
         * @param {Number} newRotation
         */
        setRotation(newRotation:number);

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle. <br/>
         * Positive values rotate node CW. It only modifies the X rotation performing a horizontal rotational skew .
         * (support only in WebGl rendering mode)
         * @return {Number}
         */
        getRotationX():number;

        /**
         * rotationX setter
         * @param {Number} rotationX
         */
        setRotationX(rotationX:number);

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle.  <br/>
         * Positive values rotate node CW. It only modifies the Y rotation performing a vertical rotational skew .
         * @return {Number}
         */
        getRotationY():number;

        /**
         * rotationY setter
         * @param {Number} rotationY
         */
        setRotationY(rotationY:number);

        /** Get the scale factor of the node.
         * @warning: Assert when _scaleX != _scaleY.
         * @return {Number}
         */
        getScale():number;

        /**
         * The scale factor of the node. 1.0 is the default scale factor. It modifies the X and Y scale at the same time.
         * @param {Number} scale or scaleX value
         * @param {Number} scaleY
         */
        setScale(scale:number);

        setScale(scaleX:number, scaleY:number);

        /**
         * scaleX getter
         * @return {Number}
         */
        getScaleX():number;

        /**
         * scaleX setter
         * @param {Number} newScaleX
         */
        setScaleX(newScaleX:number);

        /**
         * scaleY getter
         * @return {Number}
         */
        getScaleY():number;

        /**
         * scaleY setter
         * @param {Number} newScaleY
         */
        setScaleY(newScaleY:number);

        /**
         * position setter
         * @param {cc.Point|Number} newPosOrxValue
         * @param {Number}  yValue
         */
        setPosition(newPosOrxValue:any, yValue?:number);

        /**
         * <p>Position (x,y) of the node in OpenGL coordinates. (0,0) is the left-bottom corner. </p>
         * @return {cc.Point}
         */
        getPosition():Point;

        /**
         * @return {Number}
         */
        getPositionX():number;

        /**
         * @param {Number} x
         */
        setPositionX(x:number);

        /**
         * @return {Number}
         */
        getPositionY():number;

        /**
         * @param {Number} y
         */
        setPositionY(y:number);

        /**
         * Get children count
         * @return {Number}
         */
        getChildrenCount():number;

        /**
         * children getter
         * @return {object}
         */
        getChildren():Array<Node>;

        /**
         * isVisible getter
         * @return {Boolean}
         */
        isVisible():boolean;

        /**
         * isVisible setter
         * @param {Boolean} Var
         */
        setVisible(Var:boolean);

        /**
         *  <p>anchorPoint is the point around which all transformations and positioning manipulations take place.<br/>
         *  It's like a pin in the node where it is "attached" to its parent. <br/>
         *  The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
         *  But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
         *  The default anchorPoint is (0.5,0.5), so it starts in the center of the node. <br/></p>
         * @return {cc.Point}
         */
        getAnchorPoint():Point;

        /**
         * @param {cc.Point} point
         */
        setAnchorPoint(point:Point);

        setAnchorPoint(x:number, y:number);

        /**
         *  The anchorPoint in absolute pixels.  <br/>
         *  you can only read it. If you wish to modify it, use anchorPoint instead
         * @return {cc.Point}
         */
        getAnchorPointInPoints():Point;

        /** <p>The untransformed size of the node. <br/>
         The contentSize remains the same no matter the node is scaled or rotated.<br/>
         All nodes has a size. Layer and Scene has the same size of the screen. <br/></p>
         * @return {cc.Size}
         */
        getContentSize():Size;

        /**
         * @param {cc.Size} size
         */
        setContentSize(size:Size);

        setContentSize(width:number, height:number);

        /**
         * whether or not the node is running
         * @return {Boolean}
         */
        isRunning():boolean;

        /** A weak reference to the parent
         * @return {cc.Node}
         */
        getParent():Node;

        /** parent setter
         * @param {cc.Node} Var
         */
        setParent(Var:Node);

        /**
         * If true, the Anchor Point will be (0,0) when you position the CCNode.<br/>
         * Used by CCLayer and CCScene
         * @return {Boolean}
         */
        isIgnoreAnchorPointForPosition():boolean;

        /**
         * ignoreAnchorPointForPosition setter
         * @param {Boolean} newValue
         */
        ignoreAnchorPointForPosition(newValue:boolean);

        /**
         * A tag used to identify the node easily
         * @return {Number}
         */
        getTag():number;

        /** tag setter
         * @param {Number} Var
         */
        setTag(Var:number);

        /**
         * A custom user data pointer
         * @return {object}
         */
        getUserData():any;

        /**
         * @param {object} Var
         */
        setUserData(Var:any);

        /**
         * Similar to userData, but instead of holding a void* it holds an id
         * @return {object}
         */
        getUserObject():any;

        /**
         * Similar to userData, but instead of holding a void* it holds an id
         * @param {object} newValue
         */
        setUserObject(newValue:any);

        /**
         * used internally for zOrder sorting, don't change this manually
         * @return {Number}
         */
        getOrderOfArrival():number;

        /**
         * used internally for zOrder sorting, don't change this manually
         * @param {Number} Var
         */
        setOrderOfArrival(Var:number);

        /**
         * <p>cc.ActionManager used by all the actions. <br/>
         * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)</p>
         * @return {cc.ActionManager}
         */
        getActionManager():ActionManager;

        /**
         * <p>cc.ActionManager used by all the actions. <br/>
         * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)</p>
         * @param {cc.ActionManager} actionManager
         */
        setActionManager(actionManager:ActionManager);

        /**
         * <p>
         *   cc.Scheduler used to schedule all "updates" and timers.<br/>
         *   IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
         * </p>
         * @return {cc.Scheduler}
         */
        getScheduler():Scheduler;

        /**
         * <p>
         *   cc.Scheduler used to schedule all "updates" and timers.<br/>
         *   IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
         * </p>
         */
        setScheduler(scheduler:Scheduler);

        /** returns a "local" axis aligned bounding box of the node. <br/>
         * The returned box is relative only to its parent.
         * @return {cc.Rect}
         */
        getBoundingBox():Rect;

        /**
         * Stops all running actions and schedulers
         */
        cleanup();

        /** Node description
         * @return {String}
         */
        description():string;

        // composition: GET
        /**
         * Gets a child from the container given its tag
         * @param {Number} aTag
         * @return {cc.Node}
         */
        getChildByTag(aTag:number):Node;

        // composition: ADD
        /** <p>"add" logic MUST only be on this method <br/> </p>
         *
         * <p>If a class want's to extend the 'addChild' behaviour it only needs  <br/>
         * to override this method </p>
         *
         * @param {cc.Node} child
         * @param {Number} zOrder
         * @param {Number} tag
         */
        addChild(child:Node, zOrder?:number, tag?:number);

        // composition: REMOVE
        /**
         * Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * If the node orphan, then nothing happens.
         * @param {Boolean} cleanup
         */
        removeFromParent(cleanup?:boolean);

        /**
         * Remove itself from its parent node.
         * @deprecated
         * @param {Boolean} cleanup
         */
        removeFromParentAndCleanup(cleanup:boolean);

        /** <p>Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter. </p>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         *<p> "remove" logic MUST only be on this method  <br/>
         * If a class wants to extend the 'removeChild' behavior it only needs <br/>
         * to override this method </p>
         *
         * @param {cc.Node} child
         * @param {Boolean} cleanup
         */
        removeChild(child:Node, cleanup:boolean);

        /**
         * Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * @param {Number} tag
         * @param {Boolean} cleanup
         */
        removeChildByTag(tag:number, cleanup:boolean);

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
         * @deprecated
         * @param {Boolean | null} cleanup
         */
        removeAllChildrenWithCleanup(cleanup);

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * @param {Boolean | null } cleanup
         */
        removeAllChildren(cleanup:boolean);

        /** Reorders a child according to a new z value. <br/>
         * The child MUST be already added.
         * @param {cc.Node} child
         * @param {Number} zOrder
         */
        reorderChild(child:Node, zOrder:number);

        /**
         * <p>performance improvement, Sort the children array once before drawing, instead of every time when a child is added or reordered <br/>
         * don't call this manually unless a child added needs to be removed in the same frame </p>
         */
        sortAllChildren();

        // draw
        /** <p>Override this method to draw your own node. <br/>
         * The following GL states will be enabled by default: <br/>
         - glEnableClientState(GL_VERTEX_ARRAY);  <br/>
         - glEnableClientState(GL_COLOR_ARRAY); <br/>
         - glEnableClientState(GL_TEXTURE_COORD_ARRAY); <br/>
         - glEnable(GL_TEXTURE_2D); </p>

         <p>AND YOU SHOULD NOT DISABLE THEM AFTER DRAWING YOUR NODE</p>

         <p>But if you enable any other GL state, you should disable it after drawing your node. </p>
         * @param {CanvasContext} ctx
         */
        draw(ctx:CanvasRenderingContext2D);

        /** performs OpenGL view-matrix transformation of it's ancestors.<br/>
         * Generally the ancestors are already transformed, but in certain cases (eg: attaching a FBO) <br/>
         * it's necessary to transform the ancestors again.
         */
        transformAncestors();

        //scene managment
        /**
         * callback that is called every time the cc.Node enters the 'stage'.<br/>
         * If the cc.Node enters the 'stage' with a transition, this callback is called when the transition starts.
         * During onEnter you can't a "sister/brother" node.
         */
        onEnter();

        /**
         * <p>callback that is called when the cc.Node enters in the 'stage'.  <br/>
         * If the cc.Node enters the 'stage' with a transition, this callback is called when the transition finishes.</p>
         */
        onEnterTransitionDidFinish();

        /**
         * <p>callback that is called every time the cc.Node leaves the 'stage'.  <br/>
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition starts. </p>
         */
        onExitTransitionDidStart();

        /**
         * callback that is called every time the cc.Node leaves the 'stage'.<br/>
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition finishes. <br/>
         * During onExit you can't access a sibling node.
         */
        onExit();

        // actions
        /**
         * Executes an action, and returns the action that is executed.<br/>
         * The node becomes the action's target.
         * @warning Starting from v0.8 actions don't retain their target anymore.
         * @param {cc.Action} action
         * @return {cc.Action}
         */
        runAction(action:Action);

        /**
         * Removes all actions from the running action list
         */
        stopAllActions();

        /**
         * Removes an action from the running action list
         * @param {cc.Action} action
         */
        stopAction(action:Action);

        /**
         * Removes an action from the running action list given its tag
         * @param {Number} tag
         */
        stopActionByTag(tag:number);

        /**
         * Gets an action from the running action list given its tag
         * @param {Number} tag
         * @return {cc.Action}
         */
        getActionByTag(tag:number):Action;

        /** Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).<br/>
         *    Composable actions are counted as 1 action. Example:<br/>
         *    If you are running 1 Sequence of 7 actions, it will return 1. <br/>
         *    If you are running 7 Sequences of 2 actions, it will return 7.
         * @return {Number}
         */
        numberOfRunningActions():number;

        // cc.Node - Callbacks
        // timers
        /**
         * schedules the "update" method. It will use the order number 0. This method will be called every frame.<br/>
         * Scheduled methods with a lower order value will be called before the ones that have a higher order value.<br/>
         * Only one "update" method could be scheduled per node.
         */
        scheduleUpdate();

        /**
         * schedules the "update" callback function with a custom priority. This callback function will be called every frame.<br/>
         * Scheduled callback functions with a lower priority will be called before the ones that have a higher value.<br/>
         * Only one "update" callback function could be scheduled per node (You can't have 2 'update' callback functions).<br/>
         * @param {Number} priority
         */
        scheduleUpdateWithPriority(priority:number);

        /**
         * unschedules the "update" method.
         */
        unscheduleUpdate();

        /**
         * schedules a callback function with interval, repeat and delay.
         * @param {function} callback_fn
         * @param {Number} interval
         */
        schedule(callback_fn:(dt:number) => void, interval?:number, repeat?:boolean, delay?:number);

        /**
         * NOTE: this is no implemented in cocos2d-js public repository.
         * Schedule the action manager with scheduler.
         * It is always done in director.
         */
        scheduleActionManagerUpdate();

        /**
         * Schedules a callback function that runs only once, with a delay of 0 or larger
         * @param {cc.Class} callback_fn
         * @param {Number} delay
         */
        scheduleOnce(callback_fn:(dt?:number) => void, delay:number);

        /**
         * unschedules a custom callback function.
         * @param {function} callback_fn
         */
        unschedule(callback_fn:(dt?:number) => void);

        /**
         * unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
         * Actions are not affected by this method.
         */
        unscheduleAllCallbacks();

        /**
         * resumes all scheduled callback functions and actions.<br/>
         * Called internally by onEnter
         */
        resume();

        /**
         * pauses all scheduled selectors and actions.<br/>
         * Called internally by onExit
         */
        pause();

        /**
         *<p>  Sets the additional transform.<br/>
         *  The additional transform will be concatenated at the end of nodeToParentTransform.<br/>
         *  It could be used to simulate `parent-child` relationship between two nodes (e.g. one is in BatchNode, another isn't).<br/>
         * // create a batchNode<br/>
         * var batch= cc.SpriteBatchNode.create("Icon-114.png");<br/>
         * this.addChild(batch);<br/>
         *<br/>
         * // create two sprites, spriteA will be added to batchNode, they are using different textures.<br/>
         * var spriteA = cc.Sprite.createWithTexture(batch->getTexture());<br/>
         * var spriteB = cc.Sprite.create("Icon-72.png");<br/>
         *<br/>
         * batch.addChild(spriteA);<br/>
         *<br/>
         * // We can't make spriteB as spriteA's child since they use different textures. So just add it to layer.<br/>
         * // But we want to simulate `parent-child` relationship for these two node.<br/>
         * this.addChild(spriteB);<br/>
         *<br/>
         * //position<br/>
         * spriteA.setPosition(ccp(200, 200));<br/>
         *<br/>
         * // Gets the spriteA's transform.<br/>
         * var t = spriteA.nodeToParentTransform();<br/>
         *<br/>
         * // Sets the additional transform to spriteB, spriteB's postion will based on its pseudo parent i.e. spriteA. <br/>
         * spriteB.setAdditionalTransform(t);<br/>
         *<br/>
         * //scale<br/>
         * spriteA.setScale(2);<br/>
         *<br/>
         // Gets the spriteA's transform.<br/>
         * * t = spriteA.nodeToParentTransform();<br/>
         *<br/>
         * // Sets the additional transform to spriteB, spriteB's scale will based on its pseudo parent i.e. spriteA. <br/>
         * spriteB.setAdditionalTransform(t);<br/>
         *<br/>
         * //rotation<br/>
         * spriteA.setRotation(20);<br/>
         *<br/>
         * // Gets the spriteA's transform.<br/>
         * t = spriteA.nodeToParentTransform();<br/>
         *<br/>
         * // Sets the additional transform to spriteB, spriteB's rotation will based on its pseudo parent i.e. spriteA. <br/>
         * spriteB.setAdditionalTransform(t);<br/>
         </p>
         */
        setAdditionalTransform(additionalTransform:AffineTransform);

        /**
         * Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
         * The matrix is in Pixels.
         * @return {Number}
         */
        parentToNodeTransform():AffineTransform;

        /**
         *  Retrusn the world affine transform matrix. The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        nodeToWorldTransform():AffineTransform;

        /**
         * Returns the inverse world affine transform matrix. The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        worldToNodeTransform():AffineTransform;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        convertToNodeSpace(worldPoint:Point):Point;

        /**
         * Converts a Point to world space coordinates. The result is in Points.
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        convertToWorldSpace(nodePoint:Point):Point;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.<br/>
         * treating the returned/received node point as anchor relative.
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        convertToNodeSpaceAR(worldPoint:Point):Point;

        /**
         * Converts a local Point to world space coordinates.The result is in Points.<br/>
         * treating the returned/received node point as anchor relative.
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        convertToWorldSpaceAR(nodePoint:Point):Point;

        /** convenience methods which take a cc.Touch instead of cc.Point
         * @param {cc.Touch} touch
         * @return {cc.Point}
         */
        convertTouchToNodeSpace(touch:Touch):Point;

        /**
         * converts a cc.Touch (world coordinates) into a local coordiante. This method is AR (Anchor Relative).
         * @param {cc.Touch}touch
         * @return {cc.Point}
         */
        convertTouchToNodeSpaceAR(touch:Touch):Point;

        /**
         * Update will be called automatically every frame if "scheduleUpdate" is called, and the node is "live" <br/>
         * (override me)
         * @param {Number} dt
         */
        update(dt:number);

        /**
         * updates the quad according the the rotation, position, scale values.
         */
        updateTransform();

        /**
         * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         */
        retain();

        release();

        /// ---- common properties end  ----

        /**
         * recursive method that visit its children and draw them
         */
        visit();

        transform();

        /** Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
         * The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        nodeToParentTransform():AffineTransform;


    }
    //#endregion cocos2d/base_nodes/CCNode.js

    //#region cocos2d/cocoa/CCAffineTranform.js
    /**
     * @function
     * @param {Number} a
     * @param {Number} b
     * @param {Number} c
     * @param {Number} d
     * @param {Number} tx
     * @param {Number} ty
     */
    export class AffineTransform {
        a:number;
        b:number;
        c:number;
        d:number;
        tx:number;
        ty:number;

        constructor(a:number, b:number, c:number, d:number, tx:number, ty:number);
    }
    //#endregion cocos2d/cocoa/CCAffineTranform.js

    //#region cocos2d/cocoa/CCGeometry.js
    /**
     * @class
     * @param {Number} _x
     * @param {Number} _y
     * Constructor
     */
    export class Point {
        x:number;
        y:number;

        constructor(_x:number, _y:number);
    }

    /**
     * Helper macro that creates a cc.Point.
     * @param {Number} x
     * @param {Number} y
     */
    function p(x:number, y:number):Point;


    function _p(x:number, y:number):Point;

    /**
     * The "left bottom" point -- equivalent to cc.p(0, 0).
     * @function
     * @return {cc.Point}
     */
    function PointZero():Point;

    /**
     * @class
     * @param {Number} _width
     * @param {Number} _height
     * Constructor
     */
    export class Size {
        width:number;
        height:number;

        constructor(_width:number, _height:number);
    }

    /**
     * @function
     * @param {Number} w width
     * @param {Number} h height
     * @return {cc.Size}
     */
    function size(w:number, h:number):cc.Size;

    /**
     * @class
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} width1
     * @param {Number} height1
     * Constructor
     */
    export class Rect {
        origin:Point;
        size:Size;

        x:number;
        y:number;
        width:number;
        height:number;
    }

    /**
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @return {cc.Rect}
     */
    function RectMake(x:number, y:number, width:number, height:number):Rect;

    // backward compatible
    function rect(x:number, y:number, w:number, h:number):Rect;

    /**
     * The "zero" rectangle -- equivalent to cc.rect(0, 0, 0, 0).
     * @function
     * @return {cc.Rect}
     */
    function RectZero():Rect;

    /**
     * @function
     * @param {cc.Rect} rect1
     * @param {cc.Rect} rect2
     * @return {Boolean}
     */
    function rectEqualToRect(rect1:Rect, rect2:Rect):boolean;

    /**
     * @function
     * @param {cc.Rect} rect1
     * @param {cc.Rect} rect2
     * @return {Boolean}
     */
    function rectContainsRect(rect1:Rect, rect2:Rect):boolean;

    /**
     * return the rightmost x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMaxX(rect:Rect):number;

    /**
     * return the midpoint x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMidX(rect:Rect);

    /**
     * return the leftmost x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMinX(rect:Rect);

    /**
     * Return the topmost y-value of `rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMaxY(rect:Rect):number;

    /**
     * Return the midpoint y-value of `rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMidY(rect:Rect):number;

    /**
     * Return the bottommost y-value of `rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMinY(rect):number;

    /**
     * @function
     * @param {cc.Rect} rect
     * @param {cc.Point} point
     * @return {Boolean}
     */
    function rectContainsPoint(rect:Rect, point:Point) : boolean;

    /**
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {Boolean}
     */
    function rectIntersectsRect(rectA:Rect, rectB:Rect):boolean;

    /**
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {Boolean}
     */
    function rectOverlapsRect(rectA:Rect, rectB:Rect):boolean;

    /**
     * Returns the smallest rectangle that contains the two source rectangles.
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {cc.Rect}
     */
    function rectUnion(rectA:Rect, rectB:Rect):Rect;

    /**
     * Returns the overlapping portion of 2 rectangles
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {cc.Rect}
     */
    function rectIntersection(rectA:Rect, rectB:Rect):Rect;

    //#endregion cocos2d/cocoa/CCGeometry.js

    //#region cocos2d/label_nodes/CCLabelTTF.js
    /**
     * cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels (Canvas implement)<br/>
     * All features from cc.TextureNode are valid in cc.LabelTTF<br/>
     * cc.LabelTTF objects are slow for js-binding on mobile devices.<br/>
     * Consider using cc.LabelAtlas or cc.LabelBMFont instead.<br/>
     * @class
     * @extends cc.Sprite
     */
    export class LabelTTF extends Sprite {
        /**
         * creates a cc.LabelTTF from a fontname, alignment, dimension and font size
         * @param {String} label
         * @param {String} fontName
         * @param {Number} fontSize
         * @param {cc.Size} dimensions
         * @param {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT} alignment
         * @return {cc.LabelTTF|Null}
         * @example
         * // Example
         * var myLabel = cc.LabelTTF.create('label text',  'Times New Roman', 32, cc.size(32,16), cc.TEXT_ALIGNMENT_LEFT);
         */
        static create(label:string, fontName?:string, fontSize?:number, dimensions?:Size, alignment?:number):LabelTTF;

        static create(label:string);

        setString(str:string);
    }
    export class LabelBMFont extends Sprite {
        setLineBreakWithoutSpace();
        getBlendFunc();
        isOpacityModifyRGB() : boolean;
        getLetter();
        getString() : string;
        setBlendFunc();
        setString(str:string);
        initWithString();
        setOpacityModifyRGB(bool : boolean);
        getFntFile();
        setFntFile();
        setAlignment();
        setWidth(width: number);
    }
    //#endregion cocos2d/label_nodes/CCLabelTTF.js

    //#region cocos2d/layers_scenes_transitions_nodes/CCScene.js
    /**
     * <p>cc.Scene is a subclass of cc.Node that is used only as an abstract concept.</p>
     *  <p>cc.Scene an cc.Node are almost identical with the difference that cc.Scene has it's
     * anchor point (by default) at the center of the screen.</p>
     *
     * <p>For the moment cc.Scene has no other logic than that, but in future releases it might have
     * additional logic.</p>
     *
     * <p>It is a good practice to use and cc.Scene as the parent of all your nodes.</p>
     * @class
     * @extends cc.Node
     */
    export class Scene extends Node {
        /**
         * Constructor
         */
        constructor();

        /**
         * creates a scene
         * @return {cc.Scene}
         * @example
         * // Example
         * var aScene = cc.Scene.create();
         * //OR
         * var aScene = new cc.Scene();
         */
        static create(t?:number, scene?:Scene):Scene;

        static createWithPhysics():Scene;

        static createWithSize(size:Size):Scene;


    }
    //#endregion cocos2d/layers_scenes_transitions_nodes/CCScene.js

    //#region cocos2d/layers_scenes_transitions_nodes/CCLayer.js
    /** cc.Layer is a subclass of cc.Node that implements the TouchEventsDelegate protocol.<br/>
     * All features from cc.Node are valid, plus the following new features:<br/>
     * It can receive iPhone Touches<br/>
     * It can receive Accelerometer input
     * @class
     * @extends cc.Node
     */
    export class Layer extends Node {
        /**
         *
         * @return {Boolean}
         */
        init(...args:any[]):boolean;

        isMouseEnabled():boolean;

        setMouseEnabled(enabled:boolean);

        setMousePriority(priority:number);

        getMousePriority():number;

        /**
         * whether or not it will receive Touch events.<br/>
         * You can enable / disable touch events with this property.<br/>
         * Only the touches of this node will be affected. This "method" is not propagated to it's children.<br/>
         * @return {Boolean}
         */
        isTouchEnabled():boolean;

        /**
         * Enable touch events
         * @param {Boolean} enabled
         */
        setTouchEnabled(enabled:boolean);

        /** returns the touch mode.
         * @return {Number}
         */
        getTouchMode():number;

        /** Sets the touch mode.
         * @param {Number} mode
         */
        setTouchMode(mode:number);

        /**
         * whether or not it will receive Accelerometer events<br/>
         * You can enable / disable accelerometer events with this property.
         * @return {Boolean}
         */
        isAccelerometerEnabled():boolean;

        /**
         * isAccelerometerEnabled setter
         * @param {Boolean} enabled
         */
        setAccelerometerEnabled(enabled:boolean);

        /**
         * accelerometerInterval setter
         * @param {Number} interval
         */
        setAccelerometerInterval(interval:number);

        onAccelerometer(accelerationValue:number);

        /**
         * whether or not it will receive keyboard events<br/>
         * You can enable / disable accelerometer events with this property.<br/>
         * it's new in cocos2d-x
         * @return {Boolean}
         */
        isKeyboardEnabled():boolean;

        /**
         * Enable Keyboard interaction
         * @param {Boolean} enabled
         */
        setKeyboardEnabled(enabled:boolean);

        /**
         * This is run when ever a layer just become visible
         */
        onEnter();

        /**
         * @function
         */
        onExit();

        /**
         * this is called when ever a layer is a child of a scene that just finished a transition
         */
        onEnterTransitionDidFinish();

        // ---------------------CCTouchDelegate interface------------------------------

        /**
         * default implements are used to call script callback if exist<br/>
         * you must override these touch functions if you wish to utilize them
         * @param {cc.Touch} touch
         * @param {event} event
         * @return {Boolean}
         */
        onTouchBegan(touch:Touch, event):boolean;

        /**
         * callback when a touch event moved
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchMoved(touch:Touch, event);

        /**
         * callback when a touch event finished
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchEnded(touch:Touch, event);

        /**
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchCancelled(touch:Touch, event);

        /**
         * Touches is the same as Touch, except this one can handle multi-touch
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchesBegan(touch:Touch, event);

        /**
         * when a touch moved
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchesMoved(touch:Touch, event);

        /**
         * when a touch finished
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchesEnded(touch:Touch, event);

        /**
         * @param touch
         * @param event
         */
        onTouchesCancelled(touch:Touch, event);

        // ---------------------CCMouseEventDelegate interface------------------------------

        /**
         * <p>called when the "mouseDown" event is received. <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onMouseDown(event):boolean;

        /**
         * <p>called when the "mouseDragged" event is received.         <br/>
         * Return YES to avoid propagating the event to other delegates.</p>
         * @param event
         * @return {Boolean}
         */
        onMouseDragged(event):boolean;

        /**
         * <p> called when the "mouseMoved" event is received.            <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onMouseMoved(event):boolean;

        /**
         * <p> called when the "mouseUp" event is received.               <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onMouseUp(event):boolean;

        //right
        /**
         * <p> called when the "rightMouseDown" event is received.        <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onRightMouseDown(event):boolean;

        /**
         * <p> called when the "rightMouseDragged" event is received.    <br/>
         * Return YES to avoid propagating the event to other delegates. </p>
         * @param event
         * @return {Boolean}
         */
        onRightMouseDragged(event):boolean;

        /**
         * <p> called when the "rightMouseUp" event is received.          <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onRightMouseUp(event):boolean;

        //other
        /**
         * <p>called when the "otherMouseDown" event is received.         <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onOtherMouseDown(event):boolean;

        /**
         * <p> called when the "otherMouseDragged" event is received.     <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onOtherMouseDragged(event):boolean;

        /**
         * <p> called when the "otherMouseUp" event is received.          <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onOtherMouseUp(event):boolean;

        //scroll wheel
        /**
         * <p> called when the "scrollWheel" event is received.           <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onScrollWheel(event):boolean;

        // enter / exit
        /**
         *  <p> called when the "mouseEntered" event is received.         <br/>
         *  Return YES to avoid propagating the event to other delegates. </p>
         * @param theEvent
         * @return {Boolean}
         */
        onMouseEntered(theEvent):boolean;

        /**
         * <p> called when the "mouseExited" event is received.          <br/>
         * Return YES to avoid propagating the event to other delegates. </p>
         * @param theEvent
         * @return {Boolean}
         */
        onMouseExited(theEvent):boolean;

        // ---------------------CCKeyboardDelegate interface------------------------------

        /**
         * Call back when a key is pressed down
         * @param {Integer} keyCode
         * @example
         * // example
         * if(keyCode == cc.KEY.w){}
         */
        onKeyDown(keyCode:number);

        /**
         * Call back when a key is released
         * @param {Integer} keyCode
         * @example
         * // example
         * if(keyCode == cc.KEY.w){}
         */
        onKeyUp(keyCode:number);

        /**
         * creates a layer
         * @example
         * // Example
         * var myLayer = cc.Layer.create();
         * //Yes! it's that simple
         * @return {cc.Layer|Null}
         */
        static create():Layer;
    }

    /**
     * creates a cc.LayerColorCanvas with color, width and height in Points
     * @param {cc.Color} color
     * @param {Number|Null} width
     * @param {Number|Null} height
     * @return {cc.LayerColor}
     * @example
     * // Example
     * //Create a yellow color layer as background
     * var yellowBackground = cc.LayerColor.create(cc.c4b(255,255,0,255));
     * //If you didnt pass in width and height, it defaults to the same size as the canvas
     *
     * //create a yellow box, 200 by 200 in size
     * var yellowBox = cc.LayerColorCanvas.create(cc.c3b(255,255,0,255), 200, 200);
     */
    export class LayerColor extends Layer {
        /**
         * @param {cc.Color} color
         * @param {Number} width
         * @param {Number} height
         * @return {Boolean}
         */
        init(...args:any[]/*color: Color, width: number, height: number*/):boolean;

        static create(color?:Color, width?:number, height?:number):LayerColor;
    }

    /**
     * <p>
     * CCLayerGradient is a subclass of cc.LayerColor that draws gradients across the background.<br/>
     *<br/>
     * All features from cc.LayerColor are valid, plus the following new features:<br/>
     * <ul><li>direction</li>
     * <li>final color</li>
     * <li>interpolation mode</li></ul>
     * <br/>
     * Color is interpolated between the startColor and endColor along the given<br/>
     * vector (starting at the origin, ending at the terminus).  If no vector is<br/>
     * supplied, it defaults to (0, -1) -- a fade from top to bottom.<br/>
     * <br/>
     * If 'compressedInterpolation' is disabled, you will not see either the start or end color for<br/>
     * non-cardinal vectors; a smooth gradient implying both end points will be still<br/>
     * be drawn, however.<br/>
     *<br/>
     * If 'compressedInterpolation' is enabled (default mode) you will see both the start and end colors of the gradient.
     * </p>
     * @class
     * @extends cc.LayerColor
     */
    export class LayerGradient extends LayerColor {
        /**
         * get the starting color
         * @return {cc.Color}
         */
        getStartColor():Color;

        /**
         * set the starting color
         * @param {cc.Color} color
         * @example
         * // Example
         * myGradientLayer.setStartColor(cc.c3b(255,0,0));
         * //set the starting gradient to red
         */
        setStartColor(color:Color);

        /**
         * set the end gradient color
         * @param {cc.Color} color
         * @example
         * // Example
         * myGradientLayer.setEndColor(cc.c3b(255,0,0));
         * //set the ending gradient to red
         */
        setEndColor(color:Color);

        /**
         * get the end color
         * @return {cc.Color}
         */
        getEndColor():Color;

        /**
         * set starting gradient opacity
         * @param {Number} o from 0 to 255, 0 is transparent
         */
        setStartOpacity(o:number);

        /**
         * get the starting gradient opacity
         * @return {Number}
         */
        getStartOpacity():number;

        /**
         * set the end gradient opacity
         * @param {Number} o
         */
        setEndOpacity(o:number);

        /**
         * get the end gradient opacity
         * @return {Number}
         */
        getEndOpacity():number;

        /**
         * set vector
         * @param {cc.Point} Var
         */
        setVector(Var:Point);

        /**
         * @return {cc.Point}
         */
        getVector():Point;

        /** is Compressed Interpolation
         * @return {Boolean}
         */
        isCompressedInterpolation():boolean;

        /**
         * @param {Boolean} compress
         */
        setCompressedInterpolation(compress:boolean);

        /**
         * @param {cc.Color} start starting color
         * @param {cc.Color} end
         * @param {cc.Point|Null} v
         * @return {Boolean}
         */
        init(start:Color, end:Color, v?:Point):boolean;
    }
    //#endregion cocos2d/layers_scenes_transitions_nodes/CCLayer.js

    //#region cocos2d/layers_scenes_transitions_nodes/Transition.js
    /**
     * A tag constant for identifying fade scenes
     * @constant
     * @type Number
     */
    var SCENE_FADE:number;

    /**
     * cc.TransitionEaseScene can ease the actions of the scene protocol.
     * @class
     * @extends cc.Class
     */
    export class TransitionEaseScene extends Class {
        /**
         * returns the Ease action that will be performed on a linear action.
         */
        easeActionWithAction();
    }

    /**
     * horizontal orientation Type where the Left is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_LEFT_OVER:number;
    /**
     * horizontal orientation type where the Right is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_RIGHT_OVER:number;
    /**
     * vertical orientation type where the Up is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_UP_OVER:number;
    /**
     * vertical orientation type where the Bottom is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_DOWN_OVER:number;

    /**
     * @class
     * @extends cc.Scene
     */
    export class TransitionScene extends Scene {
        /**
         * custom onEnter
         */
        onEnter();

        /**
         * custom onExit
         */
        onExit();

        /**
         * custom cleanup
         */
        cleanup();

        /**
         * initializes a transition with duration and incoming scene
         * @param {Number} t time in seconds
         * @param {cc.Scene} scene a scene to transit to
         * @return {Boolean} return false if error
         */
        initWithDuration(t:number, scene:Scene):boolean;

        /**
         * called after the transition finishes
         */
        finish();

        /**
         * set hide the out scene and show in scene
         */
        hideOutShowIn();
    }
    //#region cocos2d/layers_scenes_transitions_nodes/Transition.js

    //#region cocos2d/layers_scenes_transitions_nodes/TransitionProgress.js
    /**
     * tag for scene redial
     * @constant
     * @type Number
     */
    var SCENE_RADIAL:number;

    /**
     * cc.TransitionProgress transition.
     * @class
     * @extends cc.TransitionScene
     */
    export class TransitionProgress extends TransitionScene {
        /**
         * @override
         */
        onEnter();

        /**
         * @override
         */
        onExit();

        /**
         * create a cc.TransitionProgress object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgress}
         */
        static create(t?:number, scene?:Scene):TransitionProgress;
    }

    /**
     *  cc.TransitionRadialCCW transition.<br/>
     *  A counter colock-wise radial transition to the next scene
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressRadialCCW extends TransitionProgress {
        /**
         * create a cc.TransitionProgressRadialCCW object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressRadialCCW}
         */
        static create(t?:number, scene?:Scene):TransitionProgressRadialCCW;
    }

    /**
     * cc.TransitionRadialCW transition.<br/>
     * A counter colock-wise radial transition to the next scene
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressRadialCW extends TransitionProgress {
        /**
         * create a cc.TransitionProgressRadialCW object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressRadialCW}
         */
        static create(t?:number, scene?:Scene):TransitionProgressRadialCW;
    }

    /**
     * cc.TransitionProgressHorizontal transition.<br/>
     * A  colock-wise radial transition to the next scene
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressHorizontal extends TransitionProgress {
        /**
         * create a cc.TransitionProgressHorizontal object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressHorizontal}
         */
        create(t:number, scene:Scene):TransitionProgressHorizontal;
    }

    /**
     * cc.TransitionProgressVertical transition.
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressVertical extends TransitionProgress {
        /**
         * create a cc.TransitionProgressVertical object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressVertical}
         */
        create(t:number, scene:Scene):TransitionProgressVertical;
    }

    /**
     * cc.TransitionProgressInOut transition.
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressInOut extends TransitionProgress {
        /**
         * create a cc.TransitionProgressInOut object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressInOut}
         */
        create(t:number, scene:Scene):TransitionProgressInOut;
    }

    /**
     * cc.TransitionProgressOutIn transition.
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressOutIn extends TransitionProgress {
        /**
         * create a cc.TransitionProgressOutIn object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressOutIn}
         */
        create(t:number, scene:Scene):TransitionProgressOutIn;
    }
    //#endregion cocos2d/layers_scenes_transitions_nodes/TransitionProgress.js

    //#region cocos2d/menu_nodes/CCMenu.js
    /**
     * <p> Features and Limitation:<br/>
     *  - You can add MenuItem objects in runtime using addChild:<br/>
     *  - But the only accecpted children are MenuItem objects</p>
     * @class
     * @extends cc.Layer
     */
    export class Menu extends Layer {
        /**
         * create a new menu
         * @return {cc.Menu}
         * @example
         * // Example
         * //there is no limit on how many menu item you can pass in
         * var myMenu = cc.Menu.create(menuitem1, menuitem2, menuitem3);
         */
        static create(...nodes:Node[]):Menu;
    }
    //#endregion cocos2d/menu_nodes/CCMenu.js

    //#region cocos2d/menu_nodes/CCMenuItem.js
    /**
     * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem objects.
     * @class
     * @extends cc.Node
     */
    export class MenuItem extends Node {
        /**
         * MenuItem is selected
         * @return {Boolean}
         */
        isSelected():boolean;

        /**
         * set the target/selector of the menu item
         * @param {function|String} selector
         * @param {cc.Node} rec
         */
        setTarget(selector, rec:Node);

        /**
         * MenuItem is Enabled
         * @return {Boolean}
         */
        isEnabled():boolean;

        /**
         * set enable value of MenuItem
         * @param {Boolean} enable
         */
        setEnabled(enable:boolean);

        /**
         * @param {function|String} selector
         * @param {cc.Node} rec
         * @return {Boolean}
         */
        initWithCallback(selector, rec:Node):boolean;

        /**
         * return rect value of cc.MenuItem
         * @return {cc.Rect}
         */
        rect():Rect;

        /**
         * same as setIsSelected(true)
         */
        selected();

        /**
         * same as setIsSelected(false)
         */
        unselected();

        /**
         * @param {function|String} selector
         * @param {cc.Node} rec
         */
        setCallback(selector, rec:Node);

        /**
         * call the selector with target
         */
        activate();
    }

    /**
     *  Any cc.Node that supports the cc.LabelProtocol protocol can be added.<br/>
     * Supported nodes:<br/>
     * - cc.BitmapFontAtlas<br/>
     * - cc.LabelAtlas<br/>
     * - cc.LabelTTF<br/>
     * @class
     * @extends cc.MenuItem
     */
    export class MenuItemLabel extends MenuItem {
        /**
         * @param {cc.Node} label
         * @param {function|String|Null} selector
         * @param {cc.Node|Null} target
         * @return {cc.MenuItemLabel}
         */
        static create(...args:any[]/*label, selector, target*/):MenuItemLabel;
    }

    /**
     * Helper class that creates a MenuItemLabel class with a LabelAtlas
     * @class
     * @extends cc.MenuItemLabel
     */
    export class MenuItemAtlasFont extends cc.MenuItemLabel {
        /**
         * create menu item from string with font
         * @param {String} value the text to display
         * @param {String} charMapFile the character map file
         * @param {Number} itemWidth
         * @param {Number} itemHeight
         * @param {String} startCharMap a single character
         * @param {cc.Node|Null} target
         * @param {function|String|Null} selector
         * @return {cc.MenuItemAtlasFont}
         * @example
         * // Example
         * var item = cc.MenuItemAtlasFont.create('text to display', 'font.fnt', 12, 32, ' ')
         *
         * //OR
         * var item = cc.MenuItemAtlasFont.create('text to display', 'font.fnt', 12, 32, ' ', game, game.run)
         */
        static create(...args:any[]/*value, charMapFile, itemWidth, itemHeight, startCharMap, target, selector*/):MenuItemAtlasFont;
    }

    /**
     * Helper class that creates a CCMenuItemLabel class with a Label
     * @class
     * @extends cc.MenuItemLabel
     */
    export class MenuItemFont extends MenuItemLabel {
        /**
         * @param {Number} s
         */
        setFontSize(s:number);

        /**
         *
         * @return {Number}
         */
        fontSize():number;

        /**
         * @param {String} name
         */
        setFontName(name:string);

        /**
         * @return {String}
         */
        fontName():string;

        /**
         * create a menu item from string
         * @param {String} value the text to display
         * @param {String|function|Null} selector the callback to run, either in function name or pass in the actual function
         * @param {cc.Node|Null} target the target to run callback
         * @return {cc.MenuItemFont}
         * @example
         * // Example
         * var item = cc.MenuItemFont.create("Game start", 'start', Game)
         * //creates a menu item from string "Game start", and when clicked, it will run Game.start()
         *
         * var item = cc.MenuItemFont.create("Game start", game.start, Game)//same as above
         *
         * var item = cc.MenuItemFont.create("i do nothing")//create a text menu item that does nothing
         *
         * //you can set font size and name before or after
         * cc.MenuItemFont.setFontName('my Fancy Font');
         * cc.MenuItemFont.setFontSize(62);
         */
        static create(...args:any[]/*value, selector, target*/):MenuItemFont;
    }

    /**
     * CCMenuItemSprite accepts CCNode<CCRGBAProtocol> objects as items.<br/>
     The images has 3 different states:<br/>
     - unselected image<br/>
     - selected image<br/>
     - disabled image<br/>
     * @class
     * @extends cc.MenuItem
     */
    export class MenuItemSprite extends MenuItem {
        /**
         * create a menu item from sprite
         * @param {Image} normal normal state image
         * @param {Image|Null} selected selected state image
         * @param {Image|cc.Node|Null} three disabled state image OR target node
         * @param {String|function|cc.Node|Null} four callback function name in string or actual function, OR target Node
         * @param {String|function|Null} five callback function name in string or actual function
         * @return {cc.MenuItemSprite}
         * @example
         * // Example
         * var item = cc.MenuItemSprite.create(normalImage)//create a menu item from a sprite with no functionality
         *
         * var item = cc.MenuItemSprite.create(normalImage, selectedImage)//create a menu Item, nothing will happen when clicked
         *
         * var item = cc.MenuItemSprite.create(normalImage, SelectedImage, disabledImage)//same above, but with disabled state image
         *
         * var item = cc.MenuItemSprite.create(normalImage, SelectedImage, 'callback', targetNode)//create a menu item, when clicked runs targetNode.callback()
         *
         * var item = cc.MenuItemSprite.create(normalImage, SelectedImage, disabledImage, targetNode.callback, targetNode)
         * //same as above, but with disabled image, and passing in callback function
         */
        static create(...args:any[]/*normalSprite, selectedSprite, three, four, five*/):MenuItemSprite;
    }

    /**
     * cc.MenuItemImage accepts images as items.<br/>
     * The images has 3 different states:<br/>
     * - unselected image<br/>
     * - selected image<br/>
     * - disabled image<br/>
     * <br/>
     * For best results try that all images are of the same size<br/>
     * @class
     * @extends cc.MenuItemSprite
     */
    export class MenuItemImage extends MenuItemSprite {
        /**
         * creates a new menu item image
         * @param {String} normalImage file name for normal state
         * @param {String} selectedImage image for selected state
         * @param {String|cc.Node} three Disabled image OR allback function
         * @param {String|function|Null} four callback function, either name in string or pass the whole function OR the target
         * @param {cc.Node|String|function|Null} five cc.Node target to run callback when clicked
         * @return {cc.MenuItemImage}
         * @example
         * // Example
         * //create a dom menu item with normal and selected state, when clicked it will run the run function from gameScene object
         * var item = cc.MenuItemImage.create('normal.png', 'selected.png', 'run', gameScene)
         *
         * //same as above, but pass in the actual function and disabled image
         * var item = cc.MenuItemImage.create('normal.png', 'selected.png', 'disabled.png', gameScene.run, gameScene)
         */
        static create():MenuItemImage;

        static create(normalImage:string, selectedImage:string, three:(sender:any) => void):MenuItemImage;

        static create(normalImage:string, selectedImage:string, three:(sender:any) => void, four:Node):MenuItemImage;

        static create(normalImage:string, selectedImage:string, three:string, four:(sender:any) => void, five:Node):MenuItemImage;
    }

    /**
     * A simple container class that "toggles" it's inner items<br/>
     * The inner items can be any MenuItem
     * @class
     * @extends cc.MenuItem
     */
    export class MenuItemToggle extends MenuItem {
        /**
         * @return {Number}
         */
        getOpacity():number;

        /**
         * @param {Number} Opacity
         */
        setOpacity(Opacity:number);

        /**
         * @return {cc.Color}
         */
        getColor():Color;

        /**
         * @param {cc.Color} Color
         */
        setColor(Color:Color);

        /**
         * @return {Number}
         */
        getSelectedIndex():number;

        /**
         * @param {Number} SelectedIndex
         */
        setSelectedIndex(SelectedIndex:number);

        /**
         * similar to get children
         * @return {cc.MenuItem}
         */
        getSubItems():MenuItem[];

        /**
         * @param {cc.MenuItem} SubItems
         */
        setSubItems(SubItems:MenuItem[]);

        /**
         * @param {cc.MenuItem} args[0...last-2] the rest in the array are cc.MenuItems
         * @param {function|String} args[last-1] the second item in the args array is the callback
         * @param {cc.Node} args[last] the first item in the args array is a target
         * @return {Boolean}
         */
        initWithItems(...args:any[]):boolean;

        /**
         * @param {cc.MenuItem} item
         */
        addSubItem(item:MenuItem);

        /**
         * activate the menu item
         */
        activate();

        /**
         * menu item is selected (runs callback)
         */
        selected();

        /**
         * menu item goes back to unselected state
         */
        unselected();

        /**
         * @param {Boolean} enabled
         */
        setEnabled(enabled:boolean);

        /**
         * returns the selected item
         * @return {cc.MenuItem}
         */
        selectedItem():MenuItem;

        setOpacityModifyRGB(value:boolean);

        isOpacityModifyRGB():boolean;

        onEnter();

        /**
         * create a simple container class that "toggles" it's inner items<br/>
         * The inner items can be any MenuItem
         * @return {cc.MenuItemToggle}
         * @example
         * // Example
         *
         * //create a toggle item with 2 menu items (which you can then toggle between them later)
         * var toggler = cc.MenuItemToggle.create(this, this.callback, cc.MenuItemFont.create("On"), cc.MenuItemFont.create("Off"))
         * //Note: the first param is the target, the second is the callback function, afterwards, you can pass in any number of menuitems
         *
         * //if you pass only 1 variable, then it must be a cc.MenuItem
         * var notYetToggler = cc.MenuItemToggle.create(cc.MenuItemFont.create("On"));//it is useless right now, until you add more stuff to it
         * notYetToggler.addSubItem(cc.MenuItemFont.create("Off"));
         * //this is useful for constructing a toggler without a callback function (you wish to control the behavior from somewhere else)
         */
        static create(...args:any[]):MenuItemToggle;
    }
    //#endregion cocos2d/menu_nodes/CCMenuItem.js

    //#region cocos2d/platform/AppControl.js
    /**
     * Controller of Game Application
     * @class
     * @extends cc.Class
     */
    export class AppController extends Class {
        /**
         * did something when Finish Launching
         * @return {Boolean}
         */
        didFinishLaunchingWithOptions():boolean;

        /**
         * Return Controller of Game Application
         * @return {cc.AppController}
         */
        static shareAppController():AppController;
    }
    //#endregion cocos2d/platform/AppControl.js

    //#region cocos2d/platform/CCApplication.js
    /**
     * Device type
     * @constant
     * @type {Object}
     */
    enum TARGET_PLATFORM {
        WINDOWS,//: 0,
        LINUX,//: 1,
        MACOS,//: 2,
        ANDROID,//: 3,
        IPHONE,//: 4,
        IPAD,//: 5,
        BLACKBERRY,//: 6,
        NACL,//: 7,
        EMSCRIPTEN,//: 8,
        MOBILE_BROWSER,//: 100,
        PC_BROWSER,//: 101
    }

    /**
     * Device oriented vertically, home button on the bottom
     * @constant
     * @type Number
     */
    var ORIENTATION_PORTRAIT:number;

    /**
     * Device oriented vertically, home button on the top
     * @constant
     * @type Number
     */
    var ORIENTATION_PORTRAIT_UPSIDE_DOWN:number;

    /**
     * Device oriented horizontally, home button on the right
     * @constant
     * @type Number
     */
    var ORIENTATION_LANDSCAPE_LEFT:number;

    /**
     * Device oriented horizontally, home button on the left
     * @constant
     * @type Number
     */
    var ORIENTATION_LANDSCAPE_RIGHT:number;

    //engine render type

    /**
     * Canvas of render type
     * @constant
     * @type Number
     */
    var CANVAS:number;

    /**
     * WebGL of render type
     * @constant
     * @type Number
     */
    var WEBGL:number;

    /**
     * drawing primitive of game engine
     * @type cc.DrawingPrimitive
     */
    var drawingUtil:DrawingPrimitive;

    /**
     * main Canvas 2D Context of game engine
     * @type CanvasContext
     */
    var renderContext:CanvasRenderingContext2D;

    /**
     * main Canvas of game engine
     * @type HTMLCanvasElement
     */
    var canvas:HTMLCanvasElement;

    /**
     * This Div element contain all game canvas
     * @type HTMLDivElement
     */
    var gameDiv:HTMLDivElement;

    /**
     * current render type of game engine
     * @type Number
     */
    var renderContextType:number;

    /**
     * save original size of canvas, use for resize canvas
     * @type cc.Size
     */
    var originalCanvasSize:Size;

    /**
     * <p>
     *   setup game main canvas,renderContext,gameDiv and drawingUtil with argument  <br/>
     *   <br/>
     *   can receive follow type of arguemnt: <br/>
     *      - empty: create a canvas append to document's body, and setup other option    <br/>
     *      - string: search the element by document.getElementById(),    <br/>
     *          if this element is HTMLCanvasElement, set this element as main canvas of engine, and set it's ParentNode as cc.gameDiv.<br/>
     *          if this element is HTMLDivElement, set it's ParentNode to cc.gameDiv， and create a canvas as main canvas of engine.   <br/>
     * </p>
     * @function
     * @example
     * //setup with null
     * cc.setup();
     *
     * // setup with HTMLCanvasElement, gameCanvas is Canvas element
     * // declare like this: <canvas id="gameCanvas" width="800" height="450"></canvas>
     * cc.setup("gameCanvas");
     *
     * //setup with HTMLDivElement, gameDiv is Div element
     * // declare like this: <div id="Cocos2dGameContainer" width="800" height="450"></div>
     * cc.setup("Cocos2dGameContainer");
     */
    function setup(el?:string, width?:number, height?:number);

    /**
     * Run main loop of game engine
     * @class
     * @extends cc.Class
     */
    export class Application extends Class {
    }
    //#endregion cocos2d/platform/CCApplication.js

    //#region cocos2d/platform/CCClass.js
    export class Class {
        rootNode:cc.Node;
    }
    //#endregion cocos2d/platform/CCClass.js

    //#region cocos2d/platform/CCMacro.js
    /**
     * @constant
     * @type Number
     */
    var INVALID_INDEX:number;

    /**
     * PI is the ratio of a circle's circumference to its diameter.
     * @constant
     * @type Number
     */
    var PI:number;

    /**
     * @constant
     * @type Number
     */
    var FLT_MAX:number;

    /**
     * @constant
     * @type Number
     */
    var RAD:number;

    /**
     * @constant
     * @type Number
     */
    var DEG:number;

    /**
     * maximum unsigned int value
     * @constant
     * @type Number
     */
    var UINT_MAX:number;

    /**
     * <p>
     *     Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
     * </p>
     * @param {Number} a number A
     * @param {Number} b number B
     * @param {Number} r ratio between 0 and 1
     * @function
     * @example
     * cc.lerp(2,10,0.5)//returns 6<br/>
     * cc.lerp(2,10,0.2)//returns 3.6
     */
    function lerp(a:number, b:number, r:number):number;

    /**
     * returns a random float between -1 and 1
     * @return {Number}
     * @function
     */
    function randomMinus1To1(): number;

    /**
     * returns a random float between 0 and 1
     * @return {Number}
     * @function
     */
    function random0To1(): number;

    /**
     * converts degrees to radians
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    function degreesToRadians(angle: number): number;

    /**
     * converts radians to degrees
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    function radiansToDegrees(angle: number): number;

    /**
     * Converts radians to a normalized vector.
     * @param {Number} a
     * @return {cc.Point}
     */
    function pForAngle(a: number): Point;

    /**
     * Converts a vector to radians.
     * @param {cc.Point} v
     * @return {Number}
     */
    function pToAngle(v: Point): number;

    /**
     * @constant
     * @type Number
     */
    var REPEAT_FOREVER:number;

    /**
     * default gl blend src function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    var BLEND_SRC:number;

    /**
     * default gl blend dst function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    var BLEND_DST:number;

    /**
     * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix
     * @param {cc.Node} node setup node
     * @function
     */
    function NODE_DRAW_SETUP(node:Node);

    /**
     * <p>
     *     GL states that are enabled:<br/>
     *       - GL_TEXTURE_2D<br/>
     *       - GL_VERTEX_ARRAY<br/>
     *       - GL_TEXTURE_COORD_ARRAY<br/>
     *       - GL_COLOR_ARRAY<br/>
     * </p>
     * @function
     */
    function ENABLE_DEFAULT_GL_STATES();

    /**
     * <p>
     *   Disable default GL states:<br/>
     *     - GL_TEXTURE_2D<br/>
     *     - GL_TEXTURE_COORD_ARRAY<br/>
     *     - GL_COLOR_ARRAY<br/>
     * </p>
     * @function
     */
    function DISABLE_DEFAULT_GL_STATES();

    /**
     * <p>
     *  Increments the GL Draws counts by one.<br/>
     *  The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.<br/>
     * </p>
     * @param {Number} addNumber
     * @function
     */
    function INCREMENT_GL_DRAWS(addNumber:number);

    /**
     * @constant
     * @type Number
     */
    var FLT_EPSILON:number;

    /**
     * <p>
     *     On Mac it returns 1;<br/>
     *     On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
     * </p>
     * @function
     */
    function CONTENT_SCALE_FACTOR():number;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Point} points
     * @return {cc.Point}
     * @function
     */
    function POINT_POINTS_TO_PIXELS(points:Point):Point;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Size} sizeInPoints
     * @return {cc.Size}
     * @function
     */
    function SIZE_POINTS_TO_PIXELS(sizeInPoints:Size):Size;

    /**
     * Converts a rect in pixels to points
     * @param {cc.Size} sizeInPixels
     * @return {cc.Size}
     * @function
     */
    function SIZE_PIXELS_TO_POINTS(sizeInPixels:Size):Size;

    /**
     * Converts a rect in pixels to points
     * @param pixels
     * @function
     */
    function POINT_PIXELS_TO_POINTS(pixels:Point):Point;

    /**
     * Converts a rect in pixels to points
     * @param {cc.Rect} pixel
     * @function
     */
    function RECT_PIXELS_TO_POINTS(pixel:Rect);

    /**
     * Converts a rect in points to pixels
     * @param {cc.Rect} point
     * @function
     */
    function RECT_POINTS_TO_PIXELS(point:Point);

    //#endregion cocos2d/platform/CCMacro.js

    //#region cocos2d/platform/CCTypes.js
    export class Color {
        constructor(r?:number, g?:number, b?:number, a?:number);
    }
    export module color {
        var WHITE: Color;
        var YELLOW: Color;
        var BLUE: Color;
        var GREEN: Color;
        var RED: Color;
        var MAGENTA: Color;
        var BLACK: Color;
        var ORANGE: Color;
        var GRAY: Color;
    }
    function color(r:any, g?:number, b?:number, a?:number): Color;
    function colorEqual(c1: Color, c2: Color): boolean;
    function hexToColor(hex: string) : Color;
    function colorToHex(color: Color): string;

    /**
     * A vertex composed of 2 floats: x, y
     * @Class
     * @Construct
     * @param {Number} x1
     * @param {Number} y1
     */
    export class Vertex2F {
        x:number;
        y:number;

        constructor(x1?:number, y1?:number);
    }

    /**
     * helper macro that creates an Vertex2F type
     * @function
     * @param {Number} x
     * @param {Number} y
     * @return {cc.Vertex2F}
     */
    function Vertex2(x:number, y:number):Vertex2F;

    /**
     * A vertex composed of 3 floats: x, y, z
     * @Class
     * @Construct
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} z1
     */
    export class Vertex3F {
        x:number;
        y:number;
        z:number;

        constructor(x1?:number, y1?:number, z1?:number);
    }

    /**
     * helper macro that creates an Vertex3F type
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @return {cc.Vertex3F}
     */
    function vertex3(x:number, y:number, z:number);

    /**
     * A texcoord composed of 2 floats: u, y
     * @Class
     * @Construct
     * @param {Number} u1
     * @param {Number} v1
     */
    export class Tex2F {
        u:number;
        v:number;

        constructor(u1?:number, v1?:number);
    }

    /**
     * helper macro that creates an Tex2F type
     * @function
     * @param {Number} u
     * @param {Number} v
     * @return {cc.Tex2F}
     */
    function tex2(u:number, v:number);

    /**
     * Point Sprite component
     * @Class
     * @Construct
     * @param {cc.Vertex2F} pos1
     * @param {cc.Color} color1
     * @param {Number} size1
     */
    export class PointSprite {
        pos:Vertex2F;
        color:Color;
        size:number;

        constructor(pos1:Vertex2F, color1:Color, size1:number);
    }

    /**
     * A 2D Quad. 4 * 2 floats
     * @Class
     * @Construct
     * @param {cc.Vertex2F} tl1
     * @param {cc.Vertex2F} tr1
     * @param {cc.Vertex2F} bl1
     * @param {cc.Vertex2F} br1
     */
    export class Quad2 {
        tl:Vertex2F;
        tr:Vertex2F;
        bl:Vertex2F;
        br:Vertex2F;

        constructor(tl1?:Vertex2F, tr1?:Vertex2F, bl1?:Vertex2F, br1?:Vertex2F);
    }

    /**
     * A 3D Quad. 4 * 3 floats
     * @Class
     * @Construct
     * @param {cc.Vertex3F} bl1
     * @param {cc.Vertex3F} br1
     * @param {cc.Vertex3F} tl1
     * @param {cc.Vertex3F} tr1
     */
    export class Quad3 {
        bl:Vertex3F;
        br:Vertex3F;
        tl:Vertex3F;
        tr:Vertex3F;

        constructor(bl1?:Vertex3F, br1?:Vertex3F, tl1?:Vertex3F, tr1?:Vertex3F);
    }

    /**
     * text alignment : left
     * @constant
     * @type Number
     */
    var TEXT_ALIGNMENT_LEFT:number;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    var TEXT_ALIGNMENT_CENTER:number;

    /**
     * text alignment : right
     * @constant
     * @type Number
     */
    var TEXT_ALIGNMENT_RIGHT:number;

    /**
     * text alignment : top
     * @constant
     * @type Number
     */
    var VERTICAL_TEXT_ALIGNMENT_TOP:number;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    var VERTICAL_TEXT_ALIGNMENT_CENTER:number;

    /**
     * text alignment : bottom
     * @constant
     * @type Number
     */
    var VERTICAL_TEXT_ALIGNMENT_BOTTOM:number;

    //#endregion cocos2d/platform/CCTypes.js

    //#region cocos2d/sprite_nodes/CCAnimation.js
    /**
     * <p>
     *    cc.AnimationFrame
     *    A frame of the animation. It contains information like:
     *       - sprite frame name
     *       - # of delay units.
     *       - offset
     * </p>
     * @class
     * @extends cc.Class
     */
    export class AnimationFrame extends Class {

    }

    /**
     * <p>
     *     A cc.Animation object is used to perform animations on the cc.Sprite objects.<br/>
     *     <br/>
     *      The cc.Animation object contains cc.SpriteFrame objects, and a possible delay between the frames. <br/>
     *      You can animate a cc.Animation object by using the cc.Animate action. Example:  <br/>
     * </p>
     * @class
     * @extends cc.Class
     *
     * @example
     * //create an animation object
     * var animation = cc.Animation.create();
     *
     * //add a sprite frame to this animation
     * animation.addFrameWithFile("grossini_dance_01.png");
     *
     * //create an animate with this animation
     * var action = cc.Animate.create(animation);
     *
     * //run animate
     * this._grossini.runAction(action);
     */
    export class Animation extends Class {
        /**
         * Creates an animation.
         * @param {Array} frames
         * @param {Number} delay
         * @param {Number} loops
         * @return {cc.Animation}
         * @example
         * //Creates an animation
         * var animation1 = cc.Animation.create();
         *
         * //Create an animation with sprite frames
         * var animFrames = [];
         * var frame = cache.getSpriteFrame("grossini_dance_01.png");
         * animFrames.push(frame);
         * var animation2 = cc.Animation.create(animFrames);
         *
         * //Create an animation with sprite frames and delay
         * var animation3 = cc.Animation.create(animFrames, 0.2);
         */
        static create(frames:AnimationFrame[], delay:number, loops:number):Animation;

        /**
         * Creates an animation with an array of cc.AnimationFrame, the delay per units in seconds and and how many times it should be executed.
         * @param {Array} arrayOfAnimationFrameNames
         * @param {Number} delayPerUnit
         * @param {Number} loops
         * @return {cc.Animation}
         */
        static createWithAnimationFrames(arrayOfAnimationFrameNames:AnimationFrame[], delayPerUnit:number, loops:number):Animation;
    }
    //#endregion cocos2d/sprite_nodes/CCAnimation.js

    //#region cocos2d/sprite_nodes/CCSprite.js
    /**
     * <p>cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) ) (Canvas implement) <br/>
     *
     * cc.Sprite can be created with an image, or with a sub-rectangle of an image.  <br/>
     *
     * If the parent or any of its ancestors is a cc.SpriteBatchNode then the following features/limitations are valid   <br/>
     *    - Features when the parent is a cc.BatchNode: <br/>
     *        - MUCH faster rendering, specially if the cc.SpriteBatchNode has many children. All the children will be drawn in a single batch.  <br/>
     *
     *    - Limitations   <br/>
     *        - Camera is not supported yet (eg: CCOrbitCamera action doesn't work)  <br/>
     *        - GridBase actions are not supported (eg: CCLens, CCRipple, CCTwirl) <br/>
     *        - The Alias/Antialias property belongs to CCSpriteBatchNode, so you can't individually set the aliased property.  <br/>
     *        - The Blending function property belongs to CCSpriteBatchNode, so you can't individually set the blending function property. <br/>
     *        - Parallax scroller is not supported, but can be simulated with a "proxy" sprite.        <br/>
     *
     *  If the parent is an standard cc.Node, then cc.Sprite behaves like any other cc.Node:      <br/>
     *    - It supports blending functions    <br/>
     *    - It supports aliasing / antialiasing    <br/>
     *    - But the rendering will be slower: 1 draw per children.   <br/>
     *
     * The default anchorPoint in cc.Sprite is (0.5, 0.5). </p>
     * @class
     * @extends cc.Node
     *
     * @example
     * var aSprite = new cc.Sprite();
     * aSprite.initWithFile("HelloHTML5World.png",cc.rect(0,0,480,320));
     */
    export class Sprite extends Node {
        setOpacity(opacity : number);
        getOpacity():number;

        init();
        initWithFile(name:string);
        initWithTexture(texture: Texture2D);
        initWithSpriteFrameName(name:string);

        setSpriteFrame(sp: SpriteFrame);
        setTexture(texture: Texture2D);
        getTexture() : Texture2D;
        setFlippedY(n: number);
        setFlippedX(n: number);
        getBatchNode();
        getOffsetPosition();
        removeAllChildrenWithCleanup();
        updateTransform();
        setTextureRect();
        isFrameDisplayed();
        getAtlasIndex();
        setBatchNode();
        getBlendFunc();
        setDisplayFrameWithAnimationName();
        setTextureAtlas();
        getSpriteFrame();
        isDirty();
        setAtlasIndex();
        setDirty();
        isTextureRectRotated();
        getTextureRect();
        setBlendFunc();
        getTextureAtlas();
        initWithSpriteFrame();
        isFlippedX(): boolean;
        isFlippedY(): boolean;
        setVertexRect();

        static create(fileName?:string, rect?:Rect):Sprite;
        static createWithSpriteFrameName(spriteFrameName:string):Sprite;
        static createWithSpriteFrame(sp: SpriteFrame): Sprite;
        static createWithTexture(texture: Texture2D) : Sprite;
    }
    //#endregion cocos2d/sprite_nodes/CCSprite.js


    //#region CocosDension/SimpleAudioEngine.js
    class AudioEngine extends Class {
    }

    /**
     * The Audio Engine implementation via <audio> tag in HTML5.
     * @class
     * @extends   cc.AudioEngine
     */
    class SimpleAudioEngine extends AudioEngine {
        /**
         * Preload music resource.<br />
         * This method is called when cc.Loader preload  resources.
         * @param {String} path The path of the music file with filename extension.
         */
        preloadSound(path:string);

        /**
         * Play music.
         * @param {String} path The path of the music file without filename extension.
         * @param {Boolean} loop Whether the music loop or not.
         * @example
         * //example
         * cc.AudioEngine.getInstance().playMusic(path, false);
         */
        playMusic(path:string, loop:boolean);

        /**
         * Stop playing music.
         * @param {Boolean} releaseData If release the music data or not.As default value is false.
         * @example
         * //example
         * cc.AudioEngine.getInstance().stopMusic();
         */
        stopMusic(releaseData:boolean);

        /**
         * Pause playing music.
         * @example
         * //example
         * cc.AudioEngine.getInstance().pauseMusic();
         */
        pauseMusic();

        /**
         * Resume playing music.
         * @example
         * //example
         * cc.AudioEngine.getInstance().resumeMusic();
         */
        resumeMusic();

        /**
         * Rewind playing music.
         * @example
         * //example
         * cc.AudioEngine.getInstance().rewindMusic();
         */
        rewindMusic();

        /**
         * The volume of the music max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var volume = cc.AudioEngine.getInstance().getMusicVolume();
         */
        getMusicVolume():number;

        /**
         * Set the volume of music.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.AudioEngine.getInstance().setMusicVolume(0.5);
         */
        setMusicVolume(volume:number);

        /**
         * Whether the music is playing.
         * @return {Boolean} If is playing return true,or return false.
         * @example
         * //example
         *  if (cc.AudioEngine.getInstance().isMusicPlaying()) {
         *      cc.log("music is playing");
         *  }
         *  else {
         *      cc.log("music is not playing");
         *  }
         */
        isMusicPlaying():boolean;

        /**
         * Play sound effect.
         * @param {String} path The path of the sound effect with filename extension.
         * @param {Boolean} loop Whether to loop the effect playing, default value is false
         * @example
         * //example
         * var soundId = cc.AudioEngine.getInstance().playEffect(path);
         */
        playEffect(path:string, loop:boolean):number;

        /**
         *The volume of the effects max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var effectVolume = cc.AudioEngine.getInstance().getEffectsVolume();
         */
        getEffectsVolume():number;

        /**
         * Set the volume of sound effecs.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.AudioEngine.getInstance().setEffectsVolume(0.5);
         */
        setEffectsVolume(volume:number);

        /**
         * Pause playing sound effect.
         * @param {Number} audioID The return value of function playEffect.
         * @example
         * //example
         * cc.AudioEngine.getInstance().pauseEffect(audioID);
         */
        pauseEffect(audioID:number);

        /**
         * Pause all playing sound effect.
         * @example
         * //example
         * cc.AudioEngine.getInstance().pauseAllEffects();
         */
        pauseAllEffects();

        /**
         * Resume playing sound effect.
         * @param {Number} audioID The return value of function playEffect.
         * @audioID
         * //example
         * cc.AudioEngine.getInstance().resumeEffect(audioID);
         */
        resumeEffect(audioID:number);

        /**
         * Resume all playing sound effect
         * @example
         * //example
         * cc.AudioEngine.getInstance().resumeAllEffects();
         */
        resumeAllEffects();

        /**
         * Stop playing sound effect.
         * @param {Number} audioID The return value of function playEffect.
         * @example
         * //example
         * cc.AudioEngine.getInstance().stopEffect(audioID);
         */
        stopEffect(audioID:number);

        /**
         * Stop all playing sound effects.
         * @example
         * //example
         * cc.AudioEngine.getInstance().stopAllEffects();
         */
        stopAllEffects();

        /**
         * Unload the preloaded effect from internal buffer
         * @param {String} path
         * @example
         * //example
         * cc.AudioEngine.getInstance().unloadEffect(EFFECT_FILE);
         */
        unloadEffect(path:string);

        /**
         * search in this._supportedFormat if @param ext is there
         * @param {String} ext
         * @returns {Boolean}
         */
        isFormatSupported(ext:string):boolean;
    }
    //#endregion CocosDension/SimpleAudioEngine.js
}

/** N/A in cocos2d-html5 */
declare module cc {
    export module sys {
        var LANGUAGE_ENGLISH:string;
        var LANGUAGE_CHINESE:string;
        var LANGUAGE_FRENCH:string;
        var LANGUAGE_ITALIAN:string;
        var LANGUAGE_GERMAN:string;
        var LANGUAGE_SPANISH:string;
        var LANGUAGE_RUSSIAN:string;
        var LANGUAGE_KOREAN:string;
        var LANGUAGE_JAPANESE:string;
        var LANGUAGE_HUNGARIAN:string;
        var LANGUAGE_PORTUGUESE:string;
        var LANGUAGE_ARABIC:string;
        var LANGUAGE_NORWEGIAN:string;
        var LANGUAGE_POLISH:string;
        var OS_WINDOWS:string;
        var OS_IOS:string;
        var OS_OSX:string;
        var OS_UNIX:string;
        var OS_LINUX:string;
        var OS_ANDROID:string;
        var OS_UNKNOWN:string;

        var BROWSER_TYPE_WECHAT:string;
        var BROWSER_TYPE_ANDROID:string;
        var BROWSER_TYPE_IE:string;
        var BROWSER_TYPE_QQ:string;
        var BROWSER_TYPE_MOBILE_QQ:string;
        var BROWSER_TYPE_UC:string;
        var BROWSER_TYPE_360:string;
        var BROWSER_TYPE_BAIDU_APP:string;
        var BROWSER_TYPE_BAIDU:string;
        var BROWSER_TYPE_MAXTHON:string;
        var BROWSER_TYPE_OPERA:string;
        var BROWSER_TYPE_MIUI:string;
        var BROWSER_TYPE_FIREFOX:string;
        var BROWSER_TYPE_SAFARI:string;
        var BROWSER_TYPE_CHROME:string;
        var BROWSER_TYPE_UNKNOWN:string;

        var isNative:boolean;

        var os:string;

        var isMobile:boolean;

        var language:string;

        var browserType:string;//null in jsb

        function garbageCollect();

        // Dumps rooted objects
        function dumpRoot();

        // restarts the JS VM
        function restartVM();

        var capabilities: {
            "opengl": boolean;
            "accelerometer" : boolean;
            "touches" : boolean;
            "keyboard": boolean;
            "mouse": boolean;
        }
    }


}

declare module cc {
    class Control extends Layer {
        /**
         * @method setEnabled
         * @param {bool} bool
         */
        setEnabled(bool:boolean) ;

        /**
         * @method getState
         * @return {cc.Control::State}
         */
        getState():number;

        /**
         * @method sendActionsForControlEvents
         * @param {cc.Control::EventType} arg0
         */
        sendActionsForControlEvents(eventtype) ;

        /**
         * @method setSelected
         * @param {bool} arg0
         */
        setSelected(bool:boolean) ;

        /**
         * @method isEnabled
         * @return {bool}
         */
        isEnabled():boolean ;

        /**
         * @method needsLayout
         */
        needsLayout() ;

        /**
         * @method hasVisibleParents
         * @return {bool}
         */
        hasVisibleParents():boolean;

        /**
         * @method isSelected
         * @return {bool}
         */
        isSelected():boolean;

        /**
         * @method isTouchInside
         * @param {cc.Touch} touch
         * @return {bool}
         */
        isTouchInside(touch:Touch):boolean ;

        /**
         * @method setHighlighted
         * @param {bool} bool
         */
        setHighlighted(bool:boolean) ;

        /**
         * @method getTouchLocation
         * @param {cc.Touch} touch
         * @return {cc.Point}
         */
        getTouchLocation(touch:Touch):Point ;

        /**
         * @method isHighlighted
         * @return {bool}
         */
        isHighlighted():boolean;

        /**
         * @method create
         * @return {cc.Control}
         */
        static create():Control;
    }

    class ControlButton extends Control {
        isPushed();
        setTitleLabelForState();
        setAdjustBackgroundImage();
        setZoomOnTouchDown();
        setTitleForState();
        setLabelAnchorPoint();
        getLabelAnchorPoint();
        initWithBackgroundSprite();
        getTitleTTFSizeForState();
        setTitleTTFForState();
        setTitleTTFSizeForState();
        setTitleLabel();
        setPreferredSize();
        getCurrentTitleColor();
        setBackgroundSprite(sp: Scale9Sprite);
        getBackgroundSpriteForState();
        getHorizontalOrigin();
        initWithTitleAndFontNameAndFontSize();
        getCurrentTitle();
        getScaleRatio();
        getTitleTTFForState();
        getBackgroundSprite();
        getTitleColorForState();
        setTitleColorForState();
        doesAdjustBackgroundImage();
        setBackgroundSpriteFrameForState(sp: SpriteFrame, state: number);
        setBackgroundSpriteForState(sp: Scale9Sprite, state: number);
        setScaleRatio();
        initWithLabelAndBackgroundSprite();
        getTitleLabel();
        getPreferredSize();
        getVerticalMargin();
        getTitleLabelForState();
        setMargins();
        setTitleBMFontForState();
        getTitleBMFontForState();
        getZoomOnTouchDown();
        getTitleForState();

        static create(): ControlButton;
    }
}

declare module cc {
    class PhysicsDebugNode extends cc.Node {
        static create(space: cp.Space): PhysicsDebugNode;
        setSpace(space: cp.Space);
        getSpace(): cp.Space;
    }
    class PhysicsSprite extends cc.Sprite {
        static create(fileName?:string, rect?:Rect):PhysicsSprite;
        setBody(body: cp.Body);
        getBody(): cp.Body;
        getIgnoreBodyRotation(): boolean;
        setIgnoreBodyRotation(bool :boolean);
    }
}
declare module cp {
    // XXX: renaming functions should be supported in JSB
    function clamp01();
    /// Initialize an offset box shaped polygon shape.
    function BoxShape2(body, box) ;
    /// Initialize a box shaped polygon shape.
    function BoxShape(body: Body, width: number, height: number) : Shape;
    /// Initialize an static body
    function StaticBody(): Body;
    // "Bounding Box" compatibility with Chipmunk-JS
    function BB(l, b, r, t) ;
    // helper function to create a BB
    function bb(l, b, r, t);
    function _v(x:number, y:number):cc.Point;
    var vzero:cc.Point;

    function spaceAddCollisionHandler();

    function spaceRemoveCollisionHandler();

    function arbiterGetBodies();

    function arbiterGetShapes();

    function bodyGetUserData();

    function bodySetUserData();

    function areaForPoly();

    function momentForPoly();

    function centroidForPoly();

    function recenterPoly();

    function arbiterGetCount();

    function arbiterGetDepth();

    function arbiterGetElasticity();

    function arbiterGetFriction();

    function arbiterGetNormal();

    function arbiterGetPoint();

    function arbiterGetSurfaceVelocity();

    function arbiterIgnore();

    function arbiterIsFirstContact();

    function arbiterSetElasticity();

    function arbiterSetFriction();

    function arbiterSetSurfaceVelocity();

    function arbiterTotalImpulse();

    function arbiterTotalImpulseWithFriction();

    function arbiterTotalKE();

    function areaForCircle();

    function areaForSegment();

    function bBArea();

    function bBClampVect();

    function bBContainsBB();

    function bBContainsVect();

    function bBExpand();

    function bBIntersects();

    function bBIntersectsSegment();

    function bBMerge();

    function bBMergedArea();

    function bBNew();

    function bBNewForCircle();

    function bBSegmentQuery();

    function bBWrapVect();

    function bodyActivate();

    function bodyActivateStatic();

    function bodyApplyForce();

    function bodyApplyImpulse();

    function bodyDestroy();

    function bodyFree();

    function bodyGetAngVel();

    function bodyGetAngVelLimit();

    function bodyGetAngle();

    function bodyGetForce();

    function bodyGetMass();

    function bodyGetMoment();

    function bodyGetPos();

    function bodyGetRot();

    function bodyGetSpace();

    function bodyGetTorque();

    function bodyGetVel();

    function bodyGetVelAtLocalPoint();

    function bodyGetVelAtWorldPoint();

    function bodyGetVelLimit();

    function bodyInit();

    function bodyInitStatic();

    function bodyIsRogue();

    function bodyIsSleeping();

    function bodyIsStatic();

    function bodyKineticEnergy();

    function bodyLocal2World();

    function bodyNew(i: number, m: number);

    function bodyNewStatic();

    function bodyResetForces();

    function bodySetAngVel();

    function bodySetAngVelLimit();

    function bodySetAngle();

    function bodySetForce();

    function bodySetMass();

    function bodySetMoment();

    function bodySetPos(body: Body, pos: cc.Point);

    function bodySetTorque();

    function bodySetVel();

    function bodySetVelLimit();

    function bodySleep();

    function bodySleepWithGroup();

    function bodyUpdatePosition();

    function bodyUpdateVelocity();

    function bodyWorld2Local();

    function boxShapeNew(body: Body, widht: number, height: number);

    function boxShapeNew2();

    function circleShapeGetOffset();

    function circleShapeGetRadius();

    function circleShapeNew();

    function constraintActivateBodies();

    function constraintDestroy();

    function constraintFree();

    function constraintGetA();

    function constraintGetB();

    function constraintGetErrorBias();

    function constraintGetImpulse();

    function constraintGetMaxBias();

    function constraintGetMaxForce();

    function constraintGetSpace();

    function constraintSetErrorBias();

    function constraintSetMaxBias();

    function constraintSetMaxForce();

    function dampedRotarySpringGetDamping();

    function dampedRotarySpringGetRestAngle();

    function dampedRotarySpringGetStiffness();

    function dampedRotarySpringNew();

    function dampedRotarySpringSetDamping();

    function dampedRotarySpringSetRestAngle();

    function dampedRotarySpringSetStiffness();

    function dampedSpringGetAnchr1();

    function dampedSpringGetAnchr2();

    function dampedSpringGetDamping();

    function dampedSpringGetRestLength();

    function dampedSpringGetStiffness();

    function dampedSpringNew();

    function dampedSpringSetAnchr1();

    function dampedSpringSetAnchr2();

    function dampedSpringSetDamping();

    function dampedSpringSetRestLength();

    function dampedSpringSetStiffness();

    function gearJointGetPhase();

    function gearJointGetRatio();

    function gearJointNew();

    function gearJointSetPhase();

    function gearJointSetRatio();

    function grooveJointGetAnchr2();

    function grooveJointGetGrooveA();

    function grooveJointGetGrooveB();

    function grooveJointNew();

    function grooveJointSetAnchr2();

    function grooveJointSetGrooveA();

    function grooveJointSetGrooveB();

    function initChipmunk();

    function momentForBox(m: number, width: number, height: number);

    function momentForBox2();

    function momentForCircle();

    function momentForSegment();

    function pinJointGetAnchr1();

    function pinJointGetAnchr2();

    function pinJointGetDist();

    function pinJointNew();

    function pinJointSetAnchr1();

    function pinJointSetAnchr2();

    function pinJointSetDist();

    function pivotJointGetAnchr1();

    function pivotJointGetAnchr2();

    function pivotJointNew();

    function pivotJointNew2();

    function pivotJointSetAnchr1();

    function pivotJointSetAnchr2();

    function polyShapeGetNumVerts();

    function polyShapeGetVert();

    function ratchetJointGetAngle();

    function ratchetJointGetPhase();

    function ratchetJointGetRatchet();

    function ratchetJointNew();

    function ratchetJointSetAngle();

    function ratchetJointSetPhase();

    function ratchetJointSetRatchet();

    function resetShapeIdCounter();

    function rotaryLimitJointGetMax();

    function rotaryLimitJointGetMin();

    function rotaryLimitJointNew();

    function rotaryLimitJointSetMax();

    function rotaryLimitJointSetMin();

    function segmentShapeGetA();

    function segmentShapeGetB();

    function segmentShapeGetNormal();

    function segmentShapeGetRadius();

    function segmentShapeNew();

    function segmentShapeSetNeighbors();

    function shapeCacheBB();

    function shapeDestroy();

    function shapeFree();

    function shapeGetBB();

    function shapeGetBody();

    function shapeGetCollisionType();

    function shapeGetElasticity();

    function shapeGetFriction();

    function shapeGetGroup();

    function shapeGetLayers();

    function shapeGetSensor();

    function shapeGetSpace();

    function shapeGetSurfaceVelocity();

    function shapePointQuery();

    function shapeSetBody();

    function shapeSetCollisionType();

    function shapeSetElasticity(shape: Shape, e: number);

    function shapeSetFriction(shape: Shape, f: number);

    function shapeSetGroup();

    function shapeSetLayers();

    function shapeSetSensor();

    function shapeSetSurfaceVelocity();

    function shapeUpdate();

    function simpleMotorGetRate();

    function simpleMotorNew();

    function simpleMotorSetRate();

    function slideJointGetAnchr1();

    function slideJointGetAnchr2();

    function slideJointGetMax();

    function slideJointGetMin();

    function slideJointNew();

    function slideJointSetAnchr1();

    function slideJointSetAnchr2();

    function slideJointSetMax();

    function slideJointSetMin();

    function spaceActivateShapesTouchingShape();

    function spaceAddBody(space: Space, body: Body);

    function spaceAddConstraint();

    function spaceAddShape(space: Space, shape: Shape);

    function spaceAddStaticShape();

    function spaceContainsBody();

    function spaceContainsConstraint();

    function spaceContainsShape();

    function spaceDestroy();

    function spaceFree(space: cp.Space);

    function spaceGetCollisionBias();

    function spaceGetCollisionPersistence();

    function spaceGetCollisionSlop();

    function spaceGetCurrentTimeStep();

    function spaceGetDamping();

    function spaceGetEnableContactGraph();

    function spaceGetGravity();

    function spaceGetIdleSpeedThreshold();

    function spaceGetIterations();

    function spaceGetSleepTimeThreshold();

    function spaceGetStaticBody();

    function spaceInit();

    function spaceIsLocked();

    function spaceNew();

    function spacePointQueryFirst();

    function spaceReindexShape();

    function spaceReindexShapesForBody();

    function spaceReindexStatic();

    function spaceRemoveBody();

    function spaceRemoveConstraint();

    function spaceRemoveShape();

    function spaceRemoveStaticShape();

    function spaceSetCollisionBias();

    function spaceSetCollisionPersistence();

    function spaceSetCollisionSlop();

    function spaceSetDamping();

    function spaceSetEnableContactGraph();

    function spaceSetGravity(space: Space, point:cc.Point);

    function spaceSetIdleSpeedThreshold();

    function spaceSetIterations();

    function spaceSetSleepTimeThreshold();

    function spaceStep();

    function spaceUseSpatialHash();

    function fabs();

    function fclamp();

    function fclamp01();

    function flerp();

    function flerpconst();

    class v extends cc.Point {
        // Vector: Compatibility with Chipmunk-JS
        add();
        clamp();
        cross();
        dist();
        distsq();
        dot();
        eql();
        forangle();
        len();
        lengthsq();
        lerp();
        lerpconst();
        mult();
        near();
        neg();
        normalize();
        normalize_safe();
        perp();
        project();
        rotate();
        rperp();
        slerp();
        slerpconst();
        sub();
        toangle();
        unrotate();
    }
    class Base {
        handle:any;
    }
    class Arbiter {
        getCount();
        getDepth();
        getElasticity();
        getFriction();
        getNormal();
        getPoint();
        getSurfaceVelocity();
        ignore();
        isFirstContact();
        setElasticity();
        setFriction();
        setSurfaceVelocity();
        totalImpulse();
        totalImpulseWithFriction();
        totalKE();
        getShapes() : Array<Shape>;
        getBodies() : Array<Body>;
    }
// Properties, for Chipmunk-JS compatibility
// Space properties
    class Space {
        gravity:any;
        iterations:any;
        damping:any;
        staticBody: Body;
        idleSpeedThreshold:any;
        sleepTimeThreshold:any;
        collisionSlop: number;
        collisionBias: number;
        collisionPersistence:any;
        enableContactGraph:any;

        activateShapesTouchingShape();

        containsBody();

        containsConstraint();

        containsShape();

        destroy();

        getCollisionBias();

        getCollisionPersistence();

        getCollisionSlop();

        getCurrentTimeStep();

        getDamping();

        getEnableContactGraph();

        getGravity();

        getIdleSpeedThreshold();

        getIterations();

        getSleepTimeThreshold();

        getStaticBody();

        init();

        isLocked();

        pointQueryFirst();

        reindexShape();

        reindexShapesForBody();

        reindexStatic();

        setCollisionBias();

        setCollisionPersistence();

        setCollisionSlop();

        setDamping();

        setEnableContactGraph();

        setGravity(g: number);

        setIdleSpeedThreshold();

        setIterations();

        setSleepTimeThreshold();

        step(delta: number);
        useSpatialHash();

        addShape(shape: Shape);

        addCollisionHandler(type1: number, type2: number, collisionBegin: Function, collisionPre: Function,
            collisionPost: Function, collisionSeparate: Function);

        addStaticShape(shape: Shape);

        removeConstraint();

        removeBody(body: Body);

        removeCollisionHandler(type1: number, type2: number);

        removeStaticShape();

        addConstraint();

        addBody(body: Body);
        removeShape(shape: Shape);
    }
// Body properties
    class Body {
        a: any;
        w: number;
        p: any;
        v: cc.Point;
        i: number;
        constructor(m: number, i: number);

        // only in JSB
        //activateStatic();
        //destroy();
        //getAngVelLimit();
        //getAngle();
        getForce() : cc.Point;
        //getMass();
        //getMoment();
        //getRot();
        //getSpace();
        //getTorque();
        //getVelLimit();
        //init();
        //initStatic();
        //setAngVelLimit();
        setForce(vec: cc.Point);
        //setTorque();
        //setVelLimit();
        //sleep();
        //sleepWithGroup();
        //updatePosition();
        //updateVelocity();
        //setUserData(data: any);
        //getUserData(): any;

        getPos(): cc.Point ;
        getVel(): cc.Point ;
        getAngVel() : number;

        /// Returns true if the body is sleeping.
        isSleeping(): boolean ;

        /// Returns true if the body is static.
        isStatic(): boolean ;

        /// Returns true if the body has not been added to a space.
        isRogue(): boolean;

        // It would be nicer to use defineProperty for this, but its about 30x slower:
        // http://jsperf.com/defineproperty-vs-setter
        setMass(mass: number);

        setMoment(moment: number);

        addShape(shape: cp.Shape);

        removeShape(shape: cp.Shape);

        removeConstraint(constraint);

        setPos(pos: cc.Point);

        setVel(velocity: cc.Point);

        // Angle velocity
        setAngVel(w: number);

        setAngleInternal(angle: number);

        setAngle(angle: number);

        velocity_func(gravity: cc.Point, damping: number, dt: number) ;

        position_func(dt: number);

        resetForces() ;

        applyForce(force: cc.Point, r: cc.Point) ;

        applyImpulse(j: cc.Point, r: cc.Point);

        getVelAtPoint(r: cc.Point) ;

        /// Get the velocity on a body (in world units) at a point on the body in world coordinates.
        getVelAtWorldPoint(point): cc.Point;

        /// Get the velocity on a body (in world units) at a point on the body in local coordinates.
        getVelAtLocalPoint(point): cc.Point;

        eachShape(func: (shape: cp.Shape) => any);

        eachConstraint(func: Function);

        eachArbiter(func: Function);

        /// Convert body relative/local coordinates to absolute/world coordinates.
        local2World(v : cc.Point) : cc.Point ;

        /// Convert body absolute/world coordinates to	relative/local coordinates.
        world2Local(v: cc.Point): cc.Point;

        /// Get the kinetic energy of a body.
        kineticEnergy(): number;
    }
    class PolyShape {

    }
// Shape properties
    class Shape {
        body:any;
        group:any;
        collision_type:any;
        cacheBB();
        destroy();
        getBB();
        getBody(): Body;
        getCollisionType(): number;
        getElasticity(): number;
        getFriction(): number;
        getGroup();
        getLayers();
        getSensor(): boolean;
        getSpace():Space;
        getSurfaceVelocity();
        pointQuery();
        setBody(body: Body);
        setCollisionType(type: number);
        setElasticity(e: number);
        setFriction(f: number);
        setGroup();
        setLayers();
        setSensor(bool: boolean);
        setSurfaceVelocity();
        update();
    }
    class SegmentShape extends Shape {
        constructor(body: Body, start: cc.Point, end: cc.Point, radius: number);
    }
// Constraint properties
    class Constraint {
        maxForce:any;
    }
// PinJoint properties
    class PinJoint {
        anchr1:any;
        anchr2:any;
    }
}
