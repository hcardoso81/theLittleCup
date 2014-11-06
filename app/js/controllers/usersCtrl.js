'use strict';

app.controller('usersCtrl', function($scope, toaster, $location, usersFactory) {
    
    $scope.addUser = function() {
        var userData = {            
            name : $scope.userName,
            lastname : ''
        };
        $scope.users = usersFactory.addUser(userData);
    };
        
    function init(){
        $scope.userName='';
        
        $scope.users = usersFactory.getAllUsers();    
    };
    
    init();    
});