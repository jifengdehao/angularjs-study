angular.module('myApp',[])

.factory('Data',function(){
    // this.$get = function(){}
    return {
        message : '工厂里定义共享的数据',
        age:20 /*工厂里定义共享的年龄数据*/
    };
})

.controller('firstController',function($scope,Data){
   $scope.data  = {
       name : '张三'
   };
   $scope.Data = Data;

})

.controller('secondController',function($scope,Data){
   $scope.data = $scope.$$prevSibling.data;
   console.log($scope.$$prevSibling);
   $scope.Data = Data;
});