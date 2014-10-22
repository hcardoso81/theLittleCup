'use strict';

app.controller('usersCtrl', function($scope, toaster) {
    $scope.users = [
      {
            name: 'Eze',
            lastname: 'Peralta'            
      },{
            name: 'Negro',
            lastname: 'Cardoso'                        
      },{
            name: 'Juan',
            lastname: 'Asas'            
      }];
});