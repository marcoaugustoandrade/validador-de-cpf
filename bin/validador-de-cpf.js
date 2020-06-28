const listaInvalida = new Set([
  "00000000000",
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999",
]);

const satinizar = (cpf) => {
  // TODO: remove todos caracteres que não sejam números
  return cpf.replace("-", "").replace(".", "").replace(".", "");
};

const verificarCPF = (cpf) => {
  cpf = satinizar(cpf);

  // É inválido caso esteja na lista inválida
  if (listaInvalida.has(cpf)) {
    console.log("Inválido: está na lista de exclusão");
    return false;
  }

  // Caso o tamanho da string não seja do tamanho 11
  // if (cpf.lenght != 11) {
  //   console.log('Inválido: mais que 11 caracteres')
  //   return false;
  // }

  // Calculando o primero dígito verificador
  let primeiroDigito = 0;
  let somador = 0;
  let multiplicador = 10;
  for (let i = 0; i < 9; i++) {
    somador = somador + cpf[i] * multiplicador;
    multiplicador -= 1;
  }

  let resto = somador % 11;

  if (resto >= 2) {
    primeiroDigito = 11 - resto;
  }

  // Calculando o segundo dígito verificador
  let segundoDigito = 0;
  somador = 0;
  multiplicador = 11;
  for (let i = 0; i < 10; i++) {
    somador = somador + cpf[i] * multiplicador;
    multiplicador -= 1;
  }

  resto = somador % 11;

  if (resto >= 2) {
    segundoDigito = 11 - resto;
  }

  if (primeiroDigito == parseInt(cpf[9]) && segundoDigito == parseInt(cpf[10])) {
    return true;
  }
  return false;
};

module.exports = verificarCPF;
