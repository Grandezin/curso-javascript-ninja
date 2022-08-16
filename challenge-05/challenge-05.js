/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/ 
let aleatorio = [1,2,3,5,8,13,21];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
let myFunction = (aleat) => aleat;
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(aleatorio)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
let valores = (array, indice) => array[indice]
console.log(valores(aleatorio,3));
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let diferentes = ["String",18,NaN,null,undefined];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(valores(diferentes,0));
console.log(valores(diferentes,1));
console.log(valores(diferentes,2));
console.log(valores(diferentes,3));
console.log(valores(diferentes,4));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
let book = (nomeLivro)=>{
    let livros = {
        HajimeteNoGall:{
            nome: "Hajimete no Gall",
            qauantidadeCapitulos: 139,
            autor: "Meguru Ueno",
            editora: "Monthly Shōnen Ace"

        },
        NanatsuNoTaizai:{
            nome: "Nanatsu no Taizai",
            qauantidadeCapitulos: 41,
            autor: "Nakaba Suzuki",
            editora: "Weekly Shōnen Magazine"
        },
        Naruto:{
            nome: "Naruto Shipuden",
            qauantidadeCapitulos: 72,
            autor: "Massachi Kishimoto",
            editora: " Weekly Shōnen Jump"
        }
    }
    if(nomeLivro === "HajimeteNoGal"){
        return livros.HajimeteNoGall;
    }
    if(nomeLivro === "NanatsuNoTaizai"){
        return livros.NanatsuNoTaizai;
    }
    if(nomeLivro === "Naruto"){
        return livros.Naruto;
    }
    if(nomeLivro == undefined){
        return livros;
    }
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O mangá ${book("Naruto").nome} tem ${book("Naruto").qauantidadeCapitulos} capitulos`);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do mangá ${book("HajimeteNoGal").nome} é ${book("HajimeteNoGal").autor}`);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O maga ${book("NanatsuNoTaizai").nome} foi postado pela editora ${book("NanatsuNoTaizai").editora}`);
