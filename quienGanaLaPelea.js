// Algoritmo manejo de ciclos y funciones flecha
// 

let vidaMiocic = 100;
let vidaGustafson = 100;

let minGolpe= 5;
let maxGolpe = 10;

let ambosEnPie = () => {return vidaGustafson >0 && vidaMiocic >0};
let calcularGolpe =() => {return Math.round(Math.random() * (maxGolpe-minGolpe))+minGolpe};
let miocicEnPie = () => vidaMiocic>0; // Se puede quitar {} y return

let round = 1;

while(ambosEnPie()){

    console.log(`***ROUND ${round} ***`);
    let golpeMiocic= calcularGolpe();
    let golpeGustafson = calcularGolpe();

    if(golpeMiocic>golpeGustafson){
        //Ataca Miocic
        console.log(`Miocic ataca a Gustafson con un golpe de ${golpeMiocic}`);        
        vidaGustafson -=golpeMiocic;
        console.log(`Gustafson queda con ${vidaGustafson} de vida`);
        
    }
    else{
        //ataca Gustafson
        console.log(`Gustafson ataca a Miocic con un golpe de ${golpeGustafson}`);
        vidaMiocic -=golpeGustafson;  // vida = vida - golpe
        console.log(`Miocic queda con ${vidaMiocic} de vida`);
        
    }
    round++;
}

if (miocicEnPie()){
    console.log(`Miocic Gano la pelea y su vida es de ${vidaMiocic}`);
}else{
    console.log(`Gustafson gano la pelea y su vida es de ${vidaGustafson}`);
}