import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return this.store.findAll('article');
  },

  actions: {
    deleteRecord: function(record){
      record.destroyRecord();
    },
    saveRecord: function(record){
      record.save();
      this.transitionTo('articles');
    },
    cancelEdit: function(record){
      // TODO: How to improve this ? to make it go back to where it came from
      if ( record && record.get('isNew') ){
        record.destroyRecord();
        this.transitionTo('articles');
      } else {
        record.rollback();
        this.transitionTo('article', record);
      }
    }
  } // end actions

});
