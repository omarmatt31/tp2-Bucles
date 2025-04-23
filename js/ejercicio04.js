let suma = 0
do{
    const numero = prompt("Ingrese un numero")
    if(!isNaN(numero)){
        suma = suma + parseInt(numero)
    }else{
        alert("No es un numero valido")
    }
}while(confirm("¿Desea continuar?"))

document.writeln(suma)