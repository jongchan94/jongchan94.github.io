
var dot = $("#dot > ul > li");
var cont = $("section");


dot.click(function(e){
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
        dot.removeClass("active");
        dot.eq(0).addClass("active");
    }

    if(wScroll >= cont.eq(1).offset().top){
        dot.removeClass("active");
        dot.eq(1).addClass("active");

        if (wScroll >= $("h2").offset().top - $(window).height() / 2) {
            $("h2").addClass("active");
        }
    }
    
    if(wScroll >= cont.eq(2).offset().top - $(window).height()/3){

         dot.removeClass("active");
         dot.eq(2).addClass("active");

         $('#section3').addClass("active_bg");


        if (wScroll >= $(".sec_site1").offset().top - $(window).height() / 2) {
            $(".sec_site1").addClass("active");
        }
        if (wScroll >= $(".sec_site2").offset().top - $(window).height() / 1.7) {
            $(".sec_site2").addClass("active");
        }
        if (wScroll >= $(".sec_site3").offset().top - $(window).height() / 0.2) {
            $(".sec_site3").addClass("active");
        }
        if (wScroll >= $(".sec_site4").offset().top - $(window).height() / 0.2) {
            $(".sec_site4").addClass("active");
        }

        //   TweenLite.to("#section3", 0.5, {
        //      backgroundColor:'#040404',
        //      ease: Power4.easeIn
        //  });
    }



    if(wScroll >= cont.eq(3).offset().top){
        dot.removeClass("active");
        dot.eq(3).addClass("active"); 
    }

    if(wScroll >= cont.eq(4).offset().top){
        dot.removeClass("active");
        dot.eq(4).addClass("active"); 
    }

    /*
    if(wScroll >= cont.eq(4).offset().top){
        dot.removeClass("active");
        dot.eq(4).addClass("active");
    }
    if(wScroll >= cont.eq(5).offset().top){
        dot.removeClass("active");
        dot.eq(5).addClass("active");
    }
    if(wScroll >= cont.eq(6).offset().top){
        dot.removeClass("active");
        dot.eq(6).addClass("active");
    }
*/
});

var nav = $("#nav ul li");

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
    }
    if(wScroll >= cont.eq(2).offset().top){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if(wScroll >= cont.eq(3).offset().top){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if(wScroll >= cont.eq(4).offset().top){
        nav.removeClass("active");
        nav.eq(4).addClass("active");
    }
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

   $('.se4_text li, .site_btn, tbody a').mouseenter(function(){
       cursor.addClass('active');
   });

   $('.se4_text li, .site_btn, tbody a').mouseleave(function(){
       cursor.removeClass('active');
   });


   $('.se4_tail').click(function(){
       $('.ani1').show();
       $('.ani2').hide();
       $('.ani3').hide();
       $('.ani4').hide();
       $('.ani5').hide();
   });

   $('.se4_dot').click(function(){
    $('.ani1').hide();
    $('.ani2').show();
    $('.ani3').hide();
    $('.ani4').hide();
    $('.ani5').hide();
});
        //text-animation
/*
        if(wScroll >= cont.eq(0).offset().top - $(window).height()/3){
            cont.eq(0).addClass('show');
        }
        if(wScroll >= cont.eq(1).offset().top  - $(window).height()/3){
            cont.eq(1).addClass('show');
        }
        if(wScroll >= cont.eq(2).offset().top  - $(window).height()/3){
            cont.eq(2).addClass('show');
        }
        if(wScroll >= cont.eq(3).offset().top  - $(window).height()/3){
            cont.eq(3).addClass('show');
        }
        if(wScroll >= cont.eq(4).offset().top  - $(window).height()/3){
            cont.eq(4).addClass('show');
        }
    */


