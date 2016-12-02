$(document).ready(function(){
    $('.thumbnail2').hover(
        function(){
            $(this).find('.caption2').slideToggle(); 
            $(this).find('.project-category').slideToggle();
        }
    )
});
