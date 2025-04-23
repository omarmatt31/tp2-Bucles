const numero = parseInt(prompt("Ingrese un numero no mayor a 50"));

let i=1
if(numero<=50 && numero>0){
    while(i<=numero){
        let column=1;
        while(column<=i){
            document.writeln(column)
            column++
        }
        document.writeln("<br>")
        i++
    }
}else{
    alert("Numero invalido")
}
