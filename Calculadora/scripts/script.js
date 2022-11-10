var Valor1
var Valor2

function Adicao(){ 
    Valor1=document.getElementById('Valor1').value;
    Valor2=document.getElementById('Valor2').value; 
    total = Number(Valor1)+Number(Valor2);
    document.getElementById("txtTotal").value=total;
}
function Subtracao(){
    Valor1=document.getElementById('Valor1').value;
    Valor2=document.getElementById('Valor2').value; 
    total = Number(Valor1)-Number(Valor2);
    document.getElementById("txtTotal").value=total;
}
function Divisao(){
    Valor1=document.getElementById('Valor1').value;
    Valor2=document.getElementById('Valor2').value; 
    total = Number(Valor1)/Number(Valor2);
    document.getElementById("txtTotal").value=total;
}
function Multiplicacao(){
    Valor1=document.getElementById('Valor1').value;
    Valor2=document.getElementById('Valor2').value; 
    total = Number(Valor1)*Number(Valor2);
    document.getElementById("txtTotal").value=total;
}
