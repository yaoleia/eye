/**
 * Created by hxsd on 2016/8/31.
 */
myapp.controller("reservationCtrl",function($scope,$http){
    $scope.teams = [
        { id: 0, name: "Red",  players:[
            { id:1, username:"Victoria Falls-Zimbabwe 维多利亚瀑布","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/2121.jpg"},
            { id:2, username:"香港-Hong Kong","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/2222.jpg"}
        ]},

        { id: 1, name: "Blue", players:[
            { id:4, username:"美国约塞米蒂国家公园Yosemite National Park","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/2323.jpg"},
            { id:5, username:"夏威夷Hawaii","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/2424.jpg"}
        ]},

        { id: 2, name: "Green", players:[
            { id:7, username:"新西兰的奥克兰 Auckland - New Zealand","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/2525.jpg"},
            { id:8, username:"巴西伊瓜苏瀑布-Iguassu Falls","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/2626.jpg"}
        ]},

        { id: 3, name: "Yellow", players:[
            { id:10, username:"巴黎-Paris","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/2727.jpg"},
            { id:11, username:"阿拉斯加-Alaska","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/2828.jpg"}
        ]},

        { id: 4, name: "Orange", players:[
            { id:13, username:"柬埔寨的吴哥窟-Angkor Wat - Cambodia","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/2929.jpg"},
            { id:14, username:"尼泊尔的喜马拉雅山脉-Himalayas - Nepal","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3030.jpg"}
        ]},

        { id: 5, name: "Purple", players:[
            { id:16, username:"巴西的里约热内卢Rio de Janeiro - Brazil","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3131.jpg"},
            { id:17, username:"肯尼亚马赛马拉的野生动物保护区Masai Mara - Ke","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3232.jpg"}
        ]},
        { id: 6, name: "Purple", players:[
            { id:16, username:"厄瓜多尔的加拉帕戈斯群岛Galapagos Islands - Ecuador","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3333.jpg"},
            { id:17, username:"埃及路克索神庙 Luxor - Egypt","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3434.jpg"}
        ]},
        { id: 7, name: "Purple", players:[
            { id:16, username:"罗马Rome","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3535.jpg"},
            { id:17, username:"旧金山San Francisco","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3636.jpg"}
        ]},
        { id: 8, name: "Purple", players:[
            { id:16, username:"巴塞罗纳Barcelona","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3737.jpg"},
            { id:17, username:"迪拜Dubai","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3838.jpg"}
        ]},
        { id: 9, name: "Purple", players:[
            { id:16, username:"新加坡Singapore","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/3939.jpg"},
            { id:17, username:"塞舌尔拉迪戈岛La Digue - Seychelles","imgsrc":"http://omjbzg6gs.bkt.clouddn.com/eyego/4040.jpg"}
        ]}
    ];
    $scope.loadMore=function(){
        $http.get("data/reservation.json")
            .success(function(data){
                Array.prototype.push.apply($scope.teams,data)
            })
            .finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };
});
