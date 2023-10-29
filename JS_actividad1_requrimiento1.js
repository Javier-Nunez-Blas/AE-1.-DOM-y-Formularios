// Creamos la funcion
function cargarFormulario() {
    //Accedemos al elemento que tiene por id: div1
    const div1 = document.getElementById('div1')
    //Creamos el elemento formulario
    var formulario = document.createElement('form')
    //Creamos un h3, le añadimos texto y lo añadimos al formulario
    var titulo = document.createElement('h3')
    var textTitulo =document.createTextNode('Rellena el formulario :')
    titulo.appendChild(textTitulo)
    formulario.appendChild(titulo)
    //Creamos todos los input. Les añadimos el type y el placehoder
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
    
    //Añadimos a formulario todos los elemetos que hemos creado
    formulario.appendChild(DNI)
    formulario.appendChild(NOMBRE)
    formulario.appendChild(APELLIDO)
    formulario.appendChild(DIRECCION)
    formulario.appendChild(TELEFONO)

    var titulo1 = document.createElement('h3')
    var textTitulo1 =document.createTextNode('Elige cantidad :')
    titulo1.appendChild(textTitulo1)
    formulario.appendChild(titulo1)
    // Creamos la variable label, añadiendole el atributo for con su Id correspondiente.
    // Luego creamos los input radio con todos sus atributos. Ponemos el nodo input como hijo
    // del label. Y le añadimos un texto a label
    var label1 = document.createElement('label')
    label1.setAttribute('for', 'opcion1')
    var input1 = document.createElement('input')
    input1.type = 'radio'
    input1.id = 'opcion1'
    input1.name = 'Cantidad'
    input1.value = '10'
    label1.appendChild(input1);
    var textLabel1 = document.createTextNode("10")
    label1.appendChild(textLabel1)
    
    var label2 = document.createElement('label')
    label2.setAttribute('for', 'opcion2');
    var input2 = document.createElement('input');
    input2.type = 'radio'
    input2.id = 'opcion2'
    input2.name = 'Cantidad'
    input2.value = '20'
    label2.appendChild(input2);
    var textLabel2 = document.createTextNode("20");
    label2.appendChild(textLabel2)
    
    var label3 = document.createElement('label')
    label3.setAttribute('for', 'opcion3');    
    var input3 = document.createElement('input');
    input3.type = 'radio'
    input3.id = 'opcion3'
    input3.name = 'Cantidad'
    input3.value = '30'
    label3.appendChild(input3);
    var textLabel3 = document.createTextNode("30");
    label3.appendChild(textLabel3)
    
    var label4 = document.createElement('label')
    label4.setAttribute('for', 'opcion4');    
    var input4 = document.createElement('input');
    input4.type = 'radio'
    input4.id = 'opcion4'
    input4.name = 'Cantidad'
    input4.value = '40'
    label4.appendChild(input4);
    var textLabel4 = document.createTextNode("40");
    label4.appendChild(textLabel4)
    // Añadimos todos los label a formulario
    formulario.appendChild(label1);
    formulario.appendChild(label2);
    formulario.appendChild(label3);
    formulario.appendChild(label4);

    var titulo2 = document.createElement('h3')
    var textTitulo2 =document.createTextNode('Elige Tamaño :')
    titulo2.appendChild(textTitulo2)
    formulario.appendChild(titulo2)

    var label5 = document.createElement('label')
    label5.setAttribute('for', 'opcion5');    
    var input5 = document.createElement('input')
    input5.type = 'radio'
    input5.id = 'opcion5'
    input5.name = 'Color'
    input5.value = 'Pequeña'
    label5.appendChild(input5);
    var textLabel5 = document.createTextNode("Pequeña");
    label5.appendChild(textLabel5)    
    
    var label6 = document.createElement('label')
    label6.setAttribute('for', 'opcion6');    
    var input6 = document.createElement('input');
    input6.type = 'radio'
    input6.id = 'opcion6'
    input6.name = 'Color'
    input6.value = 'Mediano'
    label6.appendChild(input6);
    var textLabel6 = document.createTextNode("Mediano");
    label6.appendChild(textLabel6)
    
    var label7 = document.createElement('label')
    label7.setAttribute('for', 'opcion7');    
    var input7 = document.createElement('input');
    input7.type = 'radio'
    input7.id = 'opcion7'
    input7.name = 'Color'
    input7.value = 'Grande'
    label7.appendChild(input7);
    var textLabel7 = document.createTextNode("Grande");
    label7.appendChild(textLabel7)
    
    var label8 = document.createElement('label')
    label8.setAttribute('for', 'opcion8');    
    var input8 = document.createElement('input');
    input8.type = 'radio'
    input8.id = 'opcion8'
    input8.name = 'Color'
    input8.value = 'Gigante'
    label8.appendChild(input8);
    var textLabel8 = document.createTextNode("Gigante");
    label8.appendChild(textLabel8)
    
    formulario.appendChild(label5);
    formulario.appendChild(label6);
    formulario.appendChild(label7);
    formulario.appendChild(label8);

    var titulo4 = document.createElement('h3')
    var textTitulo4 =document.createTextNode('Elige color :')
    titulo4.appendChild(textTitulo4)
    formulario.appendChild(titulo4)
    // Creamos la variable label para los checkbook, añadiendole el atributo for con su Id correspondiente.
    // Luego creamos los input checkbooks con todos sus atributos. Ponemos el nodo input como hijo
    // del label. Y le añadimos un texto a label
    var checkbox1 = document.createElement('label')
    checkbox1.setAttribute('for', 'checkbox1')
    var input9 = document.createElement('input')
    input9.type = 'checkbox'
    input9.id = 'checkbox1'
    input9.name = 'Color'
    input9.value = 'Negro'
    var textInput9 = document.createTextNode('Negro')
    checkbox1.appendChild(input9)
    checkbox1.appendChild(textInput9)
    
    var checkbox2 = document.createElement('label')
    checkbox2.setAttribute('for', 'checkbox2')
    var input10 = document.createElement('input')
    input10.type = 'checkbox'
    input10.id = 'checkbox2'
    input10.name = 'Color'
    input10.value = 'Blanco'    
    var textInput9 = document.createTextNode('Blanco   ')
    checkbox2.appendChild(input10)
    checkbox2.appendChild(textInput9)
    
    var checkbox3 = document.createElement('label')
    checkbox3.setAttribute('for', 'checkbox3')    
    var input11 = document.createElement('input')
    input11.type = 'checkbox'
    input11.id = 'checkbox3'
    input11.name = 'Color'
    input11.value = 'Azul'    
    var textInput9 = document.createTextNode('Azul   ')
    checkbox3.appendChild(input11)
    checkbox3.appendChild(textInput9)
    
    var checkbox4 = document.createElement('label')
    checkbox4.setAttribute('for', 'checkbox4') 
    var input12 = document.createElement('input')
    input12.type = 'checkbox'
    input12.id = 'checkbox4'
    input12.name = 'Color'
    input12.value = 'Rojo'    
    var textInput9 = document.createTextNode('Rojo   ')
    checkbox4.appendChild(input12)
    checkbox4.appendChild(textInput9)
    
    var checkbox5 = document.createElement('label')
    checkbox5.setAttribute('for', 'checkbox5')
    var input13 = document.createElement('input')
    input13.type = 'checkbox'
    input13.id = 'checkbox5'
    input13.name = 'Color'
    input13.value = 'Verde'    
    var textInput9 = document.createTextNode('Verde   ')
    checkbox5.appendChild(input13)
    checkbox5.appendChild(textInput9)
    // Añadimos todos los checkbox a formulario
    formulario.appendChild(checkbox1)
    formulario.appendChild(checkbox2)
    formulario.appendChild(checkbox3)
    formulario.appendChild(checkbox4)  
    formulario.appendChild(checkbox5)     
    
    var titulo4 = document.createElement('h3')
    var textTitulo4 =document.createTextNode('Elige una imagen :')
    titulo4.appendChild(textTitulo4)
    formulario.appendChild(titulo4)
    // Creamos el input para las imagenes con sus atributos. Luego creamos el label donde
    // ponemos la img, y los añadimos al formulario
    var inputIMG = document.createElement('input')
    inputIMG.type = 'radio'
    inputIMG.id = 'imagen1'
    inputIMG.name = 'Imagen'
    inputIMG.value = 'y.jpeg'
    var labelIMG = document.createElement('label')
    labelIMG.setAttribute('for', 'imagen1')
    var img = document.createElement('img')
    img.setAttribute('src','y.jpeg')
    img.setAttribute('alt','Canicas cristal')
    labelIMG.appendChild(img)
    formulario.appendChild(inputIMG)
    formulario.appendChild(labelIMG)

    var inputIMG1 = document.createElement('input')
    inputIMG1.type = 'radio'
    inputIMG1.id = 'imagen2'
    inputIMG1.name = 'Imagen'
    inputIMG1.value = 'z.jpeg'
    var labelIMG1 = document.createElement('label')
    labelIMG1.setAttribute('for', 'imagen2')
    var img1 = document.createElement('img')
    img1.setAttribute('src','z.jpeg')
    img1.setAttribute('alt','Canicas metálicas')
    labelIMG1.appendChild(img1)
    formulario.appendChild(inputIMG1)
    formulario.appendChild(labelIMG1)

    var titulo5 = document.createElement('h3')
    var textTitulo5 = document.createTextNode('Opciones de pago :')
    titulo5.appendChild(textTitulo5)
    formulario.appendChild(titulo5)
    // Creamos un label para un select. Creamos los nodo option, añadimos los nodo texto
    // Ponemos a los option como hijos del select. Y el selectc como hijo del label. 
    // Añadimos el label al formulario
    var label19 = document.createElement('label')
    label19.setAttribute('for','opciones')
        
    var select1 = document.createElement('select')
    select1.id = 'opciones'
    select1.name = 'opciones'

    formulario.appendChild(label19)
    
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
    formulario.appendChild(select1)



    var titulo4 = document.createElement('h3')
    var textTitulo4 =document.createTextNode('Observaciones :')
    titulo4.appendChild(textTitulo4)
    formulario.appendChild(label19).appendChild(titulo4)
    // Creamos un label para meter dentro untextarea. Lo añadimos al formulario
    var label20 = document.createElement('label')
    label20.setAttribute('for', 'texto')
    
    var textarea1 = document.createElement('textarea')
    textarea1.id = 'texto'
    textarea1.name = 'texto'
    textarea1.rows = '20'
    textarea1.cols = '100'
    textarea1.placeholder = 'Escriba aquí'
    
    label20.appendChild(textarea1)
    formulario.appendChild(label20)
    
    // Añadimos a div1 el formulario creado
    div1.appendChild(formulario);
    
    }