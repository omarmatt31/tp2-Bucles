const cantidadFilas = prompt("Ingrese la cantidad de filas de la piramide");

let i=1

while(i<=cantidadFilas){
    let column=1;
    while(column<=i){
        document.writeln(i)
        column++
    }
    document.writeln("<br>")
    i++
}