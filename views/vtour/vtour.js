myapp.controller("vtourCtrl",function($scope, $ionicModal){
    embedpano({
        swf: "http://omjbzg6gs.bkt.clouddn.com/krpano/tour.swf",
        xml: "./views/vtour/tour.xml",
        target: "pano",
        html5: "prefer",
        mobilescale: 1.0,
        passQueryParameters: true
    });
});
