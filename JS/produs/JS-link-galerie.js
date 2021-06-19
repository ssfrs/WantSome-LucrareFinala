{
    function linkGalerie(id) {
        let butonLink = document.getElementById(`${id}`);
        butonLink.onclick = function() {
            window.location.href = `galerie.html?categorie=${id}`;
        }
    };

    linkGalerie('special');
    linkGalerie('pictura');
    linkGalerie('arta-digitala');
    linkGalerie('artizanat');
    linkGalerie('sculptura');
    linkGalerie('personalizare');
}