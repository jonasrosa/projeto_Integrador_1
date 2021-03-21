//Manipulação de Arrays

 let techs = ["html", "css","js"]
let techs01 = ["onibus", "carro","python", "klotling","boostry","moto", "van"]
let car = ["Ferrari", "BMW","GM", "FIAT"]

// pegar somente alguns elementos especificos do array
console.log(car.slice(0,3))// (inicio , fim )

// encontra um elemento na array

let index = car.indexOf("BMW")
console.log(index)

// tambem podesse remover conforme a indexaçao
car.splice(index,1)
console.log(car)

//adicionar um item no fim
techs.push("HTTPS")

// adicionar no comecos
techs.unshift('sql')

//remover um item do final
 techs01.pop()

// remover do final inicio
techs01.shift()
// remover um ou mais elementos posição especifica
techs01.splice(0,5)

console.log(techs01)
console.log(techs)






