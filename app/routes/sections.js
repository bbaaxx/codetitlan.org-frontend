import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){
    return this.modelFor('application').findBy('slug', params.section);
  },
  renderTemplate: function(controller,model){
    if ( !model ) { return this.transitionTo('index'); }
    this._super(controller,model);
  }

});
