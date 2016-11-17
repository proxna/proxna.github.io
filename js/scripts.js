var toTopVisible=false;
var developmentIsVisible = false;

$(document).ready(function () {

    var windowWidth=$(window).width();
    var windowHeight=$(window).height();
    var $developmentWrapper = $('.development-wrapper');

    $(window).resize(function(){
        windowWidth=$(window).width();
        windowHeight=$(window).height();
        if(windowWidth<768 && toTopVisible){
            $('#toHome').fadeOut();
            toTopVisible=false;
        }
        else if(windowWidth>=768 && !toTopVisible && $(document).scrollTop()>=windowHeight){
            $('#toHome').fadeIn();
            toTopVisible=true;
        }
    });

    //projects click
    $('#stickoftruth').click(function(){
        window.open("https://play.google.com/store/apps/details?id=com.pawelg.paweg.stickoftruth&hl=pl", "_blank");
    });
    $('#PoEcalc').click(function(){
        window.open("https://play.google.com/store/apps/details?id=com.pawelg.paweg.poeorbcalculator", "_blank");
    });
    $('#sortMan').click(function(){
        window.open("https://play.google.com/store/apps/details?id=com.FatPixel.sorman", "_blank");
    });
    $('#PoEweb').click(function(){
        window.open("https://proxna.github.io/Path-Of-Exile-Orb-Calculator/", "_blank");
    });
    $('#cyberAttack').click(function(){
        window.open("https://play.google.com/store/apps/details?id=com.fatpixel.cyberattack", "_blank");
    });
    $('#underTen').click(function(){
        window.open("https://proxna.github.io/under10kcontest/", "_blank");
    });
    $('#escapeFromWell').click(function () {
        window.open("https://proxna.itch.io/escape-from-well", "_blank")
    });
    $('#toHome').hide();
    //scroll events
    $(window).scroll(function () {
        //totopbutton show/hide
        var scroll_top=$(document).scrollTop();
        if(scroll_top>=windowHeight && !toTopVisible && windowWidth>=768){
            $('#toHome').fadeIn();
            toTopVisible=true;
        }
        else if(toTopVisible && scroll_top<windowHeight){
            $('#toHome').fadeOut();
            toTopVisible=false;
        }

        //skills and experience
        var bottom_of_window = scroll_top + windowHeight;
        $('.experience .content .hidden').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();

            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({
                    'opacity':'1',
                    'margin-left': '0'
                },600);
            }
        });

        var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

        if(bottom_of_window > middle_of_developmentWrapper && !developmentIsVisible){


            $('.skills-bar-container li').each( function(){

                var $barContainer = $(this).find('.bar-container');
                var dataPercent = parseInt($barContainer.data('percent'));
                var elem = $(this).find('.progressbar');
                var percent = $(this).find('.percent');
                var width = 0;

                var id = setInterval(frame, 20);

                function frame() {
                    if (width >= dataPercent) {
                        clearInterval(id);
                    } else {
                        width++;
                        elem.css("width", width+"%");
                        percent.html(width+" %");
                    }
                }
            });
            developmentIsVisible = true;
        }
    });
    //toTopClick
    $('#toHome').click(function () {
        $('#home').ScrollTo({
            duration:250
        });
    });
    //menuItemsClick
    $('#toSkills').click(function () {
        $('#skills').ScrollTo({
            duration:250
        });
    });
    $('#toProjects').click(function () {
        $('#projects').ScrollTo({
            duration:250
        });
    });
    $('#toContact').click(function () {
        $('#contact').ScrollTo({
            duration:250
        });
    });
});