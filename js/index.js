$(window).scroll(function(){
    console.log("scroll");
    let arrow = $('#go-top');

    let arrow_position = arrow.offset().top;
    let arrow_height = arrow.height();

    let decision_position = $('#decision-container').offset().top;
    let decision_height = $('#decision-container').height();

    if(arrow_position + arrow_height < decision_position){
        arrow.removeClass('black');
    }else if(arrow_position > decision_position + decision_height){
        arrow.removeClass('black');
    }else{
        arrow.addClass('black');
    }
});