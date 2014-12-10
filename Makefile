build: cleandist

	ember build --environment production

cleandeps:

	@echo "refreshing dependencies ..."
	@rm -rf node_modules bower_components
	@echo "done!"

cleandist:
	
	@echo "cleaning dist folder"
	@rm ./dist/* -rf
	@echo "done!"

installdeps:

	npm install && bower install

refreshdeps: cleandeps installdeps

updategwsk:

	rm app/styles/gwsklea/* -rf
	cp ../../ghrepos/web-starter-kit/app/styleguide/* app/styles/gwsklea -r

start: installdeps
	ember serve

.PHONY: build cleandeps installdeps refreshdeps
