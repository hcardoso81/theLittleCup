'use strict';

app.controller('usersCtrl', function($scope, userService, $location) {
    
    $scope.addUser = function() {
        var userData = {            
            name : $scope.userName,
            lastname : ''
        };
        userService.createUser(userData)
            .success(function (current, status, headers, config) {
                init();
                $scope.$broadcast('recalculateMBScrollbars');
                console.log("added");            
            })
            .error(function(current, status, headers, config) {
                console.log("error");                
            });
    };
    
    function init(){
        $scope.userName='';
        //get all elements    
        $scope.allUsers = userService.getAllUsers()
            .success(function (users, status, headers, config) {
                $scope.users = users;
            })
            .error(function(data, status, headers, config) {
                console.log("error");
            });        
    };
        
    init();    
});
