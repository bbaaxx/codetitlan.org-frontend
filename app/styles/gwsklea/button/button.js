window.addEventListener('load', function() {
  'use strict';

  var blurHandlerGenerator = function(element) {
    return function() { element.blur(); };
  };

  var buttonElements = document.querySelectorAll('.wsk-js-button');

  for (var i = 0; i < buttonElements.length; i++) {
    var buttonElement = buttonElements[i];
    var blurHandler = blurHandlerGenerator(buttonElement);
    if (buttonElement.classList.contains('wsk-js-ripple-effect')) {
      var rippleContainer = document.createElement('span');
      rippleContainer.classList.add('wsk-button__ripple-container');
      var ripple = document.createElement('span');
      ripple.classList.add('wsk-ripple');
      rippleContainer.appendChild(ripple);
      ripple.addEventListener('mouseup', blurHandler);
      buttonElement.appendChild(rippleContainer);
    }
    buttonElement.addEventListener('mouseup', blurHandler);
  }
});
