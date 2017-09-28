$(".list-ul li a").click(function(){
    $(this).addClass("current").next(".list-unstyled").slideToggle(300).siblings(".list-unstyled").slideUp("slow");
    $(this).siblings().removeClass("current");
    $(this).addClass("current").css("color","")
});
