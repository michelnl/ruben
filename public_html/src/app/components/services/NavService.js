(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Leerdoelen',
        icon: 'school',
        sref: 'home.leerdoelen'
      },
      //{
      //  name: 'Leerbomen',
      //  icon: 'share',
      //  sref: 'home.leerlingen'
      //},
      {
        name: 'Projects',
        icon: 'view_module',
        sref: 'home.projects'
      },
      {
        name: 'Leerbomen',
        icon: 'nature',
        sref: 'home.leerbomen'
      },
      {
        name: 'Content',
        icon: 'movie_creation',
        sref: 'home.content'
      },
      {
        name: 'Leerlingen',
        icon: 'people',
        sref: 'home.leerlingen'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
