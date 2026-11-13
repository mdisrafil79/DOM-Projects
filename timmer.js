
// set time out

// console.log("a");
// console.log("b");

//set time out ( fn, delay in ms)
// const timeoutId= setTimeout(()=> {
//     console.log("Order placed successfully");
//     alert("Order placed successfully");
// }, 3000)

// clearTimeout(timeoutId)
// console.log("c")

//set interval
 //syntax
 //setInterval(fn, delay in ms)

let count = 0;
 const intervalId = setInterval( ()=> {
    count ++;
    console.log(`Interval executed ${count} times`);
    if( count === 5){
        clearInterval(intervalId);
    }
 },1000)
 console.log(count)

// setInterval(()=> {
// let date = new Date();
// let time = date.toLocaleTimeString()
// console.log(time);
// },1000)
