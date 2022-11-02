function multiplicar(){
    var numero = parseInt(document.getElementById('numero').value);

    for (var i = 1; i < 11; i++){
    
    document.getElementById('resultado').innerHTML+=""+numero+" x "+i+" = "+numero * i+"<br>";
    }
}