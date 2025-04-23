const cadena=prompt("Ingrese un texto")

let cadenaMayusculas=''

for(let i=0; i < cadena.length;i++){
    cadenaMayusculas=cadenaMayusculas+cadena.charAt(i).toUpperCase()
}

document.writeln("Cadena Original: ", cadena)
document.writeln("<br> Cadena en Mayúscula: ", cadenaMayusculas)