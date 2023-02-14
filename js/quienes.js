$(window).scroll(function(){
    console.log("scroll");
    let arrow = $('#go-top');

    let arrow_position = arrow.offset().top;
    let arrow_height = arrow.height();

    let text_position = $('#text-container').offset().top;
    let text_height = $('#text-container').height();

    if(arrow_position + arrow_height < text_position){
        arrow.removeClass('black');
    }else if(arrow_position > text_position + text_height){
        arrow.removeClass('black');
    }else{
        arrow.addClass('black');
    }
});