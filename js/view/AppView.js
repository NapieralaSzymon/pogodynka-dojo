define(["dojo/dom", "dojo/dom-construct"], function(dom, domConstruct) {

	var AppView = {

		render: function() {
			var dojoRoot = dom.byId("dojo-root");
			domConstruct.place("<h1>Pogodynka</h1>", dojoRoot);
		}

	};

	return AppView;

});
