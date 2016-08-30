var firstController = function($scope){/*全局的作用域*/
    // $scope 我们叫做作用域
    // 申明一个Model
    $scope.name = '张三';

    $scope.age = 20;

    $scope.alertName=function(){
        alert(this.name);
    };
    $scope.alertAge=function(){
        alert(this.age);
    };



};
function secondController($scope){
    $scope.sex='女';
}

/*定义控制器有两种方式*/
/*
var ControllerName=function($scope){

}
function ControllerName($scope){

}
    */