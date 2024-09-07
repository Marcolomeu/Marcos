// script.js
document.getElementById("emailForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
    }
});
