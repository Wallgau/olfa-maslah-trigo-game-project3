
//when document is ready, on click of the button with a class='fa-play-circle' prevent the default event
const myApp = {};
//on créer une fonction sur myApp pour organiser correctement le code, ici myApp contient ce qui arrive dans myApp.setup
myApp.init = function () {

    console.log('initialize');
    myApp.setup();
};
//myApp est utilisé pour prévenir l'evenement par defaut
myApp.setup = function () {

    //ici on appelle les fonctions qui se produisent au click du button start
    /* myApp.drawShapes(); */
    myApp.startTimer();
    myApp.randomTrait();
};



myApp.drawShapes = function () {
    //faire apparaitre et disparaitre les line par class au fur et à mesure
    $('.line-red').fadeIn(1000, function () {
        $('.line-red').fadeOut(10000);
        $('.line-blue').fadeIn(10000, function () {
            $('.line-blue').fadeOut(10000);
            $('.line-green').fadeIn(10000, function () {
                $('line-green').fadeOut(10000);
                $('.trait').fadeIn(10000);
                $('.trait').fadeOut(10000);
            });
        });
    });
};





myApp.randomTrait = function () {

    $('.fa-play-circle').on('click', function (event) {
        event.preventDefault();
        //je cherche à obtenir un nombre en demandant à js combien d'élément avec la class .trait sil y a (length), ce chiffre me permet ensuite d'utiliser Math.floor(Math.random()) pour avoir un chiffre entier aléatoirement
        const sizeTrait = $('.trait').length;
        const randNumb = Math.floor(Math.random() * sizeTrait);
        const randTest = $(`.trait:nth-child(${randNumb})`);
        console.log(randTest)
        randTest.addClass('active').css('display', 'block');//Even if I put display:block on my css, I need to add it there because it doesn't listen, comme j'ai de-éjà un display:none sur cette div avec une autre class.
    })


};


myApp.startTimer = function () {
    console.log('start counter');
}

$(document).ready(function () {
    myApp.drawShapes();
    myApp.init();
})









