function person(name, idade){
    this.name = name
    this.idade= idade
}

const mayk = new person("maik", 20)
const joao = new person('joao', 20)

console.log(mayk)
console.log(joao.idade)