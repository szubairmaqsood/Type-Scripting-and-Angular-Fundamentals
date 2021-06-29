function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log('Finally: ' + i);
    var count = 5;
    //count='a'
    var a;
    var b;
    var c;
    var d;
    var e = [1, 2, 3];
    var f = [1, true, 'a', false];
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var BackGroundColor = Color.Green;
}
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw1 = function () {
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var drawPoint = function (point) {
    console.log(point.x);
};
function log(message) {
    console.log(message);
}
var doLog = function (message) {
    console.log(message);
};
var message = 'Hello World';
log(message);
doLog(message);
doSomething();
drawPoint({
    x: 1,
    y: 2
});
