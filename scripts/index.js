$(function () {
    $("#nameform").on('submit', function (e) {
        e.preventDefault(); //stop reloading on some browsers
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var newHTML = '<h1>' + fname + ' ' + lname + '</h1>';
        $(".jumbotron").removeClass('d-none').html(newHTML);
        //Or
        //$(".jumbotron").removeClass('d-none');
        //$(".jumbotron").html(newHTML);
        return false;  //prevents reload on submit on different browsers
    });
});