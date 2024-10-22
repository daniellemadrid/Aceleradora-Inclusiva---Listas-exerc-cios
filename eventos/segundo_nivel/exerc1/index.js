let contador = 0;
document.getElementById("botaoContador").addEventListener("click", function() {
  contador++;
  document.getElementById("contador").innerText = contador;
});