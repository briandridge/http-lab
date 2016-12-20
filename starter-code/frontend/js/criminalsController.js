angular.module('CriminalsApp')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController ($http) {
	var self = this;
	this.all = [];
	self.addCriminal = addCriminal;
  	self.newCriminal = {};
  	self.getCriminals = getCriminals;
  	self.deleteCriminal = deleteCriminal;
  	self.editCriminal = editCriminal;

	function getCriminals() {
		$http
		.get('http://localhost:3000/criminals')
		.then(function(response) {
			self.all = response.data.criminals;
		});
	}

	getCriminals();

	function addCriminal() {
		$http
		.post('http://localhost:3000/criminals',self.newCriminal)
		.then(function(response) {
			getCriminals();
		});
	}

	function deleteCriminal(criminal) {
		console.log("deleteCriminal clicked");
	    $http
	    .delete('http://localhost:3000/criminals/' + criminal._id)
	    .then(function(response) {
	      // var index = self.all.indexOf(criminal);
	      // self.all.splice(index, 1);
	  	});
	}

	function editCriminal(criminal) {
		console.log("editCriminal clicked");
		$http
		.patch('http//localhost:3000/criminals/' + criminal._id)
		.then(function(response) {
			// var index = self.all.indexOf(criminal);
			// self.all = response.data.criminals;
			// getCriminals();
		});
	}
}