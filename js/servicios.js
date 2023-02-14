$(document).ready(function(){
    checkReorder();
});
$(window).resize(function(){
    checkReorder();
});

function checkReorder(){
    if($(window).width() <= 800){
        $('#reorder-image').remove().insertBefore($('#reorder-text'));
    }else{
        $('#reorder-image').remove().insertAfter($('#reorder-text'));
    }
}