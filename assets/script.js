//EXPORTS

//PROFILE FORMS
//declarations
const profileForm = document.getElementById("Profile-page")
const userName=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("pass");
const confirmPass=document.getElementById("confirmPass");
const inputElement= document.querySelectorAll(".input-element")
const displayError=document.getElementsByClassName("error-container")
const nextButton=document.getElementById("nextPage1");
const errorIcon = document.querySelectorAll(".failure-icon");
const successIcon = document.querySelectorAll(".success-icon");
var arrayValided=[];
var savedUserName,savedEmail,savedPassword;
//step line declarations
var line = document.getElementById("line");
var textStepLine = document.getElementsByClassName("step");
var circleStepLine = document.getElementsByClassName("circle");
var counter=0;
//validations step 1-profile
userName.addEventListener("blur",validUserName);
email.addEventListener("blur",validEmail);
password.addEventListener("blur",validPass);
confirmPass.addEventListener("blur",validConfirmPass);
nextButton.addEventListener("click",checkProfileForm)
var errorMsg="";
//hide error
    inputElement.forEach(input=>{
        input.addEventListener("focus",()=>{
            input.nextElementSibling.style.display="none";
        })
    })
function changeDisplayError(n){
    if (errorMsg!=""){
        displayError[n].innerText=errorMsg;
        displayError[n].style.display="block";
        errorIcon[n].style.opacity="1";
        successIcon[n].style.opacity="0";
        inputElement[n].style.borderColor="red";
        errorMsg="";
        return arrayValided[n]=false;
    }else{
        errorIcon[n].style.opacity="0";
        successIcon[n].style.opacity="1";
        inputElement[n].style.borderColor="green";
        return arrayValided[n]=true;
    }
    
}
function validUserName(){
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
    if(email.value=="")errorMsg="You have to introduce the email";
    else if(!isTheEmailCorrect())errorMsg="Invalid email,please introduce the correct characters";
    else if(email.value.length>50)errorMsg="Your email is too long(50 chars)";
    //print errorMsg and save value
    return changeDisplayError(1);
       
}
function isTheEmailCorrect(){
    const correctEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return correctEmail.test(email.value);
}
function validPass(){
    if(password.value=="")errorMsg="You have to introduce the password";
    else if(password.value.length<8)errorMsg="Your password is too short(8 chars)";
    else if(password.value.length>20)errorMsg="Your password is too long(20 chars)";
    else if(checkSpaces(password.value))errorMsg="Your password can't have spaces"
    else if(!isThePassCorrect()){
        errorMsg="Your password have to contain: One number, one lowercase and uppercase, and one special char";
    }
    //print errorMsg
    return changeDisplayError(2);

}
function isThePassCorrect(){
    const pw=password.value;
    const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    return strongPassword.test(pw);
}
function validConfirmPass(){
    if(confirmPass.value=="")errorMsg="Please, repeat the password";
    else if(confirmPass.value!=password.value)errorMsg="Passwords do not match";
    //print errorMsg and save value
    return changeDisplayError(3);
}

function checkProfileForm(event){
    event.preventDefault();
    const result=arrayValided.filter(searchTrue=> searchTrue==true);
    console.log("result array "+result);
    console.log("result array length "+result.length);
    console.log("input element length "+inputElement.length);
    if(result.length<=inputElement.length){//CAMBIAR A == PARA VALIDAR
        stepLineAnimation();
        savedUserName=userName.value;
        savedEmail=email.value;
        savedPassword=password.value;
        profileForm.style.display="none";
        console.log(savedPassword,savedUserName,savedEmail);
        addressPage.classList.remove("Hidden");
    }
}
//STEP LINE SECTION
function stepLineAnimation(){
    if (counter === 0) {
        line.style.width = "12%";
        circleStepLine[0].classList.add("active");
        textStepLine[0].classList.add("current");
        counter++
      } else if (counter === 1) {
        line.style.width = "38%";
        circleStepLine[1].classList.add("active");
        textStepLine[0].classList.remove("current");
        textStepLine[1].classList.add("current")
        counter++
      } else if (counter === 2) {
        line.style.width = "63%";
        circleStepLine[2].classList.add("active");
        textStepLine[1].classList.remove("current");
        textStepLine[2].classList.add("current")
        counter++;
      } else if (counter === 3) {
        line.style.width = "100%";
        circleStepLine[3].classList.add("active");
        textStepLine[2].classList.remove("current");
        textStepLine[3].classList.add("current")
        counter++;
      } else if (counter === 4) {
        line.style.width = "0%"
        circleStepLine[0].classList.add("active");
        counter = 0;
      }
}
//ADDRESS PAGE
//function to create validation child
let Val;//variable to create messaga box
function ValidationMsg(){//function to create variable box
    Val = document.createElement('div');//create div element
    Val.classList.add('validation');//create validation class
    Val.innerHTML = `Obligatory field`;//create innerText for message box
    }
function ValidationMsgTotal(){
    Val = document.createElement('div');
    Val.classList.add('validation');
    Val.innerHTML = `Please refill all the required fields`;
    }
function ValidationMsgText(){
    Val = document.createElement('div');
    Val.classList.add('validation');
    Val.innerHTML = `Obligatory field, only text`;
    }
function ValidationMsgPostalCode(){
    Val = document.createElement('div');
    Val.classList.add('validation');
    Val.innerHTML = `Obligatory field, 5 digits all nums`;
    }
function ValidationMsgPhone(){
    Val = document.createElement('div');
    Val.classList.add('validation');
    Val.innerHTML = `Obligatory field, 9 digits all nums`;
    }
//validation first name
let firstName1 = ""; //first name value
let FNV=false;//firs name validation value check
let firstName=document.querySelector("#First-name"); //selector to html imput
let firstNameParent = document.querySelector("#First-name-parent");//selector to parent
firstName.addEventListener("click",firstNameValueCheck);// click function
function firstNameValueCheck(){//validation function
    ValidationValueCheck2()
    if(firstNameParent.children.length>4){ //if parent has more than 1 child
    firstNameParent.removeChild(firstNameParent.lastChild);//delete the messege box
    }
    firstName.classList.remove("validated");//remove validated class to not have red stetics
}
firstName.addEventListener("blur",firstNameValue);//blur function (when loses focus)
function firstNameValue(){
    if (firstName.value == null || firstName.value.length==0|| /^\s+$/.test(firstName.value) ||!(/^[a-zA-Z\s]{0,20}$/.test(firstName.value))){//regex if true, not validated
        ValidationMsgText();
        firstName.classList.remove("validated");//remove validated stetics
        firstNameParent.appendChild(Val);//append message box
        errorIcon[4].style.opacity="1";
        successIcon[4].style.opacity="0";
        
        FNV=false;//validation value check: not validated
    }else{//regex false, validated
        firstName.classList.add("validated");//validated stetics
        firstName1=firstName.value;//new variable value.
        errorIcon[4].style.opacity="0";
        successIcon[4].style.opacity="1";
        FNV=true;//validation value check: validated
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
    ValidationValueCheck2()
    if(lastNameParent.children.length>4){
    lastNameParent.removeChild(lastNameParent.lastChild);
    }
    lastName.classList.remove("validated");
}
function lastNameValue(){
    if ( lastName.value == null || lastName.value.length==0|| /^\s+$/.test(lastName.value) ||!(/^[a-zA-Z\s]{0,20}$/.test(lastName.value)) ){
        ValidationMsg();
        lastName.classList.remove("validated");
        lastNameParent.appendChild(Val);
        errorIcon[5].style.opacity="1";
        successIcon[5].style.opacity="0";
        LNV=false;
        
    }else{
        lastName.classList.add("validated");
        lastName1=lastName.value;
        errorIcon[5].style.opacity="0";
        successIcon[5].style.opacity="1";
        LNV=true;
    }
}
//validation Birthday
let birthday1 = "";
let BV=false;
let birthday=document.querySelector("#birthday");
let birthdayParent = document.querySelector("#birthday-parent")
birthday.addEventListener("blur",birthdayValue);
birthday.addEventListener("click",birthdayValueCheck);
function birthdayValueCheck(){
    ValidationValueCheck2()
    if(birthdayParent.children.length>4){
    birthdayParent.removeChild(birthdayParent.lastChild);
    }
    birthday.classList.remove("validated");
}
function birthdayValue(){
    if (birthday.value == ""){
        ValidationMsg();
        birthday.classList.remove("validated");
        birthdayParent.appendChild(Val);
        errorIcon[6].style.opacity="1";
        successIcon[6].style.opacity="0";
        BV=false;
    }else{
        birthday.classList.add("validated");
        birthday1=birthday.value;
        errorIcon[6].style.opacity="0";
        successIcon[6].style.opacity="1";
        BV=true;
    }
}
//validation Address 1
let address11 = "";
let A1V=false;
let address1=document.querySelector("#Address-1");
let address1Parent = document.querySelector("#Address-1-parent")
address1.addEventListener("blur",address1Value);
address1.addEventListener("click",address1ValueCheck);
function address1ValueCheck(){
    ValidationValueCheck2()
    if(address1Parent.children.length>4){
    address1Parent.removeChild(address1Parent.lastChild);
    }
    address1.classList.remove("validated");
}
function address1Value(){
    if ( address1.value == null || address1.value.length==0|| /^\s+$/.test(address1.value) ||!(/^[\da-zA-Z\s]{0,20}$/.test(address1.value)) ){
        ValidationMsg();
        address1.classList.remove("validated");
        address1Parent.appendChild(Val);
        errorIcon[7].style.opacity="1";
        successIcon[7].style.opacity="0";
        A1V=false;
    }else{
        address1.classList.add("validated");
        address11=address1.value;
        errorIcon[7].style.opacity="0";
        successIcon[7].style.opacity="1";
        A1V=true;
    }
}
//validation Postal Code
let postalCode1 = "";
let PCV=false;
let postalCode=document.querySelector("#Postal-Code");
let postalCodeParent = document.querySelector("#Postal-Code-parent")
postalCode.addEventListener("blur",postalCodeValue);
postalCode.addEventListener("click",postalCodeValueCheck);
function postalCodeValueCheck(){
    ValidationValueCheck2()
    if(postalCodeParent.children.length>4){
    postalCodeParent.removeChild(postalCodeParent.lastChild);
    }
    postalCode.classList.remove("validated");
}
function postalCodeValue(){
    if ( postalCode.value == null || postalCode.value.length==0|| /^\s+$/.test(postalCode.value) ||!(/^[\d]{5}$/.test(postalCode.value)) ){
        ValidationMsgPostalCode();
        postalCode.classList.remove("validated");
        postalCodeParent.appendChild(Val);
        errorIcon[8].style.opacity="1";
        successIcon[8].style.opacity="0";
        PCV=false;
    }else{
        postalCode.classList.add("validated");
        postalCode1=postalCode.value;
        errorIcon[8].style.opacity="0";
        successIcon[8].style.opacity="1";
        PCV=true;
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
    ValidationValueCheck2()
    if(CountryParent.children.length>1){
    CountryParent.removeChild(CountryParent.lastChild);
    }
    Country.classList.remove("validated");
}
function CountryValue(){
    if (Country.value == ""){
        ValidationMsg();
        Country.classList.remove("validated");
        CountryParent.appendChild(Val);
        CountryV=false;
    }else{
        Country.classList.add("validated");
        Country1=Country.value;
        CountryV=true;
        PhoneCountryCodeDefect();
    }
}
//Defect Phone country code depending on country
function PhoneCountryCodeDefect() {
    switch (Country1) {
        case "Andorra":
            document.querySelector("#PCC").value="+376";
            PCC1="+376";
            PCCV=true;
            PCC.classList.add("validated");
            break;
        case "España":
            document.querySelector("#PCC").value="+34";
            PCC1="+34";
            PCCV=true;
            PCC.classList.add("validated");
            break;
        case "Francia":
            document.querySelector("#PCC").value="+33";
            PCC1="+33";
            PCCV=true;
            PCC.classList.add("validated");
            break;
        case "Alemania":
            document.querySelector("#PCC").value="+49";
            PCC1="+49";
            PCCV=true;
            PCC.classList.add("validated");
            break;
        case "Grecia":
            document.querySelector("#PCC").value="+30";
            PCC1="+30";
            PCCV=true;
            PCC.classList.add("validated");
            break;
        default:
            PCC.value="MAL";
            break;
    }
}
//validation Phone country code
let PCC1 = "";
let PCCV=false;
let PCC=document.querySelector("#PCC");
let PCCParent = document.querySelector("#PCC-parent")
PCC.addEventListener("blur",PCCValue);
PCC.addEventListener("click",PCCValueCheck);
function PCCValueCheck(){
    ValidationValueCheck2()
    if(PCCParent.children.length>4){
    PCCParent.removeChild(PCCParent.lastChild);
    }
    PCC.classList.remove("validated");
}
function PCCValue(){
    if (PCC.value == ""){
        ValidationMsg();
        PCC.classList.remove("validated");
        PCCParent.appendChild(Val);
        PCCV=false;
    }else{
        PCC.classList.add("validated");
        PCC1=PCC.value;
        PCCV=true;
    }
}
//validation Phone
let Phone1 = "";
let PhoneV=false;
let Phone=document.querySelector("#Phone");
let PhoneParent = document.querySelector("#Phone-parent")
Phone.addEventListener("blur",PhoneValue);
Phone.addEventListener("click",PhoneValueCheck);
function PhoneValueCheck(){
    ValidationValueCheck2()
    if(PhoneParent.children.length>1){
    PhoneParent.removeChild(PhoneParent.lastChild);
    }
    Phone.classList.remove("validated");
}
function PhoneValue(){
    if (Phone.value == "" || isNaN(Phone.value)||Phone.value.length !=9 ){
        ValidationMsgPhone();
        Phone.classList.remove("validated");
        PhoneParent.appendChild(Val);
        errorIcon[9].style.opacity="1";
        successIcon[9].style.opacity="0";
        PhoneV=false;
    }else{
        Phone.classList.add("validated");
        Phone1=Phone.value;
        errorIcon[9].style.opacity="1";
        successIcon[9].style.opacity="1";
        PhoneV=true;
    }
}
//Validation regular-address
let RaddressV=false;
let Raddress=document.querySelector("#regular-address");
Raddress.addEventListener("click",RaddressCheck)
function RaddressCheck(){
    if(! Raddress.checked){
        RaddressV=false;
        PhoneParent.appendChild(Val);
    }else{
        RaddressV=true;
    }
}
//Validation Address-Page
nextPage2=document.querySelector("#nextPage2");
nextPage2.addEventListener("click",handelAddressForm);
const addressPage=document.querySelector("#Address-page");
button2Parent=document.querySelector("#button2-parent")
let ValidationAddressPageArr=[FNV,LNV,BV,A1V,PCV,CountryV,PCCV,PhoneV,RaddressV];
function handelAddressForm(e){
    e.preventDefault();
    nextPage2Fun();
}
function ValidationValueCheck2(){//validation function
    if(button2Parent.children.length>1){ //if parent has more than 1 child
    button2Parent.removeChild(button2Parent.lastChild);//delete the messege box
    }
}
function nextPage2Fun(){
    ValidationAddressPageArr=[FNV,LNV,BV,A1V,PCV,CountryV,PCCV,PhoneV,RaddressV];
    if( ValidationAddressPageArr.includes(true)) {//CAMBIAR PARA VALIDAR!!!! A FALSE
            let validationAddressPage=false;
            let Val;
            Val = document.createElement('div');
            Val.classList.add('validation');
            Val.innerHTML = `Please refill the required fields`;
            button2Parent.appendChild(Val);
            return;
    }
    else{
        addressPage.classList.add("Hidden");
        shippingPage.classList.remove("Hidden");
        stepLineAnimation();
    }
}
// SHIPPING
const shippingPage=document.querySelector("#Shipping-page")
const freeShipping = document.querySelector('#Free-shipping');
freeShipping.addEventListener('click',shippingTime);
const extraShipping = document.querySelector('#Extra-shipping');
extraShipping.addEventListener('click',shippingTime);
const premiumShipping = document.querySelector('#Premium-shipping');
premiumShipping.addEventListener('click',shippingTime);

let shippingChoice = '';
let shippingCost;
let deliveryTime;

let shippingChoiceValidation=false;
function shippingTime(){
    ValidationValueCheck3()
    if (freeShipping.checked) {
        shippingChoiceValidation=true;
        shippingWindow(72)
        shippingChoice = freeShipping.id.split('-').join(' ');
        shippingCost = 0.00;
    } else if (extraShipping.checked) {
        shippingChoiceValidation=true;
        shippingWindow(48)
        shippingChoice = extraShipping.id.split('-').join(' ');
        shippingCost = 4.99;
    } else if (premiumShipping.checked) {
        shippingChoiceValidation=true;
        shippingWindow(24)
        shippingChoice = premiumShipping.id.split('-').join(' ');
        shippingCost = 9.99;
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
    estimatedShippingTime.innerHTML = `Your order will arrive between <b>${earlyArrival}h</b> and <b>${lateArrival}h</b>`;
    shippingOption3.insertAdjacentElement("afterend", estimatedShippingTime);
    deliveryTime = estimatedShippingTime;
}
//Validation Shipping-Page
nextPage3=document.querySelector("#nextPage3");
nextPage3.addEventListener("click",handelAddressForm2);
button3Parent=document.querySelector("#button3-Parent")
let ValidationshippingPageArr=[shippingChoiceValidation];
function handelAddressForm2(e){
    e.preventDefault();
    nextPage3Fun();
}
function ValidationValueCheck3(){//validation function
    if(button3Parent.children.length>1){ //if parent has more than 1 child
    button3Parent.removeChild(button3Parent.lastChild);//delete the messege box
    }
}
function nextPage3Fun(){
    ValidationshippingPageArr=[shippingChoiceValidation];
    if( ValidationshippingPageArr.includes(false)) {//CAMBIAR PARA VALIDAR!!!! A FALSE
            let validationshippingPage=false;
            let Val;
            Val = document.createElement('div');
            Val.classList.add('validation');
            Val.innerHTML = `Please select a shipping choice`;
            button3Parent.appendChild(Val);
    }
    else{
        shippingPage.classList.add("Hidden");
        finishPage.classList.remove("Hidden");
        stepLineAnimation();
        checkoutAddress()
        shippingOption.innerText = shippingChoice;
        shippingPrice.innerText = `${shippingCost}$`;
        estimatedDelivery.innerText = deliveryTime.innerText;
        purchasedProduct.src = imgPrincipal.src;
        itemSize.innerHTML = '<b>Size:</b> M';
        itemQuantity.innerHTML = '<b>Quantity:</b> 2'
        itemsTotal.innerText = productPrice.innerText;
        orderTotal.innerText = parseFloat(itemsTotal.innerText) + shippingCost + '$';
    }
}

// Timer box
// const timerBox = document.querySelector('.timerBox');
// const main = document.querySelector('#main');
// let timerCount = 1;
// function openPopup() {
//     let timerMsg = document.createElement('div');
//     timerMsg.id = 'timerBox';
//     timerMsg.innerHTML = `You started registering <b>${timerCount} minutes ago</b>. Hurry up!`;
//     main.insertAdjacentElement('afterbegin', timerMsg);
//     timerCount +=1;
// }
// function closePopup() {
//     if (timerCount === 6) {
//         clearInterval(timerInterval);
//     }
//     const timerMsg = document.querySelector('#timerBox')
//     timerMsg.style.display = 'none';
//     main.removeChild(main.firstChild);
// }
// const timerInterval = setInterval(function() {
//     openPopup();
//     setTimeout(function() {
//         closePopup();
//     }, 1000);
// }, 3000);

// Finish page

//TESTING DELETE
// quantity.value = 2;
// colorSelected = 'blue';
// firstName1 = 'Ivan';
// lastName1 = 'Gunchev';
// address11 = 'Avda Manuel de Falla 6';
// postalCode1 = '46000';
// Country1 = 'Espana';
// PCC1 = '+34';
// Phone1 = '600000000';


const purchasedProduct = document.querySelector('#purchased-product');
const deliveryAddress = document.querySelector('.delivery-address');
const finishPage = document.querySelector('#Finish-page');
const estimatedDelivery = document.querySelector('#estimated-delivery');
const productPrice = document.querySelector('.price');
const itemsTotal = document.querySelector('#items-price');
const orderTotal = document.querySelector('#order-total');
const itemsPrice = document.querySelector('#items-price');
const shippingOption = document.querySelector('#shipping-option');
const shippingPrice = document.querySelector('#shipping-price');
const itemSize = document.querySelector('#item-size');
const itemQuantity = document.querySelector('#item-quantity');
const placeOrderBtn = document.querySelector('#place-order');
const timeElapsed = document.querySelector('#time-elapsed');

let endDate;
let millis;
let minutes;
let seconds

function millisToMinutesAndSeconds(millis) {
    minutes = Math.floor(millis / 60000);
    seconds = ((millis % 60000) / 1000).toFixed(0);
    // console.log(minutes + " minutes " + 'and ' + seconds + ' seconds');
  }

placeOrderBtn.addEventListener('click', () => {
    endDate = new Date();
    millis = endDate - startDate;
    millisToMinutesAndSeconds(millis);
    const totalTimeElapsed = document.createElement('p');
    totalTimeElapsed.innerHTML = `Your registration took ${minutes} minutes and ${seconds} seconds`
    // totalTimeElapsed.innerHTML = 'Your registration took' + minutes + " minutes " + 'and ' + seconds + ' seconds';
    timeElapsed.appendChild(totalTimeElapsed);
})

function checkoutAddress() {
    let finalAddress = document.createElement('p');
    finalAddress.innerText = 
    `${firstName1} ${lastName1}
    ${address11}
    ${postalCode1} ${Country1}
    Contact: ${PCC1}${Phone1}
    `;
    deliveryAddress.appendChild(finalAddress);
}








