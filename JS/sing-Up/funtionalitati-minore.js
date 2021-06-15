{
    //  -------------- verificarea continutului obligatoriu 
    // const agreeTerms = document.getElementById('terms');
    // const butonNextFormulaSingUp = document.getElementById('btn-form-singup-next');
    const formularSingUpPaginaUnu = document.getElementById('form-singup-first-page');
    const inputuriObligatorii = formularSingUpPaginaUnu.getElementsByTagName('input');

    for(let inputObligatoriu of inputuriObligatorii) {
        inputObligatoriu.addEventListener('input', function() {
            if (inputObligatoriu.value != "") {
                console.log("mara");
            }
        })
    }

}

{

    //  -------------- Bifarea casutei Termeni si conditii

    const agreeTerms = document.getElementById('terms');
    const butonNextFormulaSingUp = document.getElementById('btn-form-singup-next');
    // const textLabelAgreeTerms = document.getElementById('terms-label');

    butonNextFormulaSingUp.disabled = true;

    agreeTerms.addEventListener('change', function() {
        if (agreeTerms.checked == true) {
            butonNextFormulaSingUp.disabled = false;
        } else {
            butonNextFormulaSingUp.disabled = true;
        }
    });
}

{
    // ---------------- verificare parola reintrodusa si 
    // schimbarea paginii formularului
    
    const butonFormularSingUpNext = document.getElementById('btn-form-singup-next');
    const butonFormularSingUpBack = document.getElementById('btn-form-singup-back');
    const formularPaginaDoi = document.getElementById('form-singup-second-page');

    butonFormularSingUpNext.onclick = function (e) {
        e.preventDefault();
        verificareParolaReintrodusaSiNext();
    }

    butonFormularSingUpBack.onclick = function (e) {
        e.preventDefault();
        formularPaginaDoi.style.display = 'none';
        formularPaginaDoi.style.opacity = '0.5';
    }

    function verificareParolaReintrodusaSiNext() {

        const inputParolaReintrodusa = document.getElementById('rePassword');
        const inputParolaIntrodusa = document.getElementById('password');
            
        const parolaIntodusa = inputParolaIntrodusa.value;
        const parolaReintrodusa = inputParolaReintrodusa.value;
        
        if (parolaReintrodusa != parolaIntodusa) {
            inputParolaReintrodusa.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        } else {
            inputParolaReintrodusa.style.backgroundColor = 'transparent';
            formularPaginaDoi.style.display = 'flex';
            formularPaginaDoi.style.opacity = '1';
        }
        
    }

    // function verificareTextInputuri() {
    //     const formularSingUpPaginaUnu = document.getElementById('form-singup-first-page');
    //     const inputuriObligatorii = formularSingUpPaginaUnu.getElementsByTagName('input');

    //     for(let inputObligatoriu of inputuriObligatorii) {
    //         if (inputObligatoriu.value = "") {
    //             inputObligatoriu.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    //         }
    //     }

    // }

}

// {
//     const formularSingUpPaginaUnu = document.getElementById('form-singup-first-page');
//     const inputuriObligatorii = formularSingUpPaginaUnu.getElementsByTagName('input');
//     console.log(inputuriObligatorii);
//     for(let inputObligatoriu of inputuriObligatorii) {
//         inputObligatoriu.required = true;
//     }
// }






