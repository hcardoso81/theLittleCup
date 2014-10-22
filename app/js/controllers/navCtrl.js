'use strict';

app.controller ('navCtrl', function ($scope, $location){ 
    
    $scope.changeState = function (optionNumber){
        if(optionNumber == 1){
            $scope.isTournamentSelected = true;
            $scope.isUserSelected = false;                            
        }
        else{
            $scope.isTournamentSelected = false;
            $scope.isUserSelected = true;                            
        }                
    }
    
    function init (){
        $location.path("/");
        $scope.isTournamentSelected = true;
        $scope.isUserSelected = false;                        
    }
    
    init();
});