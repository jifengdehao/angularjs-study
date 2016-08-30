angular.module('myApp', [])
    /*
    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            controller: function ($scope) {

                // &books
                // $scope.books = $scope.a();

                // =books;
                // $scope.books = $scope.b;
                // $scope.b.push({name:'nodejs'});

                console.log($scope.c);

            },
            // 创建一个有继承链的独立作用域
            // scope:true,

            // 当为对象的时候也会创建一个独立的作用域,可以有parent 但是没法享受parent的数据
            scope:{
                // 将父元素books封装成一个a函数
                // a:'&books'
                // 双向绑定 b = parentBooks属性对应的父作用域的表达式
                // b:'=parentBooks'

                // 使用简单数据类型的方法
                c:'@parentTitle'
            },
            controllerAs:'bookListController',
            template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>',
            replace:true

        }

    })
	*/
	 .directive('bookList', function () {
		 return {
            restrict: 'ECAM',
			template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul>{{parentTtitle}}</div>',
		    replace:true ,
			controller: function ($scope) {

                console.log($scope); //这里的$scope 和 firstController $scope 是一样的
				//console.log($scope.a());
				//$scope.books = $scope.a();
				//console.log($scope.books);
				//console.log($scope.b);
				$scope.books=$scope.b;
				console.log($scope.c);
				$scope.parentTtitle=$scope.c;
            },
           // scope:true,			//这里创建一个有继承链的独立作用域 $scope 和 firstController $scope 是不一样的，
									//但是可以继承firstController 的数据
									
			scope:{     // 如果这里的scope 为一个对象 那么会创建一个独立的作用域 
					    //但是不能继承firstController 的数据 并且 和firstController 的$scope 是不一样的，
				//a:'&b', //这里把 firstController 里的$scope books的属性包装成一个函数
				b:'=parentBooks',
				c:'@parentTitle'
				
			}					
		}			
	 })


    .controller('firstController', ['$scope', function ($scope) {
		
        console.log($scope);

        $scope.books = [
            {
                name: 'php'
            },
            {
                name: 'javascript'
            },
            {
                name: 'java'
            }
        ];

        $scope.title = '张三';

    }]);