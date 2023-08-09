function login() {
    let user = document.getElementById("user").value;
    let pss = document.getElementById("pss").value;

    if (user == "admin" && pss == "admin") {
        window.location = "admin.html";
        console.log(user, pss);
    }
    else {
        alert("Usuario o Contraseña incorrectos");
    }
};