$(document).on("click",".add-to-cart",function(event){
    event.preventDefault();
    alert("You Add One item In Your Cart !");
    let id =$(this).attr("value");
    let item_header=$("#item_header").attr("value"); 
    let item_price=$("#item_price").attr("value");
    console.log("item header--->>>",item_header);           
    console.log(" buttum ID :",id);
    let quantity= parseInt($("#FormControlSelect").val());
    //get cart from localStorage OR initialize a new empty array 
    let cartItem= JSON.parse(localStorage.getItem("cart"));
    if (!cartItem)
        cartItem = [];

    //use the inputs to create a new item
    let newItem = {
        id:id,
        header:item_header,
        price:item_price,
        quantity:quantity
    };

    //check first to see if we already have this item in our cart
    let foundItem = false;
    cartItem.forEach(item => {
        //if we already have this item in our cart, update its quantity
        if (newItem.id === item.id) {
            foundItem = true;
            item.quantity += newItem.quantity;
        }
    });

    //If we didn't already have this item in our cart, push it to the cart
    if (!foundItem)
        cartItem.push(newItem);

    let strCartItem = JSON.stringify(cartItem)
    localStorage.setItem("cart", strCartItem);
      
    console.log("quantity :--->",cartItem[0].quantity);
    // loop through localstorage item adding item quantity for each item inside the cart badge cart number
    let resultNumItem=0;
    for (let i = 0; i < cartItem.length; i++) {
        const element = cartItem[i].quantity;
        console.log("quantity inside the loop:"+element);
        resultNumItem+=element;
        
    }
    console.log("result"+resultNumItem);
    localStorage.setItem("numOfitem",resultNumItem);
    console.log(" number of item i the cart",cartItem.length);  

    // puting the total number of item inside the cart badge
    $("#cart-item-num").text(localStorage.getItem("numOfitem"));
    // location.reload();                  
});

$(function(){

    $("#cart-item-num").text(localStorage.getItem("numOfitem"));


})

$(document).on("click","#cart",function(event){
    //get the local storage item
    console.log("this click listner worked!");
    //let cart= JSON.parse(localStorage.getItem("cart"));
    // var cart = JSON.parse(localStorage.getItem("cart"));
    // console.log(" catt stuff",cart);
   let cart = [ {id: "3", header: "JavaScript Book", price: "43", quantity: 1},
    {id: "1", header: "USB Drive", price: "23", quantity: 1},
    {id: "4", header: "HDMI Cable", price: "18", quantity: 1}];
    $.post("/cart", cart)
        .then(data => {
          console.log("inside the ajax ",data);
        //   window.location.replace("/");
        //   this does a get
        //   window.location.href = "/cart";
          
        //   If there's an error, handle it by throwing up a bootstrap alert
        })
    })








