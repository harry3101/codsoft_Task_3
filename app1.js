const ticket = new Promise(function(resolve, reject) {
    // resolve will be called when the promise is successfully fulfilled
    // reject will be called when the promise is not fulfilled
    const isBoarded = false;
    if(isBoarded){
        resolve('You are in the flight');
    } else {
        reject('Your flight has been cancelled');
    }
});

// using the promise
ticket
.then((data) => {
    console.log('wohoo', data);
})
.catch((data) => {
    console.log('ohh no', data);
})
.finally(() => {
    console.log('isko frk ni pdta ye call hoga chaye reject oh ya resolve');
});