define(["dojo/dom", "dojo/dom-construct", "wercia/widgets/weather/WeatherWidget",], function(dom, domConstruct, WeatherWidget) {

	var AppView = {

		render: function() {
			var dojoRoot = dom.byId("dojo-root");
			new WeatherWidget().placeAt(dojoRoot);
		}

	};

	return AppView;

});
