const fila=parseInt(prompt("Ingrese el número de filas de la tabla"))
const columna=parseInt(prompt("Ingrese el número de columnas de la tabla"))
let numero=fila*columna
document.writeln(`<table><tbody>`)
for(let i=0;i<fila;i++){document.writeln(`<tr>`)
    for(let j=0;j<columna;j++){
        document.writeln(`<td>`)
        document.writeln(numero)
        document.writeln(`</td>`)
        numero--
    }
    document.writeln(`</tr>`)
}
document.writeln(`</tbody> </table>`)