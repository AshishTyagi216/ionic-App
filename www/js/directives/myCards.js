angular.module('starter').directive('myCard', myCard);

function myCard(){
	return {
	    restrict: 'E',
	    replace : true,
	    templateUrl: 'templates/card-template.html',
	    link : function(attr, elem, scope){
	    	var colors = ["#ECEFF1","#FF9E80","#FFFF8D", "red", "yellow"];
			elem[0].children[0].children[0].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
	    }
	  }
}