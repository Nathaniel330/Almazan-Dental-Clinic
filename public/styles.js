// ------------ Home Banner Switcher
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var banner = document.getElementById("banner_home");


var bgImage = new Array(
    "./img/bamboobrush.jfif",
    "./img/instruments.jfif",
    "./img/dentaldrills.jfif",
    // "./img/dentist.jfif",
    "./img/handslove.jfif",
    "./img/dentalconcept.jfif"
)
let i = 0;

next.onclick = ()=> {
    console.log(i)
    if (i < bgImage.length - 1) {
        banner.style.backgroundImage = "url('"+bgImage[i + 1]+"')";
        i++;
    } else {
        i = 0; 
        banner.style.backgroundImage = "url('"+bgImage[i]+"')";
    }
    console.log(i)
}

prev.onclick = ()=> {
    if (i > 0 ) {
        banner.style.backgroundImage = "url('"+bgImage[i - 1]+"')";
        i--;
    } else {
        i = bgImage.length - 1;
        banner.style.backgroundImage = "url('"+bgImage[i]+"')";
    }
}

bannerSwitchAuto();

function bannerSwitchAuto() {
  i++;
  if (i > bgImage.length - 1 ) {i = 0}
  banner.style.backgroundImage = "url('"+bgImage[i]+"')";
  setTimeout(bannerSwitchAuto, 7000);
}



// ------------ Home Slideshow @ XS - S screen view
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}



// ------------ Home Slideshow @ 768px (medium screen view)
let assetIndex = 1;
displayAuto(assetIndex);
  
function displayAuto(n) {
    let i;
    let slide = document.getElementsByClassName("slide");
    if (n > slide.length) {assetIndex = 1}
    if (n < 1) {assetIndex = slide.length}
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[assetIndex-1].style.display = "block"; 

    assetIndex++;
    if (assetIndex > slide.length) {assetIndex = 1} 
    setTimeout(displayAuto, 3000); 
}