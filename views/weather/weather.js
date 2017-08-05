/**
 * Created by hxsd on 2016/8/31.
 */
myapp.controller("weatherCtrl",function($scope,$http,$ionicLoading){
    $scope.changecity=function(city){
        $scope.cityac=city||"北京";
        var url='http://wthrcdn.etouch.cn/weather_mini?city='+$scope.cityac;
        $ionicLoading.show();
        $http.get(url).success(function(data){
            $scope.weather=data;
            console.log(data);
            $ionicLoading.hide();
        }).error(function(){
            $ionicLoading.show({
                template:"暂时无法获取",
                duration:3000
            });
        });
    };
    $scope.changecity();
});
