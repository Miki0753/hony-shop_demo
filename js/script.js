
jQuery(function ($) {
  /* delayup */
  function delayScrollAnime() {
    var time = 0.2;
    var value = time;
    $('.js-delayup-wrapper').each(function () {
      var parent = this;
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var childs = $(this).children();

      if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
        $(childs).each(function () {

          if (!$(this).hasClass("delayup")) {

            $(parent).addClass("play");
            $(this).css("animation-delay", value + "s");
            $(this).addClass("delayup");
            value = value + time;

            var index = $(childs).index(this);
            if ((childs.length - 1) == index) {
              $(parent).removeClass("play");
            }
          }
        })
      } else {
        $(childs).removeClass("delayup");
        value = time;
      }
    })
  }

  $(window).scroll(function () {
    delayScrollAnime();
  });


  /* ドロワー */
  $(function () {
    $(".js-drawer-icon").on("click", function (e) {
      e.preventDefault();
      $(".js-drawer-icon").toggleClass("is-active");
      $(".js-drawer-content").toggleClass("is-active");
      $(".js-drawer-background").toggleClass("is-active");

      return false;
    });
  });

  // スムーススクロール

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  /* ヘッダースクロール */
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $('.header').addClass("change-large");
        $('.header__logo').addClass("change-large");
        $('.js-global-nav__link').addClass("change-large");
        $('.js-drawer-icon').addClass("change-large");
        $('.js-drawer-icon__bar1').addClass("change-large");
        $('.js-drawer-icon__bar2').addClass("change-large");
        $('.js-drawer-icon__bar3').addClass("change-large");
      } else {
        $('.header').removeClass("change-large");
        $('.header__logo').removeClass("change-large");
        $('.js-global-nav__link').removeClass("change-large");
        $('.js-drawer-icon').removeClass("change-large");
        $('.js-drawer-icon__bar1').removeClass("change-large");
        $('.js-drawer-icon__bar2').removeClass("change-large");
        $('.js-drawer-icon__bar3').removeClass("change-large");
      }
    });
  });

  /* パララックス */
  $(function () {
    var h = $(window).height(); // ウィンドウの高さを取得
    var speed = 300; // フェードインスピード
    $(window).on('scroll', function () {
      var scrollpx = $(this).scrollTop(); //スクロール量観測
      $('.fadeDone').each(function () {
        var thisTop = $(this).offset().top; //コンテンツの高さ
        var thisShow = thisTop - h / 1.3; //出現位置
        if (scrollpx >= thisShow) {
          $(this).stop().animate({
            opacity: 1
          }, speed);
        } else {
          $(this).stop().animate({
            opacity: 0
          }, speed);
        }
      });
    });
  });

  var parallaxBkImg = function () {
    $(window).on('load resize', function () {
      $(window).on('load scroll', function () {
        var $winTop = $(window).scrollTop();
        var $target = $('.bg-fixed');
        var $winWidth = $(window).width();
        if ($winWidth < 768) {
          $target.each(function (index) {
            var $position = $winTop - $target.eq(index).offset().top;
            if ($winTop > $target.eq(index).offset().top - 800) {
              $target.eq(index).css({
                'background-position-y': $position * .4
              });
            }
          });
        }
      });
    });
  }();
});
