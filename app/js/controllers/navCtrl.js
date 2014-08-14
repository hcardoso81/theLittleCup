'use strict';

app.controller ('navCtrl', function ($scope, $location){    
    $location.path("/");
    $scope.isUserSelected = true;                
    $scope.isTournamentSelected = false;
    $scope.isStatisticsSelected = false;
    $scope.isPlaySelected = false;
});