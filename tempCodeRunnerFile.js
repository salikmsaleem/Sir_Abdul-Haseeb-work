let stock = [
   {id: 1, name: 'samsung', stocks:[{model: 's21', price: 70000}, {model: 's20', price: 50000}]},
   {id: 2, name: 'iphone', stocks:[{model: '13pro', price: 120000}, {model: '12pro', price: 100000}]},
   {id: 3, name: 'xiaomi', stocks:[{model: 'mi11', price: 60000}, {model: 'mi10', price: 40000}]}
]      
let filtered = stock.filter(value => { 
    value.stocks.find(j => j)
});