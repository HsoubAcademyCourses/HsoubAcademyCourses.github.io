$(document).ready(function(){
    $('.thumbnail2').hover(
        function(){
            $(this).find('.caption2').toggle("slide"); 
            $(this).find('.project-category').toggle("slide");
        }
    )
});
