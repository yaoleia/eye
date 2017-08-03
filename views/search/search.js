myapp.controller("searchCtrl",function($scope, $ionicModal){
        // 构造模式对话框
        $ionicModal.fromTemplateUrl('search/modal.html', {
            scope: $scope,       // 作用域使用父作用域
//                        animation: 'slide-in-up'
            animation: 'slide-in-left'
//                        animation: 'slide-in-right'
//                        animation: 'scale-in'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        // 离开时清除model
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });

        // 在隐藏modal时执行一些动作
        $scope.$on('modal.hidden', function() {
            // 在这里执行一些操作
        });

        // 在移除modal时执行一些动作
        $scope.$on('modal.removed', function() {
            // 在这里执行一些操作
        });

    $scope.fmap=function(){
        // 百度地图API功能
        var map = new BMap.Map("allmap");            // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 40.520), 10);
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map, autoViewport:true}
        });
        (function setMapEvent(){
            map.enableScrollWheelZoom();//启用地图滚轮放大缩小
            map.enableKeyboard();//启用键盘上下左右键移动地图
            var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_ZOOM});
            map.addControl(ctrl_nav);
        })()
        local.searchNearby($scope.place,$scope.zhoubian);
    };
    $scope.fmap();
    $scope.getzb=function(item){
        $scope.zb=document.getElementById("zb");
        $scope.zhoubian=$scope.zb.value=item;
    };
    $scope.getpz=function(pla){
        $scope.zb=document.getElementById("zb");
        $scope.place=pla;
        $scope.zhoubian=$scope.zb.value;
        $scope.fmap();
        $scope.closeModal();
    }

});

