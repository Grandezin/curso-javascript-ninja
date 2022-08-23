/*
Crie um array com 5 items (tipos variados).
*/
let myArray = [18, "joão", true,  obj = {}, fun = () => {"save"}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
const adiciona = (itemAdicionar) =>{
    myArray.push(itemAdicionar);
    return myArray
};
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
adiciona(novaArroz = [false, 25.3, undefined]);
console.log(myArray);
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${myArray[5][1]}`);
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArray.length} itens`);
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array criado tem ${myArray[5].length} itens`);
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var i = 10;
while(i <= 20){
    i % 2 == 0 ? console.log( 'Números pares entre 10 e 20:' + i) : console.log();
    i++;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var x = 10;
while(x < 21){
    if(x % 2 == 1){
        console.log( 'Números ímpares entre 10 e 20: ' + x );
    }
    x++;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(let i = 100; i <= 120; i++){
    i % 2 == 0 ? console.log( 'Números pares entre 100 e 120:' + i ) : console.log()
}
for(let i = 111; i <= 125; i++){
    i % 2 == 1 ? console.log( 'Números ímpares entre 100 e 120:' + i ) : console.log()
}