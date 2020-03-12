//the second argument is the key that you want to use
// sk designates a test key
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

//list all charges:
// stripe.charges.list(
//     {limit: 3},
//     function(err, charges) {
//         if(err){throw err}
//       // asynchronously called
//       console.log(charges)
//     }
//   );

//look up a chage
// stripe.charges.retrieve('ch_1GLs8Z2eZvKYlo2C4CY7W4kd', function(err,charge){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(charge);
//     }
// });


// how to look our balance with stripe ( how much money we made)
//   stripe.balance.retrieve(function(err,balance){
//       if(err) {console.log(err)}
//       console.log(balance);
//   })

//how to create a charge
// this looks liek the bare minimum required
stripe.charges.create(
    {
      amount: 2000,
      currency: 'usd',
      source: 'tok_1GLtKq2eZvKYlo2CxxBTsd3Y',
      description: 'My First Test Charge (created for API docs)',
      receipt_email:"customer@example.com",
      shipping:{        
        address:{
            city:"marietta",
            country:"us",
            line1:"4340 cornwallis ct",
            line2:"",
            postal_code:"30068",
            state:"georgia"
        },
        name:"Full Name Example",
        phone:"678-602-6634",
        carrier:"fex-ex"
      }
    },
    function(err, charge) {
      // asynchronously called
      if(err){console.log(err)}
      console.log(charge);
    }
  );

//   billing_details:{
//     address:{
//         city:"marietta",
//         country:"us",
//         line1:"4340 cornwallis ct",
//         line2:"",
//         postal_code:"30068",
//         state:"georgia"
//     },
//     email:"exmamplebilling@gmail.com",
//     name:"Full Name Example",
//     phone:"678-602-6634"

//   }


// the billing address seems to be held in the card object
//card verification check will check the cvc number CVC


//address verification (AVS)
