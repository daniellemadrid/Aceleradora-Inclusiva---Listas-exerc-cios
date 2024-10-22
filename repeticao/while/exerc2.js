let tentativas = ["senha123", "admin", "senhaCorreta", "user123"];
let senhaCorreta = "senhaCorreta";
let i = 0;

while (i < tentativas.length) {
  if (tentativas[i] === senhaCorreta) {
    console.log("Acesso concedido");
    break;
  }
  i++;
}
