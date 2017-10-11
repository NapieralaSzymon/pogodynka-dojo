define(["dojo/_base/declare", "dojo/_base/lang", "dojo/html", "dojo/on", "dojo/request", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
		"dojo/text!./templates/WeatherWidget.html"], function(declare, lang, html, on, request, _WidgetBase, _TemplatedMixin, template) {
	return declare([_WidgetBase, _TemplatedMixin], {

		weather: {
			temperature: "brak",
			pressure: "brak",
			humidity: "brak"
		},

		templateString: template,

		postCreate: function() {
			this.inherited(arguments);
			this.own(on(this.buttonNode, "click", lang.hitch(this, this.searchWeather)));
		},

		searchWeather: function() {
			request("http://api.openweathermap.org/data/2.5/weather?units=metric&appid=5915c5a2795f5bcb8ac72eac102364e8&q=" + this.searchNode.value, {
				handleAs: "json",
				headers: {
					"X-Requested-With": null
				}
			}).then(lang.hitch(this, this.refreshWeather));
		},

		refreshWeather: function(openWeatherMapResponse) {
			this.weather.temperature = openWeatherMapResponse.main.temp + "&deg;C";
			this.weather.pressure = openWeatherMapResponse.main.pressure + "hPa";
			this.weather.humidity = openWeatherMapResponse.main.humidity + "%";
			html.set(this.temperatureNode, this.weather.temperature);
			html.set(this.pressureNode, this.weather.pressure);
			html.set(this.humidityNode, this.weather.humidity);
		}

	});
});
