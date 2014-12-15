import Ember from 'ember';

export default Ember.Component.extend({
  externalTrigger: false,
  animationClass: function(){
    return this.get('externalTrigger') ?
      'material-design-hamburger__icon--to-arrow' :
      'material-design-hamburger__icon--from-arrow' ;
  }.property('externalTrigger'),
  classNames: ['material__hamburger', 'ofcvm__toggler'],

  clickHandler: function(evt){
    this.toggleProperty('externalTrigger');
    this.sendAction();
    console.log(evt);
  },
  didInsertElement: function(){
    // var hammerManager = new Hammer(this.$());
    // hammerManager.on('tap', this.get('clickHandler').bind(this));
    this.$().on('click', this.get('clickHandler').bind(this));

  },
});
