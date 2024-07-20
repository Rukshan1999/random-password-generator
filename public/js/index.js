const btnGeneratePassword = document.getElementById("btn-generate");
const copyElm = document.getElementById("copy-Elm");

btnGeneratePassword.addEventListener("click", () => {
    generatePassword();
});

copyElm.addEventListener("click", () => {
    copyPassword();
});


function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("passwordInput").value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById("passwordInput");
    passwordInput.select();
    document.execCommand("copy");

    // Create a message box for feedback
    const messageBox = document.createElement("div");
    messageBox.setAttribute("id", "message");
    messageBox.classList.add("password-message", "shadow-lg", "rounded");
    messageBox.textContent = "Password Copied Successfully!";

    // Position message box
    messageBox.style.position = "fixed";
    messageBox.style.top = "20px";
    messageBox.style.right = "20px";
    // messageBox.style.zIndex = "1000";

    // Append message box to the document body
    document.body.appendChild(messageBox);

    // Automatically remove the message box after a delay
    setTimeout(() => {
        messageBox.remove();
    }, 3000);
}
