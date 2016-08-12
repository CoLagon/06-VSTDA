angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
	$scope.myArray = [];
	$scope.myObject = {};

	$scope.addy = function() {
		$scope.myArray.push(angular.copy($scope.myObject));
		console.log($scope.myObject);
	}

});





// .service('dataService',function() {
	
// 	this.deleteTodo = function(todo) {
// 		console.log("The" + todo.name + " todo has been deleted!");
// 	};
// 	this.saveTodos = function(todo) {
// 		console.log("The" + todo.name + " todo has been saved!");
// 	};

// });


  

// angular.module("todoListApp").controller('todoCtrl', function(){
//     var ctrl = this;
//     $scope.todoList = [];
   
//     $scope.priorityOptions = [
//       {name: "High", priority: 1},
//       {name: "Medium", priority: 2},
//       {name: "Low", priority: 3}
//     ];

//     $scope.newTodo = {};

//     controller.addTodo = function() {
//       ctrl.todoList.push(ctrl.newTodo);
//       ctrl.newTodo = {};
//     };
//});


