'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies', 'ngTouch',
  'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                    $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: '/src/app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.login', {
        url: '/login',
        templateUrl: 'src/app/modules/login/login.html',
        controller: 'LoginController',
        data: {
          title: 'Login'
        }
      })
      .state('home.projects', {
        url: '/projects',
        templateUrl: 'src/app/modules/projects/projects.html',
        controller: 'ProjectsController',
        data: {
          title: 'Projects'
        }
      })
      .state('home.content', {
        url: '/content',
        templateUrl: 'src/app/modules/content/content.html',
        controller: 'ContentController',
        data: {
          title: 'Content'
        }
      })
      .state('home.leerbomen', {
        url: '/leerbomen',
        templateUrl: 'src/app/modules/leerbomen/leerbomen.html',
        controller: 'LeerbomenController',
        data: {
          title: 'Leerbomen'
        }
      })
      .state('home.leerdoelen', {
        url: '/leerdoelen',
        templateUrl: 'src/app/modules/leerdoelen/leerdoelen.html',
        controller: 'LeerdoelenController',
        data: {
          title: 'Leerdoelen'
        }
      })
      .state('home.leerlingen', {
        url: '/leerlingen',
        templateUrl: 'src/app/modules/leerlingen/leerlingen.html',
        controller: 'LeerlingenController',
        data: {
          title: 'Leerlingen'
        }
      })
      .state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'src/app/views/dashboard.html',
        data: {
          title: 'Dashboard'
        }
      })
      .state('home.profile', {
        url: '/profile',
        templateUrl: 'src/app/views/profile.html',
        controller: 'ProfileController',
        controllerAs: 'vm',
        data: {
          title: 'Profile'
        }
      })
      .state('home.table', {
        url: '/table',
        controller: 'TableController',
        controllerAs: 'vm',
        templateUrl: 'src/app/views/table.html',
        data: {
          title: 'Table'
        }
      });

    $urlRouterProvider.otherwise('/login');

    $mdThemingProvider
      .theme('default')
        .primaryPalette('grey', {
          'default': '600'
        })
        .accentPalette('teal', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
    });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'src/assets/images/user.svg', 64);
  });
