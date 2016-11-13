var myApp = angular.module("myApp", [])

myApp.directive("angulardir",function(){
	return{
		restrict:"A",
		link: function(){
			alert("superman I learn about directive. Now I use restrict C (only matches class name) and M (only matches comment)");
		}
	}
})

myApp.directive("welcome", function() {
  return {
    restrict: "A",
    link: function(){
      alert("Hello!");
    }
  }
})

myApp.directive("goodbye", function() {
  return {
    restrict: "A",
    link: function(){
      alert("See you later!");
    }
  }
})
