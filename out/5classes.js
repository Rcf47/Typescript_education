"use strict";
class Typescript {
    version;
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
class Car {
    model;
    numberOfWheels = 4;
    constructor(model) {
        this.model = model;
    } // short version of this.model = model
}
const lada = new Car('lada');
console.log(lada.model);
console.log(lada.numberOfWheels);
class Animal {
    voice;
    color = 'black';
    constructor() {
        this.voice = 'null';
    }
    go() {
        console.log('go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const musia = new Cat();
musia.setVoice('meow');
musia.color = 'red';
console.log(musia.color);
class Component {
}
class AppComponents extends Component {
    render() {
        console.log('is rendering');
    }
    info() {
        return `Hello world, info is here`;
    }
}
const comp = new AppComponents();
comp.render();
console.log(comp.info());
//# sourceMappingURL=5classes.js.map