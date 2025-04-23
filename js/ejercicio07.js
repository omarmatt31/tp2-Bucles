const numero = parseInt(prompt("Ingrese un numero no mayor a 50"));

let i=numero
if(numero<=50 && numero>0){
    while(i>0){
        let column=i;
        while(column>0){
            document.writeln(i)
            column--
        }
        document.writeln("<br>")
        i--
    }
}else{
    alert("Numero invalido")
}
