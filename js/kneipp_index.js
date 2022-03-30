$(function () {
    //mainBanner
    let selectedIndex = 0;

    let bannerLiWidth = $(".banner>li:eq(0)").width();

    let bannerWindow = $(window).outerWidth();
    
    let bannerLiCount = $(".banner>li").length;
    
    let bannerSpeed = 5000;

    let bannerOuterWidth;


    let bannerLiCopy = $(".banner>li").length;

    


    //슬라이드
    $(".banner").bxSlider({
        auto:true,
        mode:"fade"
    });
    



    




    //모바일 햄버거 메뉴

    $(".hamBtn>a").on("click", function () {
        if ($(this).hasClass("navActive")) {
            $(".m_nav").css("right", "-60vw");
        }
        else {
            $(".m_nav").css("right", 0)
        }

        $(this).toggleClass("navActive");
    })

    $("#m_nav>li>a").on("click", function () {
        $(this).next('.m_sub').slideToggle(300);
        $(this).parent().toggleClass("navActive")
            .siblings().removeClass("navActive")
            .children(".m_sub").slideUp(300);
    })




    //best_item

    //가운데 오는 배너가 누구인지 체크할 변수
    let bestShowBanner = 0;

    //li너비
    let bestLiWidth = $(".best_list>li").outerWidth();

    //배너의 복사 전 개수
    let bestLiCount = $(".best_list>li").length;

    //속도
    let bestSpeed = 1000;

    //배너의 뒤에 2개 복사
    //배너의 앞에 3개 복사
    let bestObjEnd = $(".best_list>li:gt(3)").clone();
    let bestObjStart = $(".best_list>li:lt(3)").clone();

    $(".best_list").append(bestObjStart);
    $(".best_list").prepend(bestObjEnd);

    //복사본을 만든 후의 개수
    let bestLiCopy = $(".best_list>li").length;

    //부모 너비 조절하기
    $(".best_list").width(bestLiWidth * bestLiCopy);
    $(".best_list>li").width(bestLiWidth);

    //가운데 오는 배너 커지도록 초기세팅
    $(".best_list>li").eq(bestShowBanner + 2).addClass("bestActive");


    function bestMoveBanner() {
        $(".best_list").stop().animate({
            marginLeft: -bestShowBanner * bestLiWidth
        }, bestSpeed)

        //배너 넘어갈때 엑티브 주어서 크게바꾸기
        $(".best_list>li").eq(bestShowBanner + 2).addClass("bestActive")
            .siblings().removeClass("bestActive");


        //그레이바 
        if (bestShowBanner == bestLiCount) {
            $(".bestListPager>li").eq(0).addClass("bestActive")
                .siblings().removeClass("bestActive");
        }
        else {
            $(".bestListPager>li").eq(bestShowBanner).addClass("bestActive")
                .siblings().removeClass("bestActive");
        }

    }

    //오른쪽 버튼
    $(".bestRightBtn").on("click", function () {
        if (bestShowBanner == bestLiCount) {
            bestShowBanner = 0;
            $(".best_list").css("margin-left", 0)
        }
        bestShowBanner++;
        bestMoveBanner();
    })

    //왼쪽 버튼
    $(".bestLeftBtn").on("click", function () {
        if (bestShowBanner == 0) {
            bestShowBanner = bestLiCount;
            $(".best_list").css("margin-left", -bestShowBanner * bestLiWidth)
        }
        bestShowBanner--;
        bestMoveBanner();
    })



    // new_item

    //가운데 오는 배너가 누구인지 체크할 변수
    let newShowBanner = 0;

    //li너비
    let newLiWidth = $(".new_list>li").outerWidth();

    //배너의 복사 전 개수
    let newLiCount = $(".new_list>li").length;

    //속도
    let newSpeed = 1000;

    //배너의 뒤에 2개 복사
    //배너의 앞에 3개 복사
    let newObjEnd = $(".new_list>li:gt(3)").clone();
    let newObjStart = $(".new_list>li:lt(3)").clone();

    $(".new_list").append(newObjStart);
    $(".new_list").prepend(newObjEnd);

    //복사본을 만든 후의 개수
    let newLiCopy = $(".new_list>li").length;

    //부모 너비 조절하기
    $(".new_list").width(newLiWidth * newLiCopy);
    $(".new_list>li").width(newLiWidth);

    //가운데 오는 배너 커지도록 초기세팅
    $(".new_list>li").eq(newShowBanner + 2).addClass("newActive");


    function newMoveBanner() {
        $(".new_list").stop().animate({
            marginLeft: -newShowBanner * newLiWidth
        }, newSpeed)

        //배너 넘어갈때 엑티브 주어서 크게바꾸기
        $(".new_list>li").eq(newShowBanner + 2).addClass("newActive")
            .siblings().removeClass("newActive");


        //그레이바 

        if (newShowBanner == newLiCount) {
            $(".newListPager>li").eq(0).addClass("newActive")
                .siblings().removeClass("newActive");
        }
        else {
            $(".newListPager>li").eq(newShowBanner).addClass("newActive")
                .siblings().removeClass("newActive");
        }

    }

    //오른쪽 버튼
    $(".newRightBtn").on("click", function () {
        if (newShowBanner == newLiCount) {
            newShowBanner = 0;
            $(".new_list").css("margin-left", 0)
        }
        newShowBanner++;
        newMoveBanner();
    })

    //왼쪽 버튼
    $(".newLeftBtn").on("click", function () {
        if (newShowBanner == 0) {
            newShowBanner = newLiCount;
            $(".new_list").css("margin-left", -newShowBanner * newLiWidth)
        }
        newShowBanner--;
        newMoveBanner();
    })




})