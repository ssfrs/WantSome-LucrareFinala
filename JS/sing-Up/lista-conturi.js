{

    let listaConturi = JSON.parse(localStorage.getItem('ListaConturi'));
    const butonFormularSingUpFinish = document.getElementById('btn-form-singup-finish');

    if (listaConturi != null) {
        listaConturi = JSON.parse(localStorage.getItem('ListaConturi'));
    } else {
        listaConturi = [];
        localStorage.setItem('ListaConturi', JSON.stringify(listaConturi));
    }


    const adaugaContInLista = (e)=>{
        e.preventDefault();
        const formularSingUpPaginaUnu = document.getElementById('form-singup-first-page');
        const formularSingUpPaginaDoi = document.getElementById('form-singup-second-page');

        let cont = {
            numarOrdin: listaConturi.length,
            id: Date.now(),
            nume: document.getElementById('firstName').value,
            prenume: document.getElementById('lastName').value,
            eMail: document.getElementById('email').value,
            username: document.getElementById('username').value,
            parola: document.getElementById('password').value,
            pozaProfil: document.getElementById('pozaProfil').value,
            checkBoxPictura: categorieCheckBox('pictura'),
            checkBoxArtaDigitala: categorieCheckBox('arta-digitala'),
            checkBoxArtizanat: categorieCheckBox('artizanat'),
            checkBoxSculptura: categorieCheckBox('sculptura'),
            descriereArtist: document.getElementById('descrierea-artistului').value,
            numarProduseArtist: numarRandom(100),
            numarLikeuri: numarRandom(9999),
            numarRating: ratingRandom(1, 5, 1)
        }

        listaConturi = JSON.parse(localStorage.getItem('ListaConturi'));
        listaConturi.push(cont);
        formularSingUpPaginaUnu.reset();
        formularSingUpPaginaDoi.reset();


        localStorage.setItem('ListaConturi', JSON.stringify(listaConturi));
        location.replace("log-in.html")

    };

    document.addEventListener('DOMContentLoaded', ()=>{
        butonFormularSingUpFinish.addEventListener('click', adaugaContInLista);
    });




    function categorieCheckBox(idCategorie) {
        let categorie = document.getElementById(`${idCategorie}`);
            if(categorie.checked == true) {
                let valoareCategorie = categorie.value;
                return valoareCategorie;
            } else {
                valoareCategorie = 'false';
                return valoareCategorie;
            }
    };

    function numarRandom(max) {
        return Math.floor(Math.random() * max);
    }

    function ratingRandom(min, max, zecimale) {  
        var rand = Math.random()*(max-min) + min;
        var power = Math.pow(10, zecimale);
        return Math.floor(rand*power) / power;
    }

}