import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['material-hamburger'],
  hamburgerToggler: null,

  hamburgerClassSwapper: function(){
    return this.get('hamburgerToggler') ?
      'material-hamburger__layer--to-arrow' :
      'material-hamburger__layer--from-arrow' ;
  }.property('hamburgerToggler'),

  hamburgerHandler: function(evt){
    this.toggleProperty('hamburgerToggler');
  }.on('click'),

});
