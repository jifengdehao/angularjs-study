var myApp = angular.module('myApp', [], ['$compileProvider',function ($compileProvider) {

    $compileProvider.directive('customTags',function(){
        return {
            restrict:'ECAM',
            template:'<div>custom-tags-html</div>',
            replace:true //�Ƿ�ȫ���滻
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

//E:ƥ��Ԫ�ر�ǩ
//C��ƥ��class�ı�ǩ
//A�� ƥ��������Եı�ǩ
//M:  ƥ��ע�͵�
//.directive('')