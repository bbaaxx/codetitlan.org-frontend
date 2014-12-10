import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){
    return this.modelFor('application')
      .findBy('slug', params.section);
  },
  setupController: function(controller,model){
    this._super(controller,model);
    var sectionClassString = 'section section__wrap section--';
    controller.set( 'sectionClass', sectionClassString + model.get('slug') );
  },
  renderTemplate: function(controller,model){
    if ( !model ) { return this.transitionTo('index'); }
    this._super(controller,model);
  }

});
