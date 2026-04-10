const componentes = ["culer", "monitor", "mouse", "placa de video, Memoria Ram"];

componentes.shift(componentes[0]);
componentes.push("CPU");

console.log(componentes[0]);
console.log(componentes[1]);
console.log(componentes[2]);
console.log(componentes[3]);
console.log(componentes);

const clienteNome = {
    nome : "Eduarda",
    possuicupom : true
}

const clienteIdade = {
    nome : "16" ,
    possuicupom : true
}
console.log

function processarVenda(valorTotal, possuiCupom){
    letvalorFinal = valorTotal > 500 && possuiCumpom == true ? valorTotal = (valorTotal - (valorTotal * 0.15)) : valorTotal;

    if (clienteIdade >= 16){
        console.log(`Venda Autorizada para ${clienteNome}`);
        for (let num = 1; num <= 5; num++){
            estoque.splice();
            console.log(`Despachando Item ${estoque[num]}...ok! `);
        }
    } else {
        console.log(`Venda bloqueada: Idade Insuficiente`);
}

return valorFinal;

}
console.log(`Relatorio da loja: Cliente ${ClienteNome} processou um pedido de R$${processarVenda(valorTotal, possuiCupom)}.
Itens restantes no estoque ${estoque.lenght}`);

