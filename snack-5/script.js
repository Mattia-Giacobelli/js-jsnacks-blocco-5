const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

//Using for
const evenNums = []

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    
    if (num % 2 === 0) {
        evenNums.push(num)
    }
}
console.log(evenNums);

//Using forEach
const evenNumsEach = []

nums.forEach((num) => {
    if (num % 2 === 0) {
        evenNumsEach.push(num)
    }
})
console.log(evenNumsEach);



// Risultato: [2, 8, 4, 12]