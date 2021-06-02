{
  const buttons = document.getElementsByClassName("element-nav-sortare");
  console.log(buttons);

      for (let button of buttons) {
        button.addEventListener('mouseover', function() {

          document.getElementsByClassName("semn-special").style.opacity = "0";

        });
        button.addEventListener('mouseout', function() {

          document.getElementsByClassName("semn-special").style.opacity = "1";

        });
      }
}