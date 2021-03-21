/* function () constructor
    * expressão new
    * criar um novo objeto
    * this keyword(esta palavra chave)
 */

function Person(name) {
    this.name = name
    this.walk = function () {
        return "andando"

    }
}



const erika = new Person('Erika')
const jonas = new Person('Jonas')
console.log(typeof jonas)

console.log(jonas,erika)
console.log(jonas.walk())
console.log(erika.walk())

let date = new Date ("2020-07-25")
console.log(date)
console.log(typeof date)//  new object