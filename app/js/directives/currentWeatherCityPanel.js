'use strict';


angular.module('openWeatherApp.directives')
    .directive('currentWeatherPanel', [function factory() {
        return {
            restrict: 'AEC',

            scope: {
                currentWeatherData: '=showEntry',
                current: '=currentWeatherPanel',
                forecastData: '=forecastDataChart'
            },

            templateUrl: 'partials/current_weather.html',

            link: function (scope, element, attrs) {
                // Get icon image url
                scope.$watch('forecastData', function (result) {
                    if (result) {
                        var listLabels = [];
                        var listData = [];

                        result.list.forEach(function (element) {
                            listLabels.push(scope.parseDate(element.dt));
                            listData.push(element.temp.day);
                        });
                        scope.labels = listLabels;
                        scope.data = listData;
                        console.log(scope.data)
                        scope.onClick = function (points, evt) {
                            console.log(points, evt);
                        };
                        scope.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
                        scope.options = {
                            scales: {
                                yAxes: [
                                    {
                                        id: 'y-axis-1',
                                        type: 'linear',
                                        display: true,
                                        position: 'left'
                                    },
                                    {
                                        id: 'y-axis-2',
                                        type: 'linear',
                                        display: true,
                                        position: 'right'
                                    }
                                ]
                            }
                        };

                    }


                });


                scope.getIconImageUrl = function (iconName) {
                    return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
                };

                scope.parseDate = function (time) {
                    var dateNew = new Date(time * 1000);
                    var day = dateNew.getDate();
                    var month = dateNew.getMonth();
                    return month + " - " + day;
                };
            }
        }
    }]);
