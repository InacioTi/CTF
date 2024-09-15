// main.js - código malicioso para ler e retornar o arquivo flag.txt
const fs = require('fs');
const path = '/path/to/flag.txt'; // Substitua pelo caminho correto do arquivo

// Ler o conteúdo do arquivo
const content = fs.readFileSync(path, 'utf8');

// Exibir o conteúdo do arquivo (assumindo que o servidor imprime o conteúdo de stdout)
console.log(content);
