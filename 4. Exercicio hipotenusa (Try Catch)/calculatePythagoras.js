function calculateSquareRoot(radicand) {
  try {
    if (radicand < 0){
      throw new Error("O radicando deve ser real e positivo");
    }
  } catch (error ){
    return radicand ** (1 / 2);
    console.log(error);
  }
}

function calculatePythagoras(side1, side2) {
  try {
    const sum = side1 ** 2 + side2 ** 2;
    return calculateSquareRoot(sum);
  } catch(error){
    console.log('error');
  }
}

const firstSideRef = document.getElementById('side-1');
const secondSideRef = document.getElementById('side-2');
const calculateButton = document.getElementById('calculate-hypotenuse');
const answerDiv = document.getElementById('answer');

function onCalculateButtonClick() {
  try {
    const firstSide = firstSideRef.value;
    const secondSide = secondSideRef.value;
    if(
      isNaN(firstSide) === true || 
      isNaN(secondSide) === true ||
      firstSide <= 0 ||
      secondSide <= 0
      ) {
        throw new Error ("Entradas inválidas. Os tamanhos dos catetos devem ser fornecidos e seus valores devem ser números positivos exclusivamente!");
      }
      console.log('function executed');
      answerDiv.classList.remove('hidden-element');
      answerDiv.innerHTML = `A hipotenusa de um triangulo de lados ${firstSide} e ${secondSide} é: ${calculatePythagoras(
        firstSide,
        secondSide
      )
        .toFixed(3)
        .replace(/[.,]000$/, '')}
      <div class="left-point"></div>`;
  } catch (error ){
    console.log(error);
  } finally {
    console.log("bloco finally executado")
  }
}


calculateButton.addEventListener('click', onCalculateButtonClick);