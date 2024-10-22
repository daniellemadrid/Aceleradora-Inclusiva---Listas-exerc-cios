function saque(valorSaque) {
    let saldo = 300;
    
    if (valorSaque <= saldo) {
      saldo -= valorSaque;
      return `Saque realizado com sucesso. Saldo atual: R$ ${saldo}`;
    } else {
      return "Saldo insuficiente para realizar o saque.";
    }
  }
  console.log(saque(150));
  console.log(saque(350)); 
  