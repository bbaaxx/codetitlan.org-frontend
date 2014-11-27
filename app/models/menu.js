import DS from 'ember-data';

var fx = [
  {
    id: 1,
    name: 'main',
    description: 'Menú principal',
    entries: [1,2,3]
  }
];

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  entries: DS.hasMany('menu-entry',{async:true}),
}).reopenClass({FIXTURES:fx});
