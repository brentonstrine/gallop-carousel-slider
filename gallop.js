$(document).ready(function(){
    // settings
    var autoPlay = true;
    
    // init vars
    var $gallop = $(".gallop");
    var $slides = $("li");
    var itms = $slides.length;
    var ct = 0;


    //create controls
    var controls = '<div class="autoplay"></div>';
    for (var i = 0; i < itms; i++) {
        controls += "<div class='picker' data-item='"+i+"'>"+i+"</div>";
    }
    $gallop.append("<div class='controls'/>").find(".controls").append(controls);
    var $pickers = $(".picker");

    // slide forward
    //$(".gallop").on("click", ".advance", function(){
    //    gallop();
    //});
    
    // slide backwards
    //$(".gallop").on("click", ".retreat", function(){
    //    ct = ct -2;
    //    gallop();
    //});
    
    // toggle autoplay
    $(".gallop").on("click", ".autoplay", function(){
        autoPlay = (autoPlay) ? false : true;
        autoGallop();
    });
    
    // slide pick handler
    $(".gallop").on("click", ".picker", function(){
        pickItem($(this).attr("data-item"));
    });

function gallop() {
    $slides.removeClass("active").eq(ct%itms).addClass("active");
    $pickers.removeClass("active").eq(ct%itms).addClass("active");
    ct++;
}
function pickItem(a) {
    $slides.removeClass("active").eq(a).addClass("active");
    $pickers.removeClass("active").eq(a).addClass("active");
    ct = ++a;
}
function autoGallop(){
    if(autoPlay){
        gallop();
        setTimeout( autoGallop, 3000 );
    }
}
        
autoGallop();

    
});
