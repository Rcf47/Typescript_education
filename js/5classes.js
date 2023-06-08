var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[".concat(name, "]: Typescript version is ").concat(this.version);
    };
    return Typescript;
}());
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    } // short version of this.model = model
    return Car;
}());
var lada = new Car('lada');
console.log(lada.model);
console.log(lada.numberOfWheels);
var Animal = /** @class */ (function () {
    function Animal() {
        this.color = 'black';
        this.voice = 'null';
    }
    Animal.prototype.go = function () {
        console.log('go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var musia = new Cat();
musia.setVoice('meow');
musia.color = 'red';
console.log(musia.color);
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponents = /** @class */ (function (_super) {
    __extends(AppComponents, _super);
    function AppComponents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponents.prototype.render = function () {
        console.log('is rendering');
    };
    AppComponents.prototype.info = function () {
        return "Hello world, info is here";
    };
  return AppComponents;
}(Component));
var comp = new AppComponents();
comp.render();
console.log(comp.info());
