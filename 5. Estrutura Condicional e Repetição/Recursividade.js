 function calculatedfibonacciTerm(termNumber) {
    if (termNumber === 0) {
        return 0;
    }

    if (termNumber === 1) {
        return 1;
    }

    return (
        calculatedfibonacciTerm(termNumber - 1) + calculatedfibonacciTerm(termNumber - 2)
    );
 }

 console.log(
    `O valor do termo número 6 da sequência de fibonacci é ${calculatedfibonacciTerm(6)}`
 )