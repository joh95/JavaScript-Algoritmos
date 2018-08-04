// calcular cuanto corre una persona en una semana, manejo de vectores y funciones.

let dias= ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let nombre = "Johan";
let length = dias.length;

function correr(){
    let min =5;
    let max =15;
    return Math.round(Math.random() * (max-min)) + min;
}

let totalKms= 0;
for(i=0;i<length;i++){
    let kms = correr();
    totalKms += kms;
    console.log(`El dia ${i+1} ${nombre} corrio ${kms}Kms`); 
}

let promedio = totalKms/dias.length;
console.log(`El promedio de kilometros recorrido por ${nombre} es de ${promedio.toFixed(3)}`);
