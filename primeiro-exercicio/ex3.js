/* Q3.A) Você interceptou uma transmissão de um código secreto que precisa ser decodificado, armazenado na variável codigoSecreto.
        Antes de processá-lo, é necessário garantir que todas as letras sejam maiúsculas.
*/

const codigoSecreto = "3Z4W2Y1X6U8S9R7T5V??!!";
console.log(codigoSecreto.toUpperCase());

/*  Q3.B) O seu time descobriu como o código foi encriptado. Basta agora substitiuir os caracteres originais em codigoSecreto por suas traduções.
+-------------------+----------+
| Caracter Original | Tradução |
+-------------------+----------+
| 3Z                | a        |
| 4W                | d        |
| 2Y                | e        |
| 1X                | h        |
| 6U                | n        |
| 8S                | r        |
| 9R                | s        |
| 7T                | t        |
| 5V                | u        |
| ??                | 73       |
| !!                | 19       |
+-------------------+----------+
*/

console.log(
  codigoSecreto
    .replaceAll("3Z", "a")
    .replaceAll("4W", "d")
    .replaceAll("2Y", "e")
    .replaceAll("1X", "h")
    .replaceAll("6U", "n")
    .replaceAll("8S", "r")
    .replaceAll("9R", "s")
    .replaceAll("7T", "t")
    .replaceAll("5V", "u")
    .replaceAll("??", "73")
    .replaceAll("!!", "19")
);
