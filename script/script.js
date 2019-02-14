
    //when document is ready, on click of the button with a class='fa-play-circle' prevent the default event
const myApp = {};
//on créer une fonction sur myApp pour organiser correctement le code, ici myApp contient ce qui arrive dans myApp.setup
myApp.init = function() {
    console.log('initialize');
    myApp.setup();
};
//myApp est utilisé pour prévenir l'evenement par defaut
myApp.setup = function() {
    $('.fa-play-circle').on('click', function (event) {
        event.preventDefault();
        console.log('play start!');
        //ici on appelle les fonctions qui se produisent au click du button start
        myApp.drawShapes();
        myApp.startTimer();
    });
}

myApp.drawShapes = function() {
    //faire apparaitre et disparaitre les line par class au fur et à mesure
    $('.line-red').fadeIn(1000, function () {
        $('.line-red').fadeOut(10000);
        $('.line-blue').fadeIn(10000, function () {
            $('.line-blue').fadeOut(10000);
            $('.line-green').fadeIn(10000, function () {
                $('line-green').fadeOut(10000);
                $('.trait').fadeIn(10000);
            });
        });
    });
}

myApp.startTimer = function() {
    console.log('start counter');
}

$(document).ready(function () {
    myApp.init();
})

        
        

                



        
