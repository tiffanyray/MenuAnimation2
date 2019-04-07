$(document).ready(() => {
    let button = $('#mobile-menu');
    let menu = $('.nav-ul');
    let lis = $('.nav-li');

    button.click( function() {
        console.log('hello');

        menu.toggleClass('open');
        lis.toggleClass('open');
    });


})