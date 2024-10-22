function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
      return "Triângulo Equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
      return "Triângulo Isósceles";
    } else {
      return "Triângulo Escaleno";
    }
  }
  console.log(tipoTriangulo(5, 5, 5)); 
  console.log(tipoTriangulo(5, 5, 3)); 
  console.log(tipoTriangulo(5, 4, 3)); 