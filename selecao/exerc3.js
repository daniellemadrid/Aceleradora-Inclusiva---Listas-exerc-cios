function calculadora(operacao, num1, num2) {
    switch (operacao) {
      case "adição":
        return num1 + num2;
      case "subtração":
        return num1 - num2;
      case "multiplicação":
        return num1 * num2;
      case "divisão":
        return num1 / num2;
      default:
        return "Operação inválida.";
    }
  }
  console.log(calculadora("adição", 10, 5)); 
  console.log(calculadora("multiplicação", 10, 5)); 
  