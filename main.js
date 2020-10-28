// Nel sito, il dropdown si attiva con mouseenter e si disattiva con click al di fuori dell'elemento. Noi semplifichiamo e per chiudere il dropdown menu utilizziamo il mouseleave.

$(document).ready(function() {


    $('.header-right ul li').mouseenter(function() {


        $(this).children('.drop-menu').addClass('active');

    });

    $('.header-right ul li').mouseleave(function() {


        $(this).children('.drop-menu').removeClass('active');

    });


});
