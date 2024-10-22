function adicionarFruta(array, fruta) {
    array.unshift(fruta);
    console.log("Array atualizado:", array);
  }
  let frutas = ['Banana', 'Maçã'];
  adicionarFruta(frutas, 'Laranja'); 
  