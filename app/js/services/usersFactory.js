'use strict';

app.factory('usersFactory', function($http){
    var allUsers = [];
    return {
        
        getAllUsers: function(){                  
            $http.get('/api/allUsers')
                .success(function (data, status, headers, config) {                
                angular.forEach(data, function(item){
                    allUsers.push(item);
                });                                                                                
                })
                .error(function(data, status, headers, config) {
                    console.log("error");                
                });
            return allUsers;
        },
        
        addUser: function(newUserData){
            $http.put('/newUser', newUserData)
            .success(function (current, status, headers, config) {
                allUsers.push(newUserData);
                $scope.$broadcast('recalculateMBScrollbars');                
                console.log("added");            
            })
            .error(function(current, status, headers, config) {
                console.log("error");                
            });                                            
            return allUsers;
        }  
        
    }               
});
