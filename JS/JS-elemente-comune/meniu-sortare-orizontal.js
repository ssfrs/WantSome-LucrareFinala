function activeazaButonSortareNSO() {

    const butoaneNSO = document.querySelectorAll(".link-nav-sortare");
    const ancoreBNSO = document.querySelectorAll('.element-nav-sortare');
    const semnBNSO = document.querySelectorAll('.semn-nav-sortare');

    for (let numarOrdin in butoaneNSO) {
        butoaneNSO[numarOrdin].onclick = function() {

            butoaneNSO.forEach(function(elem) {
                elem.classList.remove("container-nav-sortare-activ");
            });
            ancoreBNSO.forEach(function(elem) {
                elem.classList.remove("buton-nav-sortare-activ");
            });
            semnBNSO.forEach(function(elem) {
                elem.classList.remove("semn-nav-sortare-activ");
            });

            butoaneNSO[numarOrdin].classList.toggle('container-nav-sortare-activ');
            ancoreBNSO[numarOrdin].classList.toggle('buton-nav-sortare-activ');
            semnBNSO[numarOrdin].classList.toggle('semn-nav-sortare-activ');

            sortareProduse();
        }
    }
};

activeazaButonSortareNSO();

function sortareProduse() {
    function sortare(categorie, buton) {
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
    sortare('produs', 'special');
    sortare('pictura', 'pict');
    sortare('arta-digitala', 'digi');
    sortare('artizanat', 'artiz');
    sortare('sculptura', 'sculp');
}

// const urlSearc = new URLSearchParams(window.location.search);
// const param = Object.fromEntries(urlSearc.entries());

// console.log(param);