var imgPrincipal = document.getElementById('galeria');
var containerGalery=document.querySelector('ul');
containerGalery.addEventListener('mouseover', showSlides);

function showSlides(e){
    imgPrincipal.src=e.target.src;
}