$(document).ready(function() {
    $('.navbar').hover(function() {
        $('a').addClass('add');
    }, function() {
        $('a').removeClass("add");
    },100);
});