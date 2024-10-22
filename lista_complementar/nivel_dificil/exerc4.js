function multiplicarAteN(n) {
    let produto = 1;
    for (let i = 1; i <= n; i++) {
      produto *= i;
    }
    return produto;
  }
  console.log(multiplicarAteN(5));
  