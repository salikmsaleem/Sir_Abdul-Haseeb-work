  document.getElementById('email').addEventListener('blur',function(){
            if (this.value!= "" && !this.value.includes('@')) {
                    document.getElementById('mail').innerHTML = "";
                    this.value += '@gmail.com'
                    
                }
                else{
                    document.getElementById('mail').innerHTML = "@gmail.com";
                }
                if (this.value.includes('@gmail.com')) {
                    document.getElementById('mail').innerHTML = "";
            }
            
            }
            )
        


            let status = document.getElementById('status');
        const main = (event) => {
            event.preventDefault();
            let data = new FormData(event.target);
            obj = Object.fromEntries(data);
            let arr = JSON.parse(localStorage.getItem('Data'));
            let mailExist = arr.some(stg => stg.email === obj.email);
            let passExist = arr.some(stg => stg.password === obj.password);
            if (mailExist && passExist) {
                let flag1 = arr.find(user => user.email === obj.email)
                flag1.flag = true ;
                localStorage.setItem('Data',JSON.stringify(arr));
                
                status.style.color = 'green'
                status.innerHTML = 'Logging in';
                
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
                
            }
            else if(mailExist){
                let flag1 = arr.find(user => user.email === obj.email)
                flag1.flag = false ;
                localStorage.setItem('Data',JSON.stringify(arr));
                
                status.style.color = 'red'
                status.innerHTML = "Incorrect Password";
            }
            else{
                status.style.color = 'red'
                status.innerHTML = "Account Doesn't found";
                
            }
            

        }