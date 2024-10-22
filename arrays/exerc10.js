function manipularFruta(array, fruta) {
    if (fruta === "Morango") {
      let removido = array.shift();
      console.log("Morango removido. Primeiro item removido:", removido);
    } else {
      array.push(fruta);
      console.log(`${fruta} adicionado ao final do array.`);
    }
    console.log("Array atualizado:", array);
  }
  manipularFruta(frutas, 'Morango'); 
  manipularFruta(frutas, 'Pera'); 
  