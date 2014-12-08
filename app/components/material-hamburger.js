import Ember from 'ember';

export default Ember.Component.extend({
  externalTrigger: false,
  animationClass: function(){
    return this.get('externalTrigger') ?
      'material-design-hamburger__icon--to-arrow' :
      'material-design-hamburger__icon--from-arrow' ;
  }.property('externalTrigger'),
  classNames: ['ofcvm__hamburger', 'ofcvm__toggler'],

  clickHandler: function(evt){
    console.log(evt);
    this.toggleProperty('externalTrigger');
    this.sendAction();
  },
  didInsertElement: function(){
    var hammerManager = new Hammer(this.$()[0]);
    hammerManager.on('tap', this.get('clickHandler').bind(this));
  },
});
