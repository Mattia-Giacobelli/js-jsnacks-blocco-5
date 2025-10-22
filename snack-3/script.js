const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

incrementedNumbers = []
//Using for
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i] + 1;
    incrementedNumbers.push(number)
}
console.log(incrementedNumbers);

//using map
const incrementedNumbersMap = numbers.map(number => number + 1);
console.log(incrementedNumbersMap);

//Using forEach
const incrementedNumbersEach = [] 
numbers.forEach(number => {
    number ++
    incrementedNumbersEach.push(number)
});
console.log(incrementedNumbersEach);

// Risultato: [3, 9, 5, 8, 3, 88]