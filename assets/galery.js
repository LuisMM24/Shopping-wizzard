var imgPrincipal = document.getElementById('principal');
var containerGalery=document.querySelector('.miniSlide');
containerGalery.addEventListener('mouseover', showSlides);
var imgColorLent=document.querySelectorAll('.colorLents');
var Lent=document.querySelector('#Lents');
Lent.addEventListener('click', changeColor);
var prevTarget;

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
    }
    );
});