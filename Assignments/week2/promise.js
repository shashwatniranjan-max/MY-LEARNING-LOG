// function wait(n){
//     return new Promise(resolve => {
//         setTimeout(resolve, n*1000)
//     })
// }
// module.exports = wait;

function sleep(ms){
    return new Promise(resolve => {
        const date = Date.now();
        while(Date.now() - date < ms){

        }
        
        resolve();
    })
}
module.exports = sleep;


