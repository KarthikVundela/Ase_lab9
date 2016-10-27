(function(){
    
    var WeatherFactory =function($http)
    {
        var factory = {};
        
        factory.getWeather = function(CityName)
        {
            var API_KEY = "806519438b870cf07ca005cfbc6891cc";
            var API_URI = "http://api.openweathermap.org/data/2.5/weather?q=" + CityName + "&APPID="+ API_KEY
            return $http.get(API_URI)
        };
        return factory;
    }
    WeatherFactory.$inject = ['$http'];
    angular.module("SplitWise").factory("WeatherFactory",WeatherFactory);
    
}());