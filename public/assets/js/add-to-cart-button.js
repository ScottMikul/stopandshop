$(document).on("click",".add-to-cart",function(event){
    event.preventDefault();
    alert("hello");
    let id =$(this).attr("value");            
    console.log(" buttum ID :",id);
    let quantity=$("#FormControlSelect").val();
    let cartItem=[];
    let item ={
        id:id,
        quantity:quantity
    };

    cartItem.push(item);
    let strCartItem = JSON.stringify(cartItem)
    localStorage.setItem("cart", strCartItem);
    $("#cart-item-num").text(cartItem.length);


// location.reload();                  
});









