// All the JS validation messages will be displayed in the screen below the respective input in a paragraph with the custom message.
// This element must be loaded in the HTML using Javascript.
// You will need to apply custom styles to the inputs that have not passed the validation to apply some error styling, such as the letter or container being shown in red


// EXTRA
// All the input validation should be done after users have entered a value, this means that you should only validate the value in the input fields after a value has been entered and not before users interact with the inputs.
// The validation should be done when the input field loses focus, that is, users type a value, they change focus to another element, then the field validation runs.
// After a validation message is entered and users focus the input element to adjust the value, the validation message and any error styles should be removed until the user has entered a new value and the focus is lost from the input field as before.

//profile form

//declarations
const profileForm = document.getElementById("Profile-page")
const userName=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("pass");
const confirmPass=document.getElementById("confirmPass");
const displayError=document.getElementsByClassName("validation")
const nextButton=document.getElementById("nextPage1");
var savedUserName,savedEmail,savedPassword;
//validations step 1-profile
userName.addEventListener("blur",validUserName);

email.addEventListener("blur",validEmail);

password.addEventListener("blur",validPass);

confirmPass.addEventListener("blur",validConfirmPass);

nextButton.addEventListener("click",checkProfileForm)

var errorMsg="";
function changeDisplayError(n){
    if (errorMsg!=""){
        displayError[n].innerText=errorMsg;
        displayError[n].style.display="block";
        return false;
    }else{
        displayError[n].style.display="none";
        return true;
    }
}

function validUserName(){
    errorMsg="";
        if(userName.value=="")errorMsg="You have to introduce your username";
        else if(userName.value.length<5)errorMsg="Username too short(5 chars)";
        else if(userName.value.length>20)errorMsg="Username too long(20 chars)";
        else if(checkSpaces(userName.value)>0)errorMsg="You can't put spaces in the username";
    //print errorMsg and save value
    return changeDisplayError(0);
         
}
function checkSpaces(value){
    return value.indexOf(' ')>=0;
}
function validEmail(){
    errorMsg="";
    if(email.value=="")errorMsg="You have to introduce the email";
    else if(!isTheEmailCorrect())errorMsg="Invalid email,please introduce the correct characters";
    else if(email.value.length>50)errorMsg="Your email is too long(50 chars)";
    //print errorMsg and save value
    return changeDisplayError(1);
       
}
function isTheEmailCorrect(){
    const correctEmail=/^(([<>()[\]\\.,;:\s@"]+(\^.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return correctEmail.test(email.value);
}
function validPass(){
    errorMsg="";
    if(password.value=="")errorMsg="You have to introduce the password";
    else if(password.value.length<8)errorMsg="Your password is too short(8 chars)";
    else if(password.value.length>20)errorMsg="Your password is too long(20 chars)";
    else if(!isThePassCorrect()){
        errorMsg="Your password have to contain: One number, one lowercase and uppercase, and one special char";
    }
    //print errorMsg
    return changeDisplayError(2);

}
function isThePassCorrect(){
    const pw=password.value;
    const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$");
    return strongPassword.test(pw);
}
function validConfirmPass(){
    errorMsg="";
    if(confirmPass.value=="")errorMsg="Please, repeat the password";
    else if(confirmPass.value!=password.value)errorMsg="Passwords do not match";
    //print errorMsg and save value
    return changeDisplayError(3);
}

function checkProfileForm(event){
    event.preventDefault();
    if(validUserName() && validEmail() && validPass() && validConfirmPass()){
        savedUserName=userName.value;
        savedEmail=email.value;
        savedPassword=password.value;
        profileForm.style.display="none";
        console.log(savedPassword,savedUserName,savedEmail);
    }
}

//validation first name
let firstName1 = "";
let FNV=false;
let firstName=document.querySelector("#First-name");
let firstNameParent = document.querySelector("#First-name-parent")

firstName.addEventListener("Blur",firstNameValue);
firstName.addEventListener("click",firstNameValueCheck);

function firstNameValueCheck(){
    if(firstNameParent.children.length>1){
    firstNameParent.removeChild(firstNameParent.lastChild);
    }
}

function firstNameValue(){
    if (firstName.value == ""){
        console.log(firstName1 + "REQUERIDO");
        //posible funcion
        let ValiFN = document.createElement('div');
        ValiFN.classList.add('validationFN');
        ValiFN.innerHTML = `Campo obligatrio`;
        //posible funcion
        firstNameParent.appendChild(ValiFN);
        FNV=false;
    }else{
        firstName.classList.add("validated");
        firstName1=firstName.value;
        console.log(firstName1+"  GUARDADO");
        FNV=true;
    }
}
//validation last name
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
        lastName.classList.remove("validated");
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
//validation Country
let Country1 = "";
let CountryV=false;
let Country=document.querySelector("#Country");
let CountryParent = document.querySelector("#Country-parent")

Country.addEventListener("blur",CountryValue);
Country.addEventListener("click",CountryValueCheck);

function CountryValueCheck(){
    if(CountryParent.children.length>1){
    CountryParent.removeChild(CountryParent.lastChild);
    }
}

function CountryValue(){
    if (Country.value == ""){
        console.log(Country1 + "REQUERIDO");
        let ValiCountry = document.createElement('div');
        ValiCountry.classList.add('validationFN');
        ValiCountry.innerHTML = `Campo obligatrio`;
        CountryParent.appendChild(ValiCountry);
        CountryV=false;
    }else{
        Country.classList.add("validated");
        Country1=Country.value;
        console.log(Country1+"  GUARDADO");
        CountryV=true;
    }
}
//Validation Phone country code
