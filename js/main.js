
$(function(){
    // script for btn language
    let headerUserSelect = $('.header_user_item_select');
    $(headerUserSelect).on('click', function(evt){
        evt.stopPropagation();
        $(this).toggleClass('header_item_select--active');
        $(this).next().slideToggle(300);
        $(this).next().click(function(evt){
            evt.stopPropagation();
        })
    });
    // ================================
   
    //  script mobile contact
    let mobileContactList = $('.mobile_contact_list');
    let socialLink = $('.header_social_link').clone().addClass('social_link_mobile');
    $('.header_contact_btn').on('click', function(evt){
        evt.stopPropagation();
        $(this).next().slideToggle(300);
        $('.contact_mobile_social').append(socialLink);
        
        $(this).next().click(function(evt){
            evt.stopPropagation();
        });
    });
    // ==========================================
    // script for block mobile menu
    let menuMobileList = $('.menu_mobile_list');
    // let menuList = $('.menu').clone().addClass('menu_list--active');
    let socialMobileClone = $('.header_social_link').clone().addClass('social_link_mobile');
    // $(menuMobileList).children('.menu_mobile_inner').append(menuList);
    $(menuMobileList).children('.social_mobile_block').append(socialMobileClone);
    
    $('.menu_mobile_icon').on('click', function(evt){
        evt.stopPropagation();
        $(this).next().addClass('menu_mobile_list--active');
        $(this).next().click(function(evt){
            evt.stopPropagation();
        })
    });

    $('.close_menu_btn').on('click', function(){
        $(this).parent().removeClass('menu_mobile_list--active');
    });
    
    $('.page_list_mobile').on('click', function(){
        $(this).children().toggleClass('page_inner_mobile--active');
    });
    // ================================    


    // script for tabs on page about

    $('.about_message_tab').on('click', function(){
        $(this).siblings().removeClass('about_message_tab--active');
        $(this).toggleClass('about_message_tab--active');

        $('.about_message_inner').hide().eq($(this).index()).addClass('about_message_inner--active').fadeIn(200);
    })
    // ================================

    // settings for extensions ionRange
    $(".js-range-slider").ionRangeSlider({
        step: 50,
        postfix: "$"
    });
    // ===============================

    // settings for extensions formStyler
 
    $('.inputStyler').styler();
 
    // ===============================

    //  settings for extensions magnificPopup
    $('.bar_filter').magnificPopup({
        type:'image',
        delegate: 'a',
        gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
    });
    // ================================

    // settings for extensions Rate Yo
    $('.rateYo').rateYo({
        starWidth: '20px',
        rating: 5,
        fullStar: true,
        spacing: '5px',
        starSvg: '<svg viewBox="0 0 512 512"><path d="M512 197.82L326.067 185.59 256 9.57l-70.067 176.02L0 197.82l142.658 120.93-46.802 183.68L256 401.214 416.144 502.43l-46.8-183.67L512 197.82zM256 365.724l-112.464 71.08 32.827-128.83L75.83 222.888l130.97-8.603L256 90.687l49.2 123.6 131.124 8.602-100.69 85.077 32.83 128.84L256 365.724z"/></svg>'
      });
    // =================================  


    // script for reservation menu
    let reservSidebarMobile = $('.reservation_sidebar_mobile');
    $('.reservation_mobile_btn').on('click', function(evt){
        evt.stopPropagation();
        $(this).next('.reservation_sidebar_mobile').toggleClass('reservation_mobile--active');
        $(this).next().click(function(evt){
            evt.stopPropagation();
        })
    });
    $('.close_sidebar_reserv').on('click', function(){
        $(this).parent().removeClass('reservation_mobile--active');
    });
     // =================================

     // script to section (room description)
    let roomTabLink = $('.room_tab_link');
    $(roomTabLink).on('click', function(evt){
        evt.preventDefault();
        $(this).siblings().removeClass('room_tab_link--active');
        $(this).addClass('room_tab_link--active');
        $('.room_tab_item').hide().eq($(this).index()).addClass('room_tab_item--active').fadeIn(300);
    });
    // ==================================

    // script for button (menu tabs) on page roomDesc
    let roomTabLinks = $('.room_tab_links');
    $('.room_tab_links_mobile').on('click', function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $(roomTabLinks).toggleClass('room_tab_links--active');

        $(roomTabLinks).click(function(evt){
            evt.stopPropagation();
        })
        $(roomTabLink).click(function(evt){
            evt.preventDefault();
            $(roomTabLinks).removeClass('room_tab_links--active');
        })    
    });
    // ====================================

    // script for filter image on page room
    let bigPicture = $('.room_desc_galery_big img');
    let pictureBtn = $('.room_desc_galery_small img');
    $(pictureBtn).on('click', function(){
        let imageBtn = $(this).attr('src');
        $(bigPicture).attr('src', imageBtn);
    });
    // ==================================
    
    //  script for (reserv_tabs) on page reservation room
    $('.reserv_tab_link').on('click', function(){
        $(this).siblings().removeClass('reserv_tab_link--active');
        $(this).addClass('reserv_tab_link--active');
        $('.reserv_tab_item').hide().eq($(this).index()).addClass('reserv_tab_item--active').fadeIn(300);

        if($(this).index() == 2){
            $('.reserv_info').children().not('.room_desc_image').css('display', 'none');
            $('.room_desc_image').addClass('room_desc_image--active');   
        }else{
            $('.reserv_info').children().not('.room_desc_image').css('display', 'block');
            $('.room_desc_image').removeClass('room_desc_image--active');
        }

        if($(this).index() == 0) {
            $('.attention').addClass('attention--active');
        }else{
            $('.attention').removeClass('attention--active');
        }
    });
    // ============================================
   
   
    // script for button up
    let arrowTop = $('.arrow_top');
    $(window).on('scroll', function(){
    console.log($(this).scrollTop());

        if ($(this).scrollTop() >= 800) {
            $(arrowTop).addClass('arrowTop_active');
            
        }else{
            $(arrowTop).removeClass('arrowTop_active');
        }
    });

    $(arrowTop).on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 1000)
    });
    // ==================================== 

    // script for block video
    let body = $('body');
    let videoOverlay = $('.video_overlay');
    $('.video_btn').on('click', function(){
        $(videoOverlay).addClass('video_overlay--active');
        $(body).addClass('body--active');
    });
    
    $(videoOverlay).on('click', function(){
        $(videoOverlay).removeClass('video_overlay--active');
        $(body).removeClass('body--active');
    });
    
    $('.video_overlay_block').click(function(evt){
        evt.stopPropagation();
    });


    $('video').videoExtend({
        logoSize: [ 80, 20 ]
    });

    // ============================

    // script for modal
    let overlayModal = $('.overlay_modal');
    let modal = $('.modal');
    let modalContentTitle = $('.modal_content_title');
    let modalBtn = $('.modal_btn');

    $('.register_link').on('click', function(evt){
        evt.preventDefault();
        $(body).addClass('body--active');

        if($(this).hasClass('link_signUp')){
            $(overlayModal).addClass('overlay_modal--active');
            $(modal).removeClass('modal--active');
            $(modalContentTitle).text('Create a free account');
            $(modalBtn).attr('value', 'Create account');
        }else if($(this).hasClass('link_logIn')){
            $(overlayModal).addClass('overlay_modal--active');
            $(modal).addClass('modal--active');
            $(modalContentTitle).text('Log In');
            $(modalBtn).attr('value', 'Log In');
        }
    });

    $('.modal_link_signUp').on('click', function(evt){
        evt.preventDefault();
        $(modal).removeClass('modal--active');
        $(modalContentTitle).text('Create a free account');
        $(modalBtn).attr('value', 'Create account');
    });
    $('.modal_link_logIn').on('click', function(evt){
        evt.preventDefault();
        $(modal).addClass('modal--active');
        $(modalContentTitle).text('Log In'); 
        $(modalBtn).attr('value', 'Log In');      
    });

    $(modal).on('click', function(evt){
        evt.stopPropagation();
    });

    $(overlayModal).on('click', function(){
        $(body).removeClass('body--active');
        $(overlayModal).removeClass('overlay_modal--active');
    });

    $('.modal_password_img').on('click', function(){
        let inputPassword = $(this).prev();
        if($(inputPassword).attr('type') == 'password'){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
        $('.modal_item_password').toggleClass('password_open');
    })

    // ============================
 
     //  script for hiding menu, select block and contact block
    $(body).on('click', function(){
        $(menuMobileList).removeClass('menu_mobile_list--active');
        $(roomTabLinks).removeClass('room_tab_links--active');
        $(reservSidebarMobile).removeClass('reservation_mobile--active');
        $(headerUserSelect).next().slideUp(300);
        $(headerUserSelect).removeClass('header_item_select--active');
        $(mobileContactList).slideUp(300);
    });
});



