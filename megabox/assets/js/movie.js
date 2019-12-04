(function($){

    /* 트레일러 영상 플레이어를 활성화 */
    /* YouTube iframe API: https://developers.google.com/youtube/player_parameters */
    // 아이프레임 API 소스 필요 !
    (function handleTrailer(){
        // 셀럭터 캐시

        // 변수를 객체로 지정
        var $selector = {
            body: $('body'),
            overlay: $('#blackout'),
            modal: $('#trailerModal'),
            showButton: $('#showTrailer'),
            hideButton: $('#hideTrailer'),
        };

        //플레이어
        var player = {
            obj: null, //아무것도없는 null값 , 플레이어오브젝트
            query : {
                theme: "dark",
                color: "white",
                controls: 1, 
                autoplay: 1,
                enablejsapi: 1,
                modestbranding: 0, // YouTube 로고 감춤
                rel: 0,  // 관련 동영상 표시
                showinfo: 0, // 제목, 업로더 감춤
                iv_load_policy: 3 // 특수효과 감춤
            },
            visible: false
        }

            //보이기, 숨기기 버튼 활성화
            //$selector.showButton을 클릭했을때  showPlayer 이란 함수를 만들어라
            $selector.showButton.on('click', showPlayer);
            $selector.hideButton.on('click', hidePlayer);


            //YouTube API를 이용해 iframe 을 생성
            function setPlayer(id){
                player.obj = new YT.Player( "trailer", {
                    width: 480,
                    height: 282,
                    videoId: id,    
                    playerVars: player.query
                });

                // 처음 플레이어 크기 설정 
                resizePlayer();

                //리사이즈 화면 회전시 플레이어 크기 다시 설정
                $(window).on('resize orientationchange',function(){
                    resizePlayer();

                });

            }

            function resizePlayer(){
                //객체설정
                var viewport = {}, frame = {}, modal = {};

                //브라우저의 width 값
                viewport.width = $(window).width();
                viewport.height = $(window).height();

                //frame.width 값은  viewport.width;값
                frame.width = viewport.width;

                //frame.height값은  frame.width값에 화면비율 16:10조정값
                frame.height = frame.width / 1.6; // 16 : 10

                // top 값은 전체 height값 에서 프레임 height 나누기 /2해서 중앙으로오게 해줌
                modal.top = ( ( viewport.height - frame.height ) / 2) + 'px';
                modal.left = '0px';

                $selector.modal.css( modal );

                player.obj.setSize(frame.width, frame.height);

            }


            // iframe 보이기
            function showPlayer(){
                //!는 부정
                if (!player.obj){
                    setPlayer($selector.showButton.data("youtube") );
                }

                $selector.body.addClass('modal_on');
                $selector.overlay.show();
                player.visible = true;

            };

            // iframe 감추기
            function hidePlayer(){
                player.obj.stopVideo();
                $selector.overlay.hide();
                $selector.body.removeClass('modal_on');
                player.visible = false;
            };

        })();

})(jQuery);     