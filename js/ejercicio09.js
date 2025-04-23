let num=1, fila=1;
while(num<=500){
    if(fila<=5){
        if(!(num%4)){
            document.writeln(num, " (Multiplo de 4)")
        }else if(!(num%9)){
            document.writeln(num, " (Multiplo de 4)")
        }else {
            document.writeln(num)
        }

    }else{
        document.writeln("————————————————————-")
        fila=0
    }
    document.writeln("<br>")
    num++
    fila++
}