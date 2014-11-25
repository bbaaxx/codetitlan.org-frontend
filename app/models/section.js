import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'blog',
    description: 'aqui vive nuestro diario'
  }
];

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr()
}).reopenClass({FIXTURES:fixtures});
