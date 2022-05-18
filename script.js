var intervalo1 = 0;
var intervalo2 = 10;
var numerosecreto = parseInt(Math.random() * (intervalo2 - intervalo1 + 1)) + intervalo1;
var i = 0;

chute = prompt("Qual o número que você quer chutar no intervalo de " + intervalo1 + " e " + intervalo2 + "?");

while (chute >= intervalo2 || chute <=intervalo1) {
  chute = prompt("Digite um número válido no intervalo de " + intervalo1 + " e " + intervalo2 + ".");
}

for (i = 0; i <= 2; i++) {
  if (chute == numerosecreto) {
    alert("Parabéns!! Você acertou o número secreto que é " + numerosecreto + " =D")
    break;
  } if (i == 2) {
    alert("Você esgotou o número de tentativas. O número secreto era " + numerosecreto + "!");
  } else {
    tentativas = 2-i;
    alert("Ooops.. Você errou. Você ainda tem mais " + tentativas + " tentativa(s).")
    chute = prompt("Digite um número válido no intervalo de " + intervalo1 + " e " + intervalo2 + ".");
  }
}