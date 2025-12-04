// learning objects
let obj = {
    firstName : 'Salik',
    lastName : 'Mughal',
    age : 20
}
console.log(obj.firstName);
console.log(obj['lastName']);
// updating object properties
obj.age = 21;
console.log(obj.age);

obj.city = 'Karachi';
console.log(obj.city);
console.log(obj);
// deleting object properties
delete obj.age;
console.log(obj);
// checking if key exists in object
console.log('age' in obj); 

// forlopp to iterate over object keys
for (let key in obj){
    console.log(key + ": " + obj[key]);
}
//deleting entire object data
for (let key in obj){
    delete obj[key];
}
console.log(obj)
//maiking array in object
let person = {
    name : 'Salik',
    hobbies : ['reading', 'coding', 'gaming']
}
console.log(person.hobbies);
console.log(person.hobbies[1]);


//making nested objects
let student = {
    Salik : {
        age : 20,
        city : 'Karachi'},
    Ali : {
        age : 21,
        city : 'Lahore'}
}
console.log(student.Salik.age);
console.log(student['Ali']['city']);
//updating nested object property
student.Ali.age = 22;
console.log(student.Ali.age);

// more about objects will be discussed later in detail
//Aaj k liye bas itna hi milty hen kisi next video