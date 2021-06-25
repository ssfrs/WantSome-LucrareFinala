{
    butonSetare_LCD = document.getElementById('setare-conturi-default');
    butonGoleste_LC = document.getElementById('goleste-lista-de-conturi');

    let conturiDefault = [
        {
            checkBoxArtaDigitala: "Graphic Designer",
            checkBoxArtizanat: "false",
            checkBoxPictura: "false",
            checkBoxSculptura: "false",
            descriereArtist: "Hai cu desenul!!",
            eMail: "ovidiu.alexandru.iftemie@gmail.com",
            id: 1624050970097,
            numarLikeuri: 7320,
            numarOrdin: 0,
            numarProduseArtist: 13,
            numarRating: 3,
            nume: "Iftemie",
            parola: "`12345678",
            pozaProfil: "IMG/avatar1.jpg",
            prenume: "Ovidiu",
            username: "alexdru"
        },
        {
            checkBoxArtaDigitala: "Graphic Designer",
            checkBoxArtizanat: "false",
            checkBoxPictura: "false",
            checkBoxSculptura: "false",
            descriereArtist: "Imi place sa lucreaz in photo-shop",
            eMail: "anita@gmail.com",
            id: 1624051550459,
            numarLikeuri: 5055,
            numarOrdin: 1,
            numarProduseArtist: 36,
            numarRating: 4.6,
            nume: "Anita",
            parola: "`12345678",
            pozaProfil: "https://i.pinimg.com/originals/a7/8d/c1/a78dc1a9eb67e6d468c02971565b8899.jpg",
            prenume: "ileana",
            username: "ileana"
        },
        {
            checkBoxArtaDigitala: "false",
            checkBoxArtizanat: "Craft-man",
            checkBoxPictura: "false",
            checkBoxSculptura: "false",
            descriereArtist: "Fac produse din lut! ",
            eMail: "berbecut@gmail.com",
            id: 1624051714505,
            numarLikeuri: 9521,
            numarOrdin: 2,
            numarProduseArtist: 66,
            numarRating: 3.3,
            nume: "berbecut",
            parola: "`12345678",
            pozaProfil: "https://images.pexels.com/photos/3061415/pexels-photo-3061415.jpeg",
            prenume: "ilona",
            username: "berbecut" 
        },
        {
            checkBoxArtaDigitala: "Graphic Designer",
            checkBoxArtizanat: "false",
            checkBoxPictura: "false",
            checkBoxSculptura: "false",
            descriereArtist: "",
            eMail: "iordan@gmail.com",
            id: 1624051896424,
            numarLikeuri: 4382,
            numarOrdin: 3,
            numarProduseArtist: 80,
            numarRating: 2,
            nume: "botezatorul",
            parola: "`12345678",
            pozaProfil: "https://cdn.pixabay.com/photo/2017/10/15/00/56/man-2852337_1280.jpg",
            prenume: "iordan",
            username: "botezatoru"
        },
        {
            checkBoxArtaDigitala: "false",
            checkBoxArtizanat: "Craft-man",
            checkBoxPictura: "false",
            checkBoxSculptura: "Sculptor",
            descriereArtist: "",
            eMail: "mirel@mitrea.ro",
            id: 1624052019849,
            numarLikeuri: 6279,
            numarOrdin: 4,
            numarProduseArtist: 69,
            numarRating: 2.4,
            nume: "mitrea",
            parola: "`12345678",
            pozaProfil: "https://www.nicepng.com/png/detail/340-3400381_smiling-man-smiling-man-face-png.png",
            prenume: "mirel",
            username: "mirea" 
        },
        {
            checkBoxArtaDigitala: "false",
            checkBoxArtizanat: "false",
            checkBoxPictura: "false",
            checkBoxSculptura: "false",
            descriereArtist: "",
            eMail: "vasile@hotmail.com",
            id: 1624052623403,
            numarLikeuri: 9649,
            numarOrdin: 5,
            numarProduseArtist: 86,
            numarRating: 2,
            nume: "Vaasile",
            parola: "`12345678",
            pozaProfil: "https://www.gannett-cdn.com/presto/2020/01/03/PCIN/ad5fc4b3-b5a4-4a3c-b6c3-cadb19e44810-Screen_Shot_2020-01-03_at_9.21.19_AM.jpg",
            prenume: "Vasile",
            username: "vasile"
        },
        {
            checkBoxArtaDigitala: "false",
            checkBoxArtizanat: "false",
            checkBoxPictura: "false",
            checkBoxSculptura: "Sculptor",
            descriereArtist: "Fac busturi din Bronz!",
            eMail: "mercedeza@hiru.io",
            id: 1624053467017,
            numarLikeuri: 8091,
            numarOrdin: 6,
            numarProduseArtist: 49,
            numarRating: 2.7,
            nume: "valencia",
            parola: "`12345678",
            pozaProfil: "",
            prenume: "mercedeza",
            username: "mercedeza"
        },
        {
            checkBoxArtaDigitala: "false",
            checkBoxArtizanat: "false",
            checkBoxPictura: "Pictor",
            checkBoxSculptura: "false",
            descriereArtist: "",
            eMail: "jiji@xoxo.fr",
            id: 1624053775921,
            numarLikeuri: 2538,
            numarOrdin: 7,
            numarProduseArtist: 62,
            numarRating: 2.8,
            nume: "jarvas",
            parola: "`12345678",
            pozaProfil: "https://www.face-agency.co.uk/images/uploads/models/large/1525336111-21.jpg",
            prenume: "marin",
            username: "jiji"
        },
        {
            checkBoxArtaDigitala: "Graphic Designer",
            checkBoxArtizanat: "false",
            checkBoxPictura: "false",
            checkBoxSculptura: "false",
            descriereArtist: "",
            eMail: "ica@flier.ru",
            id: 1624053879874,
            numarLikeuri: 6571,
            numarOrdin: 8,
            numarProduseArtist: 42,
            numarRating: 3.6,
            nume: "bica",
            parola: "`12345678",
            pozaProfil: "https://freedesignfile.com/upload/2019/10/Woman-face-illustration-vector.jpg",
            prenume: "maria",
            username: "flier"
        },
        {
            checkBoxArtaDigitala: "false",
            checkBoxArtizanat: "false",
            checkBoxPictura: "false",
            checkBoxSculptura: "Sculptor",
            descriereArtist: "Fac mulaje  din ceara!",
            eMail: "ion.ion@blabla.ro",
            id: 1624054036921,
            numarLikeuri: 8847,
            numarOrdin: 9,
            numarProduseArtist: 65,
            numarRating: 1.2,
            nume: "ion",
            parola: "ionion12?",
            pozaProfil: "https://img2.cgtrader.com/items/249693/3753707471/large/old-man-3d-model-obj-ztl.jpg",
            prenume: "ion",
            username: "ion.ion"
        }
    ];

    butonGoleste_LC.onclick = function() {
        listaConturi = [];
        localStorage.setItem('ListaConturi', JSON.stringify(listaConturi));
    };

    butonSetare_LCD.onclick = function() {
        listaConturi = conturiDefault;
        localStorage.setItem('ListaConturi', JSON.stringify(listaConturi));
    };
}