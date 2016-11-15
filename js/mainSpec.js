var myApp = angular.module("myApp", [])

myApp.service('githubData', function($http) {
    return {
        sayHello: function() {
            console.info("hello");
        },
        getData: function() {
            var url = "//api.github.com/users/bondarka/repos";
            return $http.get(url);
        }
    }
})

myApp.controller("MainCtrl", function($scope, githubData) {
    $scope.repositories = [];

    githubData.sayHello();

    githubData.getData().then(function(response) {
        console.log('response', response["data"]);
        $scope.repositories = response["data"];
    })
})

myApp.directive("angulardir", function() {
    return {
        restrict: "A",
        link: function() {
            console.log("I learn about directive. Now I use restrict A  (only matches atribut).You can also use   C (only matches class name), M (only matches comment),  E (only matches class name)");
        }
    }
})

myApp.directive("welcome", function() {
    return {
        restrict: "A",
        link: function() {
            // alert("Hello! Look console");
        }
    }
})

myApp.directive("goodbye", function() {
    return {
        restrict: "A",
        link: function() {
            console.log("See you later!");
        }
    }
})


myApp.directive("enter", function() {
    return function(scope, element) {
        element.bind("mouseenter", function() {
            console.log("I'm inside of you!")
        })
    }
})

myApp.directive("leave", function() {
    return function(scope, element) {
        element.bind("mouseleave", function() {
            console.log("I'm leaving on a jet plane!")
        })
    }
})

var k = 1;

myApp.directive("repository", function() {
    return {
        restrict: 'E',
        scope: {
            title: '=',
            url: '='
        },
        link: function($scope, element) {
            element.bind("mouseenter", function() {
                $scope.showURL = true;
                $scope.$apply();
            })
            element.bind("mouseleave", function() {
                $scope.showURL = false;
                $scope.$apply();
            })
        },
        controller: function($scope) {
            $scope.titleLength = $scope.title.length;
            $scope.showURL = false;
        },
        templateUrl: 'tplrepository.html'
    }
});

myApp.directive("avatar", function() {
    return {
        restrict: 'E',
        scope: {
            name: '@',
            picture: '@'
        },
        // controller: function($scope) {},
        templateUrl: 'tplpictures.html'
    }
});
