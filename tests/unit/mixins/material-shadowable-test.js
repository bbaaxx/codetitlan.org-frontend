import Ember from 'ember';
import MaterialShadowableMixin from 'cdtorgfe/mixins/material-shadowable';

module('MaterialShadowableMixin');

// Replace this with your real tests.
test('it works', function() {
  var MaterialShadowableObject = Ember.Object.extend(MaterialShadowableMixin);
  var subject = MaterialShadowableObject.create();
  ok(subject);
});
