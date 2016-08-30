angular.module('myApp', [])

    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            controller: function ($scope) {
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
                $scope.addBook = function(){

                }
                this.addBook = function(){
                    // ...
					alert(123);
                }
            },
            controllerAs:'bookListController',
            template: '<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
            replace:true,
            link:function(scope,iEelement,iAttrs,bookListController){
                iEelement.on('click',bookListController.addBook)
            }
        }

    })
	
	.directive('hello',function(){
		return{
			restrict :'ECAM',
			controller : function($scope){
				$scope.name='张三';
				this.alertMessage=function(){
					alert(123);
				}
			},
			controllerAs :'helloController',
			template:'<div>{{ name }}</div>',
			replace:true,
			link:function(scope,iEelement,iAttrs,helloController){
				console.log(scope);
				console.log(iEelement);
				console.log(iAttrs);
				console.log(helloController);
				iEelement.on('click',helloController.alertMessage);
				
			}
		}
		
	})
	

    .controller('firstController', ['$scope', function ($scope) {
        // console.log($scope);


    }]);