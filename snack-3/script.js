const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

//Using for
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i] ++;
    
// }
// console.log(numbers);

//using map
const incrementedNumbers = numbers.map(number => number + 1);
console.log(incrementedNumbers);


// Risultato: [3, 9, 5, 8, 3, 88]