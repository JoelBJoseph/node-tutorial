
const n = 5;
const m = 5;

const add = (a,b) =>{
    let sum = a+b;
    console.log(`The sum: ${sum}`);
}

add(m,n);

// const amount = 12;
// if (amount<10){
//     console.log('small nummber');
// }
// else{
//     console.log('large number');
// }
// console.log('hey this my first node app');

// const name = require('./name');

// console.log(name);

// require('./backup');

const os = require('os');
//info about current user
const user = os.userInfo();
//console.log(user);

//method return the uptime in sec
//console.log(`The sytem uptime: ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    frreMem: os.freemem()
}

//console.log(currentOS);