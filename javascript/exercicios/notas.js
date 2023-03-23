
let nota = 97

let scoreA= nota >= 90 && nota <=100   //(retorna true )
let scoreB= nota >=80 && nota <= 89
let scoreC= nota >=70 && nota <= 79
let scoreD= nota >=60 && nota <= 69
let scoreF= nota <60  && nota >=0

let scoreFinal;

if(scoreA){
    scoreFinal= 'a'  //(true) ira executar oque for true
}else if(scoreB){
    scoreFinal = 'B'
}else if(scoreC){
    scoreFinal = 'C'
}else if(scoreD){
    scoreFinal = 'D'
}else{ scoreFinal = 'F'}

console.log(scoreFinal)