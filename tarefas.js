let tarefas = [
  'Estudar JavaScript',
  'Fazer exercícios de matemática',
  'Lavar a louça',
  'Comprar mercado',
  'Ir à academia',
  'Ler um livro',
  'Fazer revisão para o teste',
  'Limpar o quarto',
  'Estudar para concurso',
  'Organizar o computador',
];

//Adicionando ao menos 2 novas tarefas à lista de tarefas
console.log(`Antes do push ${tarefas}`);
tarefas.push(`Estudar para a prova` , `Ler um livro.`);

console.log(`Depois do push ${tarefas}`);

//Removendo a última tarefa da lista
console.log(`Antes do pop ${tarefas}`);

let tarefaRemovida = tarefas.pop();

console.log(`Depois do pop ${tarefas}`);
console.log(`Tarefa removida: ${tarefaRemovida}`);

//Adicionando uma tarefa no início da lista
console.log(`Antes do unshift: ${tarefas}`);

tarefas.unshift(`Arrumar a casa`);

console.log(`Depois do unshift: ${tarefas}`);

//Removendo a primeira tarefa da lista

console.log(`Antes o shift: ${tarefas}`);

let tarefaRemovida01 = tarefas.shift();
console.log(`Depois do push: ${tarefas}`);
console.log(`Tarefa removida: ${tarefaRemovida01}`);

//Verificando se uma tarefa existe

console.log(`A tarefa inclui Ir à academia? ${tarefas.includes("Ir à academia")}`);

//Transformando a lista de tarefas em uma string separada por vírgulas
console.log(`Tarefa como string: ${tarefas.join(', ')}`);

// Transformando a lista de tarefas em uma string separada por vírgulas
console.log(`Parte da tarefa (índices 2 a 4): ${tarefas.slice(2, 5)}`);

//Removendo a tarefa do índice 3 e substituindo por uma nova tarefa
console.log(`Antes do splice: ${tarefas.join(', ')}`);

let elementoRemovido = tarefas.splice(3, 1, "Beber água");

console.log(`Elemento removido: ${elementoRemovido}`);
console.table(tarefas);

//Criando uma nova lista com tarefas adicionais e juntando com a lista original
let tarefas01 = ['Jogar' , 'Correr'];

console.log(`Tarefa combinada: ${tarefas.concat(tarefas01)}`);
console.log(`Tarefa combinada: ${tarefas.concat(tarefas01).join(', ')}`);

//Adicionando a palavra "Fazer:" no início de cada tarefa

let tarefa = tarefas.map( tarefas => "Fazer: " + tarefas);
console.log(`Inserindo a palavra Fazer: ${tarefa}`);

//Filtrando as tarefas que têm mais de 15 caracteres
let tarefasFiltrada = tarefas.filter(tarefas => tarefas.length > 15);
console.log("Tarefas filtradas (Tarefas com mais de 15 caracteres):", tarefasFiltrada);

//Organizando as tarefas em ordem alfabética
let tarefasOrdenada = tarefas.sort();
console.log("Tarefas ordenadas:", tarefasOrdenada);

//Invertendo a ordem das tarefas
let tarefasInvertida = tarefas.reverse();
console.log("Tarefas invertidas:", tarefasInvertida);