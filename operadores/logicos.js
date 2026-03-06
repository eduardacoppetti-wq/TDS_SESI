let temDinheiro = tru;
let estaChovendo = false;
let carroEstaNaGaragem = false;

let resultadoAND = "#AND voce vai no shopping? ";
resultadoAND += temDinheiro && estaChovendo;
console.log(resultadoAND);

let resultadoOR = "#OR voce vai no shopping? ";
resultadoAND += temDinheiro || carroEstaNaGaragem;
console.log(resultadoOR);