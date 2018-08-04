 // Algoritmo para el manejo de fechas en javascript
 
 //Definir una fecha se ingresan parametros, el mes sera -1 ya que inicia en 0
 let nacimiento = new Date(1995, 8, 14);
 console.log(`Tu fecha de nacimiento es ${nacimiento}`);
 
 //Definir la fecha de hoy, no se envian parametros
 let hoy = new Date();
 console.log(`Hoy es ${hoy}`);

 //Calculo en milisegundos del tiempo desde el nacimiento hasta hoy
 let tiempo = hoy -nacimiento;
 console.log(`Tiempo en milisegundos desde tu nacimiento es de: ${tiempo} ms`);
 
 //Tiempo de milisegundos a dias
 let tiempoDias = (((tiempo / 1000)/60)/60)/24;
 console.log(`Tiempo en dias: ${tiempoDias} dias`);

 //Definir cuando es el proximo cumpleaños
 let proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
 console.log(`Tu proximo cumpleaños sera ${proximoCumple}`);
 
 //Definir cual dia sera el proximo cumpleaños
 let diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles","Jueves","Viernes", "Sabado"];
 console.log(`El dia de tu proximo cumpleaños sera: ${diasSemana[proximoCumple.getDay()]}`);
 