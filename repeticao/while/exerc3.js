let operacoes = [
    { operacao: 'soma', num1: 10, num2: 5 },
    { operacao: 'subtracao', num1: 8, num2: 3 },
    { operacao: 'multiplicacao', num1: 4, num2: 2 },
    { operacao: 'divisao', num1: 20, num2: 4 }
  ];
  let indice = 0;
  
  while (indice < operacoes.length) {
    let { operacao, num1, num2 } = operacoes[indice];
  
    switch (operacao) {
      case 'soma':
        console.log(`Resultado da soma: ${num1 + num2}`);
        break;
      case 'subtracao':
        console.log(`Resultado da subtração: ${num1 - num2}`);
        break;
      case 'multiplicacao':
        console.log(`Resultado da multiplicação: ${num1 * num2}`);
        break;
      case 'divisao':
        console.log(`Resultado da divisão: ${num1 / num2}`);
        break;
      default:
        console.log('Operação inválida');
    }
  
    indice++;
  }  