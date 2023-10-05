const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');


test("Un Euro debería ser 1.2 Dólares", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("Un dolar deberia ser 127.9 Yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3)).toBe(383.7); // si un dolar son 127.9 yenes, 3 dolares deberian ser ( 3 * 127.9 )
})

test("Un Yen debería ser 102.32 Pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3)).toBe(2.4); // si un Yen son 102.32 Libras, 3 yenes deberian ser ( 3 * 0.8 )
})