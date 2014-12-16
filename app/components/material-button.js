import Ember from 'ember';
import Rippleable from '../mixins/material-rippleable';

export default Ember.Component.extend(Rippleable, {
  classNames: ['wsk-button wsk-js-button'],
  classNameBindings: [
    'raised:wsk-button--raised',
    'ripple:wsk-js-ripple-effect',
    'colored:wsk-button--colored'
  ],
  tagName: 'button',
  raised: false,
  ripple: false,

  actionHandler: function(){
    this.$().blur();
    this.sendAction();
  },
  willInsertElement: function(){
    this.$().on('mouseup', this.get('actionHandler').bind(this) );
  },

});
