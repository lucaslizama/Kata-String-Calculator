QUnit.test("Cadena vacia retorna 0", function(assert) {
    assert.equal(sumarNumerosCadena(""), 0, "Una cadena vacia debe retornar 0");
});

QUnit.test("Un solo numero retorna el numero", function(assert) {
    assert.equal(sumarNumerosCadena("24"), 24, "un solo numero debe retornar el mismo numero");
});

QUnit.test("Dos numeros, separados por coma, retornan la suma de ambos numeros", function(assert) {
    assert.equal(sumarNumerosCadena("41,1"), 42, "Dos numeros separados por comas deben retornar la suma de ambos numeros");
});

QUnit.test("Dos numeros, separados por newline (\"\\n\"), retorna la suma de los dos numeros.", function (assert){
    assert.equal(sumarNumerosCadena("41\n1"), 42, "Dos numeros separados por newline deben retornar la suma de ambos numeros");
});

QUnit.test("Tres numeros, separados por cualquiera de las dos formas anteriores, retorna la suma de los tres numeros", function(assert){
    assert.equal(sumarNumerosCadena("40\n1,1"), 42, "40\\n1,1 retorna 42");
});

QUnit.test("Un separador de un solo caracter puede definirse en la primera linea del String de la forma //simbolo (Ejemplo //# convierte # en separador)", function (assert) {
    assert.equal(sumarNumerosCadena("//$35$5,1\n1"), 42, "//$35$5,1\\n1 retorna 42");
});