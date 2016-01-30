angular.module('app').controller('LoginController', function($scope, $state) {

    $scope.user;

    $scope.login = function() {
        console.log($scope.user);
        $state.go('home.dashboard');
    };
});
