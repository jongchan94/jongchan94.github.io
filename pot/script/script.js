

var nav = $("#nav ul li");
var cont = $("section");


nav.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    //alert(index);
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= cont.eq(0).offset().top){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if(wScroll >= cont.eq(1).offset().top){
        nav.removeClass("active");
        nav.eq(1).addClass("active");

        if (wScroll >= $(".se2_about > p").offset().top - $(window).height() ) {
            $(".se2_about > p").addClass("active");
        }
    }
    if(wScroll >= cont.eq(2).offset().top){
        nav.removeClass("active");
        nav.eq(2).addClass("active");

        if (wScroll >= $(".sec_site1").offset().top - $(window).height() / 2) {
            $(".sec_site1").addClass("active");
        }
        if (wScroll >= $(".sec_site2").offset().top - $(window).height() / 1.7) {
            $(".sec_site2").addClass("active");
        }
        if (wScroll >= $(".sec_site3").offset().top - $(window).height() / 2.5) {
            $(".sec_site3").addClass("active");
        }
        if (wScroll >= $(".sec_site4").offset().top - $(window).height() / 3.0) {
            $(".sec_site4").addClass("active");
        }

    }
    if(wScroll >= cont.eq(3).offset().top){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if(wScroll >= cont.eq(4).offset().top){
        nav.removeClass("active");
        nav.eq(4).addClass("active");    }
});





$("#nav").each(function(){
    var header = $(this);
    var headerOffset = header.offset().top;

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll > headerOffset ){
             header.addClass("on");
        } else {
            header.removeClass("on");
        }
    });
});

$('.mNav').click(function(){
        //$('.menu').css('display','block');
        //$('.menu').show();
        //$('.menu').fadeIn();
        $('.menu').slideToggle();
    });



    $(window).resize(function(){
        var wWidth = $(this).width();
        //화면 크기가 800 이상일 때 style='display:none' 삭제
        if( wWidth > 800 && $('.menu').is(':hidden')){
                    //&&그리고 메뉴에 is는 검색해준다
                    //hidden 숨겨져있는걸 찾는다
                    //메뉴에 히든이 되잇는거나 또는 800보다클때
            $('.menu').removeAttr('style'); 
            //attr은 속성
        }

    }); 


    $('.modal_open').click(function(e){
        e.preventDefault();
        $('.modal').fadeIn();
        
    });

    $('.modal_close').click(function(e){
        e.preventDefault();
        $('.modal').fadeOut();
    });

    //모달 이외에 곳을 클릭하면 창 닫기
    /* 
    $(document).click(function(){
        if ( !$(event.target).closest('.'))
    });

    */ 

    //  마우스 커서
   var cursor = $('.cursor'),
   mouseX = 0,
   mouseY = 0;

   $(document).mousemove(function(e){
       mouseX = e.pageX;
       mouseY = e.pageY;
   });

    //    방향,속성,시간,속성값
    TweenMax.to({},0.016,{
        repeat: -1, //무한
        onRepeat: function(){
        
        TweenMax.set(cursor,{
            css:{
            left:mouseX - 20,
            top:mouseY - 20
            }
        });
        }
        
    });


   $('.site_btn, tbody a, .menu li').mouseenter(function(){
       cursor.addClass('active');
   });

   $('.site_btn, tbody a, .menu li').mouseleave(function(){
       cursor.removeClass('active');
   });
