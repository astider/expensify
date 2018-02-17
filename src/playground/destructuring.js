// console.log(`destructuring`)

// Object Destructuring

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

// const book = {
//   name: 'Ego in the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName)


// Array Destructuring

const address = ['49/116', 'Phattanakarn', 'Bangkok']
const [, road, city, zip = 'not available'] = address

console.log(`road name is ${road} and the road is in ${city}`)
console.log(`zip code: ${zip}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [name, , mediumPrice] = item
console.log(`A medium ${name} costs ${mediumPrice}`)