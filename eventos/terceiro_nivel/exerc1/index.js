let itens = document.querySelectorAll("#lista li");

  for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener("click", function() {
      itens[i].remove();
    });
  }
  // querySelectorAll irá pegar todos os elementos da nossa lista não ordenada