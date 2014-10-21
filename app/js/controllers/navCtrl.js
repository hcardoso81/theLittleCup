'use strict';

app.controller ('navCtrl', function ($scope, $location){        
    $scope.changeState = function (optionNumber){
        if(optionNumber == 1){
            $scope.isUserSelected = true;                
            $scope.isTournamentSelected = false;
        }
        else{
            $scope.isUserSelected = false;                
            $scope.isTournamentSelected = true;
        }                
    }
    
    function init (){
        $location.path("/");
        $scope.isUserSelected = true;                
        $scope.isTournamentSelected = false;
    }
    
    init();
});