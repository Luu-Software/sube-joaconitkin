/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/
let registrada = document.getElementById("registrada");
let distancia = document.getElementById("distancia");
let boton = document.getElementById("boton");
let tarifa = document.getElementById("tarifa");

boton.addEventListener("click", () => {
let km = Number(distancia.value);
let tipo = registrada.value;
let precio = 0;
if (tipo === "si") {
  if (km >= 0 && km <= 3) {
    precio = 715.24;
  } else if (km > 3 && km <= 6) {
    precio = 794.74;
  } else if (km > 6 && km <= 12) {
    precio = 855.97;
  } else if (km > 12 && km <= 27) {
    precio = 917.24;
  } else {
    tarifa.textContent = "Distancia no válida";
    return;
  }
}
else if (tipo === "no") {
  if (km >= 0 && km <= 3) {
    precio = 1137.23;
  } else if (km > 3 && km <= 6) {
    precio = 1263.64;
  } else if (km > 6 && km <= 12) {
    precio = 1360.99;
  } else if (km > 12 && km <= 27) {
    precio = 1458.41;
  } else {
    tarifa.textContent = "Distancia no válida";
    return;
  }
}
tarifa.textContent = `$ ${precio.toFixed(2)}`;
});
