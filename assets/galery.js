var imgPrincipal = document.getElementById('principal');
var containerGalery=document.querySelector('.miniSlide');
containerGalery.addEventListener('mouseover', showSlides);
var imgColorLent=document.querySelectorAll('.colorLents');
var Lent=document.querySelector('#Lents');
Lent.addEventListener('click', changeColor);
var colorSelected= "";


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
    }
    );
});


// Cambio de cantidad de compra
function decrement(){
    var quantity=document.getElementById('quantity');
    if (quantity.value<=1) return;
    quantity.value = quantity.value -1;
    quantity.innerHTML=quantity.value;
}

function increment(){
    var quantity=document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) +1;
    quantity.innerHTML=quantity.value;
}

//botón Buy validación y guardado de variables
function buyNow(){
    var unidadBuy= quantity.value;
    console.log(unidadBuy +" "+ colorSelected);
}