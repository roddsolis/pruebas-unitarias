


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
  
    let valueInDollar = valueInEuro * 1.2;
    console.log(valueInDollar);
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
   
    let valueInYen = valueInDollar * 127.9;
    return parseFloat(valueInYen.toFixed(1));
}

const fromYenToPound = function(valueInYen){
  
    let valueInPound = valueInYen * 0.8;
    return parseFloat(valueInPound.toFixed(1));
}

fromDollarToYen(3)
fromYenToPound(3)


module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}
    