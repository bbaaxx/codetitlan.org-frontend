import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('article');
  },
  renderTemplate: function(){
    this.render('articles/editor')
  }
});
