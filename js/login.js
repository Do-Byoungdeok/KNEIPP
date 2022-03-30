$(function(){
    let id = $("#id");
    let pw = $("#pw");
    let btn = $("#btn");

    $(btn).on("click", function(){
        if($(id).val() == ""){
            $(id).next("label").addClass("warning");
            setTimeout(function(){
                $("label").removeClass("warning")
            },1500);
        }
        else if ($(pw).val() == "") {
            $(pw).next("label").addClass("warning");
            setTimeout(function(){
                $("label").removeClass("warning")
            },1500);
        }
    });


     //모바일 햄버거 메뉴

    $(".hamBtn>a").on("click", function () {
        if ($(this).hasClass("navActive")) {
            $(".m_nav").css("right", "-80vw");
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




})