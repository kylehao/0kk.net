//播放列表
var music_list =[
{"id":"1","name":"azu-angel","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/azu-angel.mp3","images":"img/a1.jpg"},
{"id":"2","name":"juju-この夜を止めてよ","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/juju-この夜を止めてよ.mp3","images":"img/a2.jpg"},
{"id":"3","name":"rania-DrFeelGood","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/rania-DrFeelGood.mp3","images":"img/a3.jpg"},
{"id":"4","name":"中岛美嘉-雪華","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/中岛美嘉-雪華.mp3","images":"img/a4.jpg"},
{"id":"5","name":"中島みゆき-容易受伤的女人原曲","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/中島みゆき-容易受伤的女人原曲.mp3","images":"img/a5.jpg"},
{"id":"6","name":"初音未来-甩葱歌","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/初音未来-甩葱歌.mp3","images":"img/a1.jpg"},
{"id":"7","name":"大冢爱-プラネタリウム","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/大冢爱-プラネタリウム.mp3","images":"img/a2.jpg"},
{"id":"8","name":"大冢爱-桃ノ花ビラ","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/大冢爱-桃ノ花ビラ.mp3","images":"img/a3.jpg"},
{"id":"9","name":"宇多田光-First_Love","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/宇多田光-First_Love.mp3","images":"img/a4.jpg"},
{"id":"10","name":"宗次郎-故乡的原风景","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/宗次郎-故乡的原风景.mp3","images":"img/a5.jpg"},
{"id":"11","name":"少女时代-mr taxi","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/少女时代-mr taxi.mp3","images":"img/a1.jpg"},
{"id":"12","name":"少女时代-the boys","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/少女时代-the boys.mp3","images":"img/a2.jpg"},
{"id":"13","name":"川嶋あい-大丈夫だよ","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/川嶋あい-大丈夫だよ.mp3","images":"img/a3.jpg"},
{"id":"14","name":"日本歌曲 星の在り処","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/日本歌曲 星の在り処.mp3","images":"img/a4.jpg"},
{"id":"15","name":"日本歌曲-漠然の莹","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/日本歌曲-漠然の莹.mp3","images":"img/a5.jpg"},
{"id":"16","name":"滨崎步-A_Song_For_Xx","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/滨崎步-A_Song_For_Xx.mp3","images":"img/a1.jpg"},
{"id":"17","name":"滨崎步-Blue_Bird","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/滨崎步-Blue_Bird.mp3","images":"img/a2.jpg"},
{"id":"18","name":"滨崎步-depend_on_you","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/滨崎步-depend_on_you.mp3","images":"img/a3.jpg"},
{"id":"19","name":"滨崎步-fly_high","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/滨崎步-fly_high.mp3","images":"img/a4.jpg"},
{"id":"20","name":"滨崎步-M","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/滨崎步-M.mp3","images":"img/a5.jpg"},
{"id":"21","name":"滨崎步-To_Be","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/滨崎步-To_Be.mp3","images":"img/a1.jpg"},
{"id":"22","name":"谷村新司-いい日旅立ち","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/谷村新司-いい日旅立ち.mp3","images":"img/a2.jpg"},
{"id":"23","name":"谷村新司-カノン","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/谷村新司-カノン.mp3","images":"img/a3.jpg"},
{"id":"24","name":"谷村新司-君の歌","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/谷村新司-君の歌.mp3","images":"img/a4.jpg"},
{"id":"25","name":"谷村新司-忘れないで","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/谷村新司-忘れないで.mp3","images":"img/a5.jpg"},
{"id":"26","name":"谷村新司-昂一すばゐ","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/谷村新司-昂一すばゐ.mp3","images":"img/a1.jpg"},
{"id":"27","name":"谷村新司-星","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/谷村新司-星.mp3","images":"img/a2.jpg"},
{"id":"28","name":"谷村新司-睡莲","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/谷村新司-睡莲.mp3","images":"img/a3.jpg"},
{"id":"29","name":"谷村新司-风姿花传","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/谷村新司-风姿花传.mp3","images":"img/a4.jpg"},

    ]

//formateTime(61)--->01:01


//获取各种标签

    var player = document.querySelector("#player");
    var bz_music = document.querySelector("#bz_music");

    //歌曲信息部分
    var left_photo = document.querySelector("#left_photo");
    var list_title = document.querySelector("#list_title");
    var list_singer = document.querySelector("#list_singer");
    var process_slide = document.querySelector("#process_slide");
    var process = document.querySelector("#process");
    var showHide = document.querySelector("#showHide");
    
    //控制按钮部分
    var time = document.querySelector("#time");
    var　btnPlay　= document.querySelector("#btnPlay");
    var　volume_slide　= document.querySelector("#volume_slide");
    var　volume　= document.querySelector("#volume");
    
    //播放列表部分
    var play_list = document.querySelector("#play_list");
    
    var play_list_area = document.querySelector("#play_list_area");

//动态加载播放列表
    function loadPlayList(){
        //遍历播放列表
        for(var i=0;i<music_list.length;i++){
            //将每个对象，分别存到music中
            var music = music_list[i];
            //创建li标签
            var liTag = document.createElement("li");
            //创建歌曲名span标签
            var spanTitleTag = document.createElement("span");
            //创建时长span标签
            var spanDurationTag = document.createElement("span");
            
            //为ul添加li标签，子节点
            play_list.appendChild(liTag);
            //为li标签，添加子节点
            liTag.appendChild(spanTitleTag);
            liTag.appendChild(spanDurationTag);
            
            //添加内容
            spanTitleTag.innerHTML=music.name;
            spanDurationTag.innerHTML=music.duration;
            
            //添加类名
            spanTitleTag.classList.add("list_title");
            spanDurationTag.classList.add("list_time");
            
            //自定义属性
            //需要用的时候，直接从标签中取值，不需要和后台交互
            liTag.setAttribute("data-index",i);
            
            //当点击每一个li标签的时候
            //重新载入歌曲信息(专辑图片、歌曲路径、歌曲名、歌手名)
            //播放当前点击的音乐
            liTag.addEventListener("click",function(){
                //获取每个li标签的歌曲id
                var index = this.getAttribute("data-index");
//              console.log(index);
                //将歌曲id赋给，全局变量play_index
                play_index = index;
                //调用载入歌曲函数
                loadMusic();
                //播放音乐
                playMusic();
            })
        }
    }
    
//载入歌曲信息
    function loadMusic(){
        var music = music_list[play_index];
        //改变专辑图片
        left_photo.src = music.images;
        //改变歌曲名
        list_title.innerHTML = music.name;
        //改变歌手名
        list_singer.innerHTML = music.singer;
        //改变歌曲路径
        player.src = music.src;
    }
    
//播放,暂停音乐
    btnPlay.addEventListener("click",function(){
        //paused,表示当前音乐是否为暂停状态
        if(player.paused){
            //play(),播放当前音乐
            playMusic();
        }
        else {
            //pause(),暂停当前音乐
            player.pause();
            btnPlay.setAttribute("class","btn_play fa fa-play");
        }
    })

//上一曲
    function backword(){
        if(play_index==0){
            play_index=music_list.length-1;
        }
        else{
            //改变播放序号
            play_index--;
        }
        //重新载入
        loadMusic();
        //播放
        playMusic();   
    }
    
//下一曲
    function forward(){
        if(play_index==music_list.length-1){
            play_index=0;
        }
        else{
            //改变播放序号
            play_index++;
        }
        //重新载入
        loadMusic();
        //播放
        playMusic();   
    }
    
//播放
    function playMusic(){
        player.play();
        btnPlay.setAttribute("class","btn_play fa fa-pause"); 
    }



//时间转换

    function formateTime(time){
        if(time>3600){
            var hour = parseInt(time/3600);
            var minute = parseInt(time%3600/60);
            var second = parseInt(time%3600);
            hour=hour>=10?hour:"0"+hour;
            minute=minute>=10?minute:"0"+minute;
            second=second>=10?second:"0"+second;
            return hour+":"+minute+":"+second;
        }
        else{
            var minute = parseInt(time/60);
            var second = parseInt(time%60);
            minute=minute>=10?minute:"0"+minute;
            second=second>=10?second:"0"+second;
            return minute+":"+second;  
        }

    }
    
//设置定时器
    window.setInterval(function(){
        //currentTime,当前播放的秒数!
//      console.log(player.currentTime);
        time.innerHTML = formateTime(player.currentTime);
        //duration,当前音乐的总时长,秒数!!!
        var percent = player.currentTime/player.duration;
//      console.log(percent);
        process_slide.style.width=percent*100+"%";
    },100)
    
//静音
    function volumeOff(){
        //volume,[0,1]
        player.volume=0;
        volume_slide.style.width=0;
        console.log(player.volume);
    }
    
//最大音 
    function volumeUp(){
        player.volume=1;
        volume_slide.style.width="100%";
        console.log(player.volume);
    }

//通过滑块控制音量大小
    volume.addEventListener("click",function(event){
        //得到当前点击的位置
        var currentVolume = event.offsetX/this.offsetWidth;
        console.log(currentVolume);
        //设置音量
        player.volume=currentVolume;
        volume_slide.style.width = currentVolume*100+"%";
    })

//通过滑块控制音乐进度
    process.addEventListener("click",function(event){
        //计算点击位置的百分比
        var currentValue = event.offsetX/this.offsetWidth;
        
        //因为我们已经设置了定时器,在实时监控我们当前音乐的变化
        //因此,我们通过设置当前播放的音乐时长,影响我们的进度条
        player.currentTime = player.duration*currentValue;
    })

//显示隐藏播放列表
    function showMusicList(){
        //当前已经显示播放列表
        if(flag){
            play_list_area.style.display="none";
            bz_music.style.width="500px";
            showHide.style.color="#666";
            flag=0;
        }
        else {
            play_list_area.style.display="block";
            bz_music.style.width="700px";
            showHide.style.color="#DDD";
            flag=1;
        }
    }


//初始化
    //载入播放列表
    loadPlayList();
    //播放序号
    var play_index=0;
    //初始音量
    player.volume=0.5;
    //初始化显示播放列表
    //当flag为1的时候,表示列表显示(当前状态)
    //当flag为0的时候,表示列表隐藏(当前状态)
    var flag=1;

