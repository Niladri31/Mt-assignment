
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin"){
alert ("Login successfully");
window.location = "json.html"; // Redirecting to other page.
return true;
}
else{

alert("incorrect username and password");

return false;
}
}
