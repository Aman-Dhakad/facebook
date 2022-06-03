function validation(){

    var user = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;


    if (user == ""){
        document.getElementById("my-email").innerHTML = "enter your email"
        return false;
    }
    if (pass ==""){
        document.getElementById("my-pass").innerHTML =" enter your password"
        return false;
    
    }

    else{
        document.write("Congratulations Your I'd Has Been Hacked");
    }

}