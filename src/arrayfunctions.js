let number = [1,2,3,4,5]
let length = number.length
console.log(length);

//All the arrays can be called as object.

//push function - add one element at the end of the array
let e1 = number.push(6)
console.log(number);

//pop function - remove one element at the end of the array
let e2 = number.pop();
console.log(e2);
console.log(number);

//unshift - Add to the begining of the array

let product = ['imac', 'iphone', 'macbook']
console.log(product.unshift('table'));
console.log(product);

//shift - Removes the first element of the array
let products = ['imac', 'iphone', 'macbook']
console.log(products.shift());
console.log(products);

//splice - start, delete count, items to add [begining]
let cart = ['imac', 'iphone', 'macbook', 'samsung']
cart.splice(0,0,'amazon')
console.log(cart);

cart.splice(0,1,'flipkart')
console.log(cart);

cart.splice(2,1,'canon')
console.log(cart);

cart.splice(0,cart.length,'Amazon')
console.log(cart);

let carts = ['imac', 'iphone', 'macbook', 'samsung']
carts.splice(carts.length-1,1,'canon')
console.log(carts);

let productCart = ['imac', 'iphone', 'macbook', 'samsung']
productCart.splice(2,0,'Apple')
console.log(productCart);

//slice
let sites = ['amazon', 'flipkart', 'swiggy','zomato']
let newSites = sites.slice(0,2)
console.log((newSites)); //starting index, end index - 1

let siteslist = ['amazon', 'flipkart', 'swiggy','zomato','aws']
console.log(siteslist.slice(2)); //starts from index [2]
console.log(siteslist.slice(0));
console.log(siteslist.slice(-2)); // -4,-3,-2,-1 [ 'zomato' -> -2, 'aws' -> -1]


//7. reverse
let mumbaiIndians = ['Rohit', 'Bumrah', 'SKY', 'Pollard']
console.log(mumbaiIndians.reverse());
console.log(mumbaiIndians);//Mutate the array - change the existing array

//8. Index of
let mumbaiIndiansTeam = ['Rohit', 'Bumrah', 'SKY', 'Pollard', 'Quinton', 'Rohit']
let i = mumbaiIndiansTeam.indexOf('Rohit')
console.log(i);
let j = mumbaiIndiansTeam.indexOf('Rohit')
console.log(j);
let k = mumbaiIndiansTeam.indexOf('Rohit',3)
console.log(k);


