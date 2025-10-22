const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'

//Using for loop
let studentClass = '';
for (let i = 0; i < students.length; i++) {
  student = students[i].name;
  if (student === 'Marco Lanci') {
    studentClass = students[i].class;
    break;
  }
}
console.log(studentClass); 
// Risult

// Risultato: '3C'