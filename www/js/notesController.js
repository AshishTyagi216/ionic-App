angular.module('starter').controller('notesCtrl', notesCtrl);

function notesCtrl($scope){
  $scope.notes = {
    "notes": [
      {
        "title": "Title 1",
        "description": "description 1"
      },
      {
        "title": "Title 2",
        "description": "description 2"
      },
      {
        "title": "Title 3",
        "description": "description 3"
      },
      {
        "title": "Title 4",
        "description": "description 4"
      },
      {
        "title": "Title 5",
        "description": "description 5"
      }
    ]
  }
}