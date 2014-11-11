'use strict';

app.factory('usersFactory', ['$http', function($http){
    var usersFactory = {};
    var users = [];    
    var urlBase = '/api/users';
    
    usersFactory.getAllUsers = function(){                
        $http.get(urlBase)
        .success(function (data, status, headers, config) {                
            angular.forEach(data, function(item){                
                users.push(item);
            });                                
        })
        .error(function(data, status, headers, config) {
            console.log("error");                
        });                 
        return users;        
    };        
    
    usersFactory.getUser = function(id){        
        return $http.get(urlBase + '/' + id);
    };
    
    usersFactory.addUser = function (user) {
        $http.put(urlBase, user)
        .success(function () {                
            users.push(user);
            return 'Added';
        })
        .error(function(error) {
            return error.message;
        });                
    };

    usersFactory.updateUser = function (user) {
        return $http.post(urlBase + '/' + user.id, user)
    };
    
    return usersFactory;
}]);