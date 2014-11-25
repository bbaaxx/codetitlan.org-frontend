import Ember from 'ember';
import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
  latency: 50,
  queryFixtures: function(fixtures, query) {
    console.log(query);
    var key = Ember.keys(query)[0];
    return fixtures.filterBy(key, query[key]);
  },

});
