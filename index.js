import HashMap from "./hashMap.js"

const test = HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('lion', 'smelly')


console.log(test.bucketSize())
test.set('moon', 'silver')
test.set('star', 'teal')
test.set('lion', 'smeaky')
test.set('kite', "brownish")
console.log(test.bucketSize())
console.log(test.get("lion"))
console.log(test.remove("kite"))
console.log(test.length())



