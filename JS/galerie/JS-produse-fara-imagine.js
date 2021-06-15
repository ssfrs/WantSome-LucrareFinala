{
    function produseFaraImagine() {
        let listaProduse = JSON.parse(localStorage.getItem('ListaProduse'));
        const listaImaginiProduse = document.querySelectorAll('div.element img');
    
        for (let i in listaProduse) {
            let adresaImagine = listaProduse[i].imaginePrincipala;
            if (adresaImagine == "") {
                listaImaginiProduse[i].style.opacity = "0";
            }
        }
    }

    produseFaraImagine();
}