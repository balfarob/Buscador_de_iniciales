//Preguntaremos nombre y apellido
let name = prompt("¿Cuál es tu nombre y apellido?");
//obteniendo primera inicial Barbara Alfaro
let firstInitial = name.slice(0,1);
//obteniendo segunda inicial Barbara Alfaro
let secondInitialPosition = name.indexOf(" ") +1;

let secondInitial =name.slice(secondInitialPosition,secondInitialPosition+1);

document.write("Tus dos iniciales son: " + firstInitial.toUpperCase() + secondInitial.toUpperCase());
