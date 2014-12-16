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

	cp -r app/styles/gwsklea/fonts tmp/_fonts
	rm app/styles/gwsklea/* -rf
	cp ../../ghrepos/web-starter-kit/app/styleguide/* app/styles/gwsklea -r
	mv tmp/_fonts app/styles/gwsklea/fonts
	
start: installdeps
	ember serve

.PHONY: build cleandeps installdeps refreshdeps
