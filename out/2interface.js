"use strict";
const rect1 = {
    id: 'sd34f23g',
    size: {
        widht: 10,
        height: 20
    },
};
const rect2 = {};
const rect3 = {}; // old style {} = Rect type
const rectWithArea = {
    id: 'hello123World',
    size: {
        widht: 20,
        height: 32,
    },
    getArea() {
        const result = this.size.widht * this.size.height;
        return result;
    }
};
console.log(rectWithArea.getArea());
class Clock {
    time = new Date();
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
    1: 'aaa',
};
//# sourceMappingURL=2interface.js.map