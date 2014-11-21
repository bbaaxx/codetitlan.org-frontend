eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"cdtorgfe/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=cdtorgfe/app.js");

;eval("define(\"cdtorgfe/initializers/export-application-global\", \n  [\"ember\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=cdtorgfe/initializers/export-application-global.js");

;eval("define(\"cdtorgfe/router\", \n  [\"ember\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=cdtorgfe/router.js");

;eval("define(\"cdtorgfe/templates/application\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = Ember.Handlebars.template({\"compiler\":[6,\">= 2.0.0-beta.1\"],\"main\":function(depth0,helpers,partials,data) {\n      var stack1, buffer = \'\';\n      data.buffer.push(\"<h2 id=\'title\'>Bienvenido a Codetitlan</h2>\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {\"name\":\"_triageMustache\",\"hash\":{},\"hashTypes\":{},\"hashContexts\":{},\"types\":[\"ID\"],\"contexts\":[depth0],\"data\":data});\n      if (stack1 != null) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n    },\"useData\":true})\n  });//# sourceURL=cdtorgfe/templates/application.js");

;eval("define(\"cdtorgfe/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/app.jshint.js");

;eval("define(\"cdtorgfe/tests/cdtorgfe/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - cdtorgfe/tests/helpers\');\n    test(\'cdtorgfe/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'cdtorgfe/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/cdtorgfe/tests/helpers/resolver.jshint.js");

;eval("define(\"cdtorgfe/tests/cdtorgfe/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - cdtorgfe/tests/helpers\');\n    test(\'cdtorgfe/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'cdtorgfe/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/cdtorgfe/tests/helpers/start-app.jshint.js");

;eval("define(\"cdtorgfe/tests/cdtorgfe/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - cdtorgfe/tests\');\n    test(\'cdtorgfe/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'cdtorgfe/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/cdtorgfe/tests/test-helper.jshint.js");

;eval("define(\"cdtorgfe/tests/helpers/resolver\", \n  [\"ember/resolver\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=cdtorgfe/tests/helpers/resolver.js");

;eval("define(\"cdtorgfe/tests/helpers/start-app\", \n  [\"ember\",\"cdtorgfe/app\",\"cdtorgfe/router\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=cdtorgfe/tests/helpers/start-app.js");

;eval("define(\"cdtorgfe/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/router.jshint.js");

;eval("define(\"cdtorgfe/tests/test-helper\", \n  [\"cdtorgfe/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=cdtorgfe/tests/test-helper.js");

/* jshint ignore:start */

define('cdtorgfe/config/environment', ['ember'], function(Ember) {
  var prefix = 'cdtorgfe';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */


});

if (runningTests) {
  require('cdtorgfe/tests/test-helper');
} else {
  require('cdtorgfe/app')['default'].create({});
}

/* jshint ignore:end */
