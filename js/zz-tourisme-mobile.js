                         $( document ).ready(function() {

                            
                            $('.sb-menu-trigger').click(function(){
                              if ($(this).hasClass("is-open")) {
                                $('.widget-text').addClass('is-visible');
                              }else{
                                $('.widget-text').removeClass('is-visible');
                              }
                            });

                            $('.openCapTrigger').click(function(){
                              $('.widget-text').removeClass('is-visible');
                            });

                            $('.widgetCapLogout').click(function(){
                              $('.widget-text').removeClass('is-visible');
                            });
                            
                            $( ".list li" ).hover(
                                function() {
                                 $('.list li').removeClass('active');
                                 $('.map .actif').removeClass('actif');
                                 $('.desc-continent p').hide();
                                 $('.desc-continent').show();
                                  var pays = $( this ).attr('data');
                                  $(this).addClass('active');
                                  // $('.'+pays+'').addClass('actif');
                                  $('.txt-'+pays+'').show();
                                 }
                              );

$('.close').click(function(){
   $('.desc-continent').hide();
});
                              $( ".list li" ).click(function(){
                                 $('.list li').removeClass('active');
                                 $('.map .actif').removeClass('actif');
                                 $('.desc-continent p').hide();
                                 $('.desc-continent').show();
                                  var pays = $( this ).attr('data');
                                  $(this).addClass('active');
                                  // $('.'+pays+'').addClass('actif');
                                  $('.txt-'+pays+'').show();
                              });

        if ($('body').is('.front, .espace-pro')) {
  //Set the two dates
                     today=new Date();
                     var getdatelyon = $('#count-lyon').attr('data-date');
                     var getdatetoulouse = $('#count-toulouse').attr('data-date');
                     var getdatelille = $('#count-lille').attr('data-date');
                     var getdateparis = $('#count-paris').attr('data-date');


                     var splitdatelyon = getdatelyon.split("-");
                     var splitdatetoulouse = getdatetoulouse.split("-");
                     var splitdatelille = getdatelille.split("-");
                     var splitdateparis = getdateparis.split("-");


                     var lyon_date=new Date(splitdatelyon[2], splitdatelyon[1]-1, splitdatelyon[0]) //Month is 0-11 in JavaScript
                     var toulouse_date=new Date(splitdatetoulouse[2], splitdatetoulouse[1]-1, splitdatetoulouse[0]) //Month is 0-11 in JavaScript
                     var lille_date=new Date(splitdatelille[2], splitdatelille[1]-1, splitdatelille[0]) //Month is 0-11 in JavaScript
                     var paris_date=new Date(splitdateparis[2], splitdateparis[1]-1, splitdateparis[0]) //Month is 0-11 in JavaScript


                     //Set 1 day in milliseconds
                     var one_day=1000*60*60*24;
                      
                     //Calculate difference btw the two dates, and convert to days

                     var datelyon = Math.ceil((lyon_date.getTime()-today.getTime())/(one_day));
                     var datetoulouse = Math.ceil((toulouse_date.getTime()-today.getTime())/(one_day));
                     var datelille = Math.ceil((lille_date.getTime()-today.getTime())/(one_day));
                     var dateparis = Math.ceil((paris_date.getTime()-today.getTime())/(one_day));

                     if (datelyon < 0 ) {
                        $('#count-lyon').addClass('termine');
                     }else{
                        $('#count-lyon').html('- '+ datelyon +' j');
                     }


                     if (datetoulouse < 0 ) {
                        $('#count-toulouse').addClass('termine');
                     }else{
                        $('#count-toulouse').html('- '+ datetoulouse+' j');
                     }


                     if (datelille < 0 ) {
                        $('#count-lille').addClass('termine');
                     }else{
                        $('#count-lille').html('- '+ datelille+' j');
                     }


                     if (dateparis < 0 ) {
                        $('#count-paris').addClass('termine');
                     }else{
                        $('#count-paris').html('- '+ dateparis+' j');
                     }




}
                           });