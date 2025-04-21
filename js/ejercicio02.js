let cantidadNotas=parseInt(prompt("Ingrese la cantidad de notas"))
for(let contador=0; contador < cantidadNotas; contador++){
    const nota=prompt("Ingrese una nota")
    if(!isNaN(nota)){
        switch(parseInt(nota)){
            case 0:
                alert("Muy deficiente")
                break;
            case 1:
                alert("Muy deficiente")
                break;
            case 2:
                alert("Muy deficiente")
                break;
            case 3:
                alert("Insuficiente")
                break;
            case 4:
                alert("Insuficiente")
                break;
            case 5:
                alert("Suficiente")
                break;
            case 6:
                alert("Suficiente")
                break;
            case 7:
                alert("Bien")
                break;
            case 8:
                alert("Notable")
                break;
            case 9:
                alert("Notable")
                break;
            case 10:
                alert("Sobresaliente")
                break;
            default:
                alert("Número erroneo")
    }
    }else {
        alert("Introduce un número válido")
    }
}
