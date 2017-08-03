/**
 * Created by hxsd on 2016/8/31.
 */
myapp.controller("restaurantCtrl",function($scope,$http){
    $scope.place = [];
    // 加载餐馆的方法
    $scope.getPlace = function () {
        var url = "data/place.json";   // 请求的url
        $http.get(url)
            .success(function(response){
                    $scope.places=response;
            })
            .finally(function () {
                // 广播事件，告诉无限滚动组件everything is done
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };

    $scope.getPlace();    // 加载时，从API加载第一页餐馆数据
});
