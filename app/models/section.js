import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'arqueología',
    slug: 'arqueologia',
    description: 'El mundo de lo antiguo visto con ojos modernos',
    articles: [1,2,4,5,6,7,8]
  }, {
    id: 2,
    name: 'botánica',
    slug: 'botanica',
    description: 'Articulos, herramientas e información de nuestros amigos color verde'
  }, {
    id: 3,
    name: 'tecnología',
    slug: 'tecnologia',
    description: 'Sobre la tecnología que usamos hoy y la que usaremos mañana',
    subSections: [8]
  }, {
    id: 4,
    name: 'política',
    slug: 'politica',
    description: 'Opiniones libres que persiguen la libertad'
  }, {
    id: 5,
    name: 'psicología',
    slug: 'psicologia',
    description: 'Un homenaje a una de las maquinarias mas complejas y maravillosas de la naturaleza',
    subSections: [6]
  }, {
    id: 6,
    name: 'PNL',
    slug: 'pnl',
    description: 'Programación neuro-linguistica, una perspectiva diferente',
    parentSection: 5,
    articles: [3]
  }, {
    id: 7,
    name: 'herbolaria',
    slug: 'herbolaria',
    description: 'Plantas que nos ayudan a ser mejores',
    parentSection: 2
  }, {
    id: 8,
    name: 'desarrollo',
    slug: 'herbolaria',
    description: 'Plantas que nos ayudan a ser mejores',
    parentSection: 3
  }
];

export default DS.Model.extend({

  name: DS.attr('string'),
  slug: DS.attr('string'),
  description: DS.attr('string'),
  subSections: DS.hasMany('section', {async:true, inverse:'parentSection'}),
  parentSection: DS.belongsTo('section', {async:true, inverse:'subSections'}),
  articles: DS.hasMany('article', {async: true}),

  hasSubsections: function() {
    return this.get('subSections.length').get('isTruthy');
  }.property('subSections'),
  isSubsection: function() {
    return this.get('parentSection').get('isTruthy');
  }.property('parentSection')

}).reopenClass({FIXTURES:fixtures});
