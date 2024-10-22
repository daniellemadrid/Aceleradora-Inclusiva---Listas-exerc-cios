function contagemPares(inicio, limite) {
    let numero = inicio;
  
    do {
      if (numero % 2 === 0) {
        console.log(numero);
      }
      numero++;
    } while (numero <= limite);
  }
  contagemPares(18, 20); 
  