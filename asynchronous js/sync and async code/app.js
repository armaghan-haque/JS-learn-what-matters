// function checkInventory(){
//     setTimeout(()=>{
//         console.log("checking the inventory..")
//     },2000)
// } 

// function createOrder(){
//     setTimeout(()=>{
//         console.log("creating the order..")   
//     },1000)
// }

// function chargePayment(){
//     setTimeout(()=>{
//         console.log("charging the payment..")
//     },2000)
// }

// function sendInvoice(){
//     setTimeout(()=>{
//         console.log("Sending the invoice...")
//     },1000)
// }

// function main(){
//     checkInventory();
//     createOrder();
//     chargePayment();
//     sendInvoice();
//     console.log("other request processing ...")
// }
// main();

// function checkInventory(callback){
//     setTimeout(()=>{
//         console.log("checking the inventory..")
//         callback();
//     },2000)
// } 


// callback

// function createOrder(callback){
//     setTimeout(()=>{
//         console.log("creating the order..")  
//         callback();
//     },1000)
// }

// function chargePayment(callback){
//     setTimeout(()=>{
//         console.log("charging the payment..")
//         callback();
//     },2000)
// }

// function sendInvoice(callback){
//     setTimeout(()=>{
//         console.log("Sending the invoice...")
//         callback();
//     },1000)
// }

// function main(){
//     checkInventory(()=>{
//         createOrder(()=>{
//             chargePayment(()=>{
//                 sendInvoice(()=>{
//                     console.log("all done")
//                 })
//             })
//         })
//     });
// }
// main();


// handling error

function checkInventory(callback){
    setTimeout(()=>{
        console.log("checking the inventory..")
        callback();
    },2000)
} 

function createOrder(callback){
    setTimeout(()=>{
        console.log("creating the order..")  
        const error = new Error("order creation failed")
        callback(error);
    },1000)
}

function chargePayment(callback){
    setTimeout(()=>{
        console.log("charging the payment..")
        let error = null
        let chargedAmount = 100
        callback(error,chargedAmount);
    },2000)
}

function sendInvoice(callback){
    setTimeout(()=>{
        console.log("Sending the invoice...")
        callback();
    },1000)
}

function main(){
    checkInventory(()=>{
        createOrder((error)=>{
            if (error){
                console.log("error")
            }
            chargePayment((error,chargedAmount)=>{
                    if(error){
                        console.log("handling the error")
                        return;
                    }
                    console.log("charged", chargedAmount)
                sendInvoice(()=>{
                    console.log("all done")
                })
            })
        })
    });
}
main();