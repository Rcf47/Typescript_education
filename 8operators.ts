interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'

// console.log(key)

key = 'age'

// console.log(key)

type User = {
  _id: number
  name: string
  age: number
  email: string
  createAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAt'>
type UserKeysNoMeta2 = Pick<User, 'name' | 'age' | 'email'>

let user1: UserKeysNoMeta1 = 'name'

console.log(user1)

