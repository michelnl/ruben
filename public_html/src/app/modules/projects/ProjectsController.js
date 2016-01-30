angular.module('app').controller('ProjectsController', function($http, $scope) {
    var vm = this;

    $http.get("/project")
        .success(function(response) {
            $scope.projects = response.data;
        });
});
