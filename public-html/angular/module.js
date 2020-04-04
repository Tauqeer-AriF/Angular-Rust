
var a = angular.module('1st',['ngRoute']);

a.config(['$routeProvider', function($routeProvider){

    $routeProvider.
    when('/about', {
        templateUrl: 'pages/about.html',
    }).
    when('/places', {
        templateUrl: 'pages/places.html',
    }).
     when('/blog', {
        templateUrl: 'pages/blog.html',
    }).
    when('/service', {
        templateUrl: 'pages/service.html',
    }).
     when('/contact', {
        templateUrl: 'pages/contact.html',
    }).
      when('/slider', {
        templateUrl: 'pages/slider.html',
    }).
    otherwise({
        redirectTo: 'index.html',
    });
}]
);

a.controller('b', function($scope){

	$scope.logo = "images/2.png";
    $scope.bimg = "images/3.png";
    $scope.fimg = "images/4.png";
    $scope.fimg1 = "images/5.png";
    $scope.fimg2 = "images/6.png";
    $scope.kimg = "images/15.png";
    $scope.pimg = "images/7.png";
    $scope.mid = "images/8.png";
    $scope.flicker = "images/9.png";
    $scope.client1 = "images/10.png";
    $scope.client2 = "images/12.png";
    $scope.client3 = "images/13.png";
    $scope.client4 = "images/14.png";



    $scope.c = true;
    $scope.d = true;

        $scope.Hide = function(){
            $scope.c = false;
            $scope.d = true;

        }
        
         $scope.Show = function(){
            $scope.c = true;
        }

        $scope.home = function(){
            $scope.c = true;
            $scope.d = false;
            
        }

});