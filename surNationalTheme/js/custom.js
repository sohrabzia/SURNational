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
    if ($('.moreless-button').text() == "view more") {
      $(this).text("view less")
    } else {
      $(this).text("view more")
    }
  });


 
  
  $(document).ready(function () {
    $('.animated').each(function (index) {
        $(this).delay($(this).data('delay')).queue(function () {
            $(this).addClass('animate-in');
        });
    });
});

$(".animatedText").typed({
    strings: ["Thai ", "Filipino "],
    typeSpeed: 200,
    startDelay: 100,
    //backDelay: 4000,
    fadeOut: true,
    backSpeed: 50,
    backDelay: 0,
    loop: true,
    cursorChar: "",
    contentType: 'html'
});