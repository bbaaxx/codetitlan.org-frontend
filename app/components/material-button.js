import Ember from 'ember';
import Rippleable from '../mixins/material-rippleable';

export default Ember.Component.extend(Rippleable, {
  init: function(){
    this._super();
    console.log(' ======> Component Initialized <======= ');
  },
  classNames: ['wsk-button wsk-js-button'],
  classNameBindings: [
    'raised:wsk-button--raised',
    'ripple:RippleEffect',
    'colored:wsk-button--colored'
  ],
  tagName: 'button',
  raised: false,
  ripple: false,

  blurHandler: function(){
    this.$().blur();
  },
  willInsertElement: function(){
    this.$().on('mouseup', this.get('blurHandler').bind(this) );
  },

  // didInsertElement: function(){}

});
