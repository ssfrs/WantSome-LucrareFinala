{
    let containerProduse = document.getElementById('produse');
    let produse = containerProduse.children;
    let listaProduse = JSON.parse(localStorage.getItem('ListaProduse'));
    // let numarProduse = listaProduse.lenght;
    console.log(produse);
    console.log(listaProduse);

    for (let i=0; i<produse.length; i++) {
        produse[i].onclick = function(e) {
            e.stopPropagation();
            let idProdus = produse[i].id;
            console.log(idProdus);

            var produsClick = listaProduse.filter(produs => {
                return produs.id == idProdus
              })

            console.log(produsClick[0]);
            localStorage.setItem('ProdusVizitat', JSON.stringify(produsClick[0]));
            localStorage.setItem('ProdusVizitatId', JSON.stringify(idProdus));
            window.location.href = `produs.html?produs=${idProdus}`;
            // window.location.href = `produs.html`;
        }
    }
}