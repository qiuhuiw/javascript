function checkEmail() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (!isEmail(email)) {
        alert("This is not an email, please input a valid email address");
        document.getElementById("email").focus();
        return false;
    } else {
        //console.log(email);
        //console.log(password);
        document.getElementById("b1").value = "success";
    }
}

function isEmail(str) {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    return reg.test(str);
}
