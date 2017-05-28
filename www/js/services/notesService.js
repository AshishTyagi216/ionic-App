angular.module('starter').service('notesService', notesService);
function notesService(){
	this.notes = [];

	this.getNotes = function(){
		return this.notes;
	}

	this.addNotes = function(val){
		this.notes.push(new Object(val));
	}

}