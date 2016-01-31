angular.module('app').controller('ProjectsPopupController', function($http, $scope, $mdDialog, reload) {

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.update = function(project) {
        console.log(project);
        $mdDialog.cancel();
        updateProject(project);
    }

    $scope.create = function(project) {
        console.log(project);
        $mdDialog.cancel();
        addProject(project);
    }

    $scope.delete = function(project) {
        console.log(project);
        $mdDialog.cancel();
        deleteProject(project);
    }

    function addProject(project) {
        $http.post("/project", project)
            .success(function() {
                reload();
            });
    }

    function updateProject(project) {
        $http.put("/project", project)
            .success(function() {
                reload();
            });
    }

    function deleteProject(project) {
        $http.delete("/project/id/"+ project.id)
            .success(function() {
                reload();
            });
    }

});
