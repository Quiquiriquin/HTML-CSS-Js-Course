var cajas = document.getElementsByTagName('div');
// cajas[0].textContent = "Hola";

var primeraCaja = document.getElementById('primerCaja');
var segundaCaja = document.getElementById('cajados')
// primeraCaja.innerHTML = "<u>Hola</u>";

// --------------- Creando nodos

var caja = document.createElement('div');
var contenido = document.createTextNode("Hola mundo");
caja.appendChild(contenido);
// caja.setAttribute('class', 'caja naranja');
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

// -------- Modificando
caja.id = 'primera';
caja.className = 'caja naranja';
// --------- Conociendo elemento padre
var padre = cajas[0].parentNode;

// padre.insertBefore(caja, segundaCaja);
// padre.insertBefore(caja, cajas[0]);

padre.replaceChild(caja, cajados);

padre.removeChild(cajas[3]);
