$(document).ready(function(){
    $('.project-thumbnail').hover(
        function(){
            $(this).find('.thumbnail2').toggle("slide"); 
            $(this).find('.project-category').toggle("slide");
        }
    )
});
