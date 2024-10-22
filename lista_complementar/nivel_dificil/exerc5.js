function somarDigitos(numero) {
    let soma = 0;
    while (numero > 0) {
      soma += numero % 10;
      numero = Math.floor(numero / 10);
    }
    return soma;
  }
  console.log(somarDigitos(123));
  
//  A função Math.floor() é utilizada para arredondar um número para baixo, retornando o maior inteiro menor ou igual ao número fornecido.
//  Isso significa que ela remove a parte decimal de um número, resultando em um número inteiro.
// O uso de Math.floor() é a maneira mais direta e legível de garantir que você obtenha a parte inteira de uma divisão. 
// Se não utilizássemos Math.floor(), o resultado da divisão ainda seria um número decimal. Poderiamos utilizar o parseInt() ou OR |

