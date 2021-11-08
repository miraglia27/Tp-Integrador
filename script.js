 //funcion de calculo de valor total de las entradas
    
   // esto funciona pero no aplica descuentos 
   const valores = 200 
  
   function hacerClick() {

        let entradas = document.getElementById("cantidad").value //Cantidad de entradas
        let categoria = document.getElementById("categorias").value
            const valorOriginal = entradas * valores
        
    //Condicionales según categoría
        if (categoria == 1){
                        var calcularEntradas = ((valorOriginal) * 0.2 )
                }
        else if (categoria == 2){
                    var calcularEntradas = ((valorOriginal) * 0.5 )
                }
                            
       else if (categoria == 3){
                    var calcularEntradas = ((valorOriginal) * 0.85 )
                }
       else {
                   alert("Por favor seleccione una categoría")
                }
       
    //Se imprime en html el valor            
        document.getElementById("total").innerHTML= "Total a Pagar: $" + calcularEntradas
     }

     function validar() {

        var validarCantidad = document.getElementById("cantidad").value

     }
    
     


    
      
    
   
    
      
    
   
     


    
      
    
   