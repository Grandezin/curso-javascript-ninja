/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Taça das Favelas"
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [
    "Drogados e perigosos", 
    "Oficina do seu osmar", 
    "Obra do Tiaão",
    "Donos da boca",
    "Pouco pai e muita bola"
]

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
let showTeamPosition = (posicao) =>{
    if(posicao < teams.length){
        console.log(`O time que está em ${posicao + 1}º lugar é o ${teams[posicao]}.`);
    }else{
        console.log("Não temos a informação do time que está nessa posição.")
    }
    
}
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(0);
showTeamPosition(1);
showTeamPosition(2);

teams.push('ronald e amigos')
showTeamPosition(5);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var x = 20;

while(x <= 30){
    console.log(x)
    x++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
let convertToHex = (cor) => {
    switch(cor){
        case "red":
            console.log("#FF0000")
            break;
        case "black":
            console.log("#000000")
            break;
        case "blue":
            console.log("#0000FF")
            break;
        case "green":
            console.log("#008000")
            break;
        case "cyan":
            console.log("#00FFFF")
            break;
        case "skyblue":
            console.log("#87CEEB")
            break;
        case "snow":
            console.log("#FFFAFA")
            break;
        case "grey":
            console.log("#BEBEBE")
            break;
        case "yellow":
            console.log("#9ACD32")
            break;
        default:
            console.log("Não consta no sistema")             
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex("green");
convertToHex("red");
convertToHex("black");
convertToHex("cyan");
convertToHex("skyblue");
convertToHex("snow");
convertToHex("grey");
convertToHex("yellow");
convertToHex("lithblack");
 