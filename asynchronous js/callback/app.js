// function checkInventory(callback){
//     setTimeout(() => {
//         console.log("checking the inventory..")
//         callback();
//     }, 2000);
// }

// function createOrder(callback){
//     setTimeout(() => {
//         console.log("creating the order..")
//         callback();
//     }, 1000);
// }

// function chargePayment(callback){
//     setTimeout(() => {
//         console.log("charging the payment..")
//         callback();
//     }, 2000);
// }

// function sendInvoice(callback){
//     setTimeout(() => {
//         console.log("Sending the invoice...")
//         callback();
//     }, 1000);
// }

// function main(){
//     checkInventory(() => {
//         createOrder(() => {
//             chargePayment(() => {
//                 sendInvoice(() => {
//                     console.log("all done")
//                 })
//             })
//         })
//     })
// }

// main();


// Error handling  and passing value
function checkInventory(callback){
    setTimeout(() => {
        console.log("checking the inventory..")       
        callback();
    }, 2000);
}

function createOrder(callback){
    setTimeout(() => {
        console.log("creating the order..")
        let error = new Error("order creation failed");
        callback(error);
    }, 1000);
}

function chargePayment(callback){
    setTimeout(() => {
        console.log("charging the payment..")
        let error = null;
        let chargedamount = 100
        callback(error,chargedamount);
    }, 2000);
}

function sendInvoice(callback){
    setTimeout(() => {
        console.log("Sending the invoice...")
        callback();
    }, 1000);
}

function main(){
    checkInventory(() => {
        createOrder((error) => {
                if(error){
                    console.log(error);
                }
            chargePayment((error,chargedamount) => {
                if(error){
                    console.log("handling the error")
                    return;
                }
                console.log("charged amount",chargedamount)
                sendInvoice(() => {
                    console.log("all done")
                })
            })
        })
    })
}

main();