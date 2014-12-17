import Ember from 'ember';
import Rippleable from '../mixins/material-rippleable';

export default Ember.Component.extend(Rippleable, {

  classNames: ['wsk-button wsk-js-button'],
  classNameBindings: [
    'raised:wsk-button--raised',
    'ripple:wsk-js-ripple-effect',
    'colored:wsk-button--colored',
    'fab:wsk-button--fab',
    'icon:wsk-button--icon'
  ],
  tagName: 'button',
  raised: false,
  ripple: false,
  fab: false,
  icon: false,

  actionHandler: function(){
    this.$().blur();
    this.sendAction();
  },
  willInsertElement: function(){
    this.$().on('mouseup', this.get('actionHandler').bind(this) );
  },

});
