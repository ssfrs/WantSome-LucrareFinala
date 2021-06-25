{
    const butonVizibilitate = document.getElementById('vizibilitate-parola');
    const inputParola = document.getElementById('password');

    butonVizibilitate.addEventListener('click', function() {
        this.classList.toggle('activ');

        if (this.className == 'activ') {
            inputParola.type = 'text';
        } else {
            inputParola.type = 'password';
        }
    })
}