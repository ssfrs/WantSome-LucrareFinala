{
    let capitole = document.querySelectorAll('div.puncte');
    console.log(capitole);

    capitole.forEach(function(element) {
        element.onclick = function() {
            window.location.href = `#${this.id}-go`;
        }
    })
}