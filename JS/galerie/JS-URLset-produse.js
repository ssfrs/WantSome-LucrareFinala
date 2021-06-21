{
  const urlSearch = new URLSearchParams(window.location.search);
  const categorie = urlSearch.get('categorie');

    if (categorie) {
      document.getElementById(`${categorie}`).click();
    }

  //   function setareURL(butonID, categorie) {
  //     const butonNSO = document.getElementById(`${butonID}`);
  //     let url = new URL('galerie.html');
  //     let parametriURL = new URLSearchParams(url.search);
  //     parametriURL.set('categorie', `${categorie}`);

  // }
  // let url = new URL(window.location.href);
  // let parametriURL = new URLSearchParams(url);
  // parametriURL.append('categorie', 'banana');
  // console.log(urlSearch);

  // MFO = Meniu Filtrare Orizontal
  // const butoaneMFO = document.querySelectorAll('li.link-nav-sortare');
  // console.log(butoaneMFO);

    // for (let i in butoaneMFO) {
      // const url = new URL(window.location);
      // url.searchParams.set('foo', 'bar');
      // window.history.pushState(param, '', url);
      // window.history.replaceState('', '', url);
      // butoaneMFO[i].onclick = function() {
        // let id_bMFO = butoaneMFO[i].id;
        // window.history.replaceState('', '', `${window.location.pathname}?categorie=${id_bMFO}`);
      // }
      // butoaneMFO[i].addEventListener('click', setareURL_bMFO);
    // }

    // function setareURL_bMFO() {
    //     let id_bMFO = butoaneMFO[i].id;
    //     window.history.replaceState('', '', `${window.location.pathname}?categorie=${id_bMFO}`);
    // }

  // const url = new URL(window.location);
  // console.log(url.pathname);
  // console.log(url.search);
  
  // const url = new URL(window.location);
  // url.searchParams.set('foo', 'bar');
  // window.history.pushState(param, '', url);
  // window.history.replaceState({}, '', url);
  // console.log(window.location.search);
  // const picturaB = document.getElementById('pictura');
}
