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


// function toggleActive(elementAscuns) {
//     elementAscuns.classList.toggle('active');
// }

// btnAdaugaProdus.onclick = toggleActive(meniuAscunsAdaugaProdus);
// btnIesireMeniuAdaugaProdus.onclick = toggleActive(meniuAscunsAdaugaProdus);
// btnPosteazaProdus.onclick = toggleActive(meniuAscunsAdaugaProdus);

// btnAdaugaProdus.addEventListener("click", toggleActive(meniuAscunsAdaugaProdus));
// btnIesireMeniuAdaugaProdus.addEventListener("click", toggleActive(meniuAscunsAdaugaProdus));
// btnPosteazaProdus.addEventListener("click", toggleActive(meniuAscunsAdaugaProdus));