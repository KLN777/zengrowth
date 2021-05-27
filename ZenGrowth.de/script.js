const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-mobile-menu");
const headerNav = document.querySelector(".header__nav");
const navList = document.querySelector(".header__nav-list");
const header = document.querySelector(".header");
const startBtn = document.querySelector(".btn_get_started");
const searchIcon = document.querySelector(".search_icon");
const countryCode = document.querySelector(".country_code");
const country = document.querySelector(".country");

function check(){
    if(window.innerWidth < 768){
    closeMenu.style.display ="none";
    mobileMenu.style.display = "initial";
    header.style.height ="10rem";
    navList.style.display="none";
    startBtn.style.display="none";
    searchIcon.style.display="flex";
    }
}
mobileMenu.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    closeMenu.style.display ="initial";
    header.style.height ="100vh";
    navList.style.display="flex";
    startBtn.style.display="flex";
    searchIcon.style.display="none";
});

closeMenu.addEventListener("click", () => {
    closeMenu.style.display ="none";
    mobileMenu.style.display = "initial";
    header.style.height ="10rem";
    navList.style.display="none";
    startBtn.style.display="none";
    searchIcon.style.display="flex";

})
