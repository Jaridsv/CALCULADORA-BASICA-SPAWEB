
function limpiar()
{
    document.getElementById('micalculadora').requestFullscreen();
}

function listo()
{
    var n1 = parseInt(document.getElementById('valor1').value);
    var n2 = parseInt(document.getElementById('valor2').value); 
    let select = document.getElementById("select");
    let operacion = select.value;

     
    if (operacion == "Suma") {
    
        
        alert("Estas conectado a suma");
        
        document.getElementById('resultado').innerHTML = n1 + n2;
        alert("Estas saliendo de suma");
    }
    if(operacion == "Resta")
    {
        alert("Estas conectado a resta");
       // document.getElementById('resultado').innerHTML = n1 - n2;
       alert("Estas saliendo de restar");
    }
    if(operacion == "Multiplicar")
    {
        alert("Estas conectado a multiplicacion");
       // document.getElementById('resultado').innerHTML = n1 - n2;
       alert("Estas saliendo de multiplicar");
    }
    if(operacion == "Dividir")
    {
        alert("Estas conectado a Dividir");
       // document.getElementById('resultado').innerHTML = n1 - n2;
       alert("Estas saliendo de Division");
    }

}

function suma()
{
    var n1 = parseInt(document.getElementById('valor1').value);
    var n2 = parseInt(document.getElementById('valor2').value); 
    
     var a = n1.value;
     var b = n2.value;
   // document.getElementById("resultado").value = a + b;
     console.log(a,b);
      
}
