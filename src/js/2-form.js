const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const email = form.querySelector("input")
const formData = {
    email: "",
    message: "",
};

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", saveInfo);
fillData();

function handleSubmit(event) {
    event.preventDefault();
    const {email, message} = event.target.elements;
    const emailValue = email.value;
    const messageValue = message.value;
    if (!emailValue || !messageValue) {
        alert("«Fill please all fields»")
        return;
    };
    console.log(formData);
    event.target.reset();
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
} 

function saveInfo(event) {
    formData.email = email.value.trim();
    formData.message = textarea.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function fillData() {
    const savedData = localStorage.getItem("feedback-form-state"); 
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        email.value = parsedData.email;
        textarea.value = parsedData.message;
    }
    
}















