class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string): string {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

class Car {
  readonly numberOfWheels: number = 4
  constructor(readonly model: string) { } // short version of this.model = model
}

const lada = new Car('lada')
console.log(lada.model)
console.log(lada.numberOfWheels)

class Animal {
  protected voice: string
  public color: string = 'black'
  constructor() {
    this.voice = 'null'
  }

  private go(): void {
    console.log('go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const musia = new Cat()
musia.setVoice('meow')
musia.color = 'red'
console.log(musia.color)


abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponents extends Component {
  render(): void {
    console.log('is rendering')
  }
  info(): string {
    return `Hello world, info is here`
  }
}
const comp = new AppComponents();
comp.render();
console.log(comp.info());


