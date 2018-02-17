// console.log(`destructuring`)

// const person = {
//   name: 'Guy',
//   age: 25,
//   location: {
//     city: 'Hongkong',
//     temp: 30
//   }
// }

// const { name: namez = 'Anonymous', age } = person
// console.log(`${namez} is ${age}`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} degree in ${city}`)
// }

const book = {
  name: 'Ego in the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-published' } = book.publisher

console.log(publisherName)