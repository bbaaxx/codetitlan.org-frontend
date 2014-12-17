import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['ofcvm__main-wrap'],
  classNameBindings: ['showingMenu:ofcvm__main-wrap--showingMenu'],
  showingMenu: false,

  actions: {
    showMenu: function(){
      this.sendAction('openMenu');
    },
    closeMenu: function(){
      this.sendAction('closeMenu');
    },
    toggleMenu: function(){
      this.sendAction('toggleMenu');
    }
  }

});
