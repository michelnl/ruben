angular.module('app').controller('ProjectsController', function($http, $scope, $mdDialog, $mdMedia) {
    var vm = this;

    loadProjects();

    $scope.newProject = function() {
        $scope.project = new_project;
        openDialog();
        console.log($scope.project);
    };

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

    $scope.bewerkProject = function(project) {
        $scope.project = project;
        openDialog();
        console.log($scope.project);
    };

    $scope.verwijderProject = function(project) {
        $scope.project = project;
        console.log(project);
        openDialogConfirm(project);
    };

    $scope.delete = function(project) {
        console.log(project);
        $mdDialog.cancel();
        deleteProject(project);
    }

    function addProject(project) {
        $http.post("/project", project)
            .success(function() {
                loadProjects();
            });
    }

    function updateProject(project) {
        $http.put("/project", project)
            .success(function() {
                loadProjects();
            });
    }

    function deleteProject(project) {
        $http.delete("/project/id/"+ project.id)
            .success(function() {
                loadProjects();
            });
    }

    function loadProjects() {
        $http.get("/project")
            .success(function(response) {
                $scope.projects = response.data;
            });
    }

    var new_project = {id: null, name: null, description: null, created_on: null};

    function openDialog(ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

        $mdDialog.show({
            controller: 'ProjectsController',
            scope: $scope.$new(),
            templateUrl: 'src/app/modules/projects/projects_popup.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen
        })
    }

    function openDialogConfirm(ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

        $mdDialog.show({
            controller: 'ProjectsController',
            scope: $scope.$new(),
            templateUrl: 'src/app/modules/projects/projects_popup_confirm.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen
        })
    }
});
