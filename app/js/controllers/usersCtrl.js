'use strict';

app.controller('usersCtrl', ['$scope', 'usersFactory', function($scope, usersFactory) {        
    $scope.users;    
    $scope.status;    
    
    function getUsers(){        
        usersFactory.getUsers()
            .success(function (data) {
                $scope.users = data;
            })
            .error(function (error) {
                $scope.status = 'Error: ' + error.message;
            });                    
    };

    $scope.addUser = function() {
        var userData = {            
            name : $scope.userName,
            lastname : ''
        };
        usersFactory.addUser(userData)
            .success(function () {
                $scope.status = 'The user has been created successfully';
                $scope.users.push(userData);
            })
            .error(function(error) {
                $scope.status = 'Error: ' + error.message;
            });                
    };
        
    getUsers();
}]);
