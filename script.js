const currency = '$';
let amount = 300;
document.getElementById("output").innerText=`${currency}${amount}`;

function addition(){
  let a = parseInt(document.getElementById("numberInput1").value)
  let b = parseInt(document.getElementById("numberInput2").value)

  document.getElementById("add").innerHTML=a+b;

};