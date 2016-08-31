(function(){
	var prismaApp = angular.module("prismaApp",[]);

	prismaApp.controller("buildController",function($scope,$http){
			
		$scope.build = function(){
			var formData = new FormData($("#frmUpload")[0]);
			$http({
				url:"/test",
				method:"POST",
				data:formData,
				transformRequest: angular.identity,
				headers:{
					"Content-Type": function () {
                        return undefined;
                    }
				},
				success:function(status,response){

				},error:function(){

				}
			})
		}
	})

	prismaApp.directive("fileupload",function(){
		return {
			restrict:"ECMA",
			link:function($scope,$element,$attrs){
				// Translated
				var drEvent = $element.dropify({
					messages: {
						'default': '点击或拖拽图片到这里',
						'replace': '点击或拖拽图片到这里来替换图片',
						'remove':  '移除文件',
						'error':   '对不起，你上传的文件太大了'
					}
				});
				/*drEvent.on('dropify.beforeClear', function(event, element){
					console.log(element);
				});
			
				drEvent.on('dropify.afterClear', function(event, element){});*/
			}
		};
	})

	prismaApp.directive("wrapWatcher",function(){
		return{
			restrict:"ECMA",
			scope:true,
			link:function($scope,$element,$attrs){
				$element.elastislide({
					minItems : 2
				});
				$element.find(".style-item").on("click",function(){
					$(".style-item").removeClass("select");
					$(this).addClass("select");
					$scope.form.type = $(this).attr("data-type");
					$scope.$apply();
				})
			}
		}
	})

})()