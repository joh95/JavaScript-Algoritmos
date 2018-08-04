// Algoritmo uso de prototype

function punto(x, y){
    this.x = x;
    this.y = y;

}

punto.prototype.moverEnX = function moverEnX(x){
    this.x += x;
}

punto.prototype.moverEnY = function moverEnY(y){
    this.y += y;
}

punto.prototype.distancia = function distancia (p){
    let x = this.x -p.x;
    let y = this.y -p.y;

    return Math.sqrt((x*x)+(y*y));
}

let p1 = new punto(0, 4);
let p2 = new punto(3, 0);

console.log(p1.distancia(p2));
p1.moverEnX(10);
console.log(p1.distancia(p2));

