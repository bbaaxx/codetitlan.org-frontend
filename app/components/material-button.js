import Ember from 'ember';
import Rippleable from '../mixins/material-rippleable';

export default Ember.Component.extend(Rippleable, {
  classNames: ['PaperButton'],
  classNameBindings: [
    'raised:PaperButton--raised',
    'ripple:RippleEffect'
  ],
  tagName: 'button',
  raised: false,
  ripple: false,


  rippleHandler: function(evt){
    console.log(' ======> Event <======= ');
    console.log(evt);
  },

  blurHandler: function(){
    this.$().blur();
  },

  willInsertElement: function(){
    this.$().on('mouseup', this.get('blurHandler').bind(this) );
  },

  didInsertElement: function(){


    if ( this.get('ripple') ) {
      // Create and setup the ripple container and element
      this.$()
        .append(Ember.$('<span clas="PaperButton-rippleContainer"><span class="Ripple">'));

      this.$()
        .on('mousedown touchstart', this.get('rippleHandler').bind(this));
    }

    // Hammer(this.$()[0]).on('tap', self.get('rippleHandler').bind(this));

    // this.$().on('mousedown touchstart', self.get('rippleHandler'));
    // this.$().attr('class').split(' ').contains('RippleEffect--recentering');

  }

});
