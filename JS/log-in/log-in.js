let listaConturi = JSON.parse(localStorage.getItem('ListaConturi'));

const inputEmail = document.getElementById('email'); 
const inputParola = document.getElementById('password'); 

const butonLogIn = document.getElementById('buton-log-in');

const formularLogIn = document.getElementById('formular-log-in');

butonLogIn.addEventListener('click', verificareDate);

function verificareDate(e) {
    e.preventDefault();

    let email = inputEmail.value; 
    let parola = inputParola.value; 

    verificareCont(email, parola);
};

function verificareCont(emailInput, parolaInput){ 

    let artist = listaConturi.find(function(artist){
      return artist.eMail === emailInput && artist.parola === parolaInput 
    });
    if(artist == null)
    {
        inputEmail.style.boxShadow = '0 0 0.2rem 0 red';
        inputParola.style.boxShadow = '0 0 0.2rem 0 red';
        inputEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
        inputParola.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
        formularLogIn.reset();
    }
    else 
    {
        formularLogIn.reset();
        location.replace("contul-meu.html");
    }
  };