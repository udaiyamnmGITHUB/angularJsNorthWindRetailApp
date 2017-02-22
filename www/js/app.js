//sss//inject angular file upload directives and services.
var angularApp = angular.module('angularApp', ['ui.router', 'login', 'myModule', 'fileUploader']);
angularApp.controller('appCtrl', ['$scope', '$upload', function ($scope, $upload) {
}]);

angularApp.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
      .state('fileUploader', {
        url: "/fileUploader",
        templateUrl: "templates/partials/fileUploader/fileUploader.html",
        controller:"angularFileUploadCtrl"
      })
      .state('login', {
        url: "/login",
        templateUrl: "templates/partials/login/login.html",
        controller:"loginCtl"
      });
}]);