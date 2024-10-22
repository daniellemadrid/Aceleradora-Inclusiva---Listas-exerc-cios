function verificarParOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
  }
  console.log(verificarParOuImpar(7));

  // feito com if ternário na linha 2, faz a mesma coisa que um if comum
  // a diferença é que, como temos uma única condição de ser par ou ímpar, podemos usar um ternário para verificar em 1 linha só
  // estrutura -> condição ? valorSeVerdadeiro : valorSeFalso;