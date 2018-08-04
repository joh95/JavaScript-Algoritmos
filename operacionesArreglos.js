// Algoritmo para el manejo de parametros y de funciones especiales

function suma (...numeros){
    
    return numeros.reduce(function (acum,sumando, i){
        acum +=sumando;
        return acum;
    })
}

function dobles(...numeros){ 
    return numeros.map(function (numero){
    return numero * 2;
    })

}

function par (... numeros){
    return numeros.filter(function (numero){
        if (numero%2 ==0){
            return true;
        }
    })
}

console.log(suma(4, 8, 12, 6));
console.log(dobles(3,4,5,6));
console.log(par(4,50,3,3,4));
 


