var rect1 = {
    id: 'sd34f23g',
    size: {
        widht: 10,
        height: 20
    },
};
var rect2 = {};
var rect3 = {}; // old style {} = Rect type
var rectWithArea = {
    id: 'hello123World',
    size: {
        widht: 20,
        height: 32,
    },
    getArea: function () {
        var result = this.size.widht * this.size.height;
        return result;
    }
};
console.log(rectWithArea.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
    1: 'aaa',
    getSomething: function () {
        console.log(namw);
  }
};
