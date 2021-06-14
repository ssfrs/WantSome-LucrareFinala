let listaConturi = JSON.parse(localStorage.getItem('ListaConturi'));
console.log(listaConturi);

const email = document.getElementById('email').value; 
const parola = document.getElementById('password').value; 

const inputEmail = document.getElementById('email'); 
const inputParola = document.getElementById('password'); 

const butonLogIn = document.getElementById('buton-log-in');

const formularLogIn = document.getElementById('formular-log-in');

butonLogIn.addEventListener('click', verificareDate);

function verificareDate(e) {
    e.preventDefault();

    // for (let cont of listaConturi) {
    //     if (cont.eMail == email && cont.parola == parola) {
    //         formularLogIn.reset();
    //         location.replace("contul-meu.html");
    //         console.log('bine')
    //     } else {
    //         inputEmail.style.boxShadow = '0 0 0.2rem 0 red';
    //         inputParola.style.boxShadow = '0 0 0.2rem 0 red';
    //         inputEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
    //         inputParola.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
    //         console.log('rau')
    //     }
    // }

    if (listaConturi[0].eMail == email && listaConturi[0].parola == parola) {
        formularLogIn.reset();
        location.replace("contul-meu.html");
        console.log('bine')
    } else {
        inputEmail.style.boxShadow = '0 0 0.2rem 0 red';
        inputParola.style.boxShadow = '0 0 0.2rem 0 red';
        inputEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
        inputParola.style.backgroundColor = 'rgba(255, 0, 0, 0.15)';
        console.log('rau')
    }
};