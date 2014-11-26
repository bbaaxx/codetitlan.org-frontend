import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'plantas',
    description: 'Articulos, herramientas e información de nuestros amigos color verde',
    topics: [],
    articles: []
  }, {
    id: 2,
    name: 'tecnología',
    description: 'Sobre la tecnología que usamos hoy y la que usaremos mañana',
    topics: [],
    articles: []
  }, {
    id: 3,
    name: 'política',
    description: 'Opiniones libres para alcanzar la libertad',
    topics: [],
    articles: []
  }, {
    id: 4,
    name: 'psicología',
    description: 'Un homenaje a una de las maquinarias mas complejas y maravillosas de la naturaleza',
    topics: [],
    articles: []
  },
];

export default DS.Model.extend({

  name: DS.attr(),
  description: DS.attr(),
  topics: DS.hasMany('topic', {async:true}),
  articles: DS.hasMany('article', {async:true})

}).reopenClass({FIXTURES:fixtures});
