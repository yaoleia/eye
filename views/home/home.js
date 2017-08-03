/**
 * Created by hxsd on 2016/8/31.
 */
myapp.controller("homeCtrl",function($scope){
    $scope.slideChange=function(index){
        //console.log("index:"+index);
    };
    $scope.data={page:0};
    $scope.pagerClick=function(index){
        $scope.data.page=index;
    };

});
