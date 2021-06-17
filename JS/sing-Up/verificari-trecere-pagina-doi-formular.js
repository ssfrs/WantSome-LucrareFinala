{

let listaConturi = JSON.parse(localStorage.getItem('ListaConturi'));
console.log(listaConturi);
const butonFormularSingUpNext = document.getElementById('btn-form-singup-next');
const butonFormularSingUpBack = document.getElementById('btn-form-singup-back');
const formularSingUpPaginaUnu = document.getElementById('form-singup-first-page');
const formularPaginaDoi = document.getElementById('form-singup-second-page');
const inputuriObligatorii = formularSingUpPaginaUnu.getElementsByClassName('text');
const agreeTerms = document.getElementById('terms');
const textagreeTerms = document.getElementById('terms-label');
const textParola = document.getElementById('text-input-parola');
const inputParolaReintrodusa = document.getElementById('rePassword');
const inputParolaIntrodusa = document.getElementById('password');
const inputEmailIntrodus = document.getElementById('email');
const inputUsernameIntrodus = document.getElementById('username');
const labelEmail = document.getElementById('label-email');
const labelUsername = document.getElementById('label-username');



butonFormularSingUpBack.onclick = function (e) {
    e.preventDefault();
    formularPaginaDoi.style.display = 'none';
    formularPaginaDoi.style.opacity = '0.5';
};

butonFormularSingUpNext.addEventListener('click', function(e) {
    e.preventDefault();
    verificareContinutInputuri();
    verificareEmail();
    verificareExistentaEmail();
    verificareExistentaUsername();
    verificareParola();
    verificareRepetareParola();
    termsChecked();

    if (agreeTerms.checked === true && verificareContinutInputuri() == 0 && verificareRepetareParola() === true && verificareParola() === true && verificareEmail() === true && verificareExistentaEmail() === true && verificareExistentaUsername() === true) {
        formularPaginaDoi.style.display = 'flex';
        formularPaginaDoi.style.opacity = '1';
    }

});

function verificareContinutInputuri() {
    const formularSingUpPaginaUnu = document.getElementById('form-singup-first-page');
    const inputuriObligatorii = formularSingUpPaginaUnu.getElementsByClassName('text');

    let numarInputuriNecompletate = 0;
    
    for( let i=0; i<inputuriObligatorii.length; i++) {
        if (inputuriObligatorii[i].value == "") {
            numarInputuriNecompletate++;
            inputuriObligatorii[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        } else {
            inputuriObligatorii[i].style.backgroundColor = 'transparent';
        }
    }
    return numarInputuriNecompletate;
};

function termsChecked() {
    if (agreeTerms.checked != true) {
        textagreeTerms.style.color = 'red';
    } else {
        textagreeTerms.style.color = 'black';
    }
};

function verificareRepetareParola() {
    const parolaIntodusa = inputParolaIntrodusa.value;
    const parolaReintrodusa = inputParolaReintrodusa.value;

    let advVerRepPar = false;
    if (parolaReintrodusa === parolaIntodusa) {
        advVerRepPar = true;
    } else {
        inputParolaReintrodusa.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        advVerRepPar = false;
    };

    return advVerRepPar;
};

function verificareParola() {
    const adaptarePentruValidare = /["!", "`", "~", "#", "$", "&", "*", "-", ".", ",", "/", "?"]/g;
    const parolaIntodusa = inputParolaIntrodusa.value;
    let adevar;
  
    if (parolaIntodusa.match(adaptarePentruValidare)) {
        if (parolaIntodusa.length >= 8) {
            adevar = true;
          } else {
            adevar = false;
            textParola.style.color = 'red';
          };
    } else {
      adevar = false;
      textParola.style.color = 'red';
    }
    return adevar;
  };


function verificareEmail() {
    const emailValoare = inputEmailIntrodus.value;
    const propietate = "@";
    let domenii = ["com", "ro", "fr", "es", "bg", "ru", "io", "pl"];
    let textArr = emailValoare.split("@").join(",").split(".").join(",").split(",");
    let adevar = true;
    let domeniu = emailValoare.split(".");
    let domeniuArr = domeniu.length - 1;
  
    if (emailValoare.includes(propietate) && domenii.includes(domeniu[domeniuArr])) {
      for (let arr of textArr) {
        if (arr !== "") {
          adevar = true;
        } else {
            adevar = false;
            inputEmailIntrodus.style.boxShadow = '0 0 0 0.1rem red';
            break;
        }
      }

      if (adevar) {
        return true;
      } else {
        inputEmailIntrodus.style.boxShadow = '0 0 0 0.1rem red';
        return false;
        
      }
    } else {
        inputEmailIntrodus.style.boxShadow = '0 0 0 0.1rem red';
        return false;
    }
  };

  function verificareExistentaEmail() { 

    const email = inputEmailIntrodus.value;
    // const username = inputUsernameIntrodus.value;

    let artist = listaConturi.find(function(artist){
      return artist.eMail === email
    });
    if(artist != null) {
        labelEmail.textContent = 'E-mail - Este deja folosit!';
        labelEmail.style.color = 'red';
        return false;
    } else {
        labelEmail.textContent = 'E-mail';
        labelEmail.style.color = 'black';
        return true;
    }
  };

  function verificareExistentaUsername() { 

    const username = inputUsernameIntrodus.value;

    let artist = listaConturi.find(function(artist){
      return artist.username === username
    });
    if(artist != null) {
        labelUsername.textContent = 'Username - Este deja folosit!';
        labelUsername.style.color = 'red';
        return false;
    } else {
        labelUsername.textContent = 'Username';
        labelUsername.style.color = 'black';
        return true;
    }
  };

// ---------- Revenire culoare text "terms"
agreeTerms.addEventListener('change', function() {
    if (textagreeTerms.style.color == 'red') {
        textagreeTerms.style.color = 'black';
    }
});
//  --------- Revenire culoare Background inputuri obligatorii
for (let i=0; i<inputuriObligatorii.length; i++) {
    inputuriObligatorii[i].addEventListener('input', function() {
        if (inputuriObligatorii[i].style.backgroundColor == 'rgba(255, 0, 0, 0.2)') {
            inputuriObligatorii[i].style.backgroundColor = 'transparent';
        }
    })
};
//  -------- Validare Vizuala pentru Parola 
inputParolaIntrodusa.addEventListener('input', function() {
    if (verificareParola() === true) {
        textParola.style.color = 'green';
    } else {
        textParola.style.color = 'red';
    };
});
//  --------- Validare Vizuala pt Email
inputEmailIntrodus.addEventListener('input', function() {
    if (verificareEmail() === true) {
        inputEmailIntrodus.style.boxShadow = '0 0 0 0.1rem green';
    } else {
        inputEmailIntrodus.style.boxShadow = '0 0 0 0.1rem red';
    };
})

// ----------- Revenire text Email
inputEmailIntrodus.addEventListener('input', function() {
    if (labelEmail.style.color == 'red') {
        labelEmail.textContent = 'E-mail';
        labelEmail.style.color = 'black';
    }
});

// ------------Revenire text Username

inputUsernameIntrodus.addEventListener('input', function() {
    if (labelUsername.style.color == 'red') {
        labelUsername.textContent = 'Username';
        labelUsername.style.color = 'black';
    }
})

}