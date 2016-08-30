

var myApp = angular.module("myApp",[]);
myApp.controller('firstController',function($scope){
    $scope.name = '张三';
    console.log($scope);
});
//一个页面只能加载一个模块,就是只加载最开始的ng-app 的模块

