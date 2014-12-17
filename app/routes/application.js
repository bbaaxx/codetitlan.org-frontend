import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('section');
  },
  setupController: function(controller,model){
    this._super(controller,model);

    this.store.find('social-ref')
      .then(function(socialLinks){
        controller.set('topmenuItems', socialLinks);
      });
    this.store.find('section')
      .then(function(sections){
        controller.set('sidemenuItems', sections);
      });

    controller.set('showingMenu', false);

  },
  actions: {
    alertSomething: function(msg){
      alert('Alert: %s', msg);
    },
    toggleMenu: function(){
      this.get('controller').toggleProperty('showingMenu');
    },
    openMenu: function(){
      this.get('controller').set('showingMenu', true);
    },
    closeMenu: function(){
      this.get('controller').set('showingMenu', false);
    }
  },
  willTransition: function(){
    alert('I did');
  }
});
