var myApp = angular.module("myApp", [])

myApp.directive("angulardir",function(){
	return{
		restrict:"A",
		link: function(){
			console.log("I learn about directive. Now I use restrict A  (only matches atribut).You can also use   C (only matches class name), M (only matches comment),  E (only matches class name)");
		}
	}
})

myApp.directive("welcome", function() {
  return {
    restrict: "A",
    link: function(){
      alert("Hello! Look console");
    }
  }
})

myApp.directive("goodbye", function() {
  return {
    restrict: "A",
    link: function(){
      console.log("See you later!");
    }
  }
})
