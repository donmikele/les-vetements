

$(document).ready(function () {

    $('.carousel').carousel({
        interval: 5000
    })

    //Option1
    $(".item10").hover(function () {
        if ($(".menuOne").is(":hidden")) {
            $(".menuTwo").slideUp();
            $(".menuThree").slideUp();
            $(".menuFour").slideUp();
            $(".menuOne").show("fast");
        }
            });
    $(".menuOne").hover(function () {

        if (($(".menuOne").is(":hover"))) {
            $(".menuTwo").slideUp();
            $(".menuThree").slideUp();
            $(".menuFour").slideUp();
            $(".menuOne").show("fast");
        }
        else {
            $(".menuOne").slideUp();
        }
    });

    //Option2
    $(".item11").hover(function () {

        if ($(".menuTwo").is(":hidden")) {
            $(".menuOne").slideUp();
            $(".menuThree").slideUp();
            $(".menuFour").slideUp();
            $(".menuTwo").show("fast");
        }
    });
    $(".menuTwo").hover(function () {
        if (($(".menuTwo").is(":hover"))) {
            $(".menuOne").slideUp();
            $(".menuThree").slideUp();
            $(".menuFour").slideUp();
            $(".menuTwo").show("fast");
        }
        else {
            $(".menuTwo").slideUp();
        }
    });

    //Option3
    $(".item12").hover(function () {

        if ($(".menuThree").is(":hidden")) {
            $(".menuOne").slideUp();
            $(".menuTwo").slideUp();
            $(".menuFour").slideUp();
            $(".menuThree").show("fast");
        }
    });
    $(".menuThree").hover(function () {
        if (($(".menuThree").is(":hover"))) {
            $(".menuOne").slideUp();
            $(".menuTwo").slideUp();
            $(".menuFour").slideUp();
            $(".menuThree").show("fast");
        }
        else {
            $(".menuThree").slideUp();
        }
    });


    //Option4
    $(".item13").hover(function () {

        if ($(".menuFour").is(":hidden")) {
            $(".menuOne").slideUp();
            $(".menuTwo").slideUp();
            $(".menuThree").slideUp();
            $(".menuFour").show("fast");
        }
    });
    $(".menuFour").hover(function () {
        if (($(".menuFour").is(":hover"))) {
            $(".menuOne").slideUp();
            $(".menuTwo").slideUp();
            $(".menuThree").slideUp();
            $(".menuFour").show("fast");
        }
        else {
            $(".menuFour").slideUp();
        }
    });

});
