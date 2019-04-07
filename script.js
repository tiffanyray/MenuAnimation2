$(document).ready(() => {
    let button = $('.button');
    let menu = $('.menu');

    button.click( function() {
        console.log('hello');

        menu.toggleClass('open');
    });
})