import Ember from 'ember';

export default Ember.Component.extend({
  sidemenuItems: null,
  classNames: ['ofcvm__menu ofcvm__sidemenu'],
  actions: {
    closeMenu: function(){
      this.sendAction();
    }
  }
});
