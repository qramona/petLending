$( document ).ready(function() {

    $('#burger-menu').click(function(){

        $('#menu-items').css('display','flex');
        $('#menu-items').css('margin','1.3rem -6rem');
        $('#burger-menu').css('display','none');
        $('#close-logo').css('display','flex');
    })
    $('#close-logo').click(function(){
        $('#menu-items').css('display','none');
        $('#close-logo').css('display','none');
        $('#burger-menu').css('display','flex');
    })
})