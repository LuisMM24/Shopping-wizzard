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
const inputElement= document.querySelectorAll(".input-element")
const displayError=document.getElementsByClassName("validation")
const nextButton=document.getElementById("nextPage1");
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

function account(){
    return {
        username:"",
        email:"",
        password:"",
        Name:"",
        Lastname:"",
        Address:"",
        sec_Address:"",
        Country:"",
        Phone:""
    }
}
const profile= account();

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
        errorMsg="";
        return arrayValided[n]=false;
    }else{
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
    if(result.length==inputElement.length){
        stepLineAnimation();
        profile.username=userName.value
        profile.email=email.value
        profile.password=password.value
        profileForm.style.display="none";
        console.log(profile);
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
//function to create validation child
let Val;
function ValidationMsg(){
    Val = document.createElement('div');
    Val.classList.add('validation');
    Val.innerHTML = `Campo obligatrio`;
    }

function ValidationMsgText(){
    Val = document.createElement('div');
    Val.classList.add('validation');
    Val.innerHTML = `Campo obligatrio, solo texto`;
    }

function ValidationMsgPostalCode(){
    Val = document.createElement('div');
    Val.classList.add('validation');
    Val.innerHTML = `Campo obligatrio, 5 digitos solo numéricos`;
    }

function ValidationMsgPhone(){
    Val = document.createElement('div');
    Val.classList.add('validation');
    Val.innerHTML = `Campo obligatrio, 9 digitos solo numéricos`;
    }


//validation first name
let firstName1 = "";
let FNV=false;
let firstName=document.querySelector("#First-name");
let firstNameParent = document.querySelector("#First-name-parent");

firstName.addEventListener("blur",firstNameValue);
firstName.addEventListener("click",firstNameValueCheck);

function firstNameValueCheck(){
    if(firstNameParent.children.length>1){
    firstNameParent.removeChild(firstNameParent.lastChild);
    }
    firstName.classList.remove("validated");
}

function firstNameValue(){
    if (firstName.value == null || firstName.value.length==0|| /^\s+$/.test(firstName.value) ||!(/^[a-zA-Z\s]{0,20}$/.test(firstName.value))){
        console.log(firstName1 + "REQUERIDO");
        ValidationMsgText();
        firstName.classList.remove("validated");
        firstNameParent.appendChild(Val);
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
    lastName.classList.remove("validated");
}

function lastNameValue(){
    if ( lastName.value == null || lastName.value.length==0|| /^\s+$/.test(lastName.value) ||!(/^[a-zA-Z\s]{0,20}$/.test(lastName.value)) ){
        console.log(lastName1 + "REQUERIDO");
        ValidationMsg();
        lastName.classList.remove("validated");
        lastNameParent.appendChild(Val);
        LNV=false;
    }else{
        lastName.classList.add("validated");
        lastName1=lastName.value;
        console.log(lastName1+"  GUARDADO");
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
    if(birthdayParent.children.length>1){
    birthdayParent.removeChild(birthdayParent.lastChild);
    }
    birthday.classList.remove("validated");
}

function birthdayValue(){
    if (birthday.value == ""){
        console.log(birthday1 + "REQUERIDO");
        ValidationMsg();
        birthday.classList.remove("validated");
        birthdayParent.appendChild(Val);
        BV=false;
    }else{
        birthday.classList.add("validated");
        birthday1=birthday.value;
        console.log(birthday1+"  GUARDADO");
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
    if(address1Parent.children.length>1){
    address1Parent.removeChild(address1Parent.lastChild);
    }
    address1.classList.remove("validated");
}

function address1Value(){
    if ( address1.value == null || address1.value.length==0|| /^\s+$/.test(address1.value) ||!(/^[\da-zA-Z\s]{0,20}$/.test(address1.value)) ){
        console.log(address11 + "REQUERIDO");
        ValidationMsg();
        address1.classList.remove("validated");
        address1Parent.appendChild(Val);
        A1V=false;
    }else{
        address1.classList.add("validated");
        address11=address1.value;
        console.log(address11+"  GUARDADO");
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
    if(postalCodeParent.children.length>1){
    postalCodeParent.removeChild(postalCodeParent.lastChild);
    }
    postalCode.classList.remove("validated");
}

function postalCodeValue(){
    if ( postalCode.value == null || postalCode.value.length==0|| /^\s+$/.test(postalCode.value) ||!(/^[\d]{5}$/.test(postalCode.value)) ){
        console.log(postalCode1 + "REQUERIDO");
        ValidationMsgPostalCode();
        postalCode.classList.remove("validated");
        postalCodeParent.appendChild(Val);
        PCV=false;
    }else{
        postalCode.classList.add("validated");
        postalCode1=postalCode.value;
        console.log(postalCode1+"  GUARDADO");
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
    if(CountryParent.children.length>1){
    CountryParent.removeChild(CountryParent.lastChild);
    }
    Country.classList.remove("validated");
}

function CountryValue(){
    if (Country.value == ""){
        console.log(Country1 + "REQUERIDO");
        ValidationMsg();
        Country.classList.remove("validated");
        CountryParent.appendChild(Val);
        CountryV=false;
    }else{
        Country.classList.add("validated");
        Country1=Country.value;
        console.log(Country1+"  GUARDADO");
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
            console.log(Country1)
            break;
        case "España":
            document.querySelector("#PCC").value="+34";
            PCC1="+34";
            PCCV=true;
            PCC.classList.add("validated");
            console.log(Country1)
            break;
        case "Francia":
            document.querySelector("#PCC").value="+33";
            PCC1="+33";
            PCCV=true;
            PCC.classList.add("validated");
            console.log(Country1)
            break;
        case "Alemania":
            document.querySelector("#PCC").value="+49";
            PCC1="+49";
            PCCV=true;
            PCC.classList.add("validated");
            console.log(Country1)
            break;
        case "Grecia":
            document.querySelector("#PCC").value="+30";
            PCC1="+30";
            PCCV=true;
            PCC.classList.add("validated");
            console.log(Country1)
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
    if(PCCParent.children.length>1){
    PCCParent.removeChild(PCCParent.lastChild);
    }
    PCC.classList.remove("validated");
}

function PCCValue(){
    if (PCC.value == ""){
        console.log(PCC1 + "REQUERIDO");
        ValidationMsg();
        PCC.classList.remove("validated");
        PCCParent.appendChild(Val);
        PCCV=false;
    }else{
        PCC.classList.add("validated");
        PCC1=PCC.value;
        console.log(PCC1+"  GUARDADO");
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
    if(PhoneParent.children.length>1){
    PhoneParent.removeChild(PhoneParent.lastChild);
    }
    Phone.classList.remove("validated");
}

function PhoneValue(){
    if (Phone.value == "" || isNaN(Phone.value)||Phone.value.length !=9 ){
        console.log(Phone1 + "REQUERIDO");
        ValidationMsgPhone();
        Phone.classList.remove("validated");
        PhoneParent.appendChild(Val);
        PhoneV=false;
    }else{
        Phone.classList.add("validated");
        Phone1=Phone.value;
        console.log(Phone1+"  GUARDADO");
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
        console.log(RaddressV)
    }else{
        RaddressV=true;
        console.log(RaddressV)
    }
}

//Validacion Address-Page
nextPage2=document.querySelector("#nextPage2");
nextPage2.addEventListener("click",nextPage2Fun);
let ValidationAddressPageArr=[FNV,LNV,BV,A1V,PCV,CountryV,PCCV,PhoneV,RaddressV];
//FNV==false || LNV==false || BV==false || A1V==false || PCV==false || CountryV==false || PCCV==false ||PhoneV==false||RaddressV==false
function nextPage2Fun(){
    if( ValidationAddressPageArr.includes(false)) {
            let validationAddressPage=false;
console.log("error");
    }
    else{
        const addressPage=document.querySelector("#Address-page");
        addressPage.classList.add("Hidden");
        console.log("next");
    }
}


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
    estimatedShippingTime.innerHTML = `Your order will arrive between <b>${earlyArrival}h</b> and <b>${lateArrival}h</b>`;
    shippingOption3.insertAdjacentElement("afterend", estimatedShippingTime)
}
