const ticket = new Promise(function(resolve, reject){
   
// resolve tb call hoga jb promise sucessfull fulfill kr paye
// or reject jb promise pura na ho

const isBoarded = false;
if(isBoarded){
    resolve('You are in the flight');
}else{
    reject('Your flight has been cancelled')
}
});
// using the promise
ticket
.then((data) =>{
    console.log('wohoo', data);
})
.catch((data) => {
    console.log('ohh no', data);
})

.finally(() => {
    console.log('isko frk ni pdta ye call hoga chaye reject oh ya resolve');
});