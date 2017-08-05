/**
 * Created by hxsd on 2016/8/31.
 */
myapp.controller("weatherCtrl",function($scope,$http,$ionicLoading){
    $scope.changecity=function(city){
        $scope.cityac=city||"北京";
        var rurl='http://wthrcdn.etouch.cn/weather_mini?callback=JSON_CALLBACK&city='+$scope.cityac;
        $ionicLoading.show();
        $http({
        	 method: 'JSONP',
        	url:rurl
        }).success(function(data){
            $scope.weather=data;
            console.log(data);
            $ionicLoading.hide();
        }).error(function(){
            $ionicLoading.show({
                template:"暂时无法获取",
                duration:1000
            });
        });
    };
    $scope.changecity();
});
