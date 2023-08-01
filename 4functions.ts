interface myPosition {
  x: number | undefined;
  y: number | undefined;
}

interface myWeirdPosition extends myPosition {
  default: string;
}

function position(): myPosition;
function position(a: number, b: number): myPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {
      x: undefined,
      y: undefined,
    };
  }
  if (a && !b) {
    return {
      x: a,
      y: undefined,
      default: a.toString(),
    };
  }
  return { x: a, y: b };
}

let obj = { dsdfff: 123333333123, sfdsdfs: 1233333333333313, sfdsffg: 33333333333, sdvvvvv: 33333333222 };
