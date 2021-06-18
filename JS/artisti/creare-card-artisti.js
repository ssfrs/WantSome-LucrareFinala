{

    let listaConturi = JSON.parse(localStorage.getItem('ListaConturi'));
    const containerArtisti = document.getElementsByClassName('continut-centrat-pentru-artisti')[0];
    // const numarArtisti = listaConturi.length;

    for (let index in listaConturi) {
        const artist = document.createElement('div');
        artist.className = 'artist';
        containerArtisti.appendChild(artist);

            const avatarCont = document.createElement('section');
            avatarCont.className = 'vizualizare-avatar-cont';
            artist.appendChild(avatarCont);

                const acFlipContainer = document.createElement('div');
                acFlipContainer.className = 'avatar-cont-flip-container';
                avatarCont.appendChild(acFlipContainer);

                    const acFlipFata = document.createElement('div');
                    acFlipFata.className = 'avatar-cont-fata avatar-flip';
                    acFlipContainer.appendChild(acFlipFata);

                        const avatar = document.createElement('section');
                        avatar.className = 'avatar';
                        acFlipFata.appendChild(avatar);

                            const imgAvatar = document.createElement('img');
                            imgAvatar.src = verificareIMG_Avatar();
                            imgAvatar.alt = 'avatar';
                            avatar.appendChild(imgAvatar);

                    const descriereArtist = document.createElement('div');
                    descriereArtist.className = 'descriere-artist avatar-flip';
                    acFlipContainer.appendChild(descriereArtist);

                        const textDescriere = document.createElement('p');
                        textDescriere.className = 'descrierea-artistului';
                        textDescriere.textContent = verificareDescriere();
                        descriereArtist.appendChild(textDescriere);
            
            const sectiuneNume = document.createElement('section');
            sectiuneNume.className = 'sectiune-nume';
            artist.appendChild(sectiuneNume);

                const textNume = document.createElement('h2');
                textNume.className = 'nume-artist';
                textNume.textContent = numeCuLiteraMare();
                sectiuneNume.appendChild(textNume);

                const listaAbilitati = document.createElement('ul');
                listaAbilitati.className = 'ocupatii-artist';
                sectiuneNume.appendChild(listaAbilitati);

                    const ocupatiePictor = document.createElement('li');
                    ocupatiePictor.textContent = listaConturi[index].checkBoxPictura;
                    listaAbilitati.appendChild(ocupatiePictor);

                    const ocupatieGrafician = document.createElement('li');
                    ocupatieGrafician.textContent = listaConturi[index].checkBoxArtaDigitala;
                    listaAbilitati.appendChild(ocupatieGrafician);

                    const ocupatieArtizan = document.createElement('li');
                    ocupatieArtizan.textContent = listaConturi[index].checkBoxArtizanat;
                    listaAbilitati.appendChild(ocupatieArtizan);

                    const ocupatieSculptor = document.createElement('li');
                    ocupatieSculptor.textContent = listaConturi[index].checkBoxSculptura;
                    listaAbilitati.appendChild(ocupatieSculptor);

            const sectiuneNumarProduse = document.createElement('section');
            sectiuneNumarProduse.className = 'sectiune-numar-produse';
            artist.appendChild(sectiuneNumarProduse);

                const logoNrProd = document.createElement('span');
                logoNrProd.className = 'icon-galerie';
                sectiuneNumarProduse.appendChild(logoNrProd);

                const numarNrprod = document.createElement('h2');
                numarNrprod.className = 'nr-produse';
                numarNrprod.textContent = listaConturi[index].numarProduseArtist;
                sectiuneNumarProduse.appendChild(numarNrprod);

            const sectiuneNumarLike = document.createElement('section');
            sectiuneNumarLike.className = 'sectiune-total-like-uri';
            artist.appendChild(sectiuneNumarLike);

                const logoNrLike = document.createElement('span');
                logoNrLike.className = 'icon-heart';
                sectiuneNumarLike.appendChild(logoNrLike);

                const numarNrLike = document.createElement('h2');
                numarNrLike.className = 'total-like-uri';
                numarNrLike.textContent = listaConturi[index].numarLikeuri;
                sectiuneNumarLike.appendChild(numarNrLike);

            const sectiuneNumarRating = document.createElement('section');
            sectiuneNumarRating.className = 'sectiune-rating';
            artist.appendChild(sectiuneNumarRating);
    
                const logoNrRating = document.createElement('span');
                logoNrRating.className = 'icon-rating';
                sectiuneNumarRating.appendChild(logoNrRating);
    
                const numarNrRating = document.createElement('h2');
                numarNrRating.className = 'rating-total';
                numarNrRating.textContent = listaConturi[index].numarRating;
                sectiuneNumarRating.appendChild(numarNrRating);

        // -------- Verificari -------------

        function verificareDescriere() {
            if (listaConturi[index].descriereArtist == "") {
                textDescriere.textContent = 'încă nu m-am gândit la o descriere, dar voi face un update cât mai repede!';
            } else {
                textDescriere.textContent = listaConturi[index].descriereArtist;
            }
            return textDescriere.textContent;
        };
        // ---

        function numeCuLiteraMare() {
            let nume = listaConturi[index].prenume.charAt(0).toUpperCase() + listaConturi[index].prenume.slice(1);
            return nume;
        };
        // ---

        function verificareOcupatie(ocupatie) {
            if (ocupatie.textContent == 'false') {
                ocupatie.style.display = 'none';
            }
        }
        verificareOcupatie(ocupatiePictor);
        verificareOcupatie(ocupatieGrafician);
        verificareOcupatie(ocupatieArtizan);
        verificareOcupatie(ocupatieSculptor);
        // ---

        function valitareOcupatie() {
            if (ocupatiePictor.style.display == 'none' && ocupatieGrafician.style.display == 'none' && ocupatieArtizan.style.display == 'none' && ocupatieSculptor.style.display == 'none') {
                ocupatiePictor.textContent = 'Încă mă gândesc la ce sunt bun!';
                ocupatiePictor.style.display = 'block';
            }
        };
        valitareOcupatie();
        // ---

        function verificareIMG_Avatar() {
            // imgAvatar.src = `${listaConturi[index].pozaProfil}`;
            let sursa
            if (listaConturi[index].pozaProfil == "") {
                sursa = 'IMG/no-avatar.jpg';
            } else {
                sursa = listaConturi[index].pozaProfil;
            }
            return sursa;
        }

    }

}