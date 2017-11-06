'use strict';


angular.module('openWeatherApp.directives')
    .directive('citiesPanel', ['openWeatherMap', function factory(openWeatherMap) {
        return {
            restrict: 'EAC',

            scope: {
                citiesArray: '=showEntry',
                forecast: '=citiesPanel',
                currentW: '=ciudadClima'
            },
            templateUrl: 'partials/citiesPanel.html',
            link: function (scope, element, attrs, promise) {


                scope.setLocation = function (loc) {
                    scope.location = loc;

                    scope.hasState = 'has-success';

                    // On initialization load data for first example entry
                    openWeatherMap.queryForecastDaily({
                        location: scope.location
                    }).$promise.then(function (result) {
                        scope.forecast = result;

                    });

                    openWeatherMap.queryWeather({
                        location: scope.location
                    }).$promise.then(function (result) {
                        scope.currentW = result;
                    });


                };
                scope.parseDate = function (time) {
                    return new Date(time * 1000);
                };

            }


        }
    }]);