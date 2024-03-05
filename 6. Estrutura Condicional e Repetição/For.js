const regularArray = [2, 5, 2, 7, 1, 3, 4, 7];

for(let count = 0; count < regularArray.lenght; count++) {
    regularArray[count] += count;
}

console.log(`O array atual é: `, regularArray);