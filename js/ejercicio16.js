const cadena=prompt("Ingrese un texto")

let cadenaModificada='';

for(let i=cadena.length-1 ; i>=0 ; i--){
    cadenaModificada=cadenaModificada+cadena.charAt(i)
}

document.writeln("Cadena Original: ", cadena)
document.writeln("<br> Cadena en Mayúscula: ", cadenaModificada)