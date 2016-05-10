function doSubmit() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email != "" && password != "") {
        console.log(email);
        console.log(password);
    } else
        document.getElementById("p1").innerHTML = "Please input your username and password";
}
