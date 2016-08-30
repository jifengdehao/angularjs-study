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

                this.addBook = function(){

                    $scope.$apply(function(){
                        $scope.books.push({
                            name:'Angularjs'
                        })
                    });
                }
            },
            controllerAs:'bookListController',
            template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
            replace:true

        }

    })

    .directive('bookAdd',function(){
        return {
            restrict:'ECAM',
            require:'^bookList', // 这里是从父亲里找到对应的指令 bookListController 继承父亲指令的controller
            template:'<button type="button">添加</button>',
            replace:true,
            link:function(scope,iElement,iAttrs,bookListController){
                iElement.on('click',bookListController.addBook);
            }
        }
    })

    .controller('firstController', ['$scope', function ($scope) {
        // console.log($scope);


    }]);