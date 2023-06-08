interface Rect {
  readonly id: string,
  color?: string,
  size: {
    widht: number,
    height: number
  }
}

const rect1: Rect = {
  id: 'sd34f23g',
  size: {
    widht: 10,
    height: 20
  },
}

const rect2 = {} as Rect

const rect3 = <Rect>{} // old style {} = Rect type

interface RectWithArea extends Rect {
  getArea: () => number
}

const rectWithArea: RectWithArea = {
  id: 'hello123World',
  size: {
    widht: 20,
    height: 32,
  },
  getArea() {
    const result = this.size.widht * this.size.height;
    return result;
  }
}

console.log(rectWithArea.getArea())

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }

}

//------------
interface Style {
  [key: string]: string  //mistake with () => void my experiments
}

const css: Style = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px',
  1: 'aaa',
}



