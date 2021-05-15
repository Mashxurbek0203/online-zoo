var burger = document.querySelector(".burger");
var burgerSpan = document.querySelector(".burger__span");
var headerInner = document.querySelector(".main-header__inner");
var searchBtn = document.querySelector(".main-header__search-btn");
var search = document.querySelector(".main-header__search");
var body = document.querySelector(".body");

burger.addEventListener("click", function() {
  burgerSpan.classList.toggle("burger__span--active")
  burger.classList.toggle("burger--active")
  headerInner.classList.toggle("main-header__inner--active")
  body.classList.toggle("body--active")
});

searchBtn.addEventListener("click", function() {
  search.classList.toggle("main-header__search--active")
})