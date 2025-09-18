function wait1(t1) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Done with wait1 in ${t1} seconds`)
        }, t1*1000)
    })
}
function wait2(t2) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Done with wait2 in ${t2} seconds`)
        }, t2*1000)
    })
}
function wait3(t3) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Done with wait3 in ${t3} seconds`)
        }, t3*1000)
    })
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return wait1(t1).then(function(t) {
        console.log(t);
        return wait2(t2)
    }).then(function(r) {
        console.log(r);
        return wait3(t3)
    }).then(function(s) {
        console.log(s);
        const end = Date.now();
        const timeTaken = end - start;
        console.log(`Time taken is ${timeTaken/1000} seconds `);
    })
    
}
calculateTime(3, 4, 5);