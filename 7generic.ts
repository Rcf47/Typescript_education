const arrayNumbers: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayStrings: Array<string> = ['Hello', 'my', 'friend']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

console.log(reverse(arrayNumbers))
console.log(reverse(arrayStrings))
