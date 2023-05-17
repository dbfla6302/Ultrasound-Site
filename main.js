$(function(){
  $(window).resize(function(){ 
      if (window.innerWidth > 960) {  // 다바이스 크기가 1024이상일때
        $("header .gnb").show();
        $("#main-gnb li").off();
        $("#main-gnb li").hover(function(){
          $(".gnb-detail").show();
          $(this).addClass("on").children(".gnb-detail").addClass("on");
        }, function(){
          $(".gnb-detail").hide();
          $(this).removeClass("on").children(".gnb-detail").removeClass("on");
        });

      } else {
        $("header .gnb").hide();
        $("#main-gnb li").off();
        $("#main-gnb li").click(function(){
            $(".gnb_drop").not(this).removeClass('ac').find('.gnb-detail').slideUp(100);
            $(this).toggleClass('ac').children('.gnb-detail').slideToggle();
        });
      }
      
  }).resize(); 

  $('.drop_btn').click(function(){
      $('.drop_btn').not(this).removeClass('ac').find('.familysite_list').slideUp(100);
      $(this).toggleClass('ac').parents().find('.familysite_list').slideToggle(100);
  });

});

// slide
new Swiper('.notice-sldie .swiper-container', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    keyboard: true, 
    slidesPerView: 1,
    centeredSlides: true, 
    pagination: {
      el: '.notice-sldie .swiper-pagination',
      clickable: true,
    },
});

new Swiper('.guide-sldie .swiper-container', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    keyboard: true, 
    slidesPerView: 1,
    centeredSlides: true, 
    navigation: { 
      prevEl: '.guide-sldie .swiper-prev',
      nextEl: '.guide-sldie .swiper-next' 
    }, 
});

new Swiper('.bottome-sldie .swiper-container', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    keyboard: true, 
    slidesPerView: 5,
    spaceBetween: 5, 
    navigation: { 
      prevEl: '.bottome-sldie .swiper-prev',
      nextEl: '.bottome-sldie .swiper-next' 
    },
});
