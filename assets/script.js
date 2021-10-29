// All the JS validation messages will be displayed in the screen below the respective input in a paragraph with the custom message.
// This element must be loaded in the HTML using Javascript.
// You will need to apply custom styles to the inputs that have not passed the validation to apply some error styling, such as the letter or container being shown in red


// EXTRA
// All the input validation should be done after users have entered a value, this means that you should only validate the value in the input fields after a value has been entered and not before users interact with the inputs.
// The validation should be done when the input field loses focus, that is, users type a value, they change focus to another element, then the field validation runs.
// After a validation message is entered and users focus the input element to adjust the value, the validation message and any error styles should be removed until the user has entered a new value and the focus is lost from the input field as before.

//function to create validation child
let Val;
function ValidationMsg(){
    Val = document.createElement('div');
    Val.classList.add('validation');
    Val.innerHTML = `Campo obligatrio`;
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
    if (firstName.value == ""){
        console.log(firstName1 + "REQUERIDO");
        ValidationMsg();
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
    if (lastName.value == ""){
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
    if (address1.value == ""){
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
    if (postalCode.value == ""){
        console.log(postalCode1 + "REQUERIDO");
        ValidationMsg();
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
    if (Phone.value == ""){
        console.log(Phone1 + "REQUERIDO");
        ValidationMsg();
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