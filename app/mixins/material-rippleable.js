import Ember from 'ember';

export default Ember.Mixin.create({
  rippleElement: null,
  rippleSize: 0,
  rippleBound: 0,
  rippleFrameCount: 0,
  rippleX: 0,
  rippleY: 0,

  rippleInitializer: function(){

    // If no ripple do nothing BUT!!
    // TODO (Implement cleanup for dynamic ripple setting change)
    if ( !this.get('ripple') ){
      return this.$('wsk-button__ripple-container').remove();
    }


    // Append the ripple container and ripple element
    this.$()
      .append(Ember.$('<span clas="wsk-button__ripple-container"><span class="Ripple">'));

    // Set the ripple element size
    var parentElement = this.get('element');
    var rippleElement = parentElement.querySelector('.Ripple');
    var bound = parentElement.getBoundingClientRect();
    var rippleSize =  Math.max(bound.width, bound.height) * 2;
    rippleElement.style.width = rippleSize + 'px';
    rippleElement.style.height = rippleSize + 'px';

    // Refactor
    var _rippleElement = Ember.$('<span class="Ripple">');
    _rippleElement.width = rippleSize + 'px';
    _rippleElement.height = rippleSize + 'px';
    console.log(_rippleElement);

    // Save the values on instance properties
    this.set('rippleElement', rippleElement);
    this.set('rippleBound', bound);
    this.set('rippleSize', rippleSize);

    // Bind the mousedown event
    this.$().on('mousedown touchstart', this.get('rippleHandler').bind(this));

    // neva 4get
    // new Hammer(this.$()[0]).on('tap', this.get('rippleHandler').bind(this));
    // this.$().attr('class').split(' ').contains('RippleEffect--recentering');

  }.observes('ripple').on('didInsertElement'),

  rippleHandler: function(evt){

    var x, y, bound;
    this.set('frameCount', 1);

    // Hammered
    if (evt.pointers) {

      bound = evt.target.getBoundingClientRect();
      x = Math.round(evt.center.x - bound.left);
      y = Math.round(evt.center.y - bound.top);
      console.log(evt.srcEvent.clientY);
      console.log(evt.center);

    } else {

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

    this.get()

    this.set('rippleX', x);
    this.set('rippleY', y);
    this.get('setRippleStyles').bind(this)(true);
    window.requestAnimationFrame(this.get('animFrameHandler').bind(this));
  },
  animFrameHandler: function(){
    var fC = this.get('rippleFrameCount');
    if ( fC-- > 0 ) {
      window.requestAnimationFrame(this.get('animFrameHandler').bind(this));
    } else {
      this.get('setRippleStyles').bind(this)(false);
    }
  },

  setRippleStyles: function(start){
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


  },
});
