const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY>100);
});

function myFunction() {
    var x = document.getElementById("navitem");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lll",
        Password : "D8B87E2DDE1F5EA4B613F76EF511741D3782",
        To : '[[[gmail.co]]]m',
        From :document.getElementById("email").value,
        Subject : "New Contact",
        Body : "Name:" + document.getElementById("name").value
                + "<br> Email:" + document.getElementById("email").value
                + "<br> mobile: "+ document.getElementById("mobile").value
                + "<br> message: "+ document.getElementById("message").value
    }).then(    
      message => alert("Message Sent Succesfully")
    );
}