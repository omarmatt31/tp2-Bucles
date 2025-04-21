let cadena = ''
do{
    cadena=cadena + prompt("Ingrese un texto");
    console.log(cadena);
}while(confirm("¿Desea continuar?"))

document.writeln(cadena)