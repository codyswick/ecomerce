
function addtocart(){

  var y =parseInt(document.getElementById("amount").value);
  var x = parseInt(document.getElementById("quant").innerHTML);

  if(y>0){
  document.getElementById("quant").innerHTML = x+y;
  }
  else{
    alert('You Buy Now');
  }
}
