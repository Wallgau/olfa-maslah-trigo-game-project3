$(document).ready(function (){
        //when document is ready, on click of the button with a class='fa-play-circle' prevent the default event
        $('.fa-play-circle').on('click', function (event) {
                event.preventDefault();
                console.log('play start!');
                //target all line and make them desappear slowly with fadeOut('slow');
                $('.line-red').fadeIn(5000,function(){
                        $('.line-red').fadeOut(10000);
                        $('.line-blue').fadeIn(10000, function(){
                                $('.line-blue').fadeOut(5000);
                                $('.line-green').fadeIn(10000,function(){
                                        $('line-green').fadeOut(5000);
                                        $('.trait').fadeIn(5000);
                                });
                        });
                        
                }); 
                /* $('.line-blue').fadeIn(5000, function () {
                        $('.line-blue').fadeOut(5000);
                }); */     
               
        });

                
});
             

        
