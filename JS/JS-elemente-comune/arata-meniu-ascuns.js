// START ----- Functionare Butoane Sortare - Galerie

function arataMeniulAscunsTreiElemente(clasaButoane, clasaSageti, clasaMeniuriAscunse) {
    const vnvButoane = document.querySelectorAll(clasaButoane);
    const vnvIconSageti = document.querySelectorAll(clasaSageti);
    const vnsMeniuriAscunse = document.querySelectorAll(clasaMeniuriAscunse);
    // const numarButoane = vnvButoane.length;
    
    for (let numarOrdin in vnvButoane) {
        vnvButoane[numarOrdin].onclick = function() {
            vnvButoane[numarOrdin].classList.toggle('active');
            vnvIconSageti[numarOrdin].classList.toggle('active');
            vnsMeniuriAscunse[numarOrdin].classList.toggle('active');
        }
    }
};

arataMeniulAscunsTreiElemente('.v-n-v-link', '.v-n-v-sageti', '.vns-hidden-item');

// END ----- Functionare Butoane Sortare - Galerie

// ----------------------------------------------------------------------------------

// START ----- Functionare Butoane - Contul Meu

function arataMeniulAscunsDouaElemente(clasaButoane, clasaMeniuriAscunse) {
    const Butoane = document.querySelectorAll(clasaButoane);
    const MeniuriAscunse = document.querySelectorAll(clasaMeniuriAscunse);
    // const numarButoane = vnvButoane.length;
    
    for (let numarOrdin in Butoane) {
        Butoane[numarOrdin].onclick = function() {
            Butoane[numarOrdin].classList.toggle('active');
            MeniuriAscunse[numarOrdin].classList.toggle('active');
        }
    }
};

arataMeniulAscunsDouaElemente('.btnm-contul-meu','.ma-contul-meu ');
arataMeniulAscunsDouaElemente('.btn-iesire-meniu-adauga-produs','.meniu-ascuns-adauga-produs');

// END ----- Functionare Butoane - Contul Meu