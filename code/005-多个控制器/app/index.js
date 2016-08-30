

var firstController = function($scope){ //第一个控制器
    $scope.name = '张三';

    console.log($scope);

};

var secondController = function($scope){

    console.log($scope);
    console.log($scope.name);//它没有定义name的值，它会去上一层的父亲找name的值
};
var threeController=function($scope){
    $scope.name='李四';
    console.log($scope);
};