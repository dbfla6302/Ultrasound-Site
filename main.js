$(function(){
  $(window).resize(function(){ 
      if (window.innerWidth > 960) {  // 다바이스 크기가 1024이상일때
        $("header .gnb").show();
        $("#main-gnb li").off();

        // skip-navigation
        $("#skip-navigation p").bind("focusin", function() {
          $(this).addClass('on').siblings('p').removeClass('on');
        });
        $("#skip-navigation p").bind("focusout", function() {
          $("#skip-navigation p").removeClass('on');
        });

        // main-gnb
        $("#main-gnb li").bind("mouseenter focusin", function() {
          $(".gnb-detail").css({"opacity":1, "z-index":10});
          $(this).addClass("on").children(".gnb-detail").addClass("on");
        });
        $("#main-gnb li").bind("mouseleave focusout", function() {
          $(".gnb-detail").css({"opacity":0, "z-index":-1});
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
var swiper_1, swiper_2, swiper_3;
swiper_1 = new Swiper('.notice-sldie .swiper', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    keyboard: true, 
    slidesPerView: 1,
    centeredSlides: true, 
    observer: true,
    observeParents: true,
    pagination: {
      el: '.notice-sldie .swiper-pagination',
      clickable: true,
      renderBullet : function (index, className) {  // className이 기본값이 들어가게 필수 설정
        return '<button class="' + className + '">' + (index + 1) + '</button>'
      },
    },
});

swiper_2 = new Swiper('.guide-sldie .swiper', {
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

swiper_3 = new Swiper('.bottome-sldie .swiper', {
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
