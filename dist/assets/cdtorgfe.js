eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"cdtorgfe/adapters/application\", \n  [\"ember\",\"ember-data\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var DS = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = DS.FixtureAdapter.extend({\n      latency: 50,\n      queryFixtures: function(fixtures, query) {\n        console.log(query);\n        var key = Ember.keys(query)[0];\n        return fixtures.filterBy(key, query[key]);\n      },\n\n    });\n  });//# sourceURL=cdtorgfe/adapters/application.js");

;eval("define(\"cdtorgfe/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=cdtorgfe/app.js");

;eval("define(\"cdtorgfe/initializers/export-application-global\", \n  [\"ember\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=cdtorgfe/initializers/export-application-global.js");

;eval("define(\"cdtorgfe/models/section\", \n  [\"ember-data\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n\n    var fixtures = [\n      {\n        id: 1,\n        name: \'blog\',\n        description: \'aqui vive nuestro diario\'\n      }\n    ];\n\n    __exports__[\"default\"] = DS.Model.extend({\n      name: DS.attr(),\n      description: DS.attr()\n    }).reopenClass({FIXTURES:fixtures});\n  });//# sourceURL=cdtorgfe/models/section.js");

;eval("define(\"cdtorgfe/router\", \n  [\"ember\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=cdtorgfe/router.js");

;eval("define(\"cdtorgfe/routes/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n      model: function(){\n        return this.store.find(\'section\');\n      },\n    });\n  });//# sourceURL=cdtorgfe/routes/application.js");

;eval("define(\"cdtorgfe/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"<h1>Bienvenido a Codetitlan</h1>\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=cdtorgfe/templates/application.js");

;eval("define(\"cdtorgfe/templates/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\';\n\n\n      return buffer;\n      \n    });\n  });//# sourceURL=cdtorgfe/templates/index.js");

;eval("define(\"cdtorgfe/tests/adapters/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - adapters\');\n    test(\'adapters/application.js should pass jshint\', function() { \n      ok(true, \'adapters/application.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/adapters/application.jshint.js");

;eval("define(\"cdtorgfe/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/app.jshint.js");

;eval("define(\"cdtorgfe/tests/cdtorgfe/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - cdtorgfe/tests/helpers\');\n    test(\'cdtorgfe/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'cdtorgfe/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/cdtorgfe/tests/helpers/resolver.jshint.js");

;eval("define(\"cdtorgfe/tests/cdtorgfe/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - cdtorgfe/tests/helpers\');\n    test(\'cdtorgfe/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'cdtorgfe/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/cdtorgfe/tests/helpers/start-app.jshint.js");

;eval("define(\"cdtorgfe/tests/cdtorgfe/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - cdtorgfe/tests\');\n    test(\'cdtorgfe/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'cdtorgfe/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/cdtorgfe/tests/test-helper.jshint.js");

;eval("define(\"cdtorgfe/tests/cdtorgfe/tests/unit/adapters/application-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - cdtorgfe/tests/unit/adapters\');\n    test(\'cdtorgfe/tests/unit/adapters/application-test.js should pass jshint\', function() { \n      ok(true, \'cdtorgfe/tests/unit/adapters/application-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/cdtorgfe/tests/unit/adapters/application-test.jshint.js");

;eval("define(\"cdtorgfe/tests/cdtorgfe/tests/unit/models/section-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - cdtorgfe/tests/unit/models\');\n    test(\'cdtorgfe/tests/unit/models/section-test.js should pass jshint\', function() { \n      ok(true, \'cdtorgfe/tests/unit/models/section-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/cdtorgfe/tests/unit/models/section-test.jshint.js");

;eval("define(\"cdtorgfe/tests/cdtorgfe/tests/unit/routes/application-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - cdtorgfe/tests/unit/routes\');\n    test(\'cdtorgfe/tests/unit/routes/application-test.js should pass jshint\', function() { \n      ok(true, \'cdtorgfe/tests/unit/routes/application-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/cdtorgfe/tests/unit/routes/application-test.jshint.js");

;eval("define(\"cdtorgfe/tests/helpers/resolver\", \n  [\"ember/resolver\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=cdtorgfe/tests/helpers/resolver.js");

;eval("define(\"cdtorgfe/tests/helpers/start-app\", \n  [\"ember\",\"cdtorgfe/app\",\"cdtorgfe/router\",\"cdtorgfe/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=cdtorgfe/tests/helpers/start-app.js");

;eval("define(\"cdtorgfe/tests/models/section.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/section.js should pass jshint\', function() { \n      ok(true, \'models/section.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/models/section.jshint.js");

;eval("define(\"cdtorgfe/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/router.jshint.js");

;eval("define(\"cdtorgfe/tests/routes/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/application.js should pass jshint\', function() { \n      ok(true, \'routes/application.js should pass jshint.\'); \n    });\n  });//# sourceURL=cdtorgfe/tests/routes/application.jshint.js");

;eval("define(\"cdtorgfe/tests/test-helper\", \n  [\"cdtorgfe/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=cdtorgfe/tests/test-helper.js");

;eval("define(\"cdtorgfe/tests/unit/adapters/application-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'adapter:application\', \'ApplicationAdapter\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'serializer:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var adapter = this.subject();\n      ok(adapter);\n    });\n  });//# sourceURL=cdtorgfe/tests/unit/adapters/application-test.js");

;eval("define(\"cdtorgfe/tests/unit/models/section-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleForModel = __dependency1__.moduleForModel;\n    var test = __dependency1__.test;\n\n    moduleForModel(\'section\', \'Section\', {\n      // Specify the other units that are required for this test.\n      needs: []\n    });\n\n    test(\'it exists\', function() {\n      var model = this.subject();\n      // var store = this.store();\n      ok(!!model);\n    });\n  });//# sourceURL=cdtorgfe/tests/unit/models/section-test.js");

;eval("define(\"cdtorgfe/tests/unit/routes/application-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:application\', \'ApplicationRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=cdtorgfe/tests/unit/routes/application-test.js");

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
