// function isAnagram(str1, str2) {
//     str1 = str1.split("").sort().join("");
//     str2 = str2.split("").sort().join("");
//     if(str1 === str2) console.log("number is anagram ")
//     else console.log("number is not anagram");
// }
// isAnagram("triangle", "integral");


// const fruits = ["apple", "banana", "mango"];

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// })

// function calculateTotalSpendByCategory(transactions) {
//     const categoryTotal = {};
//     transactions.forEach(transaction => {
//         const category = transaction.category;
//         const price = transaction.price;
//         if(!categoryTotal[category]) {
//             categoryTotal[category] = 0;
//         }
//         categoryTotal[category] += price;

//     })
//     const result = Object.keys(categoryTotal).map(category => ({
//         category : category,
//         totalSpent : categoryTotal[category],
//     }));
//     return result;
// }
// const transactions = [
//   { id: 1, price: 10, category: 'Food', itemName: 'Pizza' },
//   { id: 2, price: 20, category: 'Clothing', itemName: 'T-shirt' },
//   { id: 3, price: 15, category: 'Food', itemName: 'Burger' }
// ];

// console.log(calculateTotalSpendByCategory(transactions));

function largestElement(arr) {
    if (arr.length === 0) return undefined;
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest ;

}

arr = [23, 532, 54353, 6434324];
console.log(largestElement(arr));