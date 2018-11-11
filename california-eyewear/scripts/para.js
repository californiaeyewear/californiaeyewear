let landingWrap = document.querySelector('.landingWrap');
let galleryWrap = document.querySelector('.galleryWrap');
let galleryWrapHeight = getComputedStyle(galleryWrap).height.split('px')[0];
let navHeader = document.querySelector("#navHeader");
let navX = document.querySelector(".navX");
let navList = document.querySelector(".navList");
let navList2 = document.querySelector(".navList2");
let navDropdown = document.querySelector(".navDropdown");
window.addEventListener('scroll', function(){
  let windowHeight = window.innerHeight;
  // console.log(scrollY);
  let scrollY2 = scrollY - galleryWrap.offsetTop;
  landingWrap.style.backgroundPositionY = (scrollY*.25) + "px";
  galleryWrap.style.backgroundPositionY = (scrollY2*.25) + "px";

  if(scrollY > 50){
    navHeader.classList.add("navBGON");
  }
  if(scrollY < 50){
    navHeader.classList.remove("navBGON");
  }

});

navDropdown.addEventListener('click', function(){
  navList2.style.display = "block";
});
navX.addEventListener('click', function(){
  navList2.style.display = "none";
});
