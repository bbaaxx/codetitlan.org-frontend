import Ember from 'ember';

export function stringToupper(input) {
  return input.toUpperCase();
}

export default Ember.Handlebars.makeBoundHelper(stringToupper);
