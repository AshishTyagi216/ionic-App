angular.module('starter').controller('notesViewCtrl', notesViewCtrl);

function notesViewCtrl($scope, $stateParams, notesService){
  $scope.notesView = notesService.getNotes()[$stateParams.name];
  console.log($scope.notesView);
}
