// utilize o node para rodar
// node tarefa01.js 

function getChangeLetters(word) {
  const changes = [];
  // Função auxiliar para gerar as permutações
  function runChanges(currentWord, otherLetters) {
    // Caso base: todas as letras foram utilizadas
    if (otherLetters.length === 0) {
      changes.push(currentWord);
      return;
    }

    // Gera as mudanças
    for (let i = 0; i < otherLetters.length; i++) {
      const newWord = currentWord + otherLetters[i];
      const newOtherLetters =
        otherLetters.slice(0, i) + otherLetters.slice(i + 1);
      runChanges(newWord, newOtherLetters);
    }
  }

  // Chamar a função auxiliar inicialmente
  runChanges('', word);

  return changes;
}

// Exemplo de uso
const word1 = 'QWE';
const word2 = 'ZXCV';
const test1 = getChangeLetters(word1);
const test2 = getChangeLetters(word2);
console.log(`Ordenações para: ${word1}`, test1);
console.log(`Ordenações para: ${word2}`, test2);

// Explicação
// A função getChangeLetters recebe um parâmetro word a qual usaremos como a palavra inicial.
// É criada uma variável changes que a cada ciclo vai armazenar as novas palavras.
// Criei um médodo interno runChanges, que recebe dois parâmetros: currentWord (a palavra atual) e otherLetters (basicamente são as letras que faltam).
// Dentro da função runChanges é feito uma simples verificação: se não há mais letras restantes, significa que todas as letras foram utilizadas na mudança atual. Nesse caso, a palavra atual é adicionada ao array changes e o ciclo se começa de novo.
// Em seguida, é feito um loop for para percorrer todas as letras restantes(coomo é bem simples eu preferi usar o for).
// Dentro do loop, a palavra atual é atualizada adicionando a letra atual das otherLetters a ela.
// A variável newOtherLetters é atualizada para remover a letra atual das otherLetters.
// A função runChanges é chamada recursivamente passando a nova palavra atualizada e as novas letras restantes.
// Após o término do loop e da recursão, todas as mudanças possíveis foram geradas e armazenadas no array changes.
// A função runChanges é inicialmente chamada com uma palavra vazia e a palavra de entrada word, para iniciar o processo de geração das permutações.
// Por fim, o array chages é retornado, contendo todas as ordenações possíveis das letras da palavra de entrada.
