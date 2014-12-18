import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('offcanvas-wrapper', 'OffcanvasWrapperComponent', {
  // specify the other units that are required for this test
  needs: [
    'component:offcanvas-menu-side',
    'component:offcanvas-menu-top',
    'component:material-hamburger'
    ]
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');
  // // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('action: "showMenu" sets showingMenu property to true', function(){
  expect(2);

  var component = this.subject();

  component.set('showingMenu',false);
  equal(component.get('showingMenu'), false);

  component.send('showMenu');
  equal(component.get('showingMenu'), true);

});

test('action: "closeMenu" sets showingMenu property to false', function(){
  expect(2);

  var component = this.subject();

  component.set('showingMenu',true);
  equal(component.get('showingMenu'), true);

  component.send('closeMenu');
  equal(component.get('showingMenu'), false);

});

test('action: "toggleMenu" toggles the showingMenu property', function(){
  expect(3);

  var component = this.subject();

  component.set('showingMenu',true);
  equal(component.get('showingMenu'), true);
  component.send('toggleMenu');
  equal(component.get('showingMenu'), false);
  component.send('toggleMenu');
  equal(component.get('showingMenu'), true);

});

test('inserts overlay container and registers event to close the menu', function(){
  expect(5);

  var component = this.subject();
  equal(component._state, 'preRender');

  var overlayContainer = $('.ofcvm__content-wrap__overlay')[0];
  equal(typeof overlayContainer, 'undefined');

  this.append();
  equal(component._state, 'inDOM');

  overlayContainer = $('.ofcvm__content-wrap__overlay')[0];
  ok(overlayContainer);

  var eventIsRegistered = $._data(overlayContainer, 'events')
                                    .hasOwnProperty('click');
  equal(eventIsRegistered, true);

});
