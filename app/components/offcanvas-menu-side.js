import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ofcvm__menu ofcvm__menu__sidemenu'],
  actions: {
    closeMenu: function(){
      this.sendAction();
    }
  }
});
