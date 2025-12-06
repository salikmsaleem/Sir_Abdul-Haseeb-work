let mobiles = [
    {id: 1, name: 'samsung', price: 50000},
    {id: 2, name: 'iphone', price: 100000},
    {id: 3, name: 'xiaomi', price: 30000},
    {id: 4, name: 'oppo', price: 40000},
    {id: 5, name: 'vivo', price: 35000}
]
let priceFilter = mobiles.filter((i,ind) => i.price <= 50000);
console.log(priceFilter);
