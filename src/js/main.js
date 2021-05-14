var burger = document.querySelector(".burger");
var burgerSpan = document.querySelector(".burger__span");
var headerInner = document.querySelector(".main-header__inner");
var searchBtn = document.querySelector(".main-header__search-btn");
var search = document.querySelector(".main-header__search");

burger.addEventListener("click", function() {
  burgerSpan.classList.toggle("burger__span--active")
  burger.classList.toggle("burger--active")
  headerInner.classList.toggle("main-header__inner--active")
});

searchBtn.addEventListener("click", function() {
  search.classList.toggle("main-header__search--active")
})