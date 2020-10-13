/*
    This small script will append the "active" class to the navigation item
    matching the current page.

    With this you can adjust the select item visuals on the menu by the adjust the
    .active CSS properties .
*/

$(document).ready(function () {
    var url = window.location;
    $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
         return this.href == url;
    }).parent().addClass('active');
});
