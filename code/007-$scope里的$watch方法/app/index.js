

var firstController = function($scope){

    //$scope.name = '张三';
    $scope.data = {
        name :'李四',
        count:20
    };
   //$scope.count = 0;
  /*
    // 监听一个model 当一个model每次改变时 都会触发第2个函数
    $scope.$watch('name',function(newValue,oldValue){

        $scope.count++;
        console.log(newValue);
        console.log(oldValue);
        if($scope.count > 30){
            $scope.count=30;
            $scope.name = '已经大于30次了';
            return false;
        }
    });
*/
    $scope.$watch('data',function(){
       
      /*  $scope.data.count+=$scope.data.count;*/
         $scope.data.count++;

        if($scope.data.count > 31){

            $scope.data.name = '已经大于31次了';
        }
    },true);

};