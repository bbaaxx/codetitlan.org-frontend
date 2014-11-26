import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['main-container'],
  classNameBindings: ['showMenu'],
  showMenu: true,
  dippi: 'ty doo',
  actions: {
    toggleMenu: function(){
      this.toggleProperty('showMenu');
      return false;
    }
  }
});
