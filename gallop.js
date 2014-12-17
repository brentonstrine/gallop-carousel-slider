$(document).ready(function(){
    // settings
    var autoPlay = true;
    var autoPlaySpeed = 3000;

    // init vars
    var $gallop = $(".gallop");
    var $slides = $("li");
    var itms = $slides.length;
    var ct = 0;
    var controls = '';
    var timeout;

    // create controls
    controls += '<div class="retreat">&laquo;</div>';
    controls += '<div class="autoplay"></div>';
    for (var i = 0; i < itms; i++) {
        controls += "<div class='picker' data-item='"+i+"'>"+(i+1)+"</div>";
    }
    controls += '<div class="advance">&raquo;</div>';
    $gallop.append("<div class='controls'/>").find(".controls").append(controls);
    var $pickers = $(".picker");

    // slide forward
    $(".gallop").on("click", ".advance", function(){
        gallop();
    });

    // slide backwards
    $(".gallop").on("click", ".retreat", function(){
        ct = ct -2;
        gallop();
    });

    // toggle autoplay
    $(".gallop").on("click", ".autoplay", function(){
        $(this).toggleClass("off");
        autoPlay = (autoPlay) ? false : true;
        autoGallop();
    });

    // slide pick handler
    $(".gallop").on("click", ".picker", function(){
        pickItem($(this).attr("data-item"));
    });

    // advance slide
    function gallop() {
        $slides.removeClass("active").eq(ct%itms).addClass("active");
        $pickers.removeClass("active").eq(ct%itms).addClass("active");
        ct++;
    }

    // go to specific slide
    function pickItem(a) {
        $slides.removeClass("active").eq(a).addClass("active");
        $pickers.removeClass("active").eq(a).addClass("active");
        ct = ++a;
    }

    // autoplay
    function autoGallop(){
        if(autoPlay){
            gallop();
            timeout = setTimeout( autoGallop, autoPlaySpeed );
        } else {
            clearTimeout(timeout);
        }
    }

    // initiate autoplay
    autoGallop();

});
