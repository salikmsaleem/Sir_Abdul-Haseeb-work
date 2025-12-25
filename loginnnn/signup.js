// for space check
let udate = new Date();
console.log(udate.toLocaleDateString().slice(-4))

let passVal = document.getElementById('password');
passVal.addEventListener('input', function () {
    this.value = this.value.trim();
})
document.getElementById('confirm').addEventListener('input', function () {
    this.value = this.value.trim();

})
let flagCheck , hasCap , hasCount , hasNum , hasSpecial ;
passVal.addEventListener('input', function () {

    hasSpecial = /[^a-zA-Z0-9]/.test(passVal.value);
    hasCap = /[A-Z]/.test(passVal.value);
    hasNum = /[0-9]/.test(passVal.value);
    hasCount = passVal.value.length >= 8;
    countTrue = hasCap + hasCount + hasNum + hasSpecial;
    flagCheck = (countTrue == 4);
    // console.log(flagCheck)
});




document.getElementById('email').addEventListener('blur', function () {
    if (this.value != "" && !this.value.includes('@')) {
        document.getElementById('mail').innerHTML = "";
        this.value += '@gmail.com'

    }
    else {
        document.getElementById('mail').innerHTML = "@gmail.com";
    }
    if (this.value.includes('@gmail.com')) {
        document.getElementById('mail').innerHTML = "";
    }

}
)
let status = document.getElementById('status');
let arr = JSON.parse(localStorage.getItem('Data')) || [];


const signup = (event) => {
    event.preventDefault();
    status.innerHTML = ""
    let Form = new FormData(event.target);
    let data = Object.fromEntries(Form);
    let is18 = (udate.getFullYear() - data.dob.slice(0, 4)) >= 18;
    let nameFlag = !/^[a-zA-Z\s]+$/.test(data.fullName);
    let fakeNames = ["admin", "user", "test", "null", "undefined"];
    let fakeflag = fakeNames.some(name => name.toLowerCase() === data.fullName.toLowerCase());
    
    if (document.getElementById('password').value == document.getElementById('confirm').value && flagCheck && is18 && !nameFlag && !fakeflag) {

        data.flag = false;
        console.log(data);
        console.log(data.dob).slice(0, 4);
        let exist = arr.some(user => data.email === user.email);
        if (exist) {
            status.style.color = 'red';
            status.innerHTML = "Account Already Exist!"
            return;
        }
        arr.push(data);

        localStorage.setItem('Data', JSON.stringify(arr));
        let exist2 = JSON.parse(localStorage.getItem('Data')).some(user1 => data.email === user1.email);
        if (exist2) {
            status.style.color = 'green';
            status.innerHTML = "Registration Successful"


        }
    }
    else {
        status.style.color = 'red';
        document.querySelectorAll('input').forEach(input => {
            input.style.borderBottom = "2px solid #333";
        });
        if (fakeflag || nameFlag) {
            status.innerHTML = (nameFlag) ? "Name must contain only alphabets and spaces" : "Please enter a valid name";
        }
        else if (document.getElementById('password').value != document.getElementById('confirm').value) {
            document.getElementById('password').style.borderBottom = "2px solid red";
            document.getElementById('confirm').style.borderBottom = "2px solid red";
            status.innerHTML = "Password Doesn't match";
        }
        else if (!flagCheck) {
            document.getElementById('password').style.borderBottom = "2px solid red";
            status.innerHTML =  (!hasCount)? "Password must be have of 8 characters" : "Use password by mixing Capital, Numbers & Special Characters";
        }
        else if (!is18) {
            document.getElementById('dob').style.borderBottom = "2px solid red";
            status.innerHTML = "You must be at least 18 years old to sign up";
        }
    }
    
      
        
}
