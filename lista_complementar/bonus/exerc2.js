function calcularMediaPares() {
    let soma = 0;
    let contador = 0;
    for (let i = 1; i <= 50; i++) {
      if (i % 2 === 0) {
        soma += i;
        contador++;
      }
    }
    return soma / contador;
  }
  console.log(calcularMediaPares());
  