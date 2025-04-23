const nombre1=prompt("Ingrese el nombre de la primera persona")
const edad1=parseInt(prompt("Ingrese la edad de la primera persona"))
const nombre2=prompt("Ingrese el nombre de la segunda persona")
const edad2=parseInt(prompt("Ingrese la edad de la segunda persona"))
const nombre3=prompt("Ingrese el nombre de la tercera persona")
const edad3=parseInt(prompt("Ingrese la edad de la tercera persona"))

if(edad1>=0 && edad2>=0 && edad3>=0){
    switch(Math.max(edad1, edad2, edad3)){
        case edad1:
            document.writeln(nombre1)
            break;
        case edad2:
            document.writeln(nombre2)
            break;
        case edad3:
            document.writeln(nombre3)
            break;
    }
}else {
    alert("Datos invalidos")
}
