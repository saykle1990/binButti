$(document).ready(function () {

    $(function () {
        // init controller
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

        // build scenes
        new ScrollMagic.Scene({triggerElement: "#parallax-header"})
            .setTween("#parallax-header > .header-bg", {y: "80%", ease: Linear.easeNone})
            //.addIndicators()
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".parallax-2"})
            .setTween(".parallax-2 > .services-image", {y: "80%", ease: Linear.easeNone})
            //.addIndicators()
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".parallax-3"})
            .setTween(".parallax-3 > .mission-image", {y: "80%", ease: Linear.easeNone})
            .addTo(controller);
    });

//animation events
    $(function () {
        // init controller
        var controller = new ScrollMagic.Controller();


        new ScrollMagic.Scene({triggerElement: "#parallax-header", duration: "200%"})
            .setClassToggle("#content", "fadeInUp") // add class toggle
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#our-services-parent", duration: 300})
            .setTween(".services-list li", {opacity: 1})
            .setClassToggle(".services-list li", "flipInY")// add class toggle
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".user-message", duration: 300})
            .setTween(".user-message", {opacity: 1})
            .setClassToggle("#user-message-text", "slideInUp")// add class toggle
            .addTo(controller);

    });
//svg

    /*$(function(){
     function pathPrepare ($el) {
     var lineLength = $el[0].getTotalLength();
     $el.css("stroke-dasharray", lineLength);
     $el.css("stroke-dashoffset", lineLength);
     }

     var $word = $("path#word");
     var $dot = $("path#dot");

     // prepare SVG
     pathPrepare($word);
     pathPrepare($dot);

     // init controller
     var controller = new ScrollMagic.Controller();

     // build tween
     var tween = new TimelineMax()
     .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
     .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
     .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

     // build scene
     var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
     .setTween(tween)
     .addIndicators() // add indicators (requires plugin)
     .addTo(controller);
     });*/


    $(function () {

        var $el, leftPos, newWidth, $mainNav = $(".main-nav");

        $mainNav.append("<span id='magic-line'></span>");

        var $magicLine = $("#magic-line");


        $magicLine
            .width($("a.current_page_item").width())
            .css("left", $("a.current_page_item").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());

        $(".main-nav a").hover(function () {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.width();

            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            }, 100);
        }, function () {
            $magicLine.stop().animate({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });
        });
    });




});



