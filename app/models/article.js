import DS from 'ember-data';

var fx = [
  {
    id: 1,
    title: 'Title for article 1',
    body: 'Lorem ipsum dolor sit amet...'
  },{
    id: 2,
    title: 'Another title for another article',
    body: 'Dipity dipitty dah'
  }
];

export default DS.Model.extend({

  title: DS.attr(),
  body: DS.attr()

}).reopenClass({FIXTURES:fx});
