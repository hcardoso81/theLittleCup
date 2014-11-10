'use strict';

app.factory('usersFactory', ['$http', function($http){
    var usersFactory = {};
    var urlBase = '/api/users';
    
    usersFactory.getUsers = function(){        
        return $http.get(urlBase);
    };
    
    usersFactory.getUser = function(id){        
        return $http.get(urlBase + '/' + id);
    };
    
    usersFactory.addUser = function (user) {
        return $http.put(urlBase, user);
    };

    usersFactory.updateUser = function (user) {
        return $http.post(urlBase + '/' + user.id, user)
    };
    
    return usersFactory;
}]);