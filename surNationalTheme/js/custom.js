$('#featureProducts').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
   autoplayTimeout:2000,
    responsiveClass:true,
    navText : ["<i class='fa-sharp fa-solid fa-circle-chevron-left'></i>","<i class='fa-sharp fa-solid fa-circle-chevron-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})

$('#ourBrands').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    navText : ["<i class='fa-sharp fa-solid fa-circle-chevron-left'></i>","<i class='fa-sharp fa-solid fa-circle-chevron-right'></i>"],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }


});

$('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "See more") {
      $(this).text("See less")
    } else {
      $(this).text("See more")
    }
  });


 
  

  //read more
  