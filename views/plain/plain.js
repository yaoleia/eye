//获得主界面
myapp.controller("plainCtrl",function($scope){
    var mainDiv=document.getElementById("maindiv");
//获得开始界面
    var startdiv=document.getElementById("startdiv");
//获得游戏中分数显示界面
    var scorediv=document.getElementById("scorediv");
//获得分数界面
    var scorelabel=document.getElementById("label");
//获得暂停界面
    var suspenddiv=document.getElementById("suspenddiv");
//获得游戏结束界面
    var enddiv=document.getElementById("enddiv");
//获得游戏结束后分数统计界面
    var planscore=document.getElementById("planscore");
//初始化分数
    var scores=0;

    /*
     创建飞机类
     */
    $scope.plan=function(hp,X,Y,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc){
        this.planX=X;
        this.planY=Y;
        this.imagenode=null;
        this.planhp=hp;
        this.planscore=score;
        this.plansizeX=sizeX;
        this.plansizeY=sizeY;
        this.planboomimage=boomimage;
        this.planisdie=false;
        this.plandietimes=0;
        this.plandietime=dietime;
        this.plansudu=sudu;
//行为
        /*
         移动行为
         */
        this.planmove=function(){
            if(scores<=150000){
                this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+"px";
            }
            else if(scores>150000&&scores<=300000){
                this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+1+"px";
            }
            else if(scores>300000&&scores<=800000){
                this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+2+"px";
            }
            else if(scores>800000&&scores<=1600000){
                this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+3+"px";
            }
            else if(scores>1600000&&scores<=3000000){
                this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+4+"px";
            }
            else{
                this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+5+"px";
            }
        }
        this.init=function(){
            this.imagenode=document.createElement("img");
            this.imagenode.style.left=this.planX+"px";
            this.imagenode.style.top=this.planY+"px";
            this.imagenode.src=imagesrc;
            mainDiv.appendChild(this.imagenode);
        }
        this.init();
    }

    /*
     创建子弹类
     */
    $scope.bullet=function (X,Y,sizeX,sizeY,imagesrc){
        this.bulletX=X;
        this.bulletY=Y;
        this.bulletimage=null;
        this.bulletattach=1;
        this.bulletsizeX=sizeX;
        this.bulletsizeY=sizeY;
//行为
        /*
         移动行为
         */
        this.bulletmove=function(){
            this.bulletimage.style.top=this.bulletimage.offsetTop-20+"px";
        }
        this.init=function(){
            this.bulletimage=document.createElement("img");
            this.bulletimage.style.left= this.bulletX+"px";
            this.bulletimage.style.top= this.bulletY+"px";
            this.bulletimage.src=imagesrc;
            mainDiv.appendChild(this.bulletimage);
        }
        this.init();
    }

    /*
     创建单行子弹类
     */
    $scope.oddbullet=function (X,Y){
        $scope.bullet.call(this,X,Y,55,80,"http://omjbzg6gs.bkt.clouddn.com/eyego/bullet1.png");
    }

    /*
     创建敌机类
     */
    $scope.enemy=function(hp,a,b,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc){
        $scope.plan.call(this,hp,$scope.random(a,b),-100,sizeX,sizeY,score,dietime,sudu,boomimage,imagesrc);
    }
//产生min到max之间的随机数
    $scope.random=function (min,max){
        return Math.floor(min+Math.random()*(max-min));
    }

    /*
     创建本方飞机类
     */
    $scope.ourplan=function (X,Y){
        var imagesrc="http://omjbzg6gs.bkt.clouddn.com/eyego/my_plain.gif";
        $scope.plan.call(this,1,X,Y,66,80,0,660,0,"http://omjbzg6gs.bkt.clouddn.com/eyego/my_boom.gif",imagesrc);
        this.imagenode.setAttribute('id','ourplan');
    }

    /*
     创建本方飞机
     */
    $scope.selfplan=new $scope.ourplan(120,300);
//移动事件
    $scope.myplay=document.getElementById('ourplan');
    $scope.yidong=function(ev){
        var oevent=ev||window.event;
        var selfplanX=oevent.touches[0].pageX;
        var selfplanY=oevent.touches[0].pageY;
        oevent.preventDefault();
        $scope.myplay.style.left=selfplanX-$scope.selfplan.plansizeX/2+"px";
        $scope.myplay.style.top=selfplanY-$scope.selfplan.plansizeY/2+"px";
    }
    /*
     暂停事件
     */
    var number=0;
    $scope.zanting=function(){
        if(number==0){
            suspenddiv.style.display="block";
            if(document.removeEventListener){
                mainDiv.removeEventListener("mousemove",$scope.yidong,true);
            }
            else if(document.detachEvent){
                mainDiv.detachEvent("onmousemove",$scope.yidong);
            }
            clearInterval(set);
            number=1;
        }
        else{
            suspenddiv.style.display="none";
            if(document.addEventListener){
                mainDiv.addEventListener("touchmove",$scope.yidong,true);
            }
            else if(document.attachEvent){
                mainDiv.attachEvent("onmousemove",$scope.yidong);
            }
            set=setInterval($scope.start,20);
            number=0;
        }
    }
//暂停界面重新开始事件
    if(document.addEventListener){
        //为本方飞机添加移动和暂停
        $scope.myplay.addEventListener("touchmove",$scope.yidong,true);
        //为本方飞机添加暂停事件
        $scope.selfplan.imagenode.addEventListener("click",$scope.zanting,true);
        //为暂停界面的继续按钮添加暂停事件
        suspenddiv.getElementsByTagName("button")[0].addEventListener("click",$scope.zanting,true);
    }
    else if(document.attachEvent){
        //为本方飞机添加移动
        $scope.myplay.attachEvent("mousemove",$scope.yidong);
        //为本方飞机添加暂停事件
        $scope.selfplan.imagenode.attachEvent("click",$scope.zanting);
        //为暂停界面的继续按钮添加暂停事件
        suspenddiv.getElementsByTagName("button")[0].attachEvent("click",$scope.zanting);
    }
//初始化隐藏本方飞机
    $scope.selfplan.imagenode.style.display="none";

    /*
     敌机对象数组
     */
    var enemys=[];

    /*
     子弹对象数组
     */
    var bullets=[];
    var mark1=0;
    var mark=0;
    var backgroundPositionY=0;
    var nn=0;
    /*
     开始函数
     */
    $scope.start=function(){
        mainDiv.style.backgroundPositionY=backgroundPositionY+"px";
        backgroundPositionY+=0.5;
        mark++;
        /*
         创建敌方飞机
         */
        if(mark==nn){
            mark1++;
            //中飞机
            if(mark1%4==0){
                enemys.push(new $scope.enemy(6,1,380,46,60,5000,360,$scope.random(1,4),"http://omjbzg6gs.bkt.clouddn.com/eyego/mid_boom.gif","http://omjbzg6gs.bkt.clouddn.com/eyego/enemy3_fly_1.png"));
            }
            //大飞机
            if(mark1%10==0){
                enemys.push(new $scope.enemy(12,1,350,110,164,30000,540,$scope.random(1,3),"http://omjbzg6gs.bkt.clouddn.com/eyego/big_boom.gif","http://omjbzg6gs.bkt.clouddn.com/eyego/enemy2_fly_1.png"));
                mark1=0;
            }
            //小飞机
            else{
                enemys.push(new $scope.enemy(1,1,390,34,24,1000,360,$scope.random(2,4),"http://omjbzg6gs.bkt.clouddn.com/eyego/sma_boom.gif","http://omjbzg6gs.bkt.clouddn.com/eyego/enemy1_fly_1.png"));
            }
            mark=0;
        }

        /*
         移动敌方飞机
         */
        var enemyslen=enemys.length;
        for(var i=0;i<enemyslen;i++){
            if(enemys[i].planisdie!=true){
                enemys[i].planmove();
            }
            /*
             如果敌机超出边界,删除敌机
             */
            if(enemys[i].imagenode.offsetTop>740){
                mainDiv.removeChild(enemys[i].imagenode);
                enemys.splice(i,1);
                enemyslen--;
            }
            //当敌机死亡标记为true时，经过一段时间后清除敌机
            if(enemys[i].planisdie==true){
                enemys[i].plandietimes+=20;
                if(enemys[i].plandietimes==enemys[i].plandietime){
                    mainDiv.removeChild(enemys[i].imagenode);
                    enemys.splice(i,1);
                    enemyslen--;
                }
            }
        }
        /*
         创建子弹
         */
        if(mark%5==0){
            bullets.push(new $scope.oddbullet(parseInt($scope.selfplan.imagenode.style.left)+5,parseInt($scope.selfplan.imagenode.style.top)-10));
        }
        /*
         移动子弹
         */
        var bulletslen=bullets.length;
        for(var i=0;i<bulletslen;i++){
            bullets[i].bulletmove();
            /*
             如果子弹超出边界,删除子弹
             */
            if(bullets[i].bulletimage.offsetTop<0){
                mainDiv.removeChild(bullets[i].bulletimage);
                bullets.splice(i,1);
                bulletslen--;
            }
        }
        /*
         碰撞判断
         */
        for(var k=0;k<bulletslen;k++){
            for(var j=0;j<enemyslen;j++){
                //判断碰撞本方飞机
                if(enemys[j].planisdie==false){
                    if(enemys[j].imagenode.offsetLeft+enemys[j].plansizeX>=$scope.selfplan.imagenode.offsetLeft&&enemys[j].imagenode.offsetLeft<=$scope.selfplan.imagenode.offsetLeft+$scope.selfplan.plansizeX){
                        if(enemys[j].imagenode.offsetTop+enemys[j].plansizeY>=$scope.selfplan.imagenode.offsetTop+40&&enemys[j].imagenode.offsetTop<=$scope.selfplan.imagenode.offsetTop-20+$scope.selfplan.plansizeY){
                            //碰撞本方飞机，游戏结束，统计分数
                            $scope.selfplan.imagenode.src="http://omjbzg6gs.bkt.clouddn.com/eyego/my_boom.gif";
                            enddiv.style.display="block";
                            planscore.innerHTML=scores;
                            if(document.removeEventListener){
                                mainDiv.removeEventListener("mousemove",$scope.yidong,true);
                            }
                            else if(document.detachEvent){
                                mainDiv.detachEvent("onmousemove",$scope.yidong);
                            }
                            clearInterval(set);
                        }
                    }
                    //判断子弹与敌机碰撞
                    if((bullets[k].bulletimage.offsetLeft+bullets[k].bulletsizeX>enemys[j].imagenode.offsetLeft)&&(bullets[k].bulletimage.offsetLeft<enemys[j].imagenode.offsetLeft+enemys[j].plansizeX)){
                        if(bullets[k].bulletimage.offsetTop<=enemys[j].imagenode.offsetTop+enemys[j].plansizeY&&bullets[k].bulletimage.offsetTop+bullets[k].bulletsizeY>=enemys[j].imagenode.offsetTop){
                            //敌机血量减子弹攻击力
                            enemys[j].planhp=enemys[j].planhp-bullets[k].bulletattach;
                            //敌机血量为0，敌机图片换为爆炸图片，死亡标记为true，计分
                            if(enemys[j].planhp<=0){
                                scores=scores+enemys[j].planscore;
                                scorelabel.innerHTML=scores;
                                enemys[j].imagenode.src=enemys[j].planboomimage;
                                enemys[j].planisdie=true;
                            }
                            //删除子弹
                            mainDiv.removeChild(bullets[k].bulletimage);
                            bullets.splice(k,1);
                            bulletslen--;
                            break;
                        }
                    }
                }
            }
        }
    }
    /*
     开始游戏按钮点击事件
     */
    var set;
    $scope.begin=function (n){
        nn=n;
        startdiv.style.display="none";
        mainDiv.style.display="block";
        $scope.selfplan.imagenode.style.display="block";
        scorediv.style.display="block";
        /*
         调用开始函数
         */
        set=setInterval($scope.start,20);
    };
    /*
     完成界面的初始化
     敌方小飞机一个
     我方飞机一个
     */
});

