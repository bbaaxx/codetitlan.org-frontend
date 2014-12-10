import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('admin', {path: '/admin'}, function(){

    this.resource('articles', {path: '/articulos'}, function() {
      this.resource('article', {path:'/:article_id'}, function(){
        this.route('edit', {path: '/editar'});
      });
      this.route('create', {path: '/nuevo'});
    });

  });

  this.resource('sections', {path: '/:section'}, function() {
    this.resource('subsection', { path: '/:subSection' }, function() {});
  });

});

export default Router;
