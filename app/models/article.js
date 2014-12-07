import DS from 'ember-data';

var fx = [
  {
    id: 1,
    title: 'Title for article 1',
    body: 'Lorem ipsum dolor sit amet...',
    section: 1

  }, {
    id: 2,
    title: 'Another title for another article',
    body: 'Dipity dipitty dah',
    section: 1
  }, {
    id: 3,
    title: 'Another title for another article for the second time',
    body: 'Dipity dipitty dah, dappity dappity duhh',
    section: 6
  }
];

export default DS.Model.extend({

  title:            DS.attr('string'),
  body:             DS.attr('string'),
  publishDate:      DS.attr('date'),
  lastChangeDate:   DS.attr('date'),
  section:          DS.belongsTo('section', {async:true}),

  allSections: function(){
    return this.store.find('section');
  }.property()

}).reopenClass({FIXTURES:fx});
