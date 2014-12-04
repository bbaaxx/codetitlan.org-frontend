import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller,model){
    this._super(controller,model);
    controller.set('allSections', this.store.find('section') );
  },
  renderTemplate: function(controller,model){
    this._super(controller,model);
  },
  actions: {
    error: function(e){
      console.log('There was ane error: %s', e);
    },
    alertSomething: function(msg){
      alert('Alert: %s', msg);
    }
  }
});
