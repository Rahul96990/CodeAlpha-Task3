
let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
     menu.classList.toggle('fa-times')
     navbar.classList.toggle('active')
}

window.onscroll = () =>{
     menu.classList.remove('fa-times')
     navbar.classList.remove('active')
}

document.addEventListener('DOMContentLoaded', function() {
     var swiper = new Swiper(".home-slider", {
         effect: "coverflow",
         grabCursor: true,
         centeredSlides: true,
         slidesPerView: "auto",
         coverflowEffect: {
             rotate: 50,
             stretch: 0,
             depth: 100,
             modifier: 1,
             slideShadows: true,
         },
         loop: true,
         autoplay: {
             delay: 2000,
             disableOnInteraction: false,
         },
         pagination: {
             el: ".swiper-pagination",
         },
     });

     var swiper = new Swiper(".review-slider", {
          slidesPerView: "auto",
          grabCursor: true,
          loop: true,
          spacebetween : 10,
          breakpoint :{
               0:{
                    slidesPerView:1,
               },
               700:{
                    slidesPerView:2,
               },
               1050:{
                    slidesPerView:3,
               },
          },
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          }
      });
 });
 