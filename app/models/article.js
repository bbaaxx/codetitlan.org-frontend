import DS from 'ember-data';

var fx = [
  {
    id: 1,
    title: 'Title for article 1',
    body: 'Lorem ipsum dolor sit amet...',

  }, {
    id: 2,
    title: 'Another title for another article',
    body: 'Dipity dipitty dah'
  }, {
    id: 3,
    title: 'Another title for another article for the second time',
    body: 'Dipity dipitty dah, dappity dappity duhh'
  }
];

export default DS.Model.extend({

  title:            DS.attr('string'),
  body:             DS.attr('string'),
  publishDate:      DS.attr('date'),
  lastChangeDate:   DS.attr('date')

}).reopenClass({FIXTURES:fx});
