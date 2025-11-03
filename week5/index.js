function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({name : "Alex", id : 1})
        }, 2000);
    })
}
async function displayUser() {
    console.log("fetching User...");
    const user = await fetchUser();
    console.log(user.name)
}
displayUser();
async function getComments() {
    const user = await fetchUser();
    console.log(user.name);
    const post = await fetchPosts();
    console.log(user.id);
}

async function getComments() {
    // START YOUR try BLOCK HERE
    try{
        const user = await fetchUser();
        console.log("Got user:", user.name);
        
        const posts = await fetchPosts(user.id); 
        console.log("Got first post title:", posts[0].title); 
    
        const comments = await fetchComments(posts[0].id);
        console.log("Comments retrieved:", comments.length);
    } catch(error) {
        console.log(error)
    }
    
    
}
Assume fetchCategories() returns a Promise<Array<string>> 
and fetchProducts() returns a Promise<Array<object>>

async function getParallelData() {
  
  // This is where we want the parallel execution to happen
  const data = await Promise.all([ 
    fetchCategories(),
    fetchProducts()
  ]); 
  
  const categories = data[0];
  const products = data[1];

  console.log(`Retrieved ${categories.length} categories.`);
  console.log(`Retrieved ${products.length} products.`);
}
function fetchCategories() {
    return new Promise(resolve => {resolve()})
}
function fetchProducts() {
    return new Promise(resolve => {resolve()})
}
async function getSafeParallelData() {
    const result = await Promise.allSettled([
        fetchCategories(),
        fetchProducts()
    ])
    console.log(result)
}
getSafeParallelData();
async function getSafeParallelData() {
    const results = await Promise.allSettled([ 
        fetchCategories(), 
        fetchProducts() 
    ]);
    
    // Check results[0] (Categories)
    if (result[0].status == "fulfilled") {
        const categories = results[0].value;
        console.log(`Categories retrieved: ${categories.length}`);
    } else {
        console.error("Failed to load categories.");
    }

    // You would do a similar check for results[1] (Products)
}
async function getSafeParallelData() {
    const results = await Promise.allSettled([ 
        fetchCategories(), 
        fetchProducts() 
    ]);
    
    // Check results[0] (Categories)
    if (results[0].status === "fulfilled") { // Corrected variable name and used strict equality
        const categories = results[0].value;
        console.log(`Categories retrieved: ${categories.length}`);
    } else {
        console.error("Failed to load categories.");
    }
    
    if(results[1].status === "fulfilled") {
        const Products = results[1].value;
        console.log(`Categories retrieved: ${Products.length}`);
    } else {
         console.error("Failed to load categories.");
    }
}
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           reject("request timeout"); 
        }, ms);
    })
}
function fetchImage(img) {
    return new Promise(resolve => {
        resolve(img)
    })
}
async function getImage(img, ms) {
    try {
        const data = await Promise.race([
            fetchImage(img),
            timeout(ms)
        ])
        console.log(data);
    } catch(error) {
        console.log("Error fetching the image")
    }
}
getImage();