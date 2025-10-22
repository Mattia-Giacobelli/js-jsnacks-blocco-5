const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi

//Using for
for (let i = 0; i < people.length; i++) {
  const person = people[i].name;
  console.log(person);
  
}

// Risultato: 'Paolo', 'Giulia', 'Marco'