'use strict';

app.controller('usersCtrl', ['$scope', 'usersFactory', function($scope, usersFactory) {                 
    
    function getUsers(){
        $scope.users = usersFactory.getAllUsers();
    };
        
    $scope.addUser = function() {
        var userData = {            
            name : $scope.userName,
            lastname : ''
        };        
        if(usersFactory.addUser(userData) == 'Added'){
            $scope.users.push(userData);            
        }
    };
        
    getUsers();
}]);
