function checkEmail(){
var email=document.getElementById("email").value;

function isMail(str){
var reg=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
return reg.test(str);
}
}
