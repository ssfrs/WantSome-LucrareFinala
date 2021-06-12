let toateProdusele = document.querySelectorAll('.icon-like');
localStorage.setItem("produse", JSON.stringify(toateProdusele));
let localProduse = JSON.parse(localStorage.getItem("produse"));
console.log(localProduse);