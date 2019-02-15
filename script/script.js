
//when document is ready, on click of the button with a class='fa-play-circle' prevent the default event
const myApp = {};
//on créer une fonction sur myApp pour organiser correctement le code, ici myApp contient ce qui arrive dans myApp.setup
myApp.init = function () {

    myApp.setup();
};
//myApp est utilisé pour prévenir l'evenement par defaut
myApp.setup = function () {

    //ici on appelle les fonctions qui se produisent au click du button start
    /* myApp.drawShapes(); */
    myApp.startTimer();
    myApp.randomTrait();
    /* myApp.drawShapes(); */

};



/* myApp.drawShapes = function () {
    //faire apparaitre et disparaitre les line par class au fur et à mesure
    $('.line-red').fadeIn(1000, function () {
        $('.line-red').fadeOut(10000);
        $('.line-blue').fadeIn(10000, function () {
            $('.line-blue').fadeOut(10000);
            $('.line-green').fadeIn(10000, function () {
                $('.line-green').fadeOut('fast')
                $('.trait').fadeIn(10000, function () {
                    $('.trait').fadeOut('fast');
                });
            });
        });
    });
}; */




myApp.randomTrait = function () {

    $('button.play').on('click', function (event) {
        event.preventDefault();
        //je cherche à obtenir un nombre en demandant à js combien d'élément avec la class .trait sil y a (length), ce chiffre me permet ensuite d'utiliser Math.floor(Math.random()) pour avoir un chiffre entier aléatoirement
        $('.active').removeClass('active');
        const sizeTrait = $('.trait').length;
        const randNumb = Math.floor(Math.random() * sizeTrait) + 1;
        const randTest = $(`.trait:nth-child(${randNumb})`);
        randTest.addClass('active');//Even if I put display:block on my css, I need to add it there because it doesn't listen, comme j'ai déjà un display:none sur cette div avec une autre class.
        myApp.randomValue();
        /*  myApp.randCos(); */
    })


};
//make one Pi value become white, randmoly 
myApp.randomValue = function () {
    $('.active-question').removeClass('active-question');
    const sizeAngleValue = $('.active .pi').length;
    const randNumber = Math.floor(Math.random() * sizeAngleValue) + 1;
    const randPi = $(`.active .pi:nth-of-type(${randNumber})`);
    randPi.addClass('active-question');

}
//make one cos become white randomly
myApp.randCos = function () {
    const sizeCosValue = $('.active .cos').length;
    const randNum = Math.floor(Math.random() * sizeCosValue) + 1;

    const randCos = $(`.active .cos:nth-of-type(${randNum})`);

    randCos.css({ 'color': 'white', 'border': '1px solid black' });
}

myApp.startTimer = function () {
    console.log('start counter');
}

$(document).ready(function () {
    /*  myApp.drawShapes(); */
    myApp.init();
})









