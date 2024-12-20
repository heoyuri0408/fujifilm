$(function(){
    // =============햄버거메뉴==========
    $('.hbg-open').click(function(){
        $('.hbg').animate({'left':'0'},1000);
    })
    $('.hbg-submenu').hide();
    $('.hbg-mainmenu>li>a').click(function(){
        $(this).parent().children('.hbg-submenu').slideToggle(500).siblings('.hbg-submenu').slideUp(500);
    })

    // 햄버거 버튼
    $('.close').click(function(){
        $('.hbg').animate({'left':'-300px'},1000);
    })

    // ==========메인화면 / 페이드========
    $('.slider a:gt(0)').hide();
    setInterval(function(){
    $('.slider a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.slider');
    },3000)

    // =========배너 슬라이드==========
    setInterval(function(){
        $('.textbox>ul').delay(2000);
        $('.textbox>ul').animate({'marginLeft':'-300px'},1000);
        $('.textbox>ul').delay(2000);
        $('.textbox>ul').animate({'marginLeft':'-600px'},1000);
        $('.textbox>ul').delay(2000);
        $('.textbox>ul').animate({'marginLeft':'0px'},1000);
    })

    // ===========탭메뉴===========
    $('.tab>li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children('div').addClass('active').siblings().removeClass('active');
        return false;
    })
    // 이달의 추천 아이템 탭 호버
    $('.good>.left>img').on({
        'mouseover' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/신규큰이미지.jpg')
        },
        'mouseout' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/신규큰이미지-2.jpg')
        }
    })
    $('.good>.right>li:nth-child(1) img').on({
        'mouseover' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/러브가든.jpg')
        },
        'mouseout' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/러브가든2.jpg')
        }
    })
    $('.good>.right>li:nth-child(4) img').on({
        'mouseover' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/쿠키런.jpg')
        },
        'mouseout' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/쿠키런2.jpg')
        }
    })

    // 베스트 탭 호버
    $('.best>.left>img').on({
        'mouseover' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/베스트큰이미지1.jpg')
        },
        'mouseout' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/베스트큰이미지2.jpg')
        }
    })
    $('.best>.right>li:nth-child(1) img').on({
        'mouseover' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/인스탁스미니.jpg')
        },
        'mouseout' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/인스탁스미니2.jpg')
        }
    })
    $('.best>.right>li:nth-child(2) img').on({
        'mouseover' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/인탁미니12-2.jpg')
        },
        'mouseout' : function(){
            $(this).stop().fadeOut(200).fadeIn(100).attr('src','./img/인탁미니12.jpg')
        }
    })

    // ========슬라이더 플러그인===========
    $('.bxslider').bxSlider({
        minSlides: 3,
        maxSlides: 4,
        slideWidth: 200,
        slideMargin: 10
    });
});