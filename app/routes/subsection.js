import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){
    return this.modelFor('sections')
      .get('subSections')
      .findBy('slug',params.subSection);
  },
  renderTemplate: function(controller,model){
    if ( !model ) { return this.transitionTo('index'); }
    this._super(controller,model);
  }

});

