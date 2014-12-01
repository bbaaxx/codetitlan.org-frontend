import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'principal',
    description: 'Articulos, herramientas e información de nuestros amigos color verde',
    linkTarget: 'index'
  },{
    id: 2,
    name: 'botánica',
    description: 'Articulos, herramientas e información de nuestros amigos color verde',
    linkTarget: 'dummy'
  }, {
    id: 3,
    name: 'tecnología',
    description: 'Sobre la tecnología que usamos hoy y la que usaremos mañana',
    linkTarget: 'dummy'
  }, {
    id: 4,
    name: 'política',
    description: 'Opiniones libres para alcanzar la libertad',
    linkTarget: 'dummy'
  }, {
    id: 5,
    name: 'psicología',
    description: 'Un homenaje a una de las maquinarias mas complejas y maravillosas de la naturaleza',
    linkTarget: 'dummy',
    subSections: [6]
  }, {
    id: 6,
    name: 'pnl',
    description: 'Programación neuro-linguistica, una perspectiva diferente',
    linkTarget: 'dummy',
    parentSection: 5
  }, {
    id: 7,
    name: 'herbolaria',
    description: 'Plantas que nos ayudan a ser mejores',
    linkTarget: 'dummy',
    parentSection: 2
  },
];

export default DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string'),
  linkTarget: DS.attr('string'),
  subSections: DS.hasMany('section', {async:true, inverse:'parentSection'}),
  parentSection: DS.belongsTo('section', {async:true, inverse:'subSections'}),

  hasSubsections: function() {
    return this.get('subSections.length') || false;
  }.property('subSections'),
  isSubsection: function() {
    var parentSection = this.get('parentSection');
    return parentSection || false;
  }.property('parentSection')

}).reopenClass({FIXTURES:fixtures});
