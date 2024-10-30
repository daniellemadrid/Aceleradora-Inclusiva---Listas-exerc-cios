let numeros = [10, 20, 30, 40, 50]; 
function manipularArray(array, numero) {
    if (numero > 50) {
      let removido = array.pop();
      console.log("Número maior que 50, removido:", removido);
    } else {
      array.push(numero);
      console.log("Número adicionado:", numero);
    }
    console.log("Array atualizado:", array);
  }
  manipularArray(numeros, 55); 
  manipularArray(numeros, 30); 
  