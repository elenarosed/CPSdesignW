const menuButton = document.querySelector('.menu-button');
const feedbackButton = document.querySelector('.feedback-button');
const callButton = document.querySelector('.call-button');
const menuCallButton = document.querySelector('.menu-call-button');
const menuFeedbackButton = document.querySelector('.menu-feedback-button');

const popupMenu = document.querySelector('#menu');
const popupFeedback = document.querySelector('#feedback');
const popupCall = document.querySelector('#call');

let openModal = function(e){
    e.preventDefault();

    /*open popup corresponding to the clicked button */
    if (e.target.classList.contains('menu-button')) {
        popupMenu.classList.add('open');
    }
    if (e.target.classList.contains('feedback-button')) {
        popupMenu.classList.remove('open');
        popupCall.classList.remove('open');
        popupFeedback.classList.add('open');
    }
    if (e.target.classList.contains('call-button')) {
        popupMenu.classList.remove('open');
        popupFeedback.classList.remove('open');
        popupCall.classList.add('open');
    }
};

let closeModal = function(e){
    e.preventDefault();
    /* check if click was on close-button or outside popup area - then close popup */
    if (!e.target.classList.contains('menu-button')
        && !e.target.classList.contains('feedback-button')
        && !e.target.classList.contains('call-button') ) {
            /* close menu popup */
            if (e.target.classList.contains('menu-close-button') || !e.target.closest('.menu')) {
                popupMenu.classList.remove('open');
            }
            /* close feedback popup */
            if ( e.target.classList.contains('feedback-close-button') || !e.target.closest('.feedback') ){
                popupFeedback.classList.remove('open');
            }
            /* close call popup */
            if ( e.target.classList.contains('call-close-button') || !e.target.closest('.call') ){
                popupCall.classList.remove('open');
            }
    }
};


/* opening modal windows */
menuButton.addEventListener('click', openModal);
feedbackButton.addEventListener('click', openModal);
callButton.addEventListener('click', openModal);
/* opening modal windows from menu popup */
menuCallButton.addEventListener('click', openModal);
menuFeedbackButton.addEventListener('click', openModal);

/* closing modal windows */
document.addEventListener('click', closeModal);


