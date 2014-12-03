import Ember from 'ember';

export function stringCapitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export default Ember.Handlebars.makeBoundHelper(stringCapitalize);
