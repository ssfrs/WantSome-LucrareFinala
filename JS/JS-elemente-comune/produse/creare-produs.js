const listaProduse = JSON.parse(localStorage.getItem('ListaProduse'));
const containerProduse = document.getElementById('produse');
const numarProduse = listaProduse.length;


for (let index in listaProduse) {
    const produs = document.createElement('div');
    produs.className = 'produs';
    produs.className += ` ${listaProduse[index].planVizualizare}`;
    produs.className += ` ${listaProduse[index].categorie}`;
    containerProduse.appendChild(produs);

        const element = document.createElement('div');
        element.className = 'element';
        produs.appendChild(element);

            const imagine = document.createElement('img');
            imagine.src = `${listaProduse[index].imaginePrincipala}`;
            imagine.alt = `${listaProduse[index].nume}`;
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
                iconLike.className = `${listaProduse[index].activ}`;
                iconLike.id = `${listaProduse[index].id}`;
                cardMeniu.appendChild(iconLike);

                    const iconitaLike = document.createElement('span');
                    iconitaLike.className = 'icon-heart';
                    iconLike.appendChild(iconitaLike);

                const numeSiRenume = document.createElement('div');
                numeSiRenume.className = 'nume-si-renume';
                cardMeniu.appendChild(numeSiRenume);

                    const numeProdus = document.createElement('h1');
                    numeProdus.id = 'numele-tabloului';
                    numeProdus.textContent = `${listaProduse[index].nume}`;
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
                    pret.textContent = `${listaProduse[index].pretProdus}`;
                    infoPret.appendChild(pret);

                    const valuta = document.createElement('span');
                    valuta.className = 'valuta';
                    valuta.textContent = `${listaProduse[index].valutaProdus}`;
                    infoPret.appendChild(valuta);

                const butonCumpara = document.createElement('button');
                butonCumpara.className = 'buton-cumpara';
                butonCumpara.textContent = 'Cumpără';
                cardMeniu.appendChild(butonCumpara);
}