function sumarNumerosCadena(cadena) {
    if(cadena.length === 0) //Cadena vacia, retorno 0
        return 0;

    if(!isNaN(Number(cadena))) //Cadena contiene un numero, retorno el numero
        return Number(cadena);

    var separadores = [",","\n"];

    if(cadena.indexOf("//") === 0) {
        separadores.push(cadena[2]);
        cadena = cadena.replace(cadena.slice(0,3),"");
    }

    if(cadena.indexOf(separadores[0]) > 0 || cadena.indexOf(separadores[1]) > 0 || cadena.indexOf(separadores[2]) > 0) {
        var reg = new RegExp("[,\n" + separadores[2] + "]");
        var numeros = cadena.split(reg);
        var resultado = 0;
        for(var i = 0; i < numeros.length; i++) {
            resultado += Number(numeros[i]);
        }
        return resultado;
    }
}