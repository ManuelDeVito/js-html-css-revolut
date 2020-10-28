// Nel sito, il dropdown si attiva con mouseenter e si disattiva con click al di fuori dell'elemento. Noi semplifichiamo e per chiudere il dropdown menu utilizziamo il mouseleave.

$(document).ready(function() {

    $('.funz').mouseenter(function(){
        $('.dropdown-menu-funz').addClass('active')
    })

    $('.funz').mouseleave(function(){
        $('.dropdown-menu-funz').removeClass('active')
    })

    $('.abb').mouseenter(function(){
        $('.dropdown-menu-funz').addClass('active')
    })

    $('.abb').mouseleave(function(){
        $('.dropdown-menu-funz').removeClass('active')
    })

    $('.chi').mouseenter(function(){
        $('.dropdown-menu-funz').addClass('active')
    })

    $('.chi').mouseleave(function(){
        $('.dropdown-menu-funz').removeClass('active')
    })

    $('.aiu').mouseenter(function(){
        $('.dropdown-menu-funz').addClass('active')
    })

    $('.aiu').mouseleave(function(){
        $('.dropdown-menu-funz').removeClass('active')
    })

});
