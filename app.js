{
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

document.querySelectorAll('.partner').forEach(itemBox => {
  itemBox.addEventListener('mouseover', () => {
      itemBox.querySelector('.news_hover').classList.remove('hidden');
      itemBox.querySelector('.product_image').classList.add('hidden');
  })
  itemBox.addEventListener('mouseout', () => {
      itemBox.querySelector('.news_hover').classList.add('hidden');
      itemBox.querySelector('.product_image').classList.remove('hidden');

  })
})
}


{
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("developer_detail");
    var dots = document.getElementsByClassName("btn");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    // setTimeout(showSlides, 5000); // Change image every 2 seconds
  }
}