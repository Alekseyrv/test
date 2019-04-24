var elements = $('.modal-outer, .modal-content');
function PopUpShow(){
    elements.addClass('active');
    $(".modal-content").css({"transform":"scale(1)","transition":"transform 250ms ease"});
};


$('.modal-outer').on('mousedown', function(event){
    if (event.target == this) {
        elements.removeClass('active');
    }
});
$('.svg-icon').on('click', function(){
    elements.removeClass('active')
});




