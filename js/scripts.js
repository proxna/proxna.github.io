/**
 * Created by GPDellKonto on 2016-07-26.
 */
var imgCouter=1;
var imageTable=['images/cover1.png', 'images/cover2.png', 'images/cover3.png'];
$(document).ready(function () {
    $('#stickoftruth').click(function(){
        window.open("https://play.google.com/store/apps/details?id=com.pawelg.paweg.stickoftruth&hl=pl", "_blank");
    });
    $('#PoEcalc').click(function(){
        window.open("https://play.google.com/store/apps/details?id=com.pawelg.paweg.poeorbcalculator", "_blank");
    });
    $('#sortMan').click(function(){
        window.open("https://play.google.com/store/apps/details?id=com.FatPixel.sorman", "_blank");
    });
    window.setInterval(function(){
        $('body').fadeTo('slow', 0.3, function(){
            $(this).css('background-image', 'url('+ imageTable[imgCouter%3]+')');
        }).fadeTo('slow',1);
        ++imgCouter
    }, 3000);
});