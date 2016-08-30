var myApp = angular.module('myApp', [], ['$compileProvider',function ($compileProvider) {

    $compileProvider.directive('customTags',function(){
        return {
            restrict:'ECAM',
            template:'<div>custom-tags-html</div>',
            replace:true //是否全部替换
        }
    });
	$compileProvider.directive('hello',function(){
		return {
			restrict:'ECAM',
			template:'<h1>hello</h1>',
			replace:true
		}
	});

}])

//E:匹配元素标签
//C：匹配class的标签
//A： 匹配带有属性的标签
//M:  匹配注释的
//.directive('')