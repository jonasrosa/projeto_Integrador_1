//Manipulação de Arrays

// Criar Array com construtor

let myArrayvazio = new Array (10)
console.log(myArrayvazio)

let element= ["a", "b","c"]
console.log(element.length)// quantidade de elementos

console.log(["a", {type: "array"}, function () { return "aló"}])

console.log(["Carro",{type:"Fiat"},function () { return " Produzido no Brasil"

},][0])

// Transformar uma cadeia de caracteres em  elementos  em um array

let manipuletionword = "manipulacão"
console.log(Array.from(manipuletionword))





