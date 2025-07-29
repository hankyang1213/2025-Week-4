import './assets/scss/all.scss';

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:12,
    nav:true,
    dots:false,
        responsive:{
            0:{
            items:1
            },
            600:{
            items:3
            },
            1000:{
            items:4
            }
        }
})
