'use strict';

app.service('userService', function ($http, $location) {        
        var urlBase = "/api/allUsers";
    
        //return the array
        this.getAllUsers = function () {
           return $http.get('/api/allUsers');
        };
                   
        //add a new user
        this.createUser = function (userData) {
            return $http.put('/newUser', userData);
        };   
}); 
