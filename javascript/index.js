console.log('existe x antes da declaraçao ', x) // a var existe porem não foi definida
 // var x ---> definiu 

//por a var ser global o js manda ela pra cima -- isso se chama hoisting

{
    //x = 'sim' --> o js só adiciona mas não vemos

    var x = 'sim'
}

console.log('existe x depois da declaraçao ?', x) 