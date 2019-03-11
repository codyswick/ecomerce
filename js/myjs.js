
//add to cart function
function addtocart(){
  //set y and x to cart ammount and buy ammount
  var y =parseInt(document.getElementById("amount").value);
  var x = parseInt(document.getElementById("quant").innerHTML);
    // if buy ammount entered less that 0
  if(y>0){
    //set cart number to X + Y
  document.getElementById("quant").innerHTML = x+y;
  // set variables for the Item being purchased
  //name of item
  var name = document.getElementById('name').innerHTML;
  //price of item
  var price = document.getElementById('price').innerHTML;
  //picture of item
  var img = document.getElementById('img').src;
  // quantity being added
  var quantity = document.getElementById('quant').innerHTML;

  

 // set object with item details
  var item = {
    name: name,
    price:price,
    img:img.src,
    quantity:quant.innerHTML
  }
  // set object to local storage
  localStorage.setItem("name", item.name);
  localStorage.setItem("price", item.price);
  localStorage.setItem("img", item.img);
  localStorage.setItem("quantity", item.quantity);



  }
  //if ammount is less than 0 or not a positive integer
  else{
    alert('You Buy Now');
  }

}

//set variable for add to cart button
var btnadd = document.getElementById("addproduct");
//set on click to call function
btnadd.onclick = addtocart;




function checkoutLoad(){

  document.getElementById('name').innerHTML = localStorage.getItem("name");
  document.getElementById('price').innerHTML = localStorage.getItem("price");
  document.getElementById('quantity').innerHTML = parseInt(localStorage.getItem("quantity"));
  document.getElementById('total').innerHTML = localStorage.getItem('price');
  document.getElementById('quant').innerHTML = localStorage.getItem('quantity');
}
