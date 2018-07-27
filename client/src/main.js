


// Object responsible for acquiring data from API
function stackOverflowSearch(searchTerm) {
        
   
    searcher.search = function() {
        var deferred = $.Deferred();
        if (forecast) {
            deferred.resolve(forecast);
            return deferred.promise();
        }
        forecast = {};
        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=metric&mode=json';
        $.ajax({
            url: url,
            type: 'GET',
            data: {
                q: city,
                units: 'metric',
                mode: 'json'
            },
            dataType: 'jsonp',
            success: function(response) {
                if (response.cod == 200) {
                    forecast.weather = response.list.map(this.getWeather);
                    forecast.city = response.city.name;
                    forecast.country = this.getCountryName(response.city.country);
                    var sumPressure = 0;
                    forecast.weather.forEach(function(day) {
                        sumPressure += day.pressure;
                    })
                    forecast.averagePressure = Math.round(sumPressure / forecast.weather.length);
                    deferred.resolve(forecast);
                } else {
                    deferred.reject();
                }
            }.bind(this),
            error: function() {
                deferred.reject();
            }
        });
        return deferred.promise();
    };

    return searcher;
}