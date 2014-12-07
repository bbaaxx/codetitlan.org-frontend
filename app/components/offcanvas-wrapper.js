import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['offcanvasmenu__main__wrap'],
  classNameBindings: ['showingMenu:offcanvasmenu__main__wrap--showingMenu'],
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
      this.toggleProperty('showingMenu');
    }
  }

});
