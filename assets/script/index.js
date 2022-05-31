const container = document.querySelector(".contact")
const emailInput = document.querySelector("#email");
const text = document.createElement("p")

function emailSubmit(){
    validateEmail();
    if (validateEmail()) {
        const email = getEmail();
        text.textContent = `We have sent email to ${email}`;
        container.appendChild(text);
    } else {
        text.textContent = "Please input valid email address";
        container.appendChild(text);
    }
}

function validateEmail(){
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(emailInput.value)) {
        return false;
    }
    else{
        return true;
    }
}

function getEmail(){
    const email = emailInput.value;
    return email;
}