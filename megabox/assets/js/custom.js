(function($){


          // 배너이미지슬라이드
          var swiper = new Swiper('.swiper-container',{
            pagination: {
               el: '.swiper-pagination',
            },
            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
            },
            autoplay: {
               delay: 5000,
            },
         });


         //영화 차트 이미지 슬라이드
         var swiper = new Swiper('.swiper-container2',{

            slidesPerView: 4,
            spaceBetween: 24,
            mousewheel: {
            invert: true,
            },
            keyboard: {
            enabled: true,
            onlyInViewport: false,
            },
            autoplay: {
            delay: 2000,
             },

            //  중단점
            breakpoints: {
            600: {
                  slidesPerView: 1.4,
                  spaceBetween: 24
            },
            768: {
                  slidesPerView: 2,
                  spaceBetween: 24
            },
            960: {
                  slidesPerView: 3,
                  spaceBetween: 24
            }
         }
         });

         



         // 무비차트 탭 메뉴
         var movBtn = $('.movie_title > ul > li')
         var movCont = $('.movie_chart > div')

         movCont.hide().eq(0).show()

         movBtn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();

            movBtn.removeClass('active');
            target.addClass('active')

            movCont.css('display','none');
            movCont.eq(index).css('display','block')


         });

         // 공지사항 탭 메뉴
         var tabMenu = $('.notice')

         // 컨텣느 내용을 숨기기
         tabMenu.find('ul > li > ul').hide();
         tabMenu.find('li.active > ul').show();

         function tabList(e){
            e.preventDefault(); //#의 기능 차단
            var target = $(this);
            target.next().show().parent('li').addClass('active')
            //버튼을 클릭하면 형제에 ul을 보여주고
            //부모의 li태그에 클래스를 추가하고
            .siblings('li').removeClass('active').find('ul').hide();
            //형제의 li태그에 클래스 제거하고
            //제거한 자식의 ul태그를 숨겨준다

         }

         tabMenu.find('ul > li > a').click(tabList).focus(tabList);
         //.focus(tabList) 웹 접근성위해 TAB누를시 다음으로안넘어감



})(jQuery);  