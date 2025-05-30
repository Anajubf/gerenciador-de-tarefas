let tarefas = [
  "Estudar JavaScript",
  "Fazer exercícios de matemática",
  "Lavar a louça",
  "Comprar mercado",
  "Ir à academia",
  "Ler um livro",
  "Fazer revisão para o teste",
  "Limpar o quarto",
  "Estudar para concurso",
  "Organizar o computador",
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
