import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('articles', function() {

    this.resource('article', {path:'/:article_id'}, function(){
      this.route('edit');
    });
    this.route('create');

  });

  this.resource('sections', {path: '/:section'}, function() {
    this.resource('subsection', { path: '/:subSection' }, function() {

    });
  });


});

export default Router;
