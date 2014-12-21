import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

setResolver(resolver);

document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

// PhantomJS doesn't support bind yet
// https://github.com/ariya/phantomjs/issues/10522#issuecomment-66449127
Function.prototype.bind = Function.prototype.bind || function (thisp) {
    var fn = this;
    return function () {
        return fn.apply(thisp, arguments);
    };
}; 

QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
document.getElementById('ember-testing-container').style.visibility = containerVisibility;
