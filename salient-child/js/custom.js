/**
 * Created by Huma on 5/3/2016.
 */


jQuery(document).ready(function () {
    jQuery('.cat-parent').children('a').attr('href', 'javascript:;');
    jQuery('li.cat-parent a').click(function (event) {
        jQuery(this).toggleClass('opened');
        event.preventDefault();
        jQuery('#ajax-loading-screen').stop().transition({'opacity': 0}, 1,
            function () {
                jQuery(this).css({'display': 'none'});
            });
        jQuery(this).parent('.cat-parent').children('.children').toggle(500);
    });
    

   /* jQuery(window).resize(function(){
        if(jQuery(window).width() < 1000){
            jQuery('.mobile-filter').show();
            jQuery('#options').hide();
        }
        else{
            jQuery('.mobile-filter').hide();
            jQuery('#options').show();
            jQuery('.mobile-filter #options').hide();

        }
    });*/
   

    jQuery('.filters').click(function(){
        
        jQuery('.mobile-filter #options').toggle();
        /*var text = jQuery('span.arrow').text();   
        jQuery('span.arrow').text( 
        text == "&#9650;" ? "&#9660;" : "&#9650;");*/
        jQuery('.filters i').not(this).removeClass('fa-angle-down');
        jQuery('i').toggleClass('fa-angle-up');
        if (jQuery('i').is('.fa-angle-up')){
            jQuery('i').removeClass('fa-angle-down');
            jQuery('.filters').addClass("open");
        }
        else{
            jQuery('i').addClass('fa-angle-down');
            jQuery('.filters').removeClass("open");
        }
    });
});

jQuery(window).load(function() {
    // init Isotope
    var grid = jQuery('.grid').isotope({

    });
    if (jQuery('input:checked')){
        var category = jQuery('input:checked').attr("value");
        grid.isotope({ filter: category });
    }
// filter with selects and checkboxes
    var checkboxes = jQuery('#options input');
    var selects = jQuery('#options select');
    // bind filter on select change
    selects.add(jQuery(checkboxes)).change(function() {

        // map input values to an array
        var inclusives = [];
        var exclusives = [];
        
        // exclusive filters from selects
        selects.each( function( i, elem ) {
            if ( elem.value ) {
              exclusives.push( elem.value );
            }
        });

        // inclusive filters from checkboxes
        checkboxes.each( function( i, elem ) {
            // if checkbox, use value if checked
            if ( elem.checked ) {
              inclusives.push( elem.value );
            }
        }); 
          
        // combine exclusive and inclusive filters

        // first combine exclusives
        exclusives = exclusives.join('');
        
        var filterValue;
        if ( inclusives.length ) {
            // map inclusives with exclusives for
            filterValue = jQuery.map( inclusives, function( value ) {
              return value + exclusives;
            });
            filterValue = filterValue.join(', ');
        } 
        else {
            filterValue = exclusives;
        }
          // get filter value from option value
          //var filterValue = this.value;
          //alert(jQuery('div:not(".isotope-hidden")').length);
          grid.isotope({ filter: filterValue });
    });
        // combine inclusive filters
       // var filterValue = inclusives.length ? inclusives.join(', ') : '*';
       // grid.isotope({ filter: filterValue })
    
      
        

    jQuery("a .isotope-reset").click(function(e){
        e.preventDefault();
        jQuery(".grid").isotope({
            filter: '*'
        });
       jQuery(':checkbox').removeAttr('checked');
       jQuery("select.location").val('*').change();
    });

     jQuery('a .isotope-done').click(function(e){
        e.preventDefault();
        jQuery(".mobile-filter #options").slideUp();
         jQuery('.filters').removeClass("open");
         jQuery('i').removeClass('fa-angle-up');
         jQuery('i').addClass('fa-angle-down');
     });

     
});












