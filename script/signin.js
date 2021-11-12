//<--- pop-up js-code start------>

function openForm() {
    document.getElementById("myForm1").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm1").style.display = "none";
}
//  <--- pop-up js-code end------>

function signin(e) {

    e.preventDefault();
    let myForm = document.getElementById("myForm");
    console.log("myForm:", myForm)

    let email = myForm.email.value;
    let password = myForm.password.value;
    //console.log("data:", name, email, password);

    let all_users = JSON.parse(localStorage.getItem("users"));


    all_users.forEach(function (user) {

        console.log("user:", user.email, user.password);

        if (email === user.email && password === user.password) {

            window.location.href = "home.html";
        }

        else {
            //alert("invalid Credentials")

            window.location.href = "signIn.html";
        }
    });



}
