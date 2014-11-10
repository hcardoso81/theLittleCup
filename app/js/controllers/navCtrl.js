'use strict';

app.controller ('navCtrl', function ($scope, $location){ 
    
    $scope.isActive = function(route) {
        return route === $location.path();
    }
            
    function init (){
        $location.path("/");                       
    }
    
    init();
});