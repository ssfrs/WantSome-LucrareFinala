function zeroOpacity() {
  document.getElementById("semnHome").style.opacity = "0";
}
function fullOpacity() {
  let element = document.querySelector("#semnHome");
  let styles_applied = window.getComputedStyle(element);
  let opacity = styles_applied.opacity;
  document.getElementById("semnHome").style.opacity = opacity;
}
function opacity() {
  document.getElementById("semnHome").style.opacity = "1";
}
// function ana() {
//   let element = document.querySelector("#semnHome");
//   let styles_applied = window.getComputedStyle(element);
//   let opacity = styles_applied.opacity;
//  console.log(opacity);
// }
// ana();

document.getElementById("semnHome").addEventListener("mouseover", zeroOpacity);
