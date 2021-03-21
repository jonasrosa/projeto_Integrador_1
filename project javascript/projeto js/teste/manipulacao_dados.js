/* prototype

    * prototype-based language
    * prototype chain
    * __proto__
 */

/*
Type conversion ( typecasting) vs Type coersion

* Alteração de um tipo de dado para outro tipo
 */

console.log('9'+ 5)
console.log((Number('9')+5))
console.log('jonas'+ "rosa")

//Transformar String em números , números emString


let string = "123"
console.log( Number( string))
let number = 345
console.log(String(number))


// Contar quantas caracteres tem uma palavra e quantos dígitos tem um número


let word = "Paralelepipedo"
console.log(word.length)

let number1 = 123
console.log(String(number1).length)


// Transformar um 'numero quebrado com 2 casas
// decimais e trocar ponto por vírgula
//## quando uma função e atrelada a  um objeto se chama metodo ###

let number2 = 45888888348.999000
console.log(number2.toFixed(2)//quantas casa após ao ponto
    .replace(".",",")) // trocar motodo por outro
                                           // Ex. o ponto por vírgula.

// Transformar letras mínusculas em maiúsculas. faça o contrário disso também


let word1 = "programar é muito bacana"
console.log(word1.toUpperCase())
let  name2= "ERIKA"
console.log(name2.toLowerCase())

// Verificar se o texto contém a palavra amor

let phrase = "Eu quero viver !!"
console.log(phrase.includes("Amor"))

//Separe um texto que contem espaços em novo arry
// onde cada texto é uma posição do array.
// depois  disso transforme o array em um texto e onde eram espaços coloque _


let space = "colocar anderline no lugar de array"
let myArray =  space.split(" ")// Um espaço da uma aspa, mais de um da outro resultado
console.log(myArray)
spaceWithUnderscore = myArray.join("*")//  com esse metodo, se substitui
                                      // o espaço por qual quer caracter desejado
console.log(spaceWithUnderscore)



