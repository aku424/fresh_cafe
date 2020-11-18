$(function(){
  // ============================scroll
  $(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight +150) {
                $(this).addClass("fadeInDown");
            }
        });
    });
  });
  // ============================header
    $("#menubtn").click(function(){
        $("header nav").toggleClass("active");
        $(this).toggleClass("active");
        return false;
      }); 
    //   ==============================header menu
    $("#top").click(function(){
      $("html,body").animate({"scrollTop":0},slow);
    });
    $("header a").click(function(){
      var id = $(this).attr("href");
      var position = $(id).offset().top;
      $("html,body").animate({"scrollTop":position},slow);

    });
    //   ==============================main view
    let swipeOption = {
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 2000,
      }
      new Swiper('.swiper-container', swipeOption);
      //   ==============================concept-right
      $('.slider').slick({
        dots:true,
        autoplay:true
      });
      //   ==============================menus
        $('.menus').click(function() {
            var $menuLists = $(this).find('.menu-lists');
            if($menuLists.hasClass('open')) { 
                $menuLists.removeClass('open');
                // $menuLists.fadeOut();
            } else {
                $menuLists.addClass('open'); 
                // $menuLists.fadeIn();
            }
          });
       //   ==============================menus
          
});