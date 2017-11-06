'use strict';


angular.module('openWeatherApp.directives')
    .directive('weatherPanel', [function factory() {
        return {
            restrict: 'AEC',
            scope: {
                useDayForecast: '=showEntry',
                forecast: '=weatherPanel'
            },

            templateUrl: 'partials/detail_weather.html',

            link: function (scope, element, attrs) {
                // Get icon image url
                scope.getIconImageUrl = function (iconName) {
                    return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
                };

                scope.parseDate = function (time) {
                    return new Date(time * 1000);
                };
            }
        }
    }]);


