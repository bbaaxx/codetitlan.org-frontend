import Ember from 'ember';

export default Ember.Route.extend({
  targetSection: null,

  model: function(params){
    var self = this;
    return this.store.find('section')
      .then(function(sectionsArray){
        self.set( 'targetSection', sectionsArray.findBy('slug', params.subSection) );
        return self.get('targetSection');
      });
  },
  renderTemplate: function(controller,model){
    if ( !this.get('targetSection') ) {
      this.transitionTo('index');
      return;
    }
    this._super(controller,model);
  },
});

