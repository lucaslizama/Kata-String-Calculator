var exports = module.exports = {};

exports.sumarNumerosCadena = (cadena) => {

    if(validarCadenaNula(cadena)) return 0;

    if(validarCadenaVacia(cadena)) return 0;

    if(esNumerico(cadena)) return Number(cadena); //Retorno el numero

    var separadores = [",","\n"];

    if(cadena.indexOf("//") === 0) {
        separadores = agregarSeparador(separadores,cadena);
        cadena = quitarSeparadorCadena(cadena);
    }

    if(existeSeparador(cadena,separadores)) {
        var numeros = obtenerNumeros(cadena,separadores);
        return calcularResultado(numeros);
    }
};

const validarCadenaNula = (cadena) => { return cadena === null; };

const validarCadenaVacia = (cadena) => { return cadena.length === 0; };

const esNumerico = (cadena) => { return !isNaN(cadena); };

const agregarSeparador = (separadores, cadena) => { 
    separadores.push(cadena[2]); 
    return separadores;
};

const quitarSeparadorCadena = (cadena) => { 
    return cadena.replace(cadena.slice(0,3),""); 
};

const existeSeparador = (cadena, separadores) => { 
    for(var i = 0; i < separadores.length; i++) {
        if(cadena.indexOf(separadores[i]) > 0) return true;
    }
    return false;
};

const obtenerNumeros = (cadena, separadores) => {
    var reg = new RegExp("[,\n" + separadores[2] + "]");
    var numeros = cadena.split(reg);
    return numeros;
}

const calcularResultado = (numeros) => {
    var resultado = 0;
    for(var i = 0; i < numeros.length; i++) {
        resultado += Number(numeros[i]);
    }
    return resultado;
}