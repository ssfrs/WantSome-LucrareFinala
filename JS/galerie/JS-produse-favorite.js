{
    let listaProduseFavorite = JSON.parse(localStorage.getItem('ListaProduseFavorite'));

//  ----------- Verificare existenta listei in local storage

    if (listaProduseFavorite != null) {
      listaProduseFavorite = JSON.parse(localStorage.getItem('ListaProduseFavorite'));
    } else {
        listaProduseFavorite = [];
        localStorage.setItem('ListaProduse', JSON.stringify(listaProduse));
    }

//  ----------------------Schimbare clasa pentru "activarea" iconului

    const numeToogle = "icon-like-active";
    const numeClasa = "icon-like";
    let produseFavorite = document.querySelectorAll(`.${numeToogle}`);
    let toateProdusele = document.querySelectorAll(`.${numeClasa}`);
    let numarProduseFavorite = produseFavorite.length;
    localStorage.setItem('ListaProduseFavorite', JSON.stringify(listaProduseFavorite));

    for (let i in toateProdusele) {
        toateProdusele[i].onclick = function() {
        toateProdusele[i].classList.toggle(`${numeToogle}`);
        produseFavorite = document.querySelectorAll(`.${numeToogle}`);
        numarProduseFavorite = produseFavorite.length;
        listaProduseFavorite = [numarProduseFavorite];
        localStorage.setItem('ListaProduseFavorite', JSON.stringify(listaProduseFavorite));

//  ----------------- Update lista produse cu noua clasa

        let clasaProdus = toateProdusele[i].className;
        let listaProduse = JSON.parse(localStorage.getItem('ListaProduse'));
        listaProduse[i].activ = `${clasaProdus}`;
        localStorage.setItem('ListaProduse', JSON.stringify(listaProduse));
      }
    }
}