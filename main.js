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
let tipoBondi = document.getElementById("bondi");

boton.addEventListener("click", () => {
  let km = Number(distancia.value);
  let tipo = registrada.value;
  let precio = 0;
  let bondi = tipoBondi.value;

  if (bondi === "nacional") {

    if (tipo === "si") {
  
      if (km >= 0 && km <= 3) {
        precio = 700.00;
      }
  
      else if (km > 3 && km <= 6) {
        precio = 779.78;
      }
  
      else if (km > 6 && km <= 12) {
        precio = 839.86;
      }
  
      else if (km > 12 && km <= 27) {
        precio = 899.99;
      }
  
      else {
        precio = 959.71;
      }
  
    }
  
    else if (tipo === "no") {
  
      if (km >= 0 && km <= 3) {
        precio = 1113.00;
      }
  
      else if (km > 3 && km <= 6) {
        precio = 1239.85;
      }
  
      else if (km > 6 && km <= 12) {
        precio = 1335.38;
      }
  
      else if (km > 12 && km <= 27) {
        precio = 1430.98;
      }
  
      else {
        precio = 1525.94;
      }
  
    }
  
    else if (tipo === "tarifa") {
  
      if (km >= 0 && km <= 3) {
        precio = 315.00;
      }
  
      else if (km > 3 && km <= 6) {
        precio = 350.90;
      }
  
      else if (km > 6 && km <= 12) {
        precio = 377.93;
      }
  
      else if (km > 12 && km <= 27) {
        precio = 404.99;
      }
  
      else {
        precio = 431.86;
      }
  
    }
  
  }
  else if (bondi === "caba") {
  
    if (tipo === "si") {
  
      if (km >= 0 && km <= 3) {
        precio = 753.74;
      }
  
      else if (km > 3 && km <= 6) {
        precio = 837.52;
      }
  
      else if (km > 6 && km <= 12) {
        precio = 902.04;
      }
  
      else if (km > 12 && km <= 27) {
        precio = 966.61;
      }
      else{
        tarifa.textContent = "Tarifa no válida";
        return;
      }
  
    }
  
    else if (tipo === "no") {
  
      if (km >= 0 && km <= 3) {
        precio = 1198.45;
      }
  
      else if (km > 3 && km <= 6) {
        precio = 1331.66;
      }
  
      else if (km > 6 && km <= 12) {
        precio = 1434.24;
      }
  
      else if (km > 12 && km <= 27) {
        precio = 1536.91;
      }
  
    }
  
    else if (tipo === "tarifa") {
  
      if (km >= 0 && km <= 3) {
        precio = 339.18;
      }
  
      else if (km > 3 && km <= 6) {
        precio = 376.88;
      }
  
      else if (km > 6 && km <= 12) {
        precio = 405.91;
      }
  
      else if (km > 12 && km <= 27) {
        precio = 434.97;
      }
  
    }
  
  }
  else if (bondi === "provincia") {
  
    if (tipo === "si") {
  
      if (km >= 0 && km <= 3) {
        precio = 968.57;
      }
  
      else if (km > 3 && km <= 6) {
        precio = 1089.64;
      }
  
      else if (km > 6 && km <= 12) {
        precio = 1210.71;
      }
  
      else if (km > 12 && km <= 27) {
        precio = 1452.85;
      }
  
      else {
        precio = 1708.07;
      }
  
    }
  
    else if (tipo === "no") {
  
      if (km >= 0 && km <= 3) {
        precio = 1937.14;
      }
  
      else if (km > 3 && km <= 6) {
        precio = 2179.28;
      }
  
      else if (km > 6 && km <= 12) {
        precio = 2421.42;
      }
  
      else if (km > 12 && km <= 27) {
        precio = 2905.70;
      }
  
      else {
        precio = 3416.14;
      }
  
    }
  
    else if (tipo === "tarifa") {
  
      if (km >= 0 && km <= 3) {
        precio = 435.85;
      }
  
      else if (km > 3 && km <= 6) {
        precio = 490.33;
      }
  
      else if (km > 6 && km <= 12) {
        precio = 544.81;
      }
  
      else if (km > 12 && km <= 27) {
        precio = 653.78;
      }
  
      else {
        precio = 768.63;
      }
  
    }
  
  }

  tarifa.innerText = "$" + precio.toFixed(2);

});