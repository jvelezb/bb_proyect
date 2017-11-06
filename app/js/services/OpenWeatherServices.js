'use strict';


angular.module('openWeatherApp.services')
    .value('maxForecast', 7)
    .value('citiesArray', ['Amsterdam', 'Paris', 'Berlin', 'Athens', 'Madrid', 'London', 'Moscow'])
    .factory('openWeatherMap', function ($resource) {
        var apiKey = '3d8b309701a13f65b660fa2c64cdc517';
        var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

        return $resource(apiBaseUrl + ':path/:subPath?q=:location',
            {
                APPID: apiKey,
                method: 'GET',
                mode: 'json',
                timeout: 3,
                units: 'metric',
                lang: 'en'
            },
            {
                queryWeather: {
                    method: 'JSONP',
                    params: {
                        path: 'weather'
                    },
                    isArray: false,
                    headers: {
                        'x-api-key': apiKey
                    }
                },
                queryForecast: {
                    method: 'JSONP',
                    params: {
                        path: 'forecast'
                    },
                    isArray: false,
                    headers: {
                        'x-api-key': apiKey
                    }
                },
                queryForecastDaily: {
                    method: 'JSONP',
                    params: {
                        path: 'forecast',
                        subPath: 'daily',
                        cnt: 7
                    },
                    isArray: false,
                    headers: {
                        'x-api-key': apiKey
                    }
                }
            }
        )
    })
    .config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://api.openweathermap.org/data/2.5/**'
        ]);
    });
