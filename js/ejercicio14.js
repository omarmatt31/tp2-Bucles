const cadena=prompt("Ingrese un texto")

let cadenaModificada=''

for(let i=0 ; i < cadena.length; i++){
    cadenaModificada=cadenaModificada+cadena.charAt(i)+"-"
}

document.writeln("Cadena Original: ", cadena)
document.writeln("<br> Cadena en Mayúscula: ", cadenaModificada)