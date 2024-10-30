let numeros = [1, 2, 3, 4, 5]; 
function removerPrimeiroNumero(array) {
    let removido = array.shift();
    console.log("Número removido:", removido);
    console.log("Array atualizado:", array);
  }
  removerPrimeiroNumero(numeros); 
  