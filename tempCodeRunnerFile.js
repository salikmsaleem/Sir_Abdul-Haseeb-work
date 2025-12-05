   const array1 = [
                {name: "salik", age: 20, city: "karachi"},
                {name:"abdul rehman", age:19, city: "karachi"}
            ]
            const newObj = {caste: "mughal", country: "pakistan"};
            // array1[0] = {...array1[0], ...newObj}; or
            array1[0] += newObj;
            console.log(array1);