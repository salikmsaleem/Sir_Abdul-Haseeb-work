let arr = [10,12,13,14,20,30,40,50];
let b = Math.max(...arr);
console.log(b);

 let a = arr.filter((value,ind)=>{

if (value>18) {
    
    return(value)
}



})
console.log(a);







// let c = [];
// let b = arr.filter((value,index)=>{
//     if (value>18) {
        
//         return(value) ;
//     }
//     else{
//     c.push(value);
//     }
  
// })
// console.log(b, c);