{
    // NFO == Navigator Filtare Orizontal

    function activeazaButonFiltrareNFO() {

        const butoane_NFO = document.querySelectorAll(".link-nav-sortare");
        const ancore_NFO = document.querySelectorAll('.element-nav-sortare');
        const semn_NFO = document.querySelectorAll('.semn-nav-sortare');

        for (let numarOrdin in butoane_NFO) {
            butoane_NFO[numarOrdin].onclick = function() {
                // Adaugare URL via Buton click-uit
                let id_bNSO = butoane_NFO[numarOrdin].id;
                window.history.replaceState('', '', `${window.location.pathname}?categorie=${id_bNSO}`);
                // Stergere clasa pentru element activ
                butoane_NFO.forEach(function(elem) {
                    elem.classList.remove("container-nav-sortare-activ");
                });
                ancore_NFO.forEach(function(elem) {
                    elem.classList.remove("buton-nav-sortare-activ");
                });
                semn_NFO.forEach(function(elem) {
                    elem.classList.remove("semn-nav-sortare-activ");
                });
                // Adaugare clasa pt element activ
                butoane_NFO[numarOrdin].classList.toggle('container-nav-sortare-activ');
                ancore_NFO[numarOrdin].classList.toggle('buton-nav-sortare-activ');
                semn_NFO[numarOrdin].classList.toggle('semn-nav-sortare-activ');

                filtrareProduse();
            }
        }
    };

    activeazaButonFiltrareNFO();

    function filtrareProduse() {
        function filtrare(categorie, buton) {
            const toateProdusele = document.querySelectorAll('div.produs');
            const produseCategorie = document.querySelectorAll(`div.${categorie}`);
            const butonActivNSO = document.querySelector(`li.${buton}`);
            if (butonActivNSO.classList.contains('container-nav-sortare-activ')) {
                toateProdusele.forEach(function(produs) {
                    produs.style.display = "none";
                });
                produseCategorie.forEach(function(produs) {
                    produs.style.display = "block";
                });
            }
        }
        filtrare('produs', 'special');
        filtrare('pictura', 'pict');
        filtrare('arta-digitala', 'digi');
        filtrare('artizanat', 'artiz');
        filtrare('sculptura', 'sculp');
    }
}
