import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('section', 'Section', {
  // Specify the other units that are required for this test.
  needs: ['model:article']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
