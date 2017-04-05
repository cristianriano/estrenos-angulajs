app.controller("NavController",function($scope, $mdSidenav){
  $scope.categories=['comedia', 'animacion', 'romance', 'accion', 'terror', 'scifi'];

  $scope.open=function(){
    $mdSidenav('nav').open();
  };
});
