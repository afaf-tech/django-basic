$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    document.getElementById("myBody").style.marginTop = (-100 - .5*scroll)+ "px";

    if( scroll >= 300 ){
        $('#mynav').addClass('bg-dark');
    }else{
         $('#mynav').removeClass('bg-dark');

    }

});