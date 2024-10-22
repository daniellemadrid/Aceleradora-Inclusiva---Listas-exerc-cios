function calculadoraSimples(num1, num2, operacao) {
    switch (operacao) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return "Operação inválida";
    }
  }
  console.log(calculadoraSimples(10, 5, '*'));
  