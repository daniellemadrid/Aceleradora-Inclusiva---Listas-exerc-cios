function calcularCredito(saldoMedio) {
    let credito;
    
    if (saldoMedio >= 601) {
      credito = saldoMedio * 0.4;
    } else if (saldoMedio >= 401) {
      credito = saldoMedio * 0.3;
    } else if (saldoMedio >= 201) {
      credito = saldoMedio * 0.2;
    } else {
      credito = 0;
    }
    
    return `Saldo Médio: R$ ${saldoMedio.toFixed(2)}, Crédito: R$ ${credito.toFixed(2)}`;
  }
  console.log(calcularCredito(650)); 
  console.log(calcularCredito(450)); 
  console.log(calcularCredito(150)); 
  
  // tofixed() mostra somente até dois dígitos