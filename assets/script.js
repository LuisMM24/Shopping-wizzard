// All the JS validation messages will be displayed in the screen below the respective input in a paragraph with the custom message.
// This element must be loaded in the HTML using Javascript.
// You will need to apply custom styles to the inputs that have not passed the validation to apply some error styling, such as the letter or container being shown in red


// EXTRA
// All the input validation should be done after users have entered a value, this means that you should only validate the value in the input fields after a value has been entered and not before users interact with the inputs.
// The validation should be done when the input field loses focus, that is, users type a value, they change focus to another element, then the field validation runs.
// After a validation message is entered and users focus the input element to adjust the value, the validation message and any error styles should be removed until the user has entered a new value and the focus is lost from the input field as before.

//validation first name
let firstName1 = "";
let FNV=false;
let firstName=document.querySelector("#First-name");
let firstNameParent = document.querySelector("#First-name-parent")

firstName.addEventListener("blur",firstNameValue);
firstName.addEventListener("click",firstNameValueCheck);

function firstNameValueCheck(){
    if(firstNameParent.children.length>1){
    firstNameParent.removeChild(firstNameParent.lastChild);
    }
}

function firstNameValue(){
    if (firstName.value == ""){
        console.log(firstName1 + "REQUERIDO");
        let ValiFN = document.createElement('div');
        ValiFN.classList.add('validationFN');
        ValiFN.innerHTML = `Campo obligatrio`;
        firstNameParent.appendChild(ValiFN);
        FNV=false;
    }else{
        firstName.classList.add("validated");
        firstName1=firstName.value;
        console.log(firstName1+"  GUARDADO");
        FNV=true;
    }
}
//validation first name
let lastName1 = "";
let LNV=false;
let lastName=document.querySelector("#Last-name");
let lastNameParent = document.querySelector("#Last-name-parent")

lastName.addEventListener("blur",lastNameValue);
lastName.addEventListener("click",lastNameValueCheck);

function lastNameValueCheck(){
    if(lastNameParent.children.length>1){
    lastNameParent.removeChild(lastNameParent.lastChild);
    }
}

function lastNameValue(){
    if (lastName.value == ""){
        console.log(lastName1 + "REQUERIDO");
        let ValiLN = document.createElement('div');
        ValiLN.classList.add('validationFN');
        ValiLN.innerHTML = `Campo obligatrio`;
        lastNameParent.appendChild(ValiLN);
        LNV=false;
    }else{
        lastName.classList.add("validated");
        lastName1=lastName.value;
        console.log(lastName1+"  GUARDADO");
        LNV=true;
    }
}