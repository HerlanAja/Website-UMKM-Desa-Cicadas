
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


 /* Google Map
-----------------------------------------------*/
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(13.758468, 100.567481),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4349097216764!2d106.4414711747562!3d-6.838347393159722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e428134275c156b%3A0x778a6d746a2d0260!2sKantor%20Desa%20Cicadas!5e0!3m2!1sen!2sid!4v1721952313642!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' + 'callback=initialize';
    document.body.appendChild(script);
}

$(function(){
  loadGoogleMap();
});


/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});


 /* Navigation Bar
  -----------------------------------------------*/
$(document).ready(function() { 
    "use strict";

    // Navbar Sticky

    (function() {
        var docElem = document.documentElement,
            didScroll = false,
            stickynav = 50;
            document.querySelector( '.nav-container' );
        function init() {
            window.addEventListener( 'scroll', function() {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 50 );
                }
            }, false );
        }
        
        function scrollPage() {
            var sy = scrollY();
            if ( sy >= stickynav ) {
                $( '.nav-container' ).addClass('sticky');
            }
            else {
                $( '.nav-container' ).removeClass('sticky');
            }
            didScroll = false;
        }
        
        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }        
        init();        
    })();

});


$(document).ready(function(){
            
    "use strict";

    $('.menu-container').each(function(index) {
        $(this).find('.circle').attr('menu-link', index);
        $(this).find('.list-menu').clone().appendTo('body').attr('menu-link', index);
    });

    $('.menu-container .circle').click(function() {
        var linkedVideo = $('section').closest('body').find('.list-menu[menu-link="' + $(this).attr('menu-link') + '"]');
        linkedVideo.toggleClass('reveal-modal');
       
    });

    $('section').closest('body').find('.close-iframe').click(function() {
        $(this).closest('.list-menu').toggleClass('reveal-modal');
    });
    

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

