/**
 * Created by hxsd on 2016/8/31.
 */
myapp.controller("reservationCtrl",function($scope,$http){
    $scope.teams = [
        { id: 0, name: "Red",  players:[
            { id:1, username:"Victoria Falls-Zimbabwe 维多利亚瀑布","imgsrc":"images/2121.jpg"},
            { id:2, username:"香港-Hong Kong","imgsrc":"images/2222.jpg"}
        ]},

        { id: 1, name: "Blue", players:[
            { id:4, username:"美国约塞米蒂国家公园Yosemite National Park","imgsrc":"images/2323.jpg"},
            { id:5, username:"夏威夷Hawaii","imgsrc":"images/2424.jpg"}
        ]},

        { id: 2, name: "Green", players:[
            { id:7, username:"新西兰的奥克兰 Auckland - New Zealand","imgsrc":"images/2525.jpg"},
            { id:8, username:"巴西伊瓜苏瀑布-Iguassu Falls","imgsrc":"images/2626.jpg"}
        ]},

        { id: 3, name: "Yellow", players:[
            { id:10, username:"巴黎-Paris","imgsrc":"images/2727.jpg"},
            { id:11, username:"阿拉斯加-Alaska","imgsrc":"images/2828.jpg"}
        ]},

        { id: 4, name: "Orange", players:[
            { id:13, username:"柬埔寨的吴哥窟-Angkor Wat - Cambodia","imgsrc":"images/2929.jpg"},
            { id:14, username:"尼泊尔的喜马拉雅山脉-Himalayas - Nepal","imgsrc":"images/3030.jpg"}
        ]},

        { id: 5, name: "Purple", players:[
            { id:16, username:"巴西的里约热内卢Rio de Janeiro - Brazil","imgsrc":"images/3131.jpg"},
            { id:17, username:"肯尼亚马赛马拉的野生动物保护区Masai Mara - Ke","imgsrc":"images/3232.jpg"}
        ]},
        { id: 6, name: "Purple", players:[
            { id:16, username:"厄瓜多尔的加拉帕戈斯群岛Galapagos Islands - Ecuador","imgsrc":"images/3333.jpg"},
            { id:17, username:"埃及路克索神庙 Luxor - Egypt","imgsrc":"images/3434.jpg"}
        ]},
        { id: 7, name: "Purple", players:[
            { id:16, username:"罗马Rome","imgsrc":"images/3535.jpg"},
            { id:17, username:"旧金山San Francisco","imgsrc":"images/3636.jpg"}
        ]},
        { id: 8, name: "Purple", players:[
            { id:16, username:"巴塞罗纳Barcelona","imgsrc":"images/3737.jpg"},
            { id:17, username:"迪拜Dubai","imgsrc":"images/3838.jpg"}
        ]},
        { id: 9, name: "Purple", players:[
            { id:16, username:"新加坡Singapore","imgsrc":"images/3939.jpg"},
            { id:17, username:"塞舌尔拉迪戈岛La Digue - Seychelles","imgsrc":"images/4040.jpg"}
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
