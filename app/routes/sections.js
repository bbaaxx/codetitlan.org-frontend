import Ember from 'ember';

export default Ember.Route.extend({
  targetSection: 'section',
  beforeModel: function(transition){
    console.log(this.get('queryPrams'))
  },
  functionName: function(params){
    return this.store.find( this.get('targetSection') );
  },
  setupController: function(controller,model){
    this._super(controller,model);
  },
});
