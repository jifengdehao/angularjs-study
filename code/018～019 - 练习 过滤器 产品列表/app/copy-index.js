angular.module('product',[])
    .service('productData',function(){
        return [
            {
                id:005505,
                name:'iphone',
                price : 5400
            },
            {
                id:1030520,
                name:'ipad',
                price : 3420
            },
            {
                id:2000302,
                name:'imac',
                price : 15400
            },
            {
                id:3036030,
                name:'ipad air',
                price : 2340
            },
            {
                id:46494911,
                name:'ipad mini',
                price : 2200
            }
        ];
    })
    .controller('productController', function ($scope,productData) {
        $scope.productData=productData;

        //$scope.orderType = 'id';/*设置类型*/

        //$scope.order = '-';/*默认为 - */

        $scope.changeOrder = function(type){
            $scope.orderType = type;

            if($scope.order === ''){

                $scope.order = '-';

            }else{

                $scope.order = '';
            }
        }

    });
