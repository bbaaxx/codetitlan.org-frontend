import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ofcvm__main-wrap'],
  classNameBindings: ['showingMenu:ofcvm__main-wrap--showingMenu'],
  showingMenu: false,

  initOverlay: function(){
    var overlayCloseMenu = function(){
      return this.set('showingMenu', false);
    }.bind(this);
    this.$('.ofcvm__content-wrap__overlay').on('click', overlayCloseMenu);
  }.on('didInsertElement'),

  actions: {
    showMenu: function(){
      this.set('showingMenu', true);
    },
    closeMenu: function(){
      this.set('showingMenu', false);
    },
    toggleMenu: function(){
      this.toggleProperty('showingMenu');
    }
  }

});
