let uid = document.getElementById("uid");
let pwd = document.getElementById("pwd");
let emaillabel = document.getElementById("emaillabel");
let pwdlabel = document.getElementById("pwdlabel");


/*function validateform(){  
    /*if (uid.value== null|| uid.value == ""){ 

        alert("Userid cannot be blank");  
        return false;
    }
    else if (pwd.value == null || pwd.value == "") {
        alert("Password cannot be blank");
        return false;
    }
    else if(uid.value != 'admin'){
        alert("Please enter correct Userid");  
        return false;
    }
    else if(pwd.value != '12345'){
        alert("Please enter correct Password");  
        return false;
    }
    else{
        window.open('main.html', '_blank');
    }
    
    }*/

    function uidCheck(){
        if (uid.value =="admin"){
            console.log(uid.value);
            emaillabel.innerHTML ="";
            pwdlabel.innerHTML="";
            return true;
        }
    
    else{
        emaillabel.innerHTML = "Valid username is admin";
        emaillabel.style.color = "red";
        emaillabel.style.fontFamily = "San serif";
        return false;
    }}
       function pwdCheck(){
           if(pwd.value == "12345"){
               pwdlabel.innerHTML="";
               return true;
            
           }
           else{
               pwdlabel.innerHTML = "Valid Password is 12345";
               pwdlabel.style.color = "red";
               pwdlabel.style.fontFamily = "San serif";
               return false;
           
           }
       } 
       function validate(callback)
{
    if(uidCheck() && pwdCheck()){
        callback();
    }
    else {
        return false;
    }
}   
function display(){
    window.open("main.html");
     return true;
} 

    




