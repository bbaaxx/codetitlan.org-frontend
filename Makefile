build:

	rm ./dist/* -rf
	ember build --environment production

cleandeps:

	rm -rf node_modules bower_components

installdeps:

	npm install && bower install

refreshdeps: cleandeps installdeps


.PHONY: build cleandeps installdeps refreshdeps
