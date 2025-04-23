const cantidad=parseInt(prompt("Ingrese la cantidad de números aleatorios"))
 for(let i=0; i<cantidad ; i++){
    document.writeln(Math.floor(Math.random()*99), "<br>")
}