{
    const butonSortarePretCrescator = document.getElementById('sortare-pret-crescator');
    const butonSortarePretDescrescator = document.getElementById('sortare-pret-descrescator');
    const butonSortareRecent = document.getElementById('sortare-cel-mai-nou');
    const butonSortareVechi = document.getElementById('sortare-cel-mai-vechi');
    let listaProduse = JSON.parse(localStorage.getItem('ListaProduse'));
    let listaDeCautare = JSON.parse(localStorage.getItem('ListaProduse'));
    const containerProduse = document.getElementById('produse');

    sortare(butonSortarePretCrescator, sortareAscendent, listaDeCautare, 'pretProdus');
    sortare(butonSortarePretDescrescator, sortareDescendent, listaDeCautare, 'pretProdus');
    sortare(butonSortareRecent, sortareAscendent, listaDeCautare, 'id');
    sortare(butonSortareVechi, sortareDescendent, listaDeCautare, 'id');
    

    // functia principala

    function sortare(butonSortare, actiune, lista, cheie) {
        butonSortare.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                let listaSortata = actiune(lista, cheie);
                containerProduse.innerHTML = "";
                creareProduse(listaSortata);
            } else {
                containerProduse.innerHTML = "";
                creareProduse(listaProduse);
            };
            filtrareDupaCategorie();
        });
    };

    // functii elementare

    function filtrareDupaCategorie() {
        let butonNFO_activ = document.querySelector('li.container-nav-sortare-activ');
        butonNFO_activ.click();
    };

    function sortareAscendent(lista, cheie) {
        return lista.sort(function(a, b) {
            return parseFloat(a[cheie]) - parseFloat(b[cheie]);
         });
     };

    function sortareDescendent(lista, cheie) {
       return lista.sort(function(a, b) {
            return parseFloat(b[cheie]) - parseFloat(a[cheie]);
        });
    };

    function creareProduse(LISTA) {
        for (let index in LISTA) {
            const produs = document.createElement('div');
            produs.className = 'produs';
            produs.className += ` ${LISTA[index].planVizualizare}`;
            produs.className += ` ${LISTA[index].categorie}`;
            produs.id = LISTA[index].id;
            containerProduse.appendChild(produs);
    
                const element = document.createElement('div');
                element.className = 'element';
                produs.appendChild(element);
    
                    const imagine = document.createElement('img');
                    imagine.src = `${LISTA[index].imaginePrincipala}`;
                    imagine.alt = `${LISTA[index].nume}`;
                    element.appendChild(imagine);
    
                    const cardMeniu = document.createElement('div');
                    cardMeniu.className = 'card-meniu';
                    element.appendChild(cardMeniu);
    
                        const iconNew = document.createElement('div');
                        iconNew.className ='icon icon-new';
                        cardMeniu.appendChild(iconNew);
    
                            const hText = document.createElement('h2');
                            hText.textContent = 'New';
                            iconNew.appendChild(hText);
    
                        const iconDiscount = document.createElement('div');
                        iconDiscount.className = 'icon icon-discount';
                        cardMeniu.appendChild(iconDiscount);
    
                            const hDiscount = document.createElement('h2');
                            hDiscount.textContent = '15%';
                            iconDiscount.appendChild(hDiscount);
    
                        const iconLike = document.createElement('div');
                        iconLike.className = `${LISTA[index].activ}`;
                        iconLike.id = `${LISTA[index].id}`;
                        cardMeniu.appendChild(iconLike);
    
                            const iconitaLike = document.createElement('span');
                            iconitaLike.className = 'icon-heart';
                            iconLike.appendChild(iconitaLike);
    
                        const numeSiRenume = document.createElement('div');
                        numeSiRenume.className = 'nume-si-renume';
                        cardMeniu.appendChild(numeSiRenume);
    
                            const numeProdus = document.createElement('h1');
                            numeProdus.id = 'numele-tabloului';
                            numeProdus.textContent = `${LISTA[index].nume}`;
                            numeSiRenume.appendChild(numeProdus);
    
                            const paragraf = document.createElement('p');
                            paragraf.textContent = 'design by ';
                            numeSiRenume.appendChild(paragraf);
    
                                const enter = document.createElement('br');
                                paragraf.appendChild(enter);
    
                                const numeArtist = document.createElement('span');
                                numeArtist.id = 'nume-artist';
                                numeArtist.textContent = `Nume Artist`;
                                paragraf.appendChild(numeArtist);
    
                        const infoPret = document.createElement('div');
                        infoPret.className = 'info-pret';
                        cardMeniu.appendChild(infoPret);
    
                            const pretVechi = document.createElement('span');
                            pretVechi.id = 'pret-vechi';
                            pretVechi.textContent = `PretV`;
                            infoPret.appendChild(pretVechi);
    
                            const pret = document.createElement('span');
                            pret.id = 'pret';
                            pret.textContent = `${LISTA[index].pretProdus}`;
                            infoPret.appendChild(pret);
    
                            const valuta = document.createElement('span');
                            valuta.className = 'valuta';
                            valuta.textContent = `${LISTA[index].valutaProdus}`;
                            infoPret.appendChild(valuta);
    
                        const butonCumpara = document.createElement('button');
                        butonCumpara.className = 'buton-cumpara';
                        butonCumpara.textContent = 'Cumpără';
                        cardMeniu.appendChild(butonCumpara);
        }
    }
}