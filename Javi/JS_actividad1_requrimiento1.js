// Creamos la funcion
function cargarFormulario() {
//Accedemos al elemento que tiene por id: div1
const div1 = document.getElementById('div1')


//Creamos un h3 para elegir color
var titulo = document.createElement('h3')
var textTitulo =document.createTextNode('Rellena el formulario :')
titulo.appendChild(textTitulo)
div1.appendChild(titulo)

//Creamos el elemento formulario
var formulario = document.createElement('form')

//Creamos los elementos input. Le añadimos type y placehoder
var DNI = document.createElement('input')
DNI.type = 'text'
DNI.placeholder = 'dni'

var NOMBRE =document.createElement('input')
NOMBRE.type ='text';
NOMBRE.placeholder ='nombre'

var APELLIDO = document.createElement('input')
APELLIDO.type = 'text';
APELLIDO.placeholder = 'apellido'

var DIRECCION =document.createElement('input')
DIRECCION.type ='text';
DIRECCION.placeholder ='direccion'

var TELEFONO = document.createElement('input')
TELEFONO.type = 'text';
TELEFONO.placeholder = 'telefono'

//Añadimos a formolario todos los elemetos que hemos creado
formulario.appendChild(DNI)
formulario.appendChild(NOMBRE)
formulario.appendChild(APELLIDO)
formulario.appendChild(DIRECCION)
formulario.appendChild(TELEFONO)
// Añadimos a div1 el formulario creado
div1.appendChild(formulario);
// -----------------------------------------------------------------------------------------------------------------
//Creamos un h3 para elegir cantidad
var titulo1 = document.createElement('h3')
var textTitulo1 =document.createTextNode('Elige cantidad :')
titulo1.appendChild(textTitulo1)
div1.appendChild(titulo1)


var label1 = document.createElement('label')
label1.setAttribute('for', 'opcion1')
var textLabel1 = document.createTextNode("10 :")
label1.appendChild(textLabel1)

var input1 = document.createElement('input')
input1.type = 'radio'
input1.id = 'opcion1'
input1.name = 'Cantidad'
input1.value = '10'
label1.appendChild(input1);


var label2 = document.createElement('label')
label2.setAttribute('for', 'opcion2');
var textLabel2 = document.createTextNode("    20 :");
label2.appendChild(textLabel2)

var input2 = document.createElement('input');
input2.type = 'radio'
input2.id = 'opcion2'
input2.name = 'Cantidad'
input2.value = '20'
label2.appendChild(input2);

var label3 = document.createElement('label')
label3.setAttribute('for', 'opcion3');
var textLabel3 = document.createTextNode("    30 :");
label3.appendChild(textLabel3)

var input3 = document.createElement('input');
input3.type = 'radio'
input3.id = 'opcion3'
input3.name = 'Cantidad'
input3.value = '30'
label3.appendChild(input3);

var label4 = document.createElement('label')
label4.setAttribute('for', 'opcion4');
var textLabel4 = document.createTextNode("    40 :");
label4.appendChild(textLabel4)

var input4 = document.createElement('input');
input4.type = 'radio'
input4.id = 'opcion4'
input4.name = 'Cantidad'
input4.value = '40'
label4.appendChild(input4);

div1.appendChild(label1);
div1.appendChild(label2);
div1.appendChild(label3);
div1.appendChild(label4);
// -----------------------------------------------------------------------------------------------------------------
//Creamos un h3 para elegir color
var titulo2 = document.createElement('h3')
var textTitulo2 =document.createTextNode('Elige Tamaño :')
titulo2.appendChild(textTitulo2)
div1.appendChild(titulo2)

var label5 = document.createElement('label')
label5.setAttribute('for', 'opcion5');
var textLabel5 = document.createTextNode("Pequeña :");
label5.appendChild(textLabel5)

var input5 = document.createElement('input')
input5.type = 'radio'
input5.id = 'opcion5'
input5.name = 'Color'
input5.value = 'Pequeña'
label5.appendChild(input5);


var label6 = document.createElement('label')
label6.setAttribute('for', 'opcion6');
var textLabel6 = document.createTextNode("   Mediano:");
label6.appendChild(textLabel6)

var input6 = document.createElement('input');
input6.type = 'radio'
input6.id = 'opcion6'
input6.name = 'Color'
input6.value = 'Mediano'
label6.appendChild(input6);

var label7 = document.createElement('label')
label7.setAttribute('for', 'opcion7');
var textLabel7 = document.createTextNode("   Grande:");
label7.appendChild(textLabel7)

var input7 = document.createElement('input');
input7.type = 'radio'
input7.id = 'opcion7'
input7.name = 'Color'
input7.value = 'Grande'
label7.appendChild(input7);

var label8 = document.createElement('label')
label8.setAttribute('for', 'opcion8');
var textLabel8 = document.createTextNode("  Gigante:");
label8.appendChild(textLabel8)

var input8 = document.createElement('input');
input8.type = 'radio'
input8.id = 'opcion8'
input8.name = 'Color'
input8.value = 'Gigante'
label8.appendChild(input8);

div1.appendChild(label5);
div1.appendChild(label6);
div1.appendChild(label7);
div1.appendChild(label8);

//Creamos un br para separarlos
var br = document.createElement('br')
div1.appendChild(br)
// -----------------------------------------------------------------------------------------------------------------
//Creamos un h3 para elegir color
var titulo4 = document.createElement('h3')
var textTitulo4 =document.createTextNode('Elige color :')
titulo4.appendChild(textTitulo4)
div1.appendChild(titulo4)

var checkbox1 = document.createElement('label')
checkbox1.setAttribute('for', 'checkbox1')
div1.appendChild(checkbox1)

var input9 = document.createElement('input')
input9.type = 'checkbox'
input9.id = 'checkbox1'
input9.name = 'Color'
input9.value = 'Negro'

var textInput9 = document.createTextNode('Negro   ')
checkbox1.appendChild(textInput9)
checkbox1.appendChild(input9)

var checkbox2 = document.createElement('label')
checkbox2.setAttribute('for', 'checkbox2')
div1.appendChild(checkbox2)

var input10 = document.createElement('input')
input10.type = 'checkbox'
input10.id = 'checkbox2'
input10.name = 'Color'
input10.value = 'Blanco'

var textInput9 = document.createTextNode('Blanco   ')
checkbox2.appendChild(textInput9)
checkbox2.appendChild(input10)

var checkbox3 = document.createElement('label')
checkbox3.setAttribute('for', 'checkbox3')
div1.appendChild(checkbox3)

var input11 = document.createElement('input')
input11.type = 'checkbox'
input11.id = 'checkbox3'
input11.name = 'Color'
input11.value = 'Azul'

var textInput9 = document.createTextNode('Azul   ')
checkbox3.appendChild(textInput9)
checkbox3.appendChild(input11)

var checkbox4 = document.createElement('label')
checkbox4.setAttribute('for', 'checkbox4')
div1.appendChild(checkbox4)

var input12 = document.createElement('input')
input12.type = 'checkbox'
input12.id = 'checkbox4'
input12.name = 'Color'
input12.value = 'Rojo'

var textInput9 = document.createTextNode('Rojo   ')
checkbox4.appendChild(textInput9)
checkbox4.appendChild(input12)

var checkbox5 = document.createElement('label')
checkbox5.setAttribute('for', 'checkbox5')
div1.appendChild(checkbox5)

var input13 = document.createElement('input')
input13.type = 'checkbox'
input13.id = 'checkbox5'
input13.name = 'Color'
input13.value = 'Verde'

var textInput9 = document.createTextNode('Verde   ')
checkbox5.appendChild(textInput9)
checkbox5.appendChild(input13)

// -----------------------------------------------------------------------------------------------------------------
var br = document.createElement('br')
div1.appendChild(br)
//Creamos un h3 para las imagenes
var titulo4 = document.createElement('h3')
var textTitulo4 =document.createTextNode('Imagenes :')
titulo4.appendChild(textTitulo4)
div1.appendChild(titulo4)

var img = document.createElement('img')
img.setAttribute('src','z.jpeg')
div1.appendChild(img)
var img1 = document.createElement('img')
img1.setAttribute('src','y.jpeg')
div1.appendChild(img1)

// -----------------------------------------------------------------------------------------------------------------
var titulo5 = document.createElement('h3')
var textTitulo5 = document.createTextNode('Opciones de pago :')
titulo5.appendChild(textTitulo5)
div1.appendChild(titulo5)
// -----------------------------------------------------------------------------------------------------------------
var label19 = document.createElement('label')
label19.setAttribute('for','opciones')
var textlabel9 = document.createTextNode('Elige una opcion :   ')
label19.appendChild(textlabel9)
    
var select1 = document.createElement('select')
select1.id = 'opciones'
select1.name = 'opciones'

var opciones1 = document.createElement('option')
opciones1.value = 'Metalico'
var textoOpcion1 = document.createTextNode('Metalico')
opciones1.appendChild(textoOpcion1)

var opciones2 = document.createElement('option')
opciones2.value = 'Tarjeta'
var textoOpcion2 = document.createTextNode('Tarjeta')
opciones2.appendChild(textoOpcion2)

var opciones3 = document.createElement('option')
opciones3.value = 'Bizum'
var textoOpcion3 = document.createTextNode('Bizum')
opciones3.appendChild(textoOpcion3)

var opciones4 = document.createElement('option')
opciones4.value = 'Transferencia'
var textoOpcion4 = document.createTextNode('Transferencia')
opciones4.appendChild(textoOpcion4)

select1.appendChild(opciones1)
select1.appendChild(opciones2)
select1.appendChild(opciones3)
select1.appendChild(opciones4)
label19.appendChild(select1)
div1.appendChild(label19)

// -----------------------------------------------------------------------------------------------------------------
//Creamos un h3 para el textarea
var titulo4 = document.createElement('h3')
var textTitulo4 =document.createTextNode('Observaciones :')
titulo4.appendChild(textTitulo4)
div1.appendChild(titulo4)

var label20 = document.createElement('label')
label20.setAttribute('for', 'texto')

var textarea1 = document.createElement('textarea')
textarea1.id = 'texto'
textarea1.name = 'texto'
textarea1.rows = '20'
textarea1.cols = '100'
textarea1.placeholder = 'Escriba aquí'

label20.appendChild(textarea1)
div1.appendChild(label20)

}