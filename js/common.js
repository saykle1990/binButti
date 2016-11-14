$(document).ready(function () {
    // init controller
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#parallax-header"})
        .setTween("#parallax-header > .header-bg", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);

    /*new ScrollMagic.Scene({triggerElement: "#trigger1"})
     .setTween(".logo-header", {y: "120%", ease: Linear.easeNone})
     .addIndicators()
     .addTo(controller);

     new ScrollMagic.Scene({triggerElement: "#trigger1"})
     .setTween(".logo-description", {y: "120%", ease: Linear.easeNone})
     .addIndicators()
     .addTo(controller);*/
});



