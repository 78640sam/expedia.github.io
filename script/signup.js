//  <--- pop-up js-code start------>

function openForm() {
    document.getElementById("myForm1").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm1").style.display = "none";
}
// //  <--- pop-up js-code end------>

function signup(e) {
    e.preventDefault();
    let myForm = document.getElementById("myForm");
    // console.log("myForm:",myForm)
    let name = myForm.name.value;

    let email = myForm.email.value;
    let password = myForm.password.value;
    let conpassword = myForm.conpassword.value;
    //console.log("data:", name, email, password);
    if (password != conpassword) {
        alert("password and confirm passqoed not same");
        window.location.href = "signup.html";
    }
    else {
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify([]));
        }
        //0. grab and prepare user data
        let user = {
            name,

            email,
            password,

        };
        //console.log("user:",user)
        //1.get array form localstoge

        let arr = JSON.parse(localStorage.getItem("users"))

        //2. push new user to array

        arr.push(user);

        localStorage.setItem("users", JSON.stringify(arr));

        window.location.href = "signIn.html";
    }

}