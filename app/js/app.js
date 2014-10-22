'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [ 'ngRoute', 'toaster' ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider    
        .when('/', 
            {
            controller: 'tournamentCtrl',
            templateUrl: 'partials/tournament.html' 
            })
        .when('/users', 
            {                
            controller: 'usersCtrl',
            templateUrl: 'partials/users.html' 
            })        
        .otherwise({redirectTo: '/'});
}]);



