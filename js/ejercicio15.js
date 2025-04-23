const cadena=prompt("Ingrese un texto")

let cantidadVocales=0;


for(i = 0; i < cadena.length ; i++){
    if(cadena.charAt(i).toLowerCase()==='a' || cadena.charAt(i).toLowerCase()==='e' || cadena.charAt(i).toLowerCase()==='i' || cadena.charAt(i).toLowerCase()==='o' || cadena.charAt(i).toLowerCase()==='u'){
        cantidadVocales ++
    }
}
document.writeln("Texto original: ", cadena)
document.writeln("<br>Cantidad de Vocales: ", cantidadVocales)
