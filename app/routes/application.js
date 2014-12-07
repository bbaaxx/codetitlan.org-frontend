import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('section');
  },
  actions: {
    alertSomething: function(msg){
      alert('Alert: %s', msg);
    }
  }
});
