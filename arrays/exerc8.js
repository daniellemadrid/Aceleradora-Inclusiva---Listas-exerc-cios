function removerNumero(array) {
    if (array.length > 3) {
      let removido = array.pop();
      console.log("Removido o último número:", removido);
    } else {
      let removido = array.shift();
      console.log("Removido o primeiro número:", removido);
    }
    console.log("Array atualizado:", array);
  }
  removerNumero(numeros); 
  