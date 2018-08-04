// Algoritmo para el manejo de string, conversion de los mismos

function palabra(str){
    let conjugacion = str;
     // 0. Si la palabra es un palindromo, se devuelve la misma palabra intercalando
    // mayusculas y minusculas
    let reverse = (str)=> str.split('').reverse().join('');
    
    function minMay(str){
        const length = str.length;
        let conjugacion = '';
        let bandera = true;
        for (let i=0; i<length; i++){
            const char = str.charAt(i);
            conjugacion +=bandera ? char.toUpperCase() : char.toLowerCase();
            bandera = !bandera;
        }
        return conjugacion;
    }
    if(str==reverse(str)){
        return minMay(str);
    }
    // 1. si una palabra termina en ar, er o ir, se le quitan esos dos caracteres
    if (str.toLowerCase().endsWith('ar')||str.toLowerCase().endsWith('er')){
        conjugacion =str.slice(0,-2);
    }
    // 2. Si la palabra comienza con Z, se le añade "pe" al final
    if(str.toLowerCase().startsWith('z')){
        conjugacion = conjugacion + 'pe';
    }
    // 3. Si la palabra traducida tiene 10 o mas letras se debe 
    // partir a la mitad y unir con un "-"
    if(conjugacion.length>=10){
        let primeraParte = conjugacion.slice(0,Math.round(conjugacion.length/2));
        let segundaParte = conjugacion.slice(Math.round(conjugacion.length/2));
        conjugacion = `${primeraParte}-${segundaParte}`;
    }


    return conjugacion;
}
console.log(palabra("programar"));
console.log(palabra("Zorro"));
console.log(palabra("Zarpar"));
console.log(palabra("abecedario"));
console.log(palabra("sometemos"));

