'use strict';

angular.module('openWeatherApp.controllers')
    .controller('OpenWeatherCtrl',
        ['$scope', 'openWeatherMap', 'citiesArray', 'maxForecast',
            function ($scope, openWeatherMap, citiesArray, maxForecast) {

                $scope.message = '';
                $scope.hasState = '';

                // Expose example locations to $scope
                $scope.citiesArray = citiesArray;
                $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

                // On initialization load data for first example entry
                openWeatherMap.queryForecastDaily({
                    location: citiesArray[0]
                }).$promise.then(function (result) {
                    $scope.forecast = result;
                });

                openWeatherMap.queryWeather({
                    location: citiesArray[0]
                }).$promise.then(function (result) {
                    $scope.currentWeather = result;
                });


                // Get icon image url
                $scope.getIconImageUrl = function (iconName) {
                    return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
                };

                //Get the total number of days for the forecast
                $scope.rangeForecast = function () {
                    var arr = [];

                    for (var i = 1; i < maxForecast; i++) {
                        arr.push(i);
                    }
                    return arr;


                };


            }]);
