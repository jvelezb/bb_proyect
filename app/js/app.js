'use strict';

angular.module('openWeatherApp', [
    'ngRoute',
    'openWeatherApp.filters',
    'openWeatherApp.services',
    'openWeatherApp.directives',
    'openWeatherApp.controllers',
    'chart.js'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/forecast', {templateUrl: 'partials/forecast.html', controller: 'OpenWeatherCtrl'});
    $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
angular.module('openWeatherApp.controllers', []);
angular.module('openWeatherApp.directives', ['chart.js']);
angular.module('openWeatherApp.services', ['ngResource', 'ngSanitize']);
angular.module('openWeatherApp.filters', []);
