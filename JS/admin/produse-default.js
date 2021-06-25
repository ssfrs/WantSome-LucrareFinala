{
    butonGoleste_LP = document.getElementById('goleste-lista-de-cumparaturi');
    butonSetare_LPD = document.getElementById('setare-produse-default');
    butonGoleste_LC = document.getElementById('goleste-lista-de-conturi');
    butonSetare_LCD = document.getElementById('setare-conturi-default');

    let produseDefault = [
        {
            id: 0,
            nume: 'Mona Lisa',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mare', // mic mijlociu mare patrat
            imaginePrincipala: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/1354px-Mona_Lisa.jpg',
            imagineSecundaraUNU: 'https://mediacdn.libertatea.ro/unsafe/800x0/smart/filters:format(webp):contrast(8):quality(75)/https://static4.libertatea.ro/wp-content/uploads/2020/05/mona-lisa-gioconda-1-1024x508.jpg',
            imagineSecundaraDOI: 'https://api-www.louvre.fr/sites/default/files/2020-12/leonard-de-vinci-la-joconde-portrait-de-monna-lisa-detail.jpg',
            imagineSecundaraTREI: 'https://www.kunst-fuer-alle.de/media_kunst/img/41/g/41_00373874~leonardo-da-vinci_mona-lisa-(la-gioconda)---detail-of-face.jpg',
            descriereaProdusului: 'Este vorba de o pictură în ulei pe lemn de plop cu dimensiunea de 77 x 53 cm. Natura imaginii redate a făcut subiectul a nenumărate interpretări. În general, se poate spune că vivacitatea și ambiguitatea fizionomiei Giocondei se datorează procedeului de pictură „sfumato”, dând tabloului un aer misterios.',
            pretProdus: '5210',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-licitat', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Ulei pe plop',
            suportMaterial: 'Lemn Plop',
            dimensiune: '77x53cm',
            localizareaProdusului: 'Salle des États',
            livrareCurierat: '',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '5',
            activ: 'icon icon-like',
            numarOrdin: 0,
            artist: 'nume3'
        },

        {
            id: 1,
            nume: 'In fulgi',
            categorie: 'arta-digitala', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mijlociu', // mic mijlociu mare patrat
            imaginePrincipala: 'https://hdwallpaperim.com/wp-content/uploads/2017/08/22/103800-anime_girls-digital_art-anime.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: '',
            pretProdus: '110',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-negociabil', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Corel Paint',
            suportMaterial: 'e-mail',
            dimensiune: '5120x2880px',
            localizareaProdusului: 'Arad',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '1',
            activ: 'icon icon-like',
            numarOrdin: 1,
            artist: 'nume8'
        },

        {
            id: 2,
            nume: 'Maria',
            categorie: 'artizanat', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mijlociu', // mic mijlociu mare patrat
            imaginePrincipala: 'http://127.0.0.1:5500/IMG/lantisor1.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Pandantiv numai bun de pus la gat!',
            pretProdus: '45',
            valutaProdus: '$', // Lei € $
            tipPret: 'pret-tip-oferta', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Slefuire',
            suportMaterial: 'Haur',
            dimensiune: '25mm',
            localizareaProdusului: 'Ilfov',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 2,
            artist: 'nume1'
        },

        {
            id: 3,
            nume: 'Plecare in graba',
            categorie: 'sculptura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://sothebys-com.brightspotcdn.com/dims4/default/0644ee7/2147483647/strip/true/crop/3444x2773+0+0/resize/684x551!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fad%2F64%2Fae02bec345c094df1bd2a9b32ef7%2F220pf1815-6y7ws-2.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Exponat realizat din Bronz. Bronz extras din dintii eroilor din ww2.',
            pretProdus: '870',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-negociabil', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Bronz turnat',
            suportMaterial: 'Bronz',
            dimensiune: '25x20cm',
            localizareaProdusului: 'Viisoara',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '7',
            activ: 'icon icon-like',
            numarOrdin: 3,
            artist: 'Mercedesa'
        },

        {
            id: 4,
            nume: 'Gamber',
            categorie: 'arta-digitala', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://i.pinimg.com/originals/0e/c9/21/0ec9215514da990660db0b4ae46e5bb6.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: '',
            pretProdus: '110',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-negociabil', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Corel Draw',
            suportMaterial: 'e-mail',
            dimensiune: '5120x2880px',
            localizareaProdusului: 'Arad',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '1',
            activ: 'icon icon-like',
            numarOrdin: 4,
            artist: 'nume8'
        },

        {
            id: 5,
            nume: 'Muza lui Brancusi',
            categorie: 'sculptura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'patrat', // mic mijlociu mare patrat
            imaginePrincipala: 'https://www.europafm.ro/wp-content/uploads/2017/03/Muza-Brancusi-360x480.jpg',
            imagineSecundaraUNU: 'https://www.piatraonline.ro/userfiles/19370a59-92cf-454a-b230-f7886006c901/Image/New_Project_(83).jpg',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Muza adormită sau Muză dormind este o sculptură de bronz creată de Constantin Brâncuși în 1910. Acesta a fost inițial sculptată din marmură, având-o pe baronesa Renée Irana Franchon ca model.',
            pretProdus: '2200',
            valutaProdus: '€', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Slefuire',
            suportMaterial: 'Bronz',
            dimensiune: '30x25cm',
            localizareaProdusului: 'Paris',
            livrareCurierat: '',
            livrarePosta: '',
            livrarePersonala: 'personala',
            timpPentruLivrare: '30',
            activ: 'icon icon-like',
            numarOrdin: 5,
            artist: 'nume2'
        },

        {
            id: 6,
            nume: 'Zendaya',
            categorie: 'artizanat', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://www.indira.ro/wp-content/uploads/2019/12/Inel-din-argint-Zendaya-Turcoaz-1-1-750x964.jpg',
            imagineSecundaraUNU: 'https://www.indira.ro/wp-content/uploads/2018/10/fullsizeoutput_2959-750x672.jpeg',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Inel din argint Zendaya – Turcoaz – îndrăznește să scoți outfit-ul tău în prim plan cu accesoriile potrivite. Acest inel din argint realizat din Turcoaz natural de tip Copper, ce prezintă incluziuni de cupru strălucitoare. ',
            pretProdus: '45',
            valutaProdus: '$', // Lei € $
            tipPret: 'pret-tip-oferta', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Slefuire',
            suportMaterial: 'Argint',
            dimensiune: '18mm',
            localizareaProdusului: 'Ilfov',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 6,
            artist: 'nume1'
        },

        {
            id: 7,
            nume: 'Behance',
            categorie: 'arta-digitala', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://i.pinimg.com/originals/49/ea/3d/49ea3d5db8ea1c13cecce195afd93f31.png',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: '',
            pretProdus: '25',
            valutaProdus: '€', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Adobe Illustrator',
            suportMaterial: 'e-mail',
            dimensiune: '5120x2880px',
            localizareaProdusului: 'Iasi',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '1',
            activ: 'icon icon-like',
            numarOrdin: 7,
            artist: 'nume9'
        },

        {
            id: 8,
            nume: '3 Doamne',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://eclecticlightdotcom.files.wordpress.com/2017/07/sargentingeneralife.jpg?w=1024',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Ggicile lui bunicu',
            pretProdus: '220',
            valutaProdus: '$', // Lei € $
            tipPret: 'pret-tip-oferta', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Acrilic',
            suportMaterial: 'Panza sac',
            dimensiune: '80x50cm',
            localizareaProdusului: 'Barlad',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 8,
            artist: 'nume11'
        },


        {
            id: 9,
            nume: 'Dark Sky',
            categorie: 'artizanat', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://www.indira.ro/wp-content/uploads/2017/03/Pandantiv-din-argint-Dark-Sky-–-Lapis-Lazuli-650x650.jpg',
            imagineSecundaraUNU: 'https://www.indira.ro/wp-content/uploads/2017/03/p_4_4_2_7_4427-Pandantiv-din-argint-Dark-Sky-Lapis-Lazuli-Indira-Bijoux-768x768.jpg',
            imagineSecundaraDOI: 'https://www.indira.ro/wp-content/uploads/2017/03/p_2_2_6_3_2263-Pandantiv-din-argint-Dark-Sky-Lapis-Lazuli-Indira-Bijoux-768x512.jpg',
            imagineSecundaraTREI: 'https://www.indira.ro/wp-content/uploads/2017/03/p_2_2_4_9_2249-Pandantiv-din-argint-Dark-Sky-Lapis-Lazuli-Indira-Bijoux-768x1152.jpg',
            descriereaProdusului: 'Pandantiv din argint cu piatra natura Lapis Lazuli, lucrat manual in India. Feminin si misterios, pandantivul Dark Sky este acea bijuterie de care nu ai cum sa nu te indragostesti.',
            pretProdus: '190',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-negociabil', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Lipire la cald',
            suportMaterial: 'Argint',
            dimensiune: '25mm',
            localizareaProdusului: 'Bucuresti',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 9,
            artist: 'nume1'
        },

        {
            id: 10,
            nume: 'Trandafiri',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://www.masteroilpainting.com/wp-content/uploads/2018/12/Art-Study-Wildflowers-9x12-%E2%80%93-oil-painting-by-Bill-Inman.jpg',
            imagineSecundaraUNU: 'https://www.masteroilpainting.com/wp-content/uploads/2018/12/Art-Study-Sunny-Days-8x6-%E2%80%93-oil-painting-by-Bill-Inman.jpg',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: '',
            pretProdus: '150',
            valutaProdus: '€', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Tempera',
            suportMaterial: 'Hartie',
            dimensiune: 'A4',
            localizareaProdusului: 'Iasi',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '2',
            activ: 'icon icon-like',
            numarOrdin: 10,
            artist: 'nume12'
        },

        {
            id: 11,
            nume: 'Samurai',
            categorie: 'arta-digitala', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mare', // mic mijlociu mare patrat
            imaginePrincipala: 'https://wallpaperforu.com/wp-content/uploads/2020/09/fantasy-wallpaper-20092816354848.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: '',
            pretProdus: '25',
            valutaProdus: '€', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Photoshop',
            suportMaterial: 'e-mail',
            dimensiune: '5120x2880px',
            localizareaProdusului: 'Iasi',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '1',
            activ: 'icon icon-like',
            numarOrdin: 11,
            artist: 'nume5'
        },

        {
            id: 12,
            nume: 'Bunicu',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://www.outdoorpainter.com/wp-content/uploads/2020/11/paintings-of-plein-air-artists_Suzie-Baker-1.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Bunicu care cauta gagici!',
            pretProdus: '220',
            valutaProdus: '$', // Lei € $
            tipPret: 'pret-tip-oferta', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Acrilic',
            suportMaterial: 'Panza sac',
            dimensiune: '80x50cm',
            localizareaProdusului: 'Barlad',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 12,
            artist: 'nume11'
        },

        {
            id: 13,
            nume: 'Ruby Square',
            categorie: 'artizanat', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mijlociu', // mic mijlociu mare patrat
            imaginePrincipala: 'https://www.indira.ro/wp-content/uploads/2016/09/p_3_5_3_2_3532-Inel-argint-Ruby-Square-Rubin-Indira-Bijoux-1-750x964.jpg',
            imagineSecundaraUNU: 'https://www.indira.ro/wp-content/uploads/2016/09/p_4_5_0_5_4505-Inel-argint-Ruby-Square-Rubin-Indira-Bijoux-768x768.jpg',
            imagineSecundaraDOI: 'https://www.indira.ro/wp-content/uploads/2016/09/ruby-video.png',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Indrăznește să ieși din tipare cu Inel din argint Ruby Square – Rubin cu dimensiunea de 14 mm x 10 mm, lucrat manual.',
            pretProdus: '390',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Lipire la cald',
            suportMaterial: 'Argint',
            dimensiune: '14x10mm',
            localizareaProdusului: 'Bucuresti',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 13,
            artist: 'nume1'
        },

        {
            id: 14,
            nume: 'Mica',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://images.saatchiart.com/saatchi/901670/art/5738435/4808237-NJADPCMS-32.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Original Oil painting on stretched linen canvas "Woman" Size: 60*50 cm (24*20 inches) Year: 2019 ',
            pretProdus: '999',
            valutaProdus: '$', // Lei € $
            tipPret: 'pret-tip-oferta', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Pictura in ulei',
            suportMaterial: 'Canvas',
            dimensiune: '60*50cm',
            localizareaProdusului: 'Braila',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '5',
            activ: 'icon icon-like',
            numarOrdin: 14,
            artist: 'nume8'
        },

        {
            id: 15,
            nume: 'Carafa',
            categorie: 'sculptura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://www.invietraditia.ro/wp-content/uploads/2020/01/212-carafa-de-vin-ceramica-albastra-corund-1-600x600.jpg',
            imagineSecundaraUNU: 'https://www.invietraditia.ro/wp-content/uploads/2020/01/212-carafa-de-vin-ceramica-albastra-corund-4.jpg',
            imagineSecundaraDOI: 'https://www.invietraditia.ro/wp-content/uploads/2020/01/212-carafa-de-vin-ceramica-albastra-corund-2.jpg',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Cana din ceramică tradițională de Corund este smălțuită, arsă în cuptoarele speciale de lut și pictată cu motive tradiționale românești.',
            pretProdus: '80',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Olarit',
            suportMaterial: 'Lut',
            dimensiune: '750ml',
            localizareaProdusului: 'Vaslui',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '4',
            activ: 'icon icon-like',
            numarOrdin: 15,
            artist: 'nume3'
        },

        {
            id: 16,
            nume: 'Salcie',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'patrat', // mic mijlociu mare patrat
            imaginePrincipala: 'https://s31531.pcdn.co/wp-content/uploads/2020/08/The-Red-Barn-oil-on-panel-24x36-Albert-Handell_WO-1024x961.jpg.optimal.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'O oaza de natura pe care o vad zi de zi!',
            pretProdus: '350',
            valutaProdus: '€', // Lei € $
            tipPret: 'pret-negociabil', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Tempera',
            suportMaterial: 'Hartie ciocan',
            dimensiune: '60x40cm',
            localizareaProdusului: 'Botosani',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 16,
            artist: 'nume10'
        },

        {
            id: 17,
            nume: 'Keramika Gold',
            categorie: 'sculptura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://s13emagst.akamaized.net/products/26686/26685851/images/res_e092e491584a410ed8622b5096006740.jpg',
            imagineSecundaraUNU: 'https://s13emagst.akamaized.net/products/26686/26685851/images/res_2ecf58ddb6538d8b2495b27839b4e534.jpg',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Ulcior din lut cu capac, capacitate 3l.',
            pretProdus: '180',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-licitat', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Olarit',
            suportMaterial: 'Lut',
            dimensiune: '3000ml',
            localizareaProdusului: 'Vaslui',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '4',
            activ: 'icon icon-like',
            numarOrdin: 17,
            artist: 'nume5'
        },

        {
            id: 18,
            nume: 'Red Island',
            categorie: 'arta-digitala', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'patrat', // mic mijlociu mare patrat
            imaginePrincipala: 'https://i.pinimg.com/originals/20/5f/45/205f456aa1faecf8eb9588ab2dc0b737.png',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: '',
            pretProdus: '15',
            valutaProdus: '€', // Lei € $
            tipPret: 'pret-tip-oferta', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Photoshop',
            suportMaterial: 'e-mail',
            dimensiune: '5120x2880px',
            localizareaProdusului: 'Iasi',
            livrareCurierat: 'curier',
            livrarePosta: 'posta',
            livrarePersonala: 'personala',
            timpPentruLivrare: '1',
            activ: 'icon icon-like',
            numarOrdin: 18,
            artist: 'nume5'
        },

        {
            id: 19,
            nume: 'Pe câmp',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://smithsonianassociates.org/ticketing/images/web-core-2020/oil-paint-boot-camp-summer.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Natura imaginii redate a făcut subiectul a nenumărate interpretări. În general, se poate spune că vivacitatea și ambiguitatea fizionomiei Giocondei se datorează procedeului de pictură „sfumato”, dând tabloului un aer misterios.',
            pretProdus: '910',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Pictura in ulei',
            suportMaterial: 'Panza Canvas',
            dimensiune: '60x40cm',
            localizareaProdusului: 'Focsani',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 19,
            artist: 'nume7'
        },

        {
            id: 20,
            nume: 'Tuica de prune',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mijlociu', // mic mijlociu mare patrat
            imaginePrincipala: 'https://images.saatchiart.com/saatchi/1284141/art/6309251/5379019-HQNUGQUC-7.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Tuica de calitate, cu pensoane colorate!',
            pretProdus: '550',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Pictura in ulei',
            suportMaterial: 'Panza Canvas',
            dimensiune: '60x40cm',
            localizareaProdusului: 'Arad',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 20,
            artist: 'nume15'
        },

        {
            id: 21,
            nume: 'Bara pe mall',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mijlociu', // mic mijlociu mare patrat
            imaginePrincipala: 'https://thefrugalcrafter.files.wordpress.com/2019/08/20190817_120140.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'O barca uitata pe malul drept al Dunarii',
            pretProdus: '350',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-licitat', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Creioane colorate',
            suportMaterial: 'Panza Canvas',
            dimensiune: '70x45cm',
            localizareaProdusului: 'Sibiu',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 21,
            artist: 'nume15'
        },

        {
            id: 22,
            nume: 'Cloisonne',
            categorie: 'artizanat', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://cdn.shopify.com/s/files/1/0270/8743/7921/products/4_09788717-9ed2-4310-9e4f-3a0a1ab626f7_590x.jpg',
            imagineSecundaraUNU: 'https://cdn.shopify.com/s/files/1/0270/8743/7921/products/2_47c665a5-e273-4878-aa85-88ce1dfcb442_720x.jpg',
            imagineSecundaraDOI: 'https://cdn.shopify.com/s/files/1/0270/8743/7921/products/GEM_0832.clean_720x.jpg',
            imagineSecundaraTREI: 'https://cdn.shopify.com/s/files/1/0270/8743/7921/products/1_5f934aca-3e68-4313-a9e5-78fcc99a93e3_720x.jpg',
            descriereaProdusului: 'Atractiv si plin de energie pozitivă, acest colier boem este un cadou minunat pentru fiecare doamnă si pentru orice ocazie.',
            pretProdus: '120',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Snur impletit',
            suportMaterial: 'Corn de babuin',
            dimensiune: '3cm',
            localizareaProdusului: 'Costanta',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 22,
            artist: 'nume12'
        },

        {
            id: 23,
            nume: 'Moonlight Sea',
            categorie: 'artizanat', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'patrat', // mic mijlociu mare patrat
            imaginePrincipala: 'https://res.cloudinary.com/itjewelers-llc/image/upload/f_auto/v1570676552/IMG_0036__W_efuv2s.jpg',
            imagineSecundaraUNU: 'https://dn0gu19c1geql.cloudfront.net/testImage/d90fa44d4b9b40bdfe033de360639d51.jpg',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: 'Atractiv si plin de energie pozitivă, acest colier boem este un cadou minunat pentru fiecare doamnă si pentru orice ocazie.',
            pretProdus: '120',
            valutaProdus: 'Lei', // Lei € $
            tipPret: 'pret-fix', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Hand Carved',
            suportMaterial: 'Aur 14K',
            dimensiune: '3cm',
            localizareaProdusului: 'Costanta',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 23,
            artist: 'nume12'
        },

        {
            id: 24,
            nume: 'Sakalava',
            categorie: 'sculptura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://temarte.com/1586-large_default/statue-sakalava.jpg',
            imagineSecundaraUNU: 'https://temarte.com/716-large_default/statue-sakalava.jpg',
            imagineSecundaraDOI: 'https://temarte.com/723-large_default/statue-sakalava.jpg',
            imagineSecundaraTREI: 'https://temarte.com/717-large_default/statue-sakalava.jpg',
            descriereaProdusului: 'This figurative and "suggestive" sculpture, in more than one way, inevitably attracts the gaze and dreams, both the position of the character and the stylistic style are not embarrassed by any forbidden.',
            pretProdus: '395',
            valutaProdus: '€', // Lei € $
            tipPret: 'pret-licitat', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Mulaj',
            suportMaterial: 'Rasina',
            dimensiune: '56x21cm',
            localizareaProdusului: 'Vaslui',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 24,
            artist: 'nume11'
        },

        {
            id: 25,
            nume: 'Maria',
            categorie: 'pictura', // pictura arta-digitala sculptura artizanat
            planVizualizare: 'mic', // mic mijlociu mare patrat
            imaginePrincipala: 'https://i.pinimg.com/originals/31/18/e8/3118e877efe01041e3309839d12c0a19.jpg',
            imagineSecundaraUNU: '',
            imagineSecundaraDOI: '',
            imagineSecundaraTREI: '',
            descriereaProdusului: '',
            pretProdus: '95',
            valutaProdus: '€', // Lei € $
            tipPret: 'pret-licitat', // pret-licitat pret-negociabil pret-fix pret-tip-oferta
            tehnicaTehnologie: 'Sketch',
            suportMaterial: 'Hartie carton',
            dimensiune: 'A3',
            localizareaProdusului: 'Chisianu',
            livrareCurierat: 'curier',
            livrarePosta: '',
            livrarePersonala: '',
            timpPentruLivrare: '3',
            activ: 'icon icon-like',
            numarOrdin: 25,
            artist: 'nume11'
        },
        
    ];

    butonGoleste_LP.onclick = function() {
        let listaProduse = [];
        localStorage.setItem('ListaProduse', JSON.stringify(listaProduse));
    };

    butonSetare_LPD.onclick = function() {
        let listaProduse = produseDefault;
        localStorage.setItem('ListaProduse', JSON.stringify(listaProduse));
    };

}