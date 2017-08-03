/**
 * Created by hxsd on 2016/9/1.
 */
myapp.controller("detailCtrl",function($scope, $ionicModal){
    // 构造模式对话框
    $ionicModal.fromTemplateUrl('views/modal.html', {
        scope: $scope,       // 作用域使用父作用域
//                        animation: 'slide-in-up'
        animation: 'slide-in-up'
//                        animation: 'slide-in-right'
//                        animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
        $scope.text.flag2=true;
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.text.flag2=false;
    };

    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // 在隐藏modal时执行一些动作
    $scope.$on('modal.hidden', function() {
        // 在这里执行一些操作
        $scope.text.flag2=false;
    });

    // 在移除modal时执行一些动作
    $scope.$on('modal.removed', function() {
        // 在这里执行一些操作
    });
});