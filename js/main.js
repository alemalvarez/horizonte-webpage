$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('#mobile-nav-container').fadeToggle();
    });
    $('.fa-xmark').click(function(){
        $('#mobile-nav-container').fadeToggle();
    });

    window.onscroll = function(){
        
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            
            $('#go-top').show(300);
        }else{
            $('#go-top').hide(300);
        }
    }

    $('#go-top').click(function(){
        $('html, body').animate({
            scrollTop: $('#banner').offset().top - 100}, 1000
        );
    });
});