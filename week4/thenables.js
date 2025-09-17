const thenable= {
    then : function(onFulfilled) {
        setTimeout(() => onFulfilled(42), 1000)
    }
}
async function main() {
    const v = await thenable;
    console.log("hello world")
}
main();