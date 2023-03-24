let numeros = {ordem:[1,2,3,4,5,6]}

function add(num){
    let total =0
    for(let ele of num){

        total+= ele+'1'

    }return total
}

const resultado = add(numeros.ordem)

console.log(resultado)