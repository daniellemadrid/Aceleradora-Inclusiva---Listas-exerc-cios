function classificarNota(nota) {
    if (nota >= 60) return "Aprovado";
    else if (nota >= 40) return "Em recuperação";
    else return "Reprovado";
  }
  console.log(classificarNota(55));
  