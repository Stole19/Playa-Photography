
//  Preloader


let preload = () => {

    const blocks = document.querySelectorAll('.preloader .blocks .block');

    //  Down, Left, Up, Right

    let interval = 0;

    blocks.forEach((block, i) => {

        setTimeout(() => {

            animate(block, i);

        }, interval);

        interval += 500;

    });

    function animate(block, index) {

        let position = index;

        setInterval(() => {

            switch (position) {

                case 0:
                    block.style.top = '40px';
                    position = 3;
                    break;

                case 1:
                    block.style.left = '40px';
                    position = '0';
                    break;

                case 2:
                    block.style.top = '0px';
                    position = 1;
                    break;

                case 3:
                    block.style.left = '0px';
                    position = 2;
                    break;

            }

        }, 1500);
    }

    const preload_text = document.querySelector('.preloader .preloading-text');

    let dots = 1;

    setInterval(() => {

        switch (dots) {

            case 1:

                preload_text.textContent = '...Loading';
                dots++;
                break;

            case 2:

                preload_text.textContent = '..Loading.';
                dots++;
                break;

            case 3:

                preload_text.textContent = '.Loading..';
                dots++;
                break;

            case 4:

                preload_text.textContent = 'Loading...';
                dots++;
                break;

            case 5:

                preload_text.textContent = '.Loading..';
                dots++;
                break;

            case 6:

                preload_text.textContent = '..Loading.';
                dots = 1;
                break;

        }

    }, 500);
}

preload();


const preloader = document.querySelector('.preloader');

function finishedLoading() {

    preloader.style.opacity = 0;

    setTimeout(() => {

        preloader.style.display = 'none';

    }, 500);
}


// window.onload = function () {

//     setTimeout(() => {

//         finishedLoading();

//     }, 6000);

// }



$(window).on('load', function () {

    setTimeout(() => { finishedLoading(); }, 6000);

    $('#status').delay(2500).fadeOut();
    $('#preloader').delay(2500).fadeOut('slow');
    $('body').delay();
    $('.hide').delay(2500).fadeIn();

});


//  End of Preloader







//  AOS

AOS.init();


new WOW().init();


window.sr = ScrollReveal();


// About Us - Image

sr.reveal('.image', {

    duration: 2000,
    origin: 'right',
    distance: '10px'

});




// Gallery

const cards = document.querySelectorAll('.card');
function toggleOpen() {
    this.classList.toggle('open');
    for (i = 0; i < cards.length; i++) {
        if (cards[i] !== this) {
            cards[i].classList.toggle('close')
        }
    }
}
cards.forEach(card => card.addEventListener('click', toggleOpen));




//  Newsletter Section


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {

    container.classList.add('right-panel-active');

});

signInButton.addEventListener('click', () => {

    container.classList.remove('right-panel-active');

})