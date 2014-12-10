import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['ofcvm__main-wrap'],
  classNameBindings: ['showingMenu:ofcvm__main-wrap--showingMenu'],
  showingMenu: false,

  actions: {
    showMenu: function(){
      if ( !this.get('showingMenu') ) {
        this.set('showingMenu',true);
      }
    },
    closeMenu: function(){
      if ( this.get('showingMenu') ) {
        this.set('showingMenu',false);
      }
    },
    toggleMenu: function(){
      // this.toggleProperty('showingMenu');
      this.sendAction('toggleMenu');
    }
  }

});
