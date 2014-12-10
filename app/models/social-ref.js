import DS from 'ember-data';

var fx = [
  {
    id: 1,
    name: 'facebook',
    description: 'La página oficial de Codetitlan en Facebook',
    linkTarget: 'https://www.facebook.com/codetitlan',
    isTopLevel: true,
    iconName: 'fa-facebook'
  },{
    id: 2,
    name: 'twitter',
    description: 'El tweetstream de Codetitlan en Twitter',
    linkTarget: 'https://twitter.com/codetitlan',
    isTopLevel: true,
    iconName: 'fa-twitter'
  },{
    id: 3,
    name: 'Google+',
    description: 'Página oficial de Codetitlan en Google+',
    linkTarget: 'https://plus.google.com/+CodetitlanOrgMexico',
    isTopLevel: true,
    iconName: 'fa-google-plus'
  }, {
    id: 4,
    name: 'Github',
    description: 'Los repositorios (siempre) públicos de Codetitlan en Github',
    linkTarget: 'https://github.com/codetitlan',
    isTopLevel: true,
    iconName: 'fa-github'
  }
];

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  linkTarget: DS.attr('string'),
  isTopLevel: DS.attr('boolean'),
  iconName: DS.attr('string')
}).reopenClass({FIXTURES:fx});
