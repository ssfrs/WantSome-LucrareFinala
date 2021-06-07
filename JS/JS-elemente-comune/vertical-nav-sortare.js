function arataMeniulAscuns(clasaButoane, clasaSageti, clasaMeniuriAscunse) {
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

arataMeniulAscuns('.v-n-v-link', '.v-n-v-sageti', '.vns-hidden-item');