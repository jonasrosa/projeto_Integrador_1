// Arrow Function( função expression)

const  sayMyName = () => {
    console.log('Jonas')

}

sayMyName()


//callback  function (chamar de volta)

function newName(name) {

    //console.log('anates de executar a função callback')

     //name()


}

newName(
    () => {
        console.log('estou em um call back')
    }
)

