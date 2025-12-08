let stock = [
   {id: 1, name: 'samsung', stocks:[{model: 's21', price: 70000}, {model: 's20', price: 50000}]},
   {id: 2, name: 'iphone', stocks:[{model: '13pro', price: 120000}, {model: '12pro', price: 100000}]},
   {id: 3, name: 'xiaomi', stocks:[{model: 'mi11', price: 60000}, {model: 'mi10', price: 40000}]}
]      
let filtered = stock.filter(value => { 
    value.stocks.find(j => j)
});

console.log(filtered)

// let finded = stocks.find(i => i.name=='samsung')
// console.log(finded); // Print objects without arrays

// let filtered = stocks.filter(i => i.name=='samsung')
// console.log(filtered); // Print objects with arrays










// filter on array of objects
let products = [
    {id: 1, name: 'laptop', stock:['dell', 'hp']},
    {id: 2, name: 'phone', stock:['samsung', 'iphone']},
    {id: 3, name: 'tablet', stock:['lenovo', 'asus']}
]
let x = 'phone';
 let filter = products.filter((i,ind) => i.name == x);
 let find = products.find((i,ind) => i.name == x);
 
 console.log(find.stock);
//  let findstock = products.find((i,ind) => (i.name == x)? i.stock : null);
//  console.log(findstock.stock);


//  console.log(filter);

let mobiles = [
    {id: 1, name: 'samsung', price: 50000},
    {id: 2, name: 'iphone', price: 100000},
    {id: 3, name: 'xiaomi', price: 30000},
    {id: 4, name: 'oppo', price: 40000},
    {id: 5, name: 'vivo', price: 35000}
]
let priceFilter = mobiles.filter((i,ind) => i.stock.price <= 50000);
console.log(priceFilter);
