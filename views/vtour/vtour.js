myapp.controller("vtourCtrl",function($scope, $ionicModal){
    embedpano({
        swf: "https://omjbzg6gs.bkt.clouddn.com/krpano/tour.swf",
        xml: "https://omjbzg6gs.bkt.clouddn.com/krpano/tour.xml",
        target: "pano",
        html5: "prefer",
        mobilescale: 1.0,
        passQueryParameters: true
    });
});
