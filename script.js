var miNombre = "Samuel Arrilucea";
console.log(miNombre);

alert("Hello");
[1, 2].forEach(alert);

var contenido;
contenido = document.getElementsByTagName("p");
console.log(contenido[1].innerHTML);

var contenido2;
contenido2 = document.getElementById("parrafo");
console.log(contenido2.innerHTML);//innerText

var primero = prompt("Ingrese el primer numero: ");
var segundo = prompt("Ingrese el segundo numero: ");
var resultado = parseInt(primero) + parseInt(segundo);

alert(resultado);