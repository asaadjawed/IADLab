
$(document).ready(function(){
    $("document").scrollDown(function(){
        $(".header").first().css("background-color", "white");
        
    })
})

// $(document).ready(function(){
//     $(window).scroll(function() { // check if scroll event happened
//       if ($(document).scrollTop() > 100) { // check if user scrolled more than 50 from top of the browser window
//         $(".header > #NavBar").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
//       } else {
//         $("#NavBar").css("background-color", "#f0f0f8"); // if not, change it back to transparent
//       }
//     });
//   });

let submitBtn = document.getElementById("submitButton");

const CreateAccount= ()=>{
    let firstName = document.querySelector("#firstname").value
    let lastName = document.querySelector("#lastname").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#pass").value
    let confirmPassword = document.querySelector("#confirmpass").value;

    let obj= {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    }
    SaveData(obj)



}
submitBtn.addEventListener("click", CreateAccount)


const SaveData = (data)=>{
    const Database = firebase.database().ref("accounts");
    Database.child(1).set(data)
}


let signUpbtn = document.querySelector("#signUp-btn");

const displayContactForm = ()=> {
    document.querySelector("#rowDiv").style.display = "none";
    document.querySelector("#createDiv").style.display = "block";
}

signUpbtn.addEventListener("click", displayContactForm)



let LoginBtn = document.querySelector("#Login-btn");

const displayLoginForm = ()=> {
    document.querySelector("#rowDiv").style.display = "block";
    document.querySelector("#createDiv").style.display = "none";
}
LoginBtn.addEventListener("click", displayLoginForm)
