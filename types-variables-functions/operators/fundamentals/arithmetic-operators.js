const notaPrimeiraBi = 8;
const nostaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiraBi + nostaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
    media += media * 0.1;
}

console.log(`a média é ${media.toFixed(2)}`);

