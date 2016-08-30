var myApp = angular.module('myApp', [], ['$filterProvider', '$provide', '$controllerProvider', function (a, b, c) {
    console.log(a, b, c);  //Constructor {$get: Array[2]}$get: Array[2]register: register(name, factory)__proto__: Object Object {}constant: (key, value)decorator: decorator(serviceName, decorFn)factory: (key, value)provider: (key, value)service: (key, value)value: (key, value)__proto__: Object Constructor {$get: Array[3]}
}])

.
factory('CustomService', ['$window', function (a) {
   console.log(a);//window
   return a;
}])

// 隐示的依赖注入
    .controller('firstController', function ($scope, CustomService) {
        console.log(CustomService);//window
    })

// 显示的依赖注入
    .controller('secondController', ['$scope', '$filter', function (a, b) {
       console.log(b('json')([1, 2, 3, 4, 5]));//[
											//	  1,
											//	  2,
											//	  3,
											//	  4,
											//	  5
											//	]
    }]);

function otherController(a) {
    console.log(a);
}

otherController.$inject = ['$scope'];