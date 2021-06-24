let btnShowMore = document.getElementById("btn-show-more");
let btnShowLess = document.getElementById("btn-show-less");

btnShowMore.addEventListener("click", function () {
  btnShowMore.style.display = "none";
  btnShowLess.style.display = "inline-block";
});

btnShowLess.addEventListener("click", function () {
  btnShowLess.style.display = "none";
  btnShowMore.style.display = "inline-block";
});
