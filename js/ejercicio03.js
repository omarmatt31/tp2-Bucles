let cadena = ''
do{
    cadena=cadena + prompt("Ingrese un texto");
}while(confirm("¿Desea continuar?"))

document.writeln(cadena)