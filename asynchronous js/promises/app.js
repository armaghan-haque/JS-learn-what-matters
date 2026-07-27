// function checkInventory(){
//     const p1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("checking the inventory..")
//             resolve();
//         },2000)
//     })
//     return p1;
// }

// function createOrder(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              console.log("creating the order..")   
//              resolve();
//         },1000)
//     })
// }

// function chargePayment(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("charging the payment..")
//             resolve();
//         }, 2000);
//     })
// }

// function sendInvoice(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Sending the invoice...")
//             resolve();
//         }, 1000);
//     })
// }

// function main(){
//     checkInventory()
//     .then(createOrder)
//     .then(chargePayment)
//     .then(sendInvoice)
// }

// main();


// error handling 

function checkInventory(){
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("checking the inventory..")
                    reject(new Error("failed to check inventory.."))
        },2000)
    })
    return p1;
}

function createOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             console.log("creating the order..")   
                     reject(new Error("failed to create order.."))

        },1000)
    })
}

function chargePayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("charging the payment..")
            resolve();
        }, 2000);
    })
}

function sendInvoice(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sending the invoice...")
            resolve();
        }, 1000);
    })
}

function main(){
    checkInventory()
        .catch((a)=>{
            console.log("err",a)
        })
    .then(createOrder)
        .catch((b)=>{
            console.log("err",b)
        })
    .then(chargePayment)
    .then(sendInvoice)
}

main();