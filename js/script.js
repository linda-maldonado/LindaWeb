$(document).ready(function(){
    
        /* Menú Cortina al 100% */
        $('#cerrar').hide();

        $('#abrir').click(function() {
            $('aside#menu-completo').animate({
                right: 0
            }, 300);
            $('#abrir').hide();
            $('#cerrar').show();
            event.preventDefault();
        });

        $('#cerrar').click(function() {
        $('#menu-completo').animate({
            right: '-100%'
        }, 300);
        $('#cerrar').hide();
        $('#abrir').show();
        event.preventDefault();
        });

});
