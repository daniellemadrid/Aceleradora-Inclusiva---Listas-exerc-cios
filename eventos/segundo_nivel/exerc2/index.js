document.getElementById("formulario").addEventListener("submit", function(event) {
    let campoTexto = document.getElementById("campoTexto").value;
    if (campoTexto === "") {
      alert("O campo de texto não pode estar vazio!");
      event.preventDefault(); 
    }
  });

  // preventDefault não envia o formulário se os campos estiverem vazios