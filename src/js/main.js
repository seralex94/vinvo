

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1,
      max: 24,
      values: [ 6, 8 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "от " + ui.values[ 0 ] + " - до " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) +
      " - до " + $( "#slider-range" ).slider( "values", 1 ) );
  } );
