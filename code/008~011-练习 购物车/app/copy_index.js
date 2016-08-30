var cartController=function($scope){
   $scope.data=[
       {
           id: 0,
           name:'iphone4s',
           quantity: 3,
           price: 4300
       },
       {
           id: 1,
           name:'iphone5s',
           quantity: 6,
           price: 5300
       },
       {
           id: 2,
           name:'iphone6s',
           quantity: 5,
           price: 6300
       },
       {
           id: 3,
           name:'imac',
           quantity: 10,
           price: 12000
       },
       {
           id: 4,
           name:'ipad',
           quantity: 20,
           price: 3400
       }
   ];
    //计算总价
    $scope.totalPrice=function(){
        var total = 0;
        angular.forEach($scope.data,function(item,key){
          //  console.log(key);
            total += item.quantity * item.price;
        });
        return total;
    };
    //计算总数量
    $scope.totalQuantity=function(){
        var total = 0;
        angular.forEach($scope.data, function (item) {
            total += parseInt(item.quantity);
        });
        return total;
    };
    /**
     * 移除当前产品项
     */
    $scope.remove = function (id) {

        var index = findIndex(id);


        if (index !== -1) {
            $scope.data.splice(index, 1);// 从所有的产品传入一个索引，移除一项
        }
    };
    /**
     * 找一个产品的索引
     */
    var findIndex = function (id) {
        var index = -1;

        angular.forEach($scope.data, function (item, key) {
            if (item.id === id) {
                index = key;
                return;//找到当前产品在所有产品的索引，直接返回索引
            }
        });
        return index;
    };

    //为某个产品添加一个数量
    $scope.add=function(id){
        var index=findIndex(id);
        //找到当前产品在所有产品的索引，找到了不等于-1，找不到就等于-1
        if(index!=-1){
           $scope.data[index].quantity++;
        }
    };
    //为某个产品减少数量，如果数量少于1，则从改产品删除
    $scope.reduce=function(id){
        var index=findIndex(id);
        if(index!=-1){
          var item=$scope.data[index];
            if(item.quantity>1){
                item.quantity--
            }else{
                var returnKey = confirm('是否从购物车内删除该产品!');
                if(returnKey){//如果为真，则删除该产品
                    $scope.remove(id);
                }

            }

        }

    };

    // 监听数量 如果小于 1 则让用户判断是否要删除产品
    $scope.$watch('data',function(newValue,oldValue){

        angular.forEach(newValue,function(item,key){
           // console.log(newValue);
           // console.log(key);
            if(item.quantity < 1){
                var returnKey = confirm('是否从购物车内删除该产品!');
                if(returnKey){
                    $scope.remove(item.id);
                }else{
                    item.quantity = oldValue[key].quantity;
                }
            }
        })
    },true);

};

var secondController=function($scope){
    $scope.lis=[
        {
            name:'张三',
            age:20
        },
        {
            name:'李四',
            age:21
        },
        {
            name:'王五',
            age:22
        },
        {
            name:'马六',
            age:23
        },
        {
            name:'七七',
            age:24
        },
        {
            name:'陈八',
            age:25
        }
    ]
};
