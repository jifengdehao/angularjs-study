

var myApp = angular.module('myApp',[],function($provide){

    // 自定义服务
    $provide.provider('CustomService',function(){

        this.$get = function(){
            return {
                message : 'CustomService Message'
            }
        }
    });

    // 自定义工厂
    $provide.factory('CustomFactory',function(){
        return [1,2,3,4,5,6,7];  //返回可以是任何类型的
    });

    // 自定义服务
    $provide.service('CustomService2',function(){
        return {             //返回必须的是一个对象，否则解析不全
            name:'王五'
        };
    })

});

myApp.controller('firstController',function($scope,CustomFactory,CustomService2){  //控制器通过依赖注入的方式使用provider,factory,service来达到共享数据的方式
    $scope.name = '张三';

    console.log(CustomFactory);

    console.log(CustomService2);

});
myApp.controller('seconController',function($scope,CustomFactory,CustomService2){//控制器通过依赖注入的方式使用provider,factory,service来达到共享数据的方式
    $scope.name = '李四';
    console.log(CustomFactory);
    console.log(CustomService2);
});

//myApp.service();
//myApp.factory();
