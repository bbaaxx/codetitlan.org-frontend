import Ember from 'ember';

export default Ember.Mixin.create({
  rippleContainer: null,
  rippleElement: null,
  rippleSize: 0,
  rippleBound: 0,
  rippleFrameCount: 0,
  rippleX: 0,
  rippleY: 0,


  didInsertElement: function(){
    // Don't bother if ripple = false
    if ( !this.get('ripple') ){return this._super();}

    // Call super first !
    this._super();

    // Create elements
    this.setProperties({
      rippleContainer: document.createElement('span'),
      rippleElement: document.createElement('span')
    });
    var rippleContainer = this.get('rippleContainer');
    var rippleElement = this.get('rippleElement');
    rippleContainer.classList.add('wsk-button__ripple-container');
    rippleElement.classList.add('Ripple');
    rippleContainer.appendChild(rippleElement);

    // Set the ripple size
    var bound = this.get('element').getBoundingClientRect();
    var rippleSize = Math.max(bound.width, bound.height) * 2 +'px';
    this.set('rippleSize', rippleSize);
    rippleElement.style.width = rippleSize;
    rippleElement.style.height = rippleSize;

    // Append ripple container to element
    this.get('element').appendChild(rippleContainer);

  },

  rippleHandler: function(evt){
    var x, y, bound;
    this.set('frameCount', 1);

    if (evt.pointers) {    // If using HammerJs...
      bound = evt.target.getBoundingClientRect();
      x = Math.round(evt.center.x - bound.left);
      y = Math.round(evt.center.y - bound.top);
      console.log(evt.srcEvent.clientY);
      console.log(evt.center);
    } else {     // ... else, vanilla Js
      bound = evt.currentTarget.getBoundingClientRect();
      if (evt.clientX === 0 && evt.clientY === 0) {
        x = Math.round(bound.width / 2);
        y = Math.round(bound.height / 2);
      } else {
        var clientX = evt.clientX ? evt.clientX : evt.touches[0].clientX;
        var clientY = evt.clientY ? evt.clientY : evt.touches[0].clientY;
        x = Math.round(clientX - bound.left);
        y = Math.round(clientY - bound.top);
      }
    }

    this.setProperties({ rippleX: x, rippleY: y});
    this.get('applyRippleStyles').bind(this)(true);

    // Don't like this here
    window.requestAnimationFrame(this.get('animFrameHandler').bind(this));

  }.on('mouseDown'),

  animFrameHandler: function(dippi){
    // Ember.Logger.debug('Dippi value: %s', dippi);
    // var fC = this.get('rippleFrameCount');
    // Ember.Logger.debug('Frame count changed on op: %s', fC);
    // Ember.Logger.debug('If check will be: %s', fC-- > 0);
    // if ( fC-- > 0 ) {
    //   window.requestAnimationFrame(this.get('animFrameHandler').bind(this));
    // } else {
    //   this.get('applyRippleStyles').bind(this)(false);
    // }
      this.get('applyRippleStyles').bind(this)(false);
  },

  applyRippleStyles: function(start){
    var transformString, scale, size, offset;

    offset =  'translate('+
              this.get('rippleX')+'px, '+
              this.get('rippleY')+'px)';

    if (start) {
      scale = 'scale(0.0001, 0.0001)';
      size = '1px';
    } else {
      scale = 'scale(1, 1)';
      size = this.get('rippleSize') + 'px';
      // if (recentering) {
      //   offset = 'translate(' + bound.width / 2 + 'px, ' +
      //     bound.height / 2 + 'px)';
      // }
    }

    transformString = 'translate(-50%, -50%) ' + offset + scale;

    var rippleElement = this.get('rippleElement');
    rippleElement.style.webkitTransform = transformString;
    rippleElement.style.msTransform = transformString;
    rippleElement.style.transform = transformString;

    if (start) {
      rippleElement.style.opacity = '0.4';
      rippleElement.classList.remove('is-animating');
    } else {
      rippleElement.style.opacity = '0';
      rippleElement.classList.add('is-animating');
    }
  }
});
