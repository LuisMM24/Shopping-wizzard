var imgPrincipal = document.getElementById('principal');
var containerGalery=document.querySelector('.miniSlide');
containerGalery.addEventListener('mouseover', showSlides);
var imgColorLent=document.querySelectorAll('.colorLents');
var Lent=document.querySelector('#Lents');
Lent.addEventListener('click', changeColor);
var colorSelected= "";
var colorSelectedValidation=false;
var ProductPage=document.querySelector("#product-page")
var quantity=document.getElementById('quantity');

//Cambio imagen Principal Galería
function showSlides(e){
    imgPrincipal.src=e.target.src;
}

//Cambio imagen principal color
function changeColor(e){
    imgPrincipal.src=e.target.src;

}

// Añade Class selected a cada imagen
imgColorLent.forEach(element => { //Recorre la colección de imágenes
    element.addEventListener('click', (e)=>{ //crea un evento para cada imagen
        imgColorLent.forEach(element => {
            element.classList.remove ("selected")}); // elimina la clase de cada elemento de la imagen si ya está creada
            e.target.classList.add("selected"); //Selecciona cada elemento con target, y le añade la clase selected a la imagen seleccionada;
            colorSelected=e.target.name;
            colorSelectedValidation=true;

    }
    );
});


// Cambio de cantidad de compra
function decrement(){
    if (quantity.value<=1) return;
    quantity.value = quantity.value -1;
    quantity.innerHTML=quantity.value;
}

function increment(){
    quantity.value = parseInt(quantity.value) +1;
    quantity.innerHTML=quantity.value;
}

//size
let sizeGlass1="";
let sizeGlassValidation=false;
let sizeGlass=document.querySelector("#sizes-glass")
sizeGlass.addEventListener("click",sizesValue)

function sizesValue(){
    if (sizeGlass.value == ""){
        // console.log(sizeGlass1 + "REQUERIDO");
        // ValidationMsg();
        // sizeGlass.classList.remove("validated");
        // sizeGlassParent.appendChild(Val);
        sizeGlassValidation=false;
    }else{
        // sizeGlass.classList.add("validated");
        // console.log(sizeGlass1+"  GUARDADO");
        sizeGlass1=sizeGlass.value;
        sizeGlassValidation=true;
    }
}
//Validation product page

let stepLine=document.querySelector("#step-line");
let buyNowButton=document.querySelector("#buyNow");
buyNowButton.addEventListener("click",buyNow);


function buyNow(){
    if(sizeGlassValidation==false||colorSelectedValidation==false){
        let Val;
        Val = document.createElement('div');
        Val.classList.add('validation');
        Val.innerHTML = `Please select size, color and quantity`;
        main.insertAdjacentElement('afterbegin', Val);
        return;
    }else{
        ProductPage.classList.add("Hidden");
        stepLine.classList.remove("Hidden");
        profileForm.classList.remove("Hidden");
        console.log("quantity.value "+quantity.value)
        console.log("colorSelected "+colorSelected)
        console.log("imgPrincipal.src "+imgPrincipal.src)
        console.log("sizeGlass1 "+sizeGlass1)
    }
}
