// console.log("start execution.........")


//  console.log("logic execution..........")
// setTimeout(()=>{
//     console.log("logic exectution......")
// },2000);


// console.log("complete execution.......")

//--drawback
// let a=10;
// let b=0;
// setTimeout(()=>{
//     b=20;
// },2000)
// console.log(a+b);
//how to handle above drawback:
let a=10;
let b=0;
// setTimeout(()=>{
//     b=20;
// },2000);
//resolve jab sab sahi se ho jaye
// reject ja kuch na kuch error aa jaye
let waitingData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // b=30;
        resolve(30)// array, object,tree kuch b ass kr sakte h not onlly number
    },2000);
})
waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})
//resolve ka output then se get karte h data k form mei then data ko b bana k add krde output de dete hai

