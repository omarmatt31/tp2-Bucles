const fila=parseInt(prompt("Ingrese el número de filas de la tabla"))
const columna=parseInt(prompt("Ingrese el número de columnas de la tabla"))
let numero=fila*columna
for(i=fila;i>0;i--){
    for(j=columna;j>0;j--){
        document.writeln(numero)
        numero--
    }
    document.writeln("<br>")
}