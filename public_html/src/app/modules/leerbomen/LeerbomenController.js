angular.module('app').controller('LeerbomenController', function($scope, $mdMedia, $mdDialog, $rootScope) {

    $scope = this;

    $scope.testje = 'feest';

    $scope.leerdoel = function(params) {
        console.log('leerdoel');
        console.log(params);
        openDialog();
    };

    $rootScope.leerdoel = function(params) {
        console.log('leerdoel rootScope');
        console.log(params);
        openDialog();
    };

    //$rootScope.leerdoel = function (params) {
    //    console.log(params);
     //   console.log('leerdoel rootscope');
     //   openDialog();
   // };

    function openDialog(ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;

        $mdDialog.show({
            controller: 'LeerboomPopupController',
            templateUrl: 'src/app/modules/leerbomen/leerboom_popup.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen
        })
    }

});
