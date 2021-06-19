let listaProduse = JSON.parse(localStorage.getItem('ListaProduse'));

if (listaProduse != null) {
    listaProduse = JSON.parse(localStorage.getItem('ListaProduse'));
} else {
    let listaProduse = [];
    localStorage.setItem('ListaProduse', JSON.stringify(listaProduse));
}


const adaugaProdus = (ev)=>{
    ev.preventDefault();
    const formularAdaugaProduse = document.querySelector('.formular-adauga-produs');
    const butonIesireMeniuAdaugaProdus = document.querySelector('button.btn-iesire-meniu-adauga-produs');

    let produs = {
        id: `${listaProduse.length}-${Date.now()}`,
        nume: document.getElementById('nume-produs').value,
        categorie: document.getElementById('categoria-produsului').value,
        planVizualizare: document.getElementById('plan-vizualizare').value,
        imaginePrincipala: document.getElementById('imagine-principala').value,
        imagineSecundaraUNU: document.getElementById('imagine-secundara1').value,
        imagineSecundaraDOI: document.getElementById('imagine-secundara2').value,
        imagineSecundaraTREI: document.getElementById('imagine-secundara3').value,
        descriereaProdusului: document.getElementById('descrierea-produsului').value,
        pretProdus: document.getElementById('pret-produs').value,
        valutaProdus: document.getElementById('valuta-pret-produs').value,
        tipPret: tipPret(),
        tehnicaTehnologie: document.getElementById('tehnica-tehnologie').value,
        suportMaterial: document.getElementById('suport-material').value,
        dimensiune: document.getElementById('dimensiunea-produsului').value,
        localizareaProdusului: document.getElementById('localizarea-produsului').value,
        livrareCurierat: document.getElementById('nume-produs').value,
        livrarePosta: document.getElementById('nume-produs').value,
        livrarePersonala: document.getElementById('nume-produs').value,
        timpPentruLivrare: document.getElementById('timp-livrare').value,
        activ: 'icon icon-like',
        numarOrdin: listaProduse.length
    }

    listaProduse = JSON.parse(localStorage.getItem('ListaProduse'));
    listaProduse.push(produs);
    formularAdaugaProduse.reset();

    localStorage.setItem('ListaProduse', JSON.stringify(listaProduse));
    butonIesireMeniuAdaugaProdus.click();
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('buton-adauga-produs').addEventListener('click', adaugaProdus);
});

function tipPret() {
    var ele = document.getElementsByName('tip-pret');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            let valoareTipPret = ele[i].value;
            return valoareTipPret;
        }
    }
};