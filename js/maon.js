function titlecheck()
{ 
  let title=document.getElementById("tiltleinput").value;
  let titlecheck=/^[A-Za-z. ]{3,30}$/
  if(!titlecheck.test(title))
  {   
    document.getElementById("titletype").innerHTML="please enter valid Title";
    return false;
  }
  else
  {
    document.getElementById("titletype").innerHTML=""; 
    return true;
  }
}
function lastnamevalidation()
{

let lastName=document.getElementById("lastname").value;
let lastnamecheck=/^[A-Za-z. ]{3,30}$/;
if(!lastnamecheck.test(lastName))
{
  document.getElementById("lastnameerror").innerHTML="Please enter Lastname";
  return false;
}
else
{
document.getElementById("lastnameerror").innerHTML="";
return true;
}
}
function  firstnamevalidation()
{
  let firstname = document.getElementById("firstname").value;
  let fullnamecheck=/^[A-Za-z. ]{3,30}$/;

 if(!fullnamecheck.test(firstname))
  {   
    document.getElementById("fullnamemsg").innerHTML="please enter valid name"; 
    return false;
  }
  else
  {
    document.getElementById("fullnamemsg").innerHTML=""; 
    return true;
  }
}
function  emailvalidation()
{
  let email=document.getElementById("secondinput").value;
  let emailcheck =/^[a-z0-9_]{3,}@[a-z0-9]{3,}[.]{1}[a-z]{2,6}$/;
  if(!emailcheck.test(email))
  {
    document.getElementById("emailerror").innerHTML="please enter valiad email";
    return false;
  }
else
{
  document.getElementById("emailerror").innerHTML="";
  return true;
}
}
function passwordvalidation()
{
  let password=document.getElementById("thirdinput").value;
  let passwordcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if(! passwordcheck.test(password))
  {
    document.getElementById("passworderror").innerHTML="please enter valid password";
    return false;
  }
else
{
  document.getElementById("passworderror").innerHTML="";
  return true;
}
}
function retypepasswordvalidation()
{
  let retypepassword=document.getElementById("fourinput").value;
  let pass=document.getElementById("thirdinput").value;
  if(retypepassword == "")
  {
    return false;
  }
  else if(pass == retypepassword)
  {
    document.getElementById("retypepassworderror").innerHTML="";
    return true;
  }
  else
  {
    document.getElementById("retypepassworderror").innerHTML="confirmpassword does not match";
    return false;
  }
}
function functioncs()
{
  if(acceptTerms.checked)
  {
  return true;
  }
  else
  {
    return false;
  }
};
// ----------------------check same email id not inserted ----------------------------
// --------------------form submit---------------------------------------------
document.getElementById("form").addEventListener("submit",function(e)
{
  e.preventDefault();
  if(firstnamevalidation() && emailvalidation() &&  passwordvalidation()  && functioncs() && retypepasswordvalidation())
  {
   const userobj={
      "title":document.getElementById("tiltleinput").value,
      "firstName":document.getElementById("firstname").value,
      "lastName":document.getElementById("lastname").value,
      "email":document.getElementById("secondinput").value,
      "password":document.getElementById("thirdinput").value,
      "confirmPassword":document.getElementById("fourinput").value,
      "acceptTerms": true

    };
    document.getElementById("form").reset();
  fetch('http://localhost:4000/accounts/register',
{
  method:"POST",
  body:JSON.stringify(userobj),
  headers:{
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then(y=>y).then(y=>
  {
    console.log(y);
    
  })
    return true;
  }
  else
  {
    return false;
  }
});