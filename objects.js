// learning objects
let obj = {
    firstName : 'Salik',
    lastName : 'Mughal',
    age : 20
}
console.log(obj.firstName); //salik
console.log(obj['lastName']); //mughal
// updating object properties
obj.age = 21;
console.log(obj.age); //21

obj.city = 'Karachi';
console.log(obj.city); // adding new property to object
console.log(obj); // print entire object
// deleting object properties
delete obj.age;
console.log(obj); //age property deleted
// checking if key exists in object
console.log('age' in obj); // false
console.log('city' in obj); // true

// forlopp to iterate over object keys
for (let key in obj){
    console.log(key + ": " + obj[key]);       //key and value
}
//deleting entire object data
for (let key in obj){
    delete obj[key];
}
console.log(obj) //empty object
//maiking array in object
let person = {
    name : 'Salik',
    hobbies : ['reading', 'coding', 'gaming']
}
console.log(person.hobbies); //print entire array
console.log(person.hobbies[1]); //print specific index of array in object


//making nested objects
let student = {
    Salik : {
        age : 20,
        city : 'Karachi'},
    Ali : {
        age : 21,
        city : 'Lahore'}
}
console.log(student.Salik.age);       //20
console.log(student['Ali']['city']); //Lahore
//updating nested object property
student.Ali.age = 22;
console.log(student.Ali.age); //22


//combining objects
obj1 = {
    name: 'Salik',
    age: '16'
}
obj2 = {
    name1: 'Ali',
    age1: '17'
} 
console.log({...obj1,...obj2})   //spread operator ...
arr2 =[{...obj1},{...obj2}];
console.log(arr2[1]);







// object in array
let employees = [
    {name : 'Salik', age : 20},
    {name : 'Ali', age : 21},
    {name : 'Zafar', age : 22}
]
console.log(employees[1].name); //Ali
console.log(employees[2]['age']); //22
//updating object property in array
employees[0].age = 21;
console.log(employees[0].age); //21



 // Revision
        // 1> making object
            const obj = {name: "Salik", age: 20, city: "Karachi"};
        // 2> adding new property
            obj.houseNo = 'kb-l18';
            console.log(obj);
        // 3> updating property
            obj.age = 21;
            console.log(obj);
            // 4> deleting property
            delete obj.city;
            console.log(obj);
        // 5> make object in array apply loop on it and print values
            const array = [
                {name: "salik", age: 20, city: "karachi"},
                {name:"abdul rehman", age:19, city: "karachi"}
            ]
            for(let i = 0; i < array.length; i++){
                array[i].id = i;
            }
            console.log(array);
            
        // 6> push another object in array
            array.push({name: "zafar", age: 22, city: "lahore"});
            console.log(array);
            // 7> outside loop merge two objects in array
            const array1 = [
                {name: "salik", age: 20, city: "karachi"},
                {name:"abdul rehman", age:19, city: "karachi"}
            ]
            const newObj = {caste: "mughal", country: "pakistan"};
            array1[0] = {...array1[0], ...newObj}
           
            console.log(array1);