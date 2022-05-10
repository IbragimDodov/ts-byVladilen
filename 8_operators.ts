interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person

let key: PersonKeys = 'name'
key = 'age'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeyNoMeta1 = Exclude<keyof User, '_id' | 'created'>
type UserKeyNoMeta2 = Pick<User, 'name' | 'email'>