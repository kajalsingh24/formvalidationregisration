
function loginvalidation(e)
{
  e.preventDefault();
    let email=document.getElementById("firstemail").value;
    let password=document.getElementById("secondpassword").value;  
if(email=="" && password=="")
{
  document.getElementById("finalerror").innerHTML="please enter the data";
}
else
{
  let user={
    "email": email,
    "password": password
  }
  fetch("http://localhost:4000/accounts/authenticate",
  {
    method:"POST",
    body:JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response=>response.json()).then(data=>
    {    
       
       localStorage.setItem("user",JSON.stringify(data))
       console.log(data.jwtToken);
  if(data.jwtToken == undefined)
  {
    document.getElementById("finalerror").innerHTML="Login failed invalid Email id and password";
  }
  else
  {
    document.getElementById("finalerror").innerHTML="";
    window.location.href="capture1.html";
  }
});
}
}
function setCookie(cname, cvalue, exminute) {
  const d = new Date();
  d.setTime(d.getTime() + (exminute * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  let user = getCookie("useremail");
  if (user != "") {

  } else {
    let useremail = document.getElementById('firstemail').value;
    if (useremail != "" && useremail != null) {
      setCookie("useremail", useremail,1);
    }
  }
}