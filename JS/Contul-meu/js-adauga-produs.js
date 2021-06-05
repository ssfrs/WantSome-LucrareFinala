const btnAdaugaProdus = document.querySelector('.buton-adauga-produs');
const meniuAscunsAdaugaProdus = document.querySelector('.meniu-ascuns-adauga-produs');
const btnIesireMeniuAdaugaProdus = document.querySelector('.btn-iesire-meniu-adauga-produs');
const btnPosteazaProdus = document.querySelector('#btn-adauga-produs');


btnAdaugaProdus.onclick = function() {
    meniuAscunsAdaugaProdus.classList.toggle('active');
}
btnIesireMeniuAdaugaProdus.onclick = function() {
    meniuAscunsAdaugaProdus.classList.toggle('active');
}
btnPosteazaProdus.onclick = function() {
    meniuAscunsAdaugaProdus.classList.toggle('active');
}