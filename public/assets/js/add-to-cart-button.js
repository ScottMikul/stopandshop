$(document).on("click", ".add-to-cart", function (event) {
    event.preventDefault();
    alert("You Add One item In Your Cart !");
    let id = $(this).attr("value");
    let item_header = $("#item_header").attr("value");
    let item_price = $("#item_price").attr("value");
    let img_url = $("#img_url").attr("src");

    let quantity = parseInt($("#FormControlSelect").val());
    //get cart from localStorage OR initialize a new empty array 
    let cartItem = JSON.parse(localStorage.getItem("cart"));
    if (!cartItem)
        cartItem = [];

    //use the inputs to create a new item
    let newItem = {
        id: id,
        header: item_header,
        price: item_price,
        quantity: quantity,
        img_url: img_url
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


    // loop through localstorage item adding item quantity for each item inside the cart badge cart number
    let resultNumItem = 0;
    for (let i = 0; i < cartItem.length; i++) {
        const element = cartItem[i].quantity;

        resultNumItem += element;

    }

    localStorage.setItem("numOfitem", resultNumItem);


    // puting the total number of item inside the cart badge
    $("#cart-item-num").text(localStorage.getItem("numOfitem"));

});

$(function () {

    $("#cart-item-num").text(localStorage.getItem("numOfitem"));


})
