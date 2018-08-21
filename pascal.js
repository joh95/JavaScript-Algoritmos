//Algoritmo generar triangulo de pascal

function pascal(profundidad){
	let triangulo = [[1],[1,1]];
	//Casos base
	if(profundidad<=0) return console.log("Debe ser un numero mayor a cero...");
	if (profundidad==1)	return console.log(triangulo[0]);
	if (profundidad==2) return console.log(triangulo);
	//casos mayores a 2 de profundidad
	for(let i = 2; i<profundidad; i++){
		let fila =[];
		for(let j= 0;j<triangulo[i-1].length;j++){			
			if(j==0)fila[j]=1;
			else{
				fila[j]=triangulo[i-1][j]+triangulo[i-1][j-1];
			}
		}
	fila.push(1);
	triangulo.push(fila);
	}console.log(triangulo);
}

pascal(10);
