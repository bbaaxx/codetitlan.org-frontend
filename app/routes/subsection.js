import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params){
    return this.modelFor('sections')
      .get('subSections')
      .findBy('slug',params.subSection);
  },
  setupController: function(controller,model){
    this._super(controller,model);
    var classStr =  'subsection section__subsection '+
                    'section__subsection__wrap section__subsection--';
    controller.set('subsectionClass', classStr + model.get('slug'));
  },
  renderTemplate: function(controller,model){
    if ( !model ) { return this.transitionTo('index'); }
    this._super(controller,model);
  }

});

