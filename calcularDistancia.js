// Algoritmo en el que se elabora la distancia de un punto a otro
// Cada punto sera creado como un objeto

let punto1 = {
    x: 0,
    y: 4,
    moverEnX: function (x){this.x = this.x + x},
    moverEnY: function (y){this.y = this.y + y}

};

let punto2 = {
    x: 3,
    y: 0,
    moverEnX: function (x){this.x = this.x + x},
    moverEnY: function (y){this.y = this.y + y}
};

punto1.moverEnX(10);
punto2.moverEnY(-4);


function distancia(punto1, punto2){
    let x = punto1.x - punto2.x;
    let y = punto1.y - punto2.y;

    return Math.sqrt((x*x)+(y*y));
};

console.log(`La distancia entre los puntos es: ${distancia(punto1, punto2)} cm`);
