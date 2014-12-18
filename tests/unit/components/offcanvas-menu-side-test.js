import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('offcanvas-menu-side', 'OffcanvasMenuSideComponent', {
  // specify the other units that are required for this test
  needs: ['component:material-button']
});

var getMockSections = function() {
  return [
    {
      id: 1,
      name: 'mocksection',
      slug: 'section',
      hasSubsections: true,
      subSections: [
        {
          id: 2,
          name: 'mocksubsection',
          slug: 'subsection',
          parentSection: 1,
          isSubsection: true
        }
      ]
    },{
      id: 2,
      name: 'mocksubsection',
      slug: 'subsection',
      isSubsection: true,
      parentSection: {
        id: 1,
        name: 'mocksection',
        slug: 'section',
        hasSubsections: true,
        subSections: [
          {
            id: 2,
            name: 'mocksubsection',
            slug: 'subsection',
            parentSection: 1,
            isSubsection: true
          }
        ]
      }
    }
  ];
};

test('it renders', function() {
  expect(2);
  var component = this.subject();
  equal(component._state, 'preRender');
  this.append();
  equal(component._state, 'inDOM');
});

test('it renders with menu items', function(){
  expect(1);
  var component = this.subject();
  component.set('sidemenuItems', getMockSections());
  var $component = this.append();
  equal(component._state, 'inDOM');
});

test('it inserts section item elements',function(){
  expect(1);
  var component = this.subject();
  component.set('sidemenuItems', getMockSections());
  var $component = this.append();
  var itemText = $component.find('.ofcvm__sidemenu__link--section').text();
  equal(itemText, 'mocksection');
});

test('it inserts subsection item elements',function(){
  expect(1);
  var component = this.subject();
  component.set('sidemenuItems', getMockSections());
  var $component = this.append();
  var itemText = $component.find('.ofcvm__sidemenu__link--subsection').text();
  equal(itemText, 'mocksubsection');
});

test('action: closeMenu action triggers bound action', function() {
  expect(1);
  var component = this.subject();
  this.append();
  var targetObject = {
    externalAction: function(){
      ok(true, 'external Action was called!');
    }
  };
  component.set('action', 'externalAction');
  component.set('targetObject', targetObject);
  component.send('closeMenu');
});
