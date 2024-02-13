function calculateFibonacciTerm(termNumber){
  let lastTerm = 1;
  let secondToLast = 0;

  if (termNumber === 0){
    return 0;
  }
  if (termNumber === 1){
    return 1;
  }
  letCurrentIteration = 2;
  while(letCurrentIteration <= termNumber){
    let auxVar = lastTerm + secondToLast;
    secondToLast = lastTerm;
    lastTerm = auxVar;
    letCurrentIteration++;
  }
  return lastTerm;
}

let termo = 6;

console.log(`O valor do termo número ${termo} da sequencia de fibonacci é ${calculateFibonacciTerm(`${termo}`)}`);