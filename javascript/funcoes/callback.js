function saymyname (name){
    console.log('oi')
    
    name()
}

saymyname(    // name = function (){} ----> name()
    function (){
        console.log('estou em uma callback')
    }
)