/*
Atalho comentario de varias linhas:
alt + shift + A

Desafio:Criar uma funcao que receba preco de desconto em % e mostre o valor final com desconto.
Criar outra funcao que receba preco e quantidade e mostre o valor total da compra.

*/

function criarCalculardesconto () {
    const valorFinal = preco - (preco * desconto);
    return valorFinal = preco - (preco * (desconto / 100));
    console.log(`O valor final do produto foi de: $(valorFinal)`);
    }
criarCalculardesconto(1000, 5);

    function calcularTotal(preco, quantidade) {
const valorTotal = preco * quantidade;
console.log(`O valor total e de: $(valortotal)`);
    }

    calcularTotal(100, 12);

    
