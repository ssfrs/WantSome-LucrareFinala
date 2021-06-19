{
    // ----- Extragere Produs Vizitat Din lista de Produse
    const urlSearch = new URLSearchParams(window.location.search);
    const produsID = urlSearch.get('produs');
    let listaProduse = JSON.parse(localStorage.getItem('ListaProduse'));
    console.log(produsID);
    var produsVizitat = listaProduse.filter(produs => {
        return produs.id == produsID
      });
    console.log(produsVizitat);

    // inlocuirea valorilor key-lor prodului in html

    let imagineDeschidere = document.querySelector('div.prezentare img');
    imagineDeschidere.src = produsVizitat[0].imaginePrincipala;

    let primaImagine = document.querySelector('div.prima-imagine img');
    primaImagine.src = produsVizitat[0].imaginePrincipala;

    let imagineaDoi = document.querySelector('div.a-doua-imagine img');
    imagineaDoi.src = produsVizitat[0].imagineSecundaraUNU;

    let imagineaTrei = document.querySelector('div.a-treia-imagine img');
    imagineaTrei.src = produsVizitat[0].imagineSecundaraDOI;

    let imagineaPatru = document.querySelector('div.a-patra-imagine img');
    imagineaPatru.src = produsVizitat[0].imagineSecundaraTREI;

    let numeLucrare = document.getElementById('numele-tabloului');
    numeLucrare.textContent = produsVizitat[0].nume;

    let dimensiune = document.querySelector('li.dimensiune');
    dimensiune.textContent = `Dimensiune: ${produsVizitat[0].dimensiune}`;

    let tehnica = document.querySelector('li.tehnica');
    tehnica.textContent = `Tehnica: ${produsVizitat[0].tehnicaTehnologie}`;

    let suport = document.querySelector('li.suport');
    suport.textContent = `Suport: ${produsVizitat[0].suportMaterial}`;

    let pretProdus = document.getElementById('pret');
    pretProdus.textContent = produsVizitat[0].pretProdus;

    let valuta = document.querySelectorAll('span.valuta');
    valuta[0].textContent = produsVizitat[0].valutaProdus;
    valuta[1].textContent = produsVizitat[0].valutaProdus;

    let tipulPretului = document.getElementById('tipul-pretului');
    tipulPretului.textContent = tipDePret();
    function tipDePret() {
        var cuvinte = produsVizitat[0].tipPret.toLowerCase().split('-');
        for (var i = 0; i < cuvinte.length; i++) {
            cuvinte[i] = cuvinte[i].charAt(0).toUpperCase() +
            cuvinte[i].substring(1);
        }
        return cuvinte.join(' ');
     }

     let scurtaDescriere = document.querySelector('p.scurta-descriere');
     scurtaDescriere.textContent = produsVizitat[0].descriereaProdusului;

     let butonCumpara = document.querySelector('div.buton-cumpara');
     let butonNegociaza = document.querySelector('div.buton-negociaza');
     let butonLiciteaza = document.querySelector('div.buton-liciteaza');
     let butonOferteaza = document.querySelector('div.buton-oferteaza');

     if (produsVizitat[0].tipPret == 'pret-fix') {
        butonCumpara.style.display = 'flex';
     } else if (produsVizitat[0].tipPret == 'pret-negociabil') {
        butonCumpara.style.display = 'flex';
        butonNegociaza.style.display = 'flex';
     } else if (produsVizitat[0].tipPret == 'pret-tip-oferta') {
        pretProdus.textContent = '---';
        valuta[0].textContent = '-';     
        valuta[1].textContent = '-';     
        butonOferteaza.style.display = 'flex';
     } else if (produsVizitat[0].tipPret == 'pret-licitat') {
        butonLiciteaza.style.display = 'flex';
     }

    let imagini = document.querySelectorAll('div.carusel-vizualizare div img');
    let caruselImagini = document.querySelector('div.carusel-vizualizare').children;
    for (let i=0; i<imagini.length; i++) {
        if (imagini[i].src == `http://127.0.0.1:5500/produs.html?produs=${produsID}`) {
            imagini[i].style.display = 'none';
            caruselImagini[i].style.opacity = '0.5';
        }
    }

    for (let i=0; i<caruselImagini.length; i++) {
        caruselImagini[i].onclick = function() {
            if (imagini[i].src == `http://127.0.0.1:5500/produs.html?produs=${produsID}`) {
                imagineDeschidere.src = produsVizitat[0].imaginePrincipala;
            } else {
                imagineDeschidere.src = imagini[i].src;
            }
        }
    }
}