$(document).ready(function(){
    $('.slider').slick({
        arrow:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        centerMode:true,
        variableWight:true,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:2
                }
            }
        ]
    });
});