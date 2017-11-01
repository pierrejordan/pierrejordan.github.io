var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
        triggerElement: "#animation-anchor",
        duration: (window.innerHeight - 5),
        triggerHook: "onLeave"
    })
    .setPin("#video")
    .addTo(controller);

AOS.init();

document.getElementById('videoTag').play();
