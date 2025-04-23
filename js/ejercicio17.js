const cadena=prompt("Ingrese un texto")


for(i = 0; i < cadena.length ; i++){
    if(cadena.charAt(i).toLowerCase()==='a' || cadena.charAt(i).toLowerCase()==='e' || cadena.charAt(i).toLowerCase()==='i' || cadena.charAt(i).toLowerCase()==='o' || cadena.charAt(i).toLowerCase()==='u'){
        document.writeln("La vocal '", cadena.charAt(i), "' está en la posición ", i)
        i=cadena.length
    }
}
