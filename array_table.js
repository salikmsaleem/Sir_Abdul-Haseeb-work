let arr = [1, 2, 3, 4, 5];
let store = [];
const my_function = () =>{
    for (let i = 0; i < arr.length; i++) {
        
    //   store.push( i*2 ); 
      
     store = [(arr[i])*2 , ...store];
        
    }
    console.log(store);
}
my_function();