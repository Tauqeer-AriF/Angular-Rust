
var a = angular.module('1st',['ngRoute']);

a.config(['$routeProvider', function($routeProvider){

    $routeProvider.
    when('/about', {
        templateUrl: 'pages/about.html',
    }).
    when('/work', {
        templateUrl: 'pages/work.html',
    }).
     when('/blog', {
        templateUrl: 'pages/blog.html',
    }).
     when('/contact', {
        templateUrl: 'pages/contact.html',
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

   $scope.wcol = [
      {
        head:"Krili havtret hyo gustripast", head2:"Krili havtret hyo gustripast" ,
         pargraph:"Donec pellentesque, justo eget imperdiet viverra,lectus mi ornare arcu, non laoreet lacus lacus eleifend,Maecenas ullamcorper tempor purus id mattis. Curabitur pellentesque, ante nec posuere lobortis, diam nulla sagittis lorem." 
        },

         {
        head:"Krili havtret hyo gustripast", head2:"Krili havtret hyo gustripast" ,
         pargraph:"Donec pellentesque, justo eget imperdiet viverra,lectus mi ornare arcu, non laoreet lacus lacus eleifend,Maecenas ullamcorper tempor purus id mattis. Curabitur pellentesque, ante nec posuere lobortis, diam nulla sagittis lorem." 
        },

         {
        head:"Krili havtret hyo gustripast", head2:"Krili havtret hyo gustripast" ,
         pargraph:"Donec pellentesque, justo eget imperdiet viverra,lectus mi ornare arcu, non laoreet lacus lacus eleifend,Maecenas ullamcorper tempor purus id mattis. Curabitur pellentesque, ante nec posuere lobortis, diam nulla sagittis lorem." 
        },

         {
        head:"Krili havtret hyo gustripast", head2:"Krili havtret hyo gustripast" ,
         pargraph:"Donec pellentesque, justo eget imperdiet viverra,lectus mi ornare arcu, non laoreet lacus lacus eleifend,Maecenas ullamcorper tempor purus id mattis. Curabitur pellentesque, ante nec posuere lobortis, diam nulla sagittis lorem." 
        },

         {
        head:"Krili havtret hyo gustripast", head2:"Krili havtret hyo gustripast" ,
         pargraph:"Donec pellentesque, justo eget imperdiet viverra,lectus mi ornare arcu, non laoreet lacus lacus eleifend,Maecenas ullamcorper tempor purus id mattis. Curabitur pellentesque, ante nec posuere lobortis, diam nulla sagittis lorem." 
        },

         {
        head:"Krili havtret hyo gustripast", head2:"Krili havtret hyo gustripast" ,
         pargraph:"Donec pellentesque, justo eget imperdiet viverra,lectus mi ornare arcu, non laoreet lacus lacus eleifend,Maecenas ullamcorper tempor purus id mattis. Curabitur pellentesque, ante nec posuere lobortis, diam nulla sagittis lorem." 
        },
   ]

    $scope.c = true;
    $scope.d = true;
    $scope.e = true;
    $scope.f = true;
    $scope.g = true;
    $scope.h = true;

        $scope.Hideabout = function(){
            $scope.c = false;
            $scope.d = true;
            $scope.e = true;
            $scope.row = {
                "margin-top" : "unset"
                 }

        }
        $scope.Hidework = function(){
            $scope.c = false;
            $scope.e = false;
            $scope.f = true;

        }
  
        $scope.Hidecontact = function(){
            $scope.c = false;
            $scope.e = false;
            $scope.f = false;
            $scope.g = true;
        }
        $scope.Hideblog = function(){
            $scope.c = false;
            $scope.e = false;
            $scope.f = false;
            $scope.g = false;
            $scope.h = true;
        }

         $scope.Show = function(){
            $scope.c = true;
            $scope.e = true;
            $scope.row = {
                "margin-top" : "-85px"
                 }
        }

        $scope.homeabout = function(){
            $scope.c = true;
            $scope.d = false;
            $scope.row = {
                "margin-top" : "-85px"
                 } 

        }

        $scope.homework = function(){
            $scope.c = true;
            $scope.e = true;
            $scope.f = false; 
            $scope.row = {
                "margin-top" : "-85px"
                 }        
            
        }
        $scope.homecontact = function(){
            $scope.c = true;
            $scope.e = true;
            $scope.f = false;
            $scope.g = false;
            $scope.row = {
                "margin-top" : "-85px"
                 }         
            
        }
        $scope.homeblog = function(){
            $scope.c = true;
            $scope.e = true;
            $scope.f = false;
            $scope.g = false;
            $scope.h = false;
            $scope.row = {
                "margin-top" : "-85px"
                 }         
            
        }


});