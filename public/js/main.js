angular.module('angularWaste', []);

function branchController($scope, $http){
   $scope.formData = {};

   $http.get('/branchs')
      .success(function(data){
         $scope.branchs = data;
      })
      .error(function(data){
         console.log('Error ' + data);
      });

   $scope.createBranch = function(){
      $http.post('/branchs', $scope.formData)
         .success(function(data){
            $scope.formData = {};
            $scope.branchs = data;
         })
         .error(function(data){
            console.log('Error ' + data);
         });
   };
}