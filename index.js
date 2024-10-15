// Definindo as variáveis para o nome e a quantidade de experiência do herói
let nome = "André";  // Você pode alterar o nome conforme desejar
let xp = 1002;        // Você pode alterar a quantidade de XP conforme desejar
let nivel;

// Verificando o nível do herói com base na quantidade de XP
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else if (xp >= 10001) {
  nivel = "Radiante";
}

// Exibindo a mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
