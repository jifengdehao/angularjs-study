angular.module('myApp',[])


.controller('firstController',function($scope,$filter){
        console.log($filter);  /*function (name) {
                                     return $injector.get(name + suffix);
                                    }
                                    */
        $scope.today=new Date;
});

