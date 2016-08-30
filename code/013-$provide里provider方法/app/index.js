

var myApp = angular.module('myApp',[],function($provide){


    // 自定义服务
    $provide.provider('CustomService',function(){

        this.$get = function(){
            return {
                message : 'CustomService Message'
            }
        }
    });
    // 自定义服务
    $provide.provider('CustomService2',function(){

        this.$get = function(){
            return {
                message : 'CustomService2 Message'
            }
        };
    });
    /*自定义工厂*/
    $provide.factory('CustomFactory',function(){
        return [1,2,3,4,5,6,7];
    })
});

myApp.controller('firstController',function(CustomService,$scope,CustomService2,CustomFactory){
    $scope.name = '张三';
    console.log(CustomService);
    console.log(CustomService2);
    console.log(CustomFactory);
});


