// $(".card-link").on("click",function(event){
//     event.preventDefault();
//     alert("hello");
//     let id =$(this).attr("id");            
//     console.log("id:",id);
//     $.ajax(`/item/${id}`,{
//         method: "get",
//         data:id
//         }).then(function(data) {
//             console.log("inside AJAX",data); 
          
//         });
// location.reload();                  
// });