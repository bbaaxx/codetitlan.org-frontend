import Ember from 'ember';
import MaterialRippleableMixin from 'cdtorgfe/mixins/material-rippleable';

module('MaterialRippleableMixin');

// Replace this with your real tests.
test('it works', function() {
  var MaterialRippleableObject = Ember.Object.extend(MaterialRippleableMixin);
  var subject = MaterialRippleableObject.create();
  ok(subject);
});
