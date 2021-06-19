const urlSearch = new URLSearchParams(window.location.search);
const param = Object.fromEntries(urlSearch.entries());
const categorie = urlSearch.get('categorie');
// console.log(urlSearch);
// console.log(param);

param['ana'] = 'marmelada';
// console.log(param);

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

const url = new URL(window.location);
url.searchParams.set('foo', 'bar');
window.history.pushState(param, '', url);
// window.history.replaceState({}, '', url);
// console.log(window.location.search);
const picturaB = document.getElementById('pictura');
