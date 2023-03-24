let gastos = { 
    receitas:[2500,3200,250.43,360.45],
    despesas:[320.34,128.45,176.87,1450.00]}

function sum(array){ 
    let total =0;

    for(let value of array){ //let value = 2500,3200,250.43,360.45
        total+=value
    }
    return total
}
function calculeABalança(){

    const calcDespesas= sum(gastos.despesas)
    const calcGastos=sum(gastos.receitas)

    const total = calcGastos - calcDespesas

    const itsok= total >=0
    let balanceText= 'negativo'

    if(itsok){
        balanceText ='positivo'
    }
    console.log(`seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)

}

calculeABalança()
