let listaProduseFavorite = JSON.parse(localStorage.getItem('ListaProduseFavorite'));
const textNumarProduseFavorite = document.querySelector('.numar-produse-favorite');

if (listaProduseFavorite != null) {
    textNumarProduseFavorite.textContent = `${listaProduseFavorite}`;
  } else {
    textNumarProduseFavorite.textContent = '0';
  }