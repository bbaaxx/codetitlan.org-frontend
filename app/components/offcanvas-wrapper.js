import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['offcanvas-main-wrap'],
  classNameBindings: ['showingMenu'],
  showingMenu: false,
  actions: {
    showMenu: function(){
      if ( !this.get('showingMenu') ) {
        this.set('showingMenu',true);
      }
      return false;
    },
    closeMenu: function(){
      if ( this.get('showingMenu') ) {
        this.set('showingMenu',false);
      }
      return false;
    },
    toggleMenu: function(){
      this.toggleProperty('showingMenu');
      return false;
    }
  }
});
