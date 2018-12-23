/**
 * Created by JG_PC76 on 2018/4/11.
 */
$(function () {
	/*
    $(window).resize(function () {  //窗口监听事件
        location.reload();
    });
	*/
    /*必加载JS*/
    $('.search-btn').click(function () {
        $(".search-form").fadeToggle();
    });
    $('html').css('width','100%');

/*侧边栏导航*/
    function indexSidebarShow() {
        $(".sidebar-box").removeClass("fadeOutLeft").addClass("animated fadeInLeft fill-mode")
    }
    function indexSidebarHide() {
        $(".index-sidebar").find(".sidebar-box").removeClass("fadeInLeft").addClass("fadeOutLeft");
        setTimeout(function () {
            $(".index-sidebar").hide();
        },600)
    }
    $("#navA .navbar-header .right-menu-btn").click(function () {
        if($(".index-sidebar").is(":hidden")){
            $(".index-sidebar").show();
            indexSidebarShow()
        }else {
            indexSidebarHide()
        }
    });
    $(".index-sidebar .sidebar-box").click(function (event) {
        event.stopPropagation();
    });
    $(".index-sidebar").click(function () {
        indexSidebarHide()
    });
    var $sidebarMenu = $(".sidebar-box .menu .icon");
    var $sidebarSubMenu = $(".sidebar-box .sub-menu");
    $sidebarMenu.click(function (event) {
        var num = $sidebarMenu.index($(this));
        $(".index-sidebar .sidebar-box>.menu").addClass("fadeOutLeft");
        $sidebarSubMenu.eq(num).show().removeClass("fadeOutRight").addClass("fadeInRight");
    });
    $(".sidebar-box .sub-menu li>.back").click(function () {
        $(this).parents(".sub-menu").removeClass("fadeInRight").addClass("fadeOutRight");
        $(".index-sidebar .sidebar-box>.menu").removeClass("fadeOutLeft").addClass("fadeInLeft");
    });

/* //导航菜单*/
    $(".nav-lg-content>li").mouseenter(function () {
        $(this).find(".sub-menu").removeClass("animated fadeOut").addClass("animated fadeIn")
    }).mouseleave(function () {
        $(this).find(".sub-menu").removeClass("animated fadeIn").addClass("animated fadeOut")
    });

    var windowResizeNum = document.body.clientWidth;//获取窗口可视宽度
    /*导航条滚动JS*/
    function scrollNav() {
        var scrollTopNum = $('html').scrollTop();//获取滚动条位置
        if(windowResizeNum>768&&scrollTopNum>0){
            $("#navA").addClass("scroll-nav");
        }else {
            $("#navA").removeClass("scroll-nav");
        }
    }



    $(window).scroll( function() {  //滚动监听事件
        scrollNav()
    });
    //小屏搜索栏JS
    $(".navbar-header .search.btn").click(function () {
        var $headerXsSearch = $(".header-xs-search");
        if($headerXsSearch.is(":hidden")){
            $headerXsSearch.show().removeClass("fadeOut").addClass("fadeIn");
        }else {
            $headerXsSearch.removeClass("fadeIn").addClass("fadeOut");
            setTimeout(function () {
                $headerXsSearch.hide()
            },1000)
        }
    });





/* //动画*/
    //animate-left
    var animateLeft = new WOW({
        boxClass: 'animate-left',
        animateClass: 'fadeInLeft',
        offset: 0,
        mobile: true,
        live: true
    });
    animateLeft.init();
    //animate-right
    var animateRight = new WOW({
        boxClass: 'animate-right',
        animateClass: 'fadeInRight',
        offset: 0,
        mobile: true,
        live: true
    });
    animateRight.init();
    //animate-top
    var animateTop = new WOW({
        boxClass: 'animate-top',
        animateClass: 'fadeInDown',
        offset: 0,
        mobile: true,
        live: true
    });
    animateTop.init();
    //animate-bottom
    var animateButtom = new WOW({
        boxClass: 'animate-bottom',
        animateClass: 'fadeInUp',
        offset: 0,
        mobile: true,
        live: true
    });
    animateButtom.init();


    //首页 banner 图片居中
    var bannerWidth = $(".index-banner").width();
    $(".swiper-wrapper .swiper-slide .hidden-xs").css({'left':(bannerWidth-1920)/2+"px"})

    //
    if(windowResizeNum>768){
        var listPageBannerWidth = $(".list-banner").width();
        $(".list-banner img").css({'margin-left':(listPageBannerWidth-1920)/2+"px"})
    }

    //详情页文字内容  字号加减
    //减
    var elementEvent = ".detailsPage-content,.detailsPage-content p,.detailsPage-content h1,.detailsPage-content h2.detailsPage-content h3,.detailsPage-content span,.detailsPage-content h4,.detailsPage-content h5,.detailsPage-content h6,.detailsPage-content *";
    $("#fontSizeReduce").click(function () {
        var fontSize = parseInt($(".detailsPage-content").css("fontSize"));
        if(fontSize==16){
            $(elementEvent).css({'fontSize':"12px",'lineHeight':'18px'});
        }else if(fontSize==20){
            $(elementEvent).css({'fontSize':"16px",'lineHeight':'24px'});
        } else if(fontSize==24){
            $(elementEvent).css({'fontSize':"20px",'lineHeight':'30px'});
        } else if(fontSize==28){
            $(elementEvent).css({'fontSize':"24px",'lineHeight':'30px'});
        }
    });
    $("#fontSizePlus").click(function () {
        var fontSize = parseInt($(".detailsPage-content").css("fontSize"));
        if(fontSize==16){
            $(elementEvent).css({'fontSize':"20px",'lineHeight':'30px'});
        }else if(fontSize==12){
            $(elementEvent).css({'fontSize':"16px",'lineHeight':'24px'});
        }else if(fontSize==20){
            $(elementEvent).css({'fontSize':"24px",'lineHeight':'36px'});
        }
        else if(fontSize==24){
            $(elementEvent).css({'fontSize':"28px",'lineHeight':'42px'});
        }
    })
});
