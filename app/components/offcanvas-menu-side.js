import Ember from 'ember';
import Router from '../router';

export default Ember.Component.extend({
  classNames: ['ofcvm__menu ofcvm__menu__sidemenu'],

  actions: {
    closeMenu: function(){
      this.sendAction();
    }
  },



  debugRouter: function(){
    Ember.Logger.debug('Hello dudlyu');
    Ember.Logger.debug(this.get('controller'));
  }.on('didInsertElement')
});
