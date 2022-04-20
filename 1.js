$(document).ready(function() {
    an();
});

function an() {
    $('.im').animate({
            'width': '400px',
            'left': '-50%',
            'top': '-50%'
        }, 3000)
        .animate({
            'width': '200px',
            'left': '0',
            'top': '0'
        }, 3000, an);
}