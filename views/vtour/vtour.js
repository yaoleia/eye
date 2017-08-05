myapp.controller("vtourCtrl",function($scope, $ionicModal){
    embedpano({
        swf: "./views/vtour/tour.swf",
        xml: "./views/vtour/tour.xml",
        target: "pano",
        html5: "prefer",
        mobilescale: 1.0,
        passQueryParameters: true
    });
});
