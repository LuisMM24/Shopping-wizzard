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


// SHIPPING

const freeShipping = document.querySelector('#free-shipping');
freeShipping.addEventListener('click',shippingTime);
const extraShipping = document.querySelector('#extra-shipping');
extraShipping.addEventListener('click',shippingTime);
const premiumShipping = document.querySelector('#premium-shipping');
premiumShipping.addEventListener('click',shippingTime);

function shippingTime(){
    
    if (freeShipping.checked) {
        shippingWindow(72)
    } else if (extraShipping.checked) {
        shippingWindow(48)
    } else if (premiumShipping.checked) {
        shippingWindow(24)
    }
    

}
function shippingWindow(hours) {
    let shippingParagraph = document.querySelector('#Shipping-page p');
    if (shippingParagraph) {
        const shippingForm = document.querySelector('#shipping-form');
        shippingForm.removeChild(shippingParagraph);
    }
    
    let date1 = new Date();
    let date2 = new Date();
    date1.setTime(date1.getTime() + ((hours-6) * 60 * 60 * 1000));
    date2.setTime(date2.getTime() + ((hours) * 60 * 60 * 1000));
    let earlyArrival = date1.toString().slice(0, 21);
    let lateArrival = date2.toString().slice(0, 21);
    let shippingOption3 = document.querySelector('.shipping-option3')
    let estimatedShippingTime = document.createElement('p');
    estimatedShippingTime.innerText = `Your order will arrive between ${earlyArrival}h and ${lateArrival}h`;
    shippingOption3.insertAdjacentElement("afterend", estimatedShippingTime)
}