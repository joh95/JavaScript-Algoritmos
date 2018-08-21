	//Algoritmo merge sort, ordena un arreglo dividiendolo en mitades y comparando dichas mitades
	
	function mergeSort(arreglo){
		//Divide el arreglo a la mitad, compara sus mitades y hace llamada recursiva	
		if (arreglo.length < 2) return arreglo;

		let mitad = Math.floor(arreglo.length /2);
		let izquierdo = arreglo.slice(0,mitad);
		let derecho = arreglo.slice(mitad);

		return comparar(mergeSort(izquierdo), mergeSort(derecho));
	}
	// Compara que lado es menor y cual mayor, para añadirlos a un vector respuesta
	function comparar(izq, der){
		let respuesta = [];
		let auxIzq = 0;
		let auxDer = 0;

		while(auxIzq < izq.length && auxDer < der.length){
			if(izq[auxIzq]<der[auxDer])respuesta.push(izq[auxIzq++]);
			else respuesta.push(der[auxDer++]);
		}
		return respuesta.concat(izq.slice(auxIzq)).concat(der.slice(auxDer));
	} 

	console.log(mergeSort([9,4,3,5,10,0,1,3,2,3]));