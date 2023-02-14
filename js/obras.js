$(window).scroll(function(){
    let arrow = $('#go-top');

    let arrow_position = arrow.offset().top;
    let arrow_height = arrow.height();

    let intro_position = $('#intro-container').offset().top;
    let intro_height = $('#intro-container').height();

    if(arrow_position + arrow_height < intro_position){
        arrow.removeClass('black');
        
    }else if(arrow_position > intro_position + intro_height){
        arrow.removeClass('black');
        console.log(intro_position + intro_height);
    }else{
        arrow.addClass('black');
    }
});