import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('offcanvas-wrapper', 'OffcanvasWrapperComponent', {
  // specify the other units that are required for this test
  needs: ['component:offcanvas-menu-side', 'component:offcanvas-menu-top']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});
