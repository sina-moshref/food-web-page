let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
menuBtn.onclick = function(){
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   centeredSlides:true,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".food-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let previewContainet = document.querySelector('.food-preview-container');
let previewBox = document.querySelector('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
    food.onclick = () =>{
        if(food.classList.contains('swiper-slide-active')){
        previewContainet.style.display = 'flex';
        let name = food.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active')
            }
        })
    }
    }
})

let closePreview = document.querySelector('#close-preview')

closePreview.onclick = function(){
    previewContainet.style.display = 'none';
    previewBox.forEach(prev => {
        prev.classList.remove('active')
    })
}

var swiper = new Swiper(".menu-slider", {
   grabCursor:true,
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});




var swiper = new Swiper(".blogs-slider", {
   loop:true,
   centeredSlides:true,
   spaceBetween: 20,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});



