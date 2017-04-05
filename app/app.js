var app = angular.module("app",["ngMaterial"]).config(function($mdThemingProvider){
  $mdThemingProvider.theme('default')
  .primaryPalette('red')
  .accentPalette('blue');

  $mdThemingProvider.theme('defaultdark')
  .primaryPalette('red')
  .accentPalette('blue').dark();
});
