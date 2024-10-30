let numeros = [1, 2, 3, 4, 5]; 
function removerUltimoNumero(array) {
    let removido = array.pop();
    console.log("Número removido:", removido);
    console.log("Array atualizado:", array);
  }
  removerUltimoNumero(numeros); 
  