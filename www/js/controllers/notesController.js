angular.module('starter').controller('notesCtrl', notesCtrl);

function notesCtrl($scope, $ionicModal, $location, notesService){
  $scope.notes = [];
  $ionicModal.fromTemplateUrl('templates/my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.mynote = function() {
    $scope.modal.show();
  };

  $scope.saveNotes = function(val){
    notesService.addNotes(val);
    console.log(notesService.getNotes());
    $scope.notes = notesService.getNotes();
    $scope.modal.hide();
  }

  $scope.goto = function(indx){
    $location.path("/notesView/"+indx);
  }
}
