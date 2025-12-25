        arr = JSON.parse(localStorage.getItem('Data'))
        console.log(arr)

        let acc = arr.find(obj => obj.flag == true)
        console.log(acc)
        if (acc) {
            document.getElementById('button').innerHTML = `<button onclick="logout()"  >Logout</button>`
            document.getElementById('main').innerHTML = `<h1>Welcome ${acc.fullName}</h1>
            <h2>Your Account Information</h2>
            <p>Your Full Name :  ${acc.fullName}</p>
            <p>Email :  ${acc.email}</p>
            <p>Gender :  ${acc.gender}</p>
            <p>Date of Birth :  ${acc.dob}</p>
            `;
        }
        const logout = () => {
            acc.flag = false;
            localStorage.setItem('Data',JSON.stringify(arr));
            location.reload();
            
        }