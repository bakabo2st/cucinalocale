var scrollMagicController = new ScrollMagic.Controller();

$('.js-button-marker').each(function() {
  var currentElem = this;

  var tweenButton = new TimelineMax().from(currentElem, 0.5, {
    y: 30,
    opacity: 0
  });
  var scene = new ScrollMagic.Scene({
      triggerElement: currentElem,
      triggerHook: 'onEnter',
      offset: 100,
      duration: 150,
      ease: Power4.easeInOut
    })
    .setTween(tweenButton)
    .addTo(scrollMagicController);
});