function classificarNadador(idade) {
    if (idade >= 5 && idade <= 7) {
      return "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
      return "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
      return "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
      return "Juvenil B";
    } else if (idade >= 18) {
      return "Adulto";
    } else {
      return "Idade fora das categorias.";
    }
  }
  console.log(classificarNadador(6)); 
  console.log(classificarNadador(12)); 
  console.log(classificarNadador(19)); 
  