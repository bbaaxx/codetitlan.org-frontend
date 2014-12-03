import Ember from 'ember';

export default Ember.Route.extend({
  init: function(){
    this._super();
    console.log('Route section says:')
    console.log()
  },
  model: function(params){
    console.log(params);
  },

});
