//créer un array ou object avec valeur
const answersPiList = ["π/6", "π/4", "π/3", "2π/3", "3π/4", "5π/6", "7π/6", "5π/4", "4π/3", "3π/2", "5π/3", "7π/4", "11π/6"];
//when document is ready, on click of the button with a class='fa-play-circle' prevent the default event
const myApp = {};
//myApp fonction is created to organise the document. init will contain the setup function
myApp.init = function () {

    myApp.setup();
};

myApp.setup = function () {

    myApp.randomTrait();
    myApp.drawShapes();

};


myApp.drawShapes = function () {
    $('#start').css('display', 'none');
    $('.questions').css('display', 'none');
    //make the lines fadeIn/fadeOut in sequence
    $('.line-red').fadeIn(5000, function () {
        $('.line-red').fadeOut(1000);
        $('.line-blue').fadeIn(5000, function () {
            $('.line-blue').fadeOut(1000);
            $('.line-green').fadeIn(5000, function () {
                $('.line-green').fadeOut(1000)
                $('.trait').fadeIn(2000, function () {
                    $('.questions').css('display', 'block');
                    $('.memorise-instruction').css('display', 'none');
                    $('.memorise-test').css('display', 'block');
                    $('#start').css('display', 'block');
                });
            });
        });
    });
};



myApp.randomTrait = function () {

    $('button.play').on('click', function (event) {
        event.preventDefault();

        //Get the length of the list of all the element with the class trait to get an random number between 0 and that value

        $('.memorise-test').css('display', 'none');
        $('.trait').css('display', 'none');
        $('.active').removeClass('active');
        const sizeTrait = $('.trait').length;
        const randNumb = Math.floor(Math.random() * sizeTrait) + 1;
        const randTest = $(`.trait:nth-child(${randNumb})`);
        //ajoute attr car jQuery manipule le DOM, our contourner le inline css
        randTest.addClass('active').attr('style', '');
        //JQuery fadeOut add a style attr (DOM manipulation). Need to empty the style attribute for the css display property to work
        myApp.randomValue();
        /*  myApp.randCos(); */
    })


};

//make one Pi value become white, randmoly 
myApp.randomValue = function () {
    myApp.cleanClass();
    //get randomly one of the pi div and add a class od 'active-question'
    const sizeAngleValue = $('.active .pi').length;
    const randNumber = Math.floor(Math.random() * sizeAngleValue) + 1;
    const randPi = $(`.active .pi:nth-of-type(${randNumber})`);
    randPi.addClass('active-question');
    //the pi div with tha class of active question represent the one with the value who is hide by changing color text, so find, add in the ndex of 0 the value of that one ('active-question')
    const answerTrue = $('.active-question').attr('data-answer');

    //put this value randomly inside of one of the 3 buttons the true value, it will always be the index of 0 in the answersList array
    const randNumbButton = $('.answers').length;
    const randButton = Math.floor(Math.random() * randNumbButton) + 1;
    const randBut = $(`.answers:nth-of-type(${randButton})`);
    randBut
        .addClass('linkAnswer')
        .removeClass('answers')
        .removeClass('expectingAnswer')
        .text(`${answerTrue}`);


    const wrongAnswers = answersPiList.filter(function (answer) {
        return answer !== answerTrue
    })

    const randValueBut = $(`.answers`).length;
    const randInput = Math.floor(Math.random() * randValueBut) + 1;
    const wrongAnswersLength = wrongAnswers.length;
    const randValueButton = Math.floor(Math.random() * (wrongAnswersLength));
    const valuenNewArray = wrongAnswers[randValueButton];
    $(`.answers:nth-of-type(${randInput})`)
        .text(`${valuenNewArray}`)
        .removeClass('expectingAnswer')

    //remove the answer form the wrong answer array to prevent duplicate
    const randInputIndex = wrongAnswers.indexOf(valuenNewArray);
    //remove the value
    wrongAnswers.splice(1, randInputIndex);

    const newWrongAnswersLength = wrongAnswers.length;
    let lastRandValueButton = Math.floor(Math.random() * (newWrongAnswersLength));
    $('.expectingAnswer')
        .text(`${wrongAnswers[lastRandValueButton]}`)
        .removeClass('expectingAnswer')

    myApp.feedBack();
}
//to give a feedback about the choice answer provide by the user
myApp.feedBack = function () {
    //I use .off avoid that the function been called again and again...remove the button from previous action
    $('.answers').off().on('click', function (e) {
        e.preventDefault();

        const isAnswered = $('.feedback-user').hasClass('submitted');
        //to prevent unexpected behavior, if the user has already made a choice and try to click on other answer, it is blocking it
        if (isAnswered === true) {
            alert('You have already made a choice, please press play to continue')
        }

        if (isAnswered !== true) {
            $('.feedback-user').addClass('submitted');
            $('.feedback-negatif')
                .css('display', 'block')
                .append(`<i class="far fa-thumbs-down"></i>`);
            $('.feedback-positif').css('display', 'none');
            $('.try-again').css('display', 'block');
        }


    })

    $('.linkAnswer').off().on('click', function (e) {
        e.preventDefault();
        const isAnswered = $('.feedback-user').hasClass('submitted');
        $('.active-question').css('color', 'inherit');
        if (isAnswered === true) {
            alert('You have already made a choice, please press play to continue')
        }

        if (isAnswered !== true) {
            $('.feedback-user').addClass('submitted');
            $('.feedback-positif')
                .css('display', 'block')
                .append(`<i class="far fa-thumbs-up"></i>`);
            $('.well-done').css('display', 'block');
            $('.feedback-negatif').css('display', 'none');

        }
    })

}


//make one cos become white randomly
myApp.randCos = function () {
    const sizeCosValue = $('.active .cos').length;
    const randNum = Math.floor(Math.random() * sizeCosValue) + 1;
    const randCos = $(`.active.cos: nth - of - type(${randNum})`);
    randCos.css({ 'color': 'white', 'border': '1px solid black' });
}




myApp.cleanClass = function () {
    $('memorise-test').css('display', 'none').attr('');
    $('.try-again').css('display', 'none').attr('');
    $('.well-done').css('display', 'none').attr('');
    $('.feedback-negatif').css('display', 'none');
    $('.feedback-positif').css('display', 'none');
    $('.feedback-user').removeClass('submitted');
    $('.fa-thumbs-up').remove();
    $('.fa-thumbs-down').remove();
    //to avoid to get 2 empty value 
    $('.active-question').removeClass('active-question');
    //to avoid to get mutiple true answer
    $('.linkAnswer').text('').attr('');
    $('.linkAnswer').removeClass('linkAnswer').addClass('answers')
    $('.answers').each(function () {
        $(this).addClass('expectingAnswer').text('');
    });
}
$(document).ready(function () {
    /*  myApp.drawShapes(); */
    myApp.init();
})
