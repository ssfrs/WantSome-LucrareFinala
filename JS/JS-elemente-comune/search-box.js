const icon = document.querySelector('.icon-search');
const search = document.querySelector('.input');

icon.onclick = function() {
    search.classList.toggle('active');
}
