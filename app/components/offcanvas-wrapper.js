import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['offcanvas-main-wrap'],
  classNameBindings: ['showingMenu'],
  showingMenu: false,
  actions: {
    showMenu: function(){
      this.toggleProperty('showingMenu');
    },
    closeMenu: function(){
      this.set('showingMenu',false);
    },
    toggleMenu: function(){
      this.toggleProperty('showingMenu');
    }
  }
});
