// function checkInventory(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("checking the inventory..")
//             resolve();
//         }, 2000);
        
//     })
// }

// function createOrder(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("creating the order..") 
//             resolve();
//         },1000)
//     })
// }

// function chargePayment(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("charging the payment..")
//             resolve();
//         },2000)
//     })
// }

// function sendInvoice(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Sending the invoice...")
//             resolve();
//         }, 1000);
//     })
// }

// async function main(){
//     await checkInventory();
//     await createOrder();
//     await chargePayment();
//     await sendInvoice();
// }

// main();

// how to pass data in resolve 
// function checkInventory(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("checking the inventory..")
//             const Instock = 4
//             resolve(Instock);
//         }, 2000);
        
//     })
// }

// async function main(){
//    let Instock = await  checkInventory();
//    console.log("Instock" , Instock)
// }

// main();

// how to check for error

function checkInventory(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("checking the inventory..")
            reject(new Error("failed to check inventory.."))
        }, 2000);
        
    })
}

function createOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("creating the order..") 
            resolve();
        },1000)
    })
}

function chargePayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("charging the payment..")
            reject(new Error("failed to create the payment.."))
        },2000)
    })
}

function sendInvoice(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Sending the invoice...")
            resolve();
        }, 1000);
    })
}

async function main(){
   try {
         await  checkInventory();
   } catch (error) {
        console.log("err", error);
   }
    await createOrder();
    try {
        await chargePayment();
    } catch (error) {
        console.log("err",error);
    }  
    await sendInvoice();
}

main();
