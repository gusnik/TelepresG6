'use strict';

/**
 * @ngdoc overview
 * @name newProjApp
 * @description
 * # newProjApp
 *
 * Main module of the application.
 */
angular
  .module('newProjApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when("/profile", {
        templateUrl: "views/profilepage.html",
        controller: "ProfileCtrl",      
      })
      .when("/listings", {
        templateUrl: "views/listings.html",
        controller: "ListingCtrl",      
      })
      .otherwise({
        redirectTo: '/'
      });
  });

$('li.listing').click(function() {
   $('li.listing').not(this).find('ul').hide();
   $(this).find('ul').toggle();
});