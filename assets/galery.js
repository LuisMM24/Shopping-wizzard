var imgPrincipal = document.getElementById('principal');
var containerGalery=document.querySelector('.miniSlide');
containerGalery.addEventListener('mouseover', showSlides);

function showSlides(e){
    imgPrincipal.src=e.target.src;
}