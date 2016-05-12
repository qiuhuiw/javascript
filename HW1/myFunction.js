function checkEmail() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var submitButton = document.getElementById("submitButton")

    //如果email输入不符合格式，则弹出message，点击OK 清空输入的同时光标定位到email输入框里。否则将submit button value 改为success
    if (!isEmail(email.value)) {
        alert("This is not an email, please input a valid email address");
        email.value = "";
        password.value = "";
        email.focus();
        return false;
    } else {
        //console.log(email);
        //console.log(password);
        submitButton.value = "success";
    }
}

//email正则表达式并返回其验证结果

function isEmail(str) {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    return reg.test(str);
}
