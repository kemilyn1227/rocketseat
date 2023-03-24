function transformDegree(degree){
    const celsiusExists =degree.toUpperCase().includes('C')
    const fahrenheitExists =degree.toUpperCase().includes('F')
    
    //fluxo de erro

    if (!celsiusExists && !fahrenheitExists){
       throw new Error('grau nao indetificado')
    }
    //fluxo ideal

    let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9 //vai converter de fahrenheit para celcius
    let degreeSign= 'C' //vai adicionar o simbolo

    //fluxo alternativo

    if(celsiusExists){
         updatedDegree = Number(degree.toUpperCase().replace('C', '')); //transforma em numero, mandar tudo para maiuscula e retirar a letra
         formula = (celcius) => celcius *9/5 +32 
         degreeSign= 'F' //vai adicionar o simbolo 
    }

    return formula(updatedDegree)+ degreeSign //ira retornar o numero e adicionar o simbolo

    
}



try{
    console.log(transformDegree('50c'))
    console.log(transformDegree('50f'))
    console.log(transformDegree('50p'))
   

}catch(error){
    console.log(error.message) //error.message não mostra a descriçao total apenas a mensagem
}