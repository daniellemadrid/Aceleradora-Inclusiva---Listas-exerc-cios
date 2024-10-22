let imagem = document.getElementById("imagem");
let expandida = false;

imagem.addEventListener("click", function() {
  if (expandida) {
    imagem.style.width = "200px";
    imagem.style.height = "200px";
  } else {
    imagem.style.width = "100%";
    imagem.style.height = "auto";
  }
  expandida = !expandida;
});