import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['PaperButton'],
  classNameBindings: [
    'raised:PaperButton--raised',
    'ripple:RippleEffect'
  ],
  tagName: 'button',
  raised: false,
  ripple: false,

  didInsertElement: function(){
    var self = this;
    var blurHandler = function() { self.$().blur(); }

    if (this.get('ripple')) {
      var rippleContainer = Ember.$('<span clas="PaperButton-rippleContainer">');
      var ripple = Ember.$('<span clas="Ripple">');
      rippleContainer.append(ripple);
      this.$().append(rippleContainer);

    }
    this.$().on('mouseup', blurHandler);

  }
});
