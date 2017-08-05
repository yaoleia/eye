/**
 * Created by hxsd on 2016/8/31.
 */
var myapp=angular.module("myapp",["ionic"]);
var data=[
    {"imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/t1.jpg","like":121,"comments":[{"name":"Jack","main":"China has several skyscrapers in the pipeline.","date":"2016-09-11 18:59:40"},{"name":"Dog","main":"The planned skyscraper will have 169 floors and called H700 Shenzhen Tower, according its builder's proposal.","date":"2016-09-11 18:59:40"}],"name":"Tom","date":"2016-09-11 18:59:40","main":"This employee works carefully. And he works with high efficiency and remarkable achievements.","images":"http://omjbzg6gs.bkt.clouddn.com/eyego/2626.jpg"},
    {"imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/t2.jpg","like":11,"comments":[{"name":"Lucy","main":"kyscrapers to be completed this year reviewed by the Council on Tall Buildings and Urban Habitat of the US, six will rise in China.","date":"2016-09-11 18:59:40"}],"name":"Jack","date":"2016-09-11 18:59:40","main":"The employee works carefully, earnestly and responsibly。Not only executive power is strong, but also the working cooperation degrees are well. Work with remarkable achievements and set a good example to us.","images":"http://omjbzg6gs.bkt.clouddn.com/eyego/2727.jpg"},
    {"imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/t3.jpg","like":18,"comments":[{"name":"Hanmeimei","main":"While Britain's withdrawal from the European Union has given rise to investors' risk aversion.","date":"2016-09-11 18:59:40"},{"name":"Mac","main":"While Britain's withdrawal from the European Union has given rise to investors' risk aversion.","date":"2016-09-11 18:59:40"}],"name":"Lucy","date":"2016-09-11 18:59:40","main":"Peacetime work At work, he can do his work with carefulness and responsible attitude.","images":"http://omjbzg6gs.bkt.clouddn.com/eyego/2828.jpg"},
    {"imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/t6.jpg","like":6,"comments":[],"name":"Dog","date":"2016-09-11 18:59:40","main":"As a mixing room worker, he works with remarkable achievements and gets good praise from his monitor often.","images":"http://omjbzg6gs.bkt.clouddn.com/eyego/2929.jpg"},
    {"imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/t8.jpg","like":44,"comments":[],"name":"Tom","date":"2016-09-11 18:59:40","main":"Move aside Shanghai Tower, there's a new big boy in the town. Shenzhen, China's southern city neighboring Hong Kong","images":"http://omjbzg6gs.bkt.clouddn.com/eyego/3030.jpg"}
];
myapp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/tour");
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
        controller:"tourCtrl"
    });
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,      // 抽象的，也就是不能具体化，不能显示
        templateUrl:"views/tabs/tabs.html"
    });

    $stateProvider.state("tabs.eye",{
        url:"/eye",
        views:{"tab-eye":{
            templateUrl:"views/eye/eye.html",
            controller:"eyeCtrl"
        }}
    });
    $stateProvider.state("tabs.detail",{
        url:"/detail?:info",
        views:{"tab-eye":{
            templateUrl:"views/detail/detail.html",
            controller:"detailCtrl"
        }}
    });

    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-go":{
            templateUrl:"views/home/home.html",
            controller:"homeCtrl"
        }}
    });
    $stateProvider.state("tabs.reservation",{
        url:"/home",
        views:{"tab-go":{
            templateUrl:"views/reservation/reservation.html",
            controller:"reservationCtrl"
        }}
    });
    $stateProvider.state("tabs.weather",{
        url:"/home",
        views:{"tab-go":{
            templateUrl:"views/weather/weather.html",
            controller:"weatherCtrl"
        }}
    });
    $stateProvider.state("tabs.vtour",{
        url:"/vtour",
        views:{"tab-go":{
            templateUrl:"views/vtour/tour.html",
            controller:"vtourCtrl"
        }}
    });
    $stateProvider.state("tabs.restaurant",{
        url:"/home",
        views:{"tab-go":{
            templateUrl:"views/restaurant/restaurant.html",
            controller:"restaurantCtrl"
        }}
    });
    $stateProvider.state("tabs.plain",{
        url:"/home",
        views:{"tab-go":{
            templateUrl:"views/plain/plain.html",
            controller:"plainCtrl"
        }}
    });

    $stateProvider.state("tabs.issued",{
        url:"/issued",
        views:{"tab-issued":{
            templateUrl:"views/issued/issued.html"
        }}
    });

    $stateProvider.state("tabs.search",{
        url:"/search",
        views:{"tab-search":{
            templateUrl:"views/search/search.html",
            controller:"searchCtrl"
        }}
    });

    $stateProvider.state("login",{
        url:"/login",
        templateUrl:"views/login/login.html",
        controller:"loginCtrl"
    });
    $stateProvider.state("signup",{
        url:"/signup",
        templateUrl:"views/signup/signup.html",
        controller:"signupCtrl"
    });
});
myapp.controller("myCtrl",function($scope,$state,$ionicSideMenuDelegate,$ionicScrollDelegate,$ionicViewSwitcher,$http){
    $scope.toggleLeftSideMenu = function() {                //拖拽不出侧边栏
        $ionicSideMenuDelegate.canDragContent(false);
    };
    $scope.toTop=function(){
        $ionicScrollDelegate.scrollTop(true);               //点击返回最上
    };
    $scope.go=function(view,item){                   //go方法跳转
        $state.go(view);
        $ionicViewSwitcher.nextDirection("back");
        $scope.detailnum=$scope.informations.indexOf(item);
        $scope.text=$scope.informations[$scope.detailnum];
    };
    $scope.getinfo=function(item){                   //得到info
        $scope.detailnum=$scope.informations.indexOf(item);
        $scope.text=$scope.informations[$scope.detailnum];
    };

    $scope.$on("$ionicView.beforeEnter", function(){
        document.body.style.display="block";
    });
//----------------------------------------------------------------------------------------------
    $scope.detailnum=0;
    $scope.informations=data;
    $scope.onRefresh=function(){
        $http.get("data/informations.json")
            .success(function(data){
                $scope.informations=data;
            })
            .finally(function(){
                $scope.$broadcast("scroll.refreshComplete");
            });
    };
    $scope.loadMore=function(){
        $http.get("data/informations.json")
            .success(function(data){
                Array.prototype.push.apply($scope.informations,data)
            })
            .finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };
    $scope.ding=function(item){
        if(item.dsa)return;
        item.like++;
        item.dsa=true;
        item.changecolor="energized";
    };

    $scope.newcomment=function(comment){
        if(!comment)return;
        $scope.text.comments.unshift({name:"tour",date:new Date(),main:comment});
    }



});