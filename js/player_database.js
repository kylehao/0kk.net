// MP3播放器及歌曲库js


	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	},
     [
		 { title: "Ellens Gesang III D839", artist: "Geoffrey Parsons", mp3:"http://music.163.com/song/media/outer/url?id=16691428.mp3  ", poster: "http://p1.music.126.net/wAIlwR4SxuZg_ZMwgmSYcg==/3386495814257726.jpg?param=130y130"},
		 { title: "默", artist: "那英", mp3:"http://music.163.com/song/media/outer/url?id=31473269.mp3 ", poster: "http://p1.music.126.net/OCGt5ln0lPPtPbVJ3VEKtA==/109951163020570422.jpg?param=130y130"},
		 { title: "Fire", artist: "Said The Sky", mp3:"http://music.163.com/song/media/outer/url?id=435289279.mp3", poster: "http://p1.music.126.net/tg2zke_mrqwuOPlEIEUjGg==/18294773975127592.jpg?param=130y130"}
	 ], 
		 		    
		{playlistOptions:{enableRemoveControls: true},
		swfPath: "js/",
		supplied: "webmv, ogv, m4v, oga, mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});
	

	//past
	var latest=[
		{ title: "周深-大鱼", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-大鱼.mp3", poster:"http://p1.music.126.net/C3C4vPOMsTd_vX9Ccww06Q==/109951163117390906.jpg?param=130y130"},
		{ title: "岑宁儿-追光者", artist: "Yuri akiyama", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/岑宁儿-追光者.mp3", poster:"http://p1.music.126.net/AKhQSRL6HyZu4YwWg4Wi6A==/109951163060585255.jpg?param=130y130"},
		{ title: "迪丽热巴、汪苏泷-偏偏", artist: "Bois LanYun", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/迪丽热巴、汪苏泷-偏偏.mp3", poster:"http://p1.music.126.net/6o_M9dSbYPRqKRmwY1bOGg==/109951163073262137.jpg?param=130y130"},
		{ title: "胡夏、郁可唯-知否知否", artist: "Akito", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/胡夏、郁可唯-知否知否.mp3", poster:"http://p1.music.126.net/7cYhniBuLvU3fvLjeRFeNw==/106652627910735.jpg?param=130y130"},
		{ title: "李健-贝加尔湖畔", artist: " AniFace", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李健-贝加尔湖畔.mp3", poster:"http://p1.music.126.net/PzE3JrY7QVqFghK9gJN67A==/109951163050326398.jpg?param=130y130"},
		{ title: "容祖儿-小小", artist: "Yakuro", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/容祖儿-小小.mp3", poster:"http://p1.music.126.net/V7YrIWl2ALgg4QZTxD7_rw==/2937895071851575.jpg?param=130y130"},
		{ title: "田馥甄-小幸运", artist: "α·Pav", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/田馥甄-小幸运.mp3", poster:"http://p1.music.126.net/ktIGtL8eCh6bmDf5a27tFQ==/93458488378205.jpg?param=130y130"},
		{ title: "杨宗纬 张碧晨-凉凉", artist: "Shirfine", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/杨宗纬 张碧晨-凉凉.mp3", poster:"http://p1.music.126.net/J6m3eJOw32G_wDim2tqloA==/5636096604060170.jpg?param=130y130"},
		{ title: "袁娅维-说散就散", artist: "久遠", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/袁娅维-说散就散.mp3", poster:"http://p1.music.126.net/j9u_wRtJMhlt64k-ZSUM3Q==/944480488305733.jpg?param=130y130"}
	];

	//now
	var popular=[
		{ title: "AvrilLavigne-IamWithYou", artist: "love solfege", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/欧美音乐/AvrilLavigne-IamWithYou.mp3", poster:"http://p1.music.126.net/ek5C5HeDHICGjziHhTMCow==/749866930165203.jpg?param=130y130"},
		{ title: "BackstreetBoys-As_Long_As_You_Love_M", artist: "love solfege", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/欧美音乐/BackstreetBoys-As_Long_As_You_Love_M.mp3", poster:"http://p1.music.126.net/ek5C5HeDHICGjziHhTMCow==/749866930165203.jpg?param=130y130"},
		{ title: "DemiLovato-LetItGo", artist: "Sound Horizon", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/欧美音乐/DemiLovato-LetItGo.mp3", poster:"http://p1.music.126.net/ykne_IJENLMk5KvNUXC3Xg==/779553744115520.jpg?param=130y130"},
		{ title: "EdSheeran-ShapeOfYou", artist: "Sound Horizon", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/欧美音乐/EdSheeran-ShapeOfYou.mp3", poster: "http://p1.music.126.net/jRkMO3QROnFeVrL2m3XuvQ==/18976471183854535.jpg?param=130y130"},
		{ title: "JustinBieber-Baby", artist: "Sound Horizon", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/欧美音乐/JustinBieber-Baby.mp3", poster:"http://p1.music.126.net/e0tsg402IoJLHyJIx4TWQw==/4451922580867675.jpg?param=130y130"},
		{ title: "MinnieRiperton-LovingYou", artist: "Sound Horizon", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/欧美音乐/MinnieRiperton-LovingYou.mp3", poster:"http://p1.music.126.net/RNabeevAh1X4_U76fS1FCg==/4415638697151069.jpg?param=130y130"},
		{ title: "SarahCoonor-just one last dance", artist: "Sound Horizon", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/欧美音乐/SarahCoonor-just one last dance.mp3", poster:"http://p1.music.126.net/RNabeevAh1X4_U76fS1FCg==/4415638697151069.jpg?param=130y130"},
		{ title: "布兰妮-everytime", artist: "MUSIRISCA", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/欧美音乐/布兰妮-everytime.mp3", poster:"http://p1.music.126.net/9vinX4XYfdNgSu3pQcWMMg==/2542070884388514.jpg?param=130y130"},
		{ title: "席琳迪翁-MyHeartWillGoOn", artist: "MUSIRISCA", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/欧美音乐/铁达尼号主题曲-MyHeartWillGoOn.mp3", poster:"http://p1.music.126.net/g9dAq3k_Z9gE6GRcZo4XuA==/3420580674756260.jpg?param=130y130"}
	];

	//future
	var rank=[
		{ title: "yiruma-雨的印记", artist: "霜月はるか", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/yiruma-雨的印记.mp3", poster:"http://p1.music.126.net/Fp7CYfdZsQAYZls-gD8KpQ==/2262794929982835.jpg?param=130y130"},
		{ title: "班得瑞-安妮的仙境", artist: "Ether", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/班得瑞-安妮的仙境.mp3", poster:"http://p1.music.126.net/DU6RM83OPR0KMcVP05f6zA==/3294136844455797.jpg?param=130y130"},
		{ title: "杜普雷-殇", artist: "河合夕子", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/杜普雷-殇.mp3", poster:"http://p1.music.126.net/z7Mk6Au_otaoWozoM-t62w==/2402432906715323.jpg?param=130y130"},
		{ title: "理查德 克莱德曼-致爱丽丝", artist: "Chopin", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/理查德 克莱德曼-致爱丽丝.mp3", poster:"http://p1.music.126.net/Dvhon4mH7qimTtE7q3omTw==/1419469524716144.jpg?param=130y130"},
		{ title: "理查德 克莱德曼-梦中的婚礼", artist: "Chopin", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/理查德 克莱德曼-梦中的婚礼.mp3", poster:"http://p1.music.126.net/-jxEuvKopuUdXDTKL7KuWw==/105553116283769.jpg?param=130y130"},
		{ title: "理查德 克莱德曼-秋日私语", artist: "Chopin", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/理查德 克莱德曼-秋日私语.mp3", poster:"http://p1.music.126.net/h3MYwTuGIpkWiMuBwZ3Vmg==/6631154628238015.jpg?param=130y130"},
		{ title: "理查德 克莱德曼-水边的阿狄丽娜", artist: "Chopin", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/理查德 克莱德曼-水边的阿狄丽娜.mp3", poster:"http://p1.music.126.net/8cSVJulJa2tiLydRxyXuTg==/109951162938339077.jpg?param=130y130"},
		{ title: "宗次郎-故乡的原风景", artist: "Chopin", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/宗次郎-故乡的原风景.mp3", poster:"http://p1.music.126.net/MiXbBt6j6xWNlv_QCFSRAw==/2288083697427927.jpg?param=130y130"},
		{ title: "雅尼-和兰花在一起", artist: "Chopin", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/Chunyy-和兰花在一起.mp3", poster:"http://p1.music.126.net/68_Rrtyz1A9MGImm2cUb-w==/2078076976524854.jpg?param=130y130"}
	];

   // oline song/dream/
   var main =[
	   { title: "赵雷-成都", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵雷-成都.mp3", poster: "http://p1.music.126.net/wME0oX7VY7fEkKvbXgzlrA==/19122706230471650.jpg?param=130y130" },
	   { title: "陈冠蒲-太多", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈冠蒲-太多.mp3", poster: "http://p1.music.126.net/wME0oX7VY7fEkKvbXgzlrA==/19122706230471650.jpg?param=130y130" },
	   { title: "成龙、金喜善-无尽的爱", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/成龙、金喜善-无尽的爱.mp3", poster: "http://p1.music.126.net/OX-yCGzOUHbhqiKK9Xx4Vg==/4442026976217692.jpg?param=130y130" },
	   { title: "大壮-我们不一样", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/大壮-我们不一样.mp3", poster: "http://p1.music.126.net/dlC4rAiDvq_uUi2fpnxKMA==/109951162819138078.jpg?param=130y130" },
	   { title: "邓紫棋-光年之外", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邓紫棋-光年之外.mp3", poster: "http://p1.music.126.net/WStPGvMUlDC89Wus9813zA==/109951163014870789.jpg?param=130y130" },
	   { title: "光良-童话", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/光良-童话.mp3", poster: "http://p1.music.126.net/lf9G9OQf_ouA_FuPZjm1HA==/890604418498843.jpg?param=130y130" },
	   { title: "李玟-月光爱人", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李玟-月光爱人.mp3", poster: "http://p1.music.126.net/2-_sPmCBnN6VfwFmONRy2Q==/46179488378975.jpg?param=130y130" },
	   { title: "李荣浩-年少有为", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李荣浩-年少有为.mp3", poster: "http://p1.music.126.net/unW9CQcqjzh8BYjsVqosWw==/18874216602702134.jpg?param=130y130" },
	   { title: "李宇春-无价之姐", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李宇春-无价之姐.mp3", poster: "http://p1.music.126.net/YIhF9kpKMx_wBKQFN-DwTw==/81363860472987.jpg?param=130y130" },
	   { title: "林志炫-烟花易冷", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林志炫-烟花易冷.mp3", poster: "http://p1.music.126.net/fJ4Y4PN_h0Mg3ByQ2yfL9g==/838927371993316.jpg?param=130y130" }
	   ];
   var spirit =[
	   { title: "刘珂矣-芙蓉雨", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/刘珂矣-芙蓉雨.mp3", poster: "http://p1.music.126.net/lW4YKD6cMgm32nI66CzWVg==/5702067301704441.jpg?param=130y130" },
	   { title: "梦然-少年", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/梦然-少年.mp3", poster: "http://p1.music.126.net/tFTRt1H87rReNTyO1K9IDQ==/18498183627713149.jpg?param=130y130" },
	   { title: "齐秦-大约在冬季", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/齐秦-大约在冬季.mp3", poster: "http://p1.music.126.net/7xaV2qB-T1d9m8b1XZC6tQ==/725677674344222.jpg?param=130y130" },
	   { title: "苏芮-牵手", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/苏芮-牵手.mp3", poster: "http://p1.music.126.net/Iqckrd2sOB1ztqrSOw4XzA==/109951162841140691.jpg?param=130y130" },
	   { title: "汪峰-怒放的生命", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/汪峰-怒放的生命.mp3", poster: "http://p1.music.126.net/4xHOkSVWH-n6p5pB3Jf0yQ==/109951162922204274.jpg" },
	   { title: "王杰-伤心1999", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王杰-伤心1999.mp3", poster: "http://p1.music.126.net/rkJSVKRZkfLXOoVwXtiB4w==/18283778858733705.jpg?param=130y130" },
	   { title: "王铮亮-时间都去哪儿了", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王铮亮-时间都去哪儿了.mp3", poster: "http://p1.music.126.net/HdmtedPRZEEBduHcmUnk3w==/853221023209311.jpg?param=130y130" },
	   { title: "信乐团-假如", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/信乐团-假如.mp3", poster: "http://p1.music.126.net/GNKtRK8w7edPw3jAsavL2A==/5980243743832365.jpg?param=130y130" },
	   { title: "许韶洋-花香", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许韶洋-花香.mp3", poster: "http://p1.music.126.net/k_WRxDY1qQ4ztB5uFFrvoA==/17907745881679448.jpg?param=130y130" },
	   { title: "许巍-曾经的你", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许巍-曾经的你.mp3", poster: "http://p1.music.126.net/-c3qURPNRNLe-YJMbiZoKA==/109951163072509863.jpg?param=130y130" }
	   ];
   var magic =[
	   { title: "庾澄庆-情非得已", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/庾澄庆-情非得已.mp3", poster: "http://p1.music.126.net/r4TK33y6f8cwlntVidXZbQ==/931286348726555.jpg?param=130y130" },
	   { title: "张碧晨-年轮", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张碧晨-年轮.mp3", poster: "http://p1.music.126.net/ivONokvElv9ZCzyrZp84FQ==/3297435373557125.jpg?param=130y130" },
	   { title: "赵方婧-芒种", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵方婧-芒种.mp3", poster:"http://p1.music.126.net/Q4Dg5QXwft213TBKMv26_A==/3276544653004159.jpg?param=130y130" },
	   { title: "周杰伦-青花瓷", artist: "", mp3: "http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周杰伦-青花瓷.mp3", poster: "http://p1.music.126.net/84dpde0vkfsDAVsNNjulXg==/7906588115750467.jpg?param=130y130" },
	   { title: "MeghnaMishra-NachdiPhirA", artist: "", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/印度歌曲/MeghnaMishra-NachdiPhira.mp3", poster: "http://p1.music.126.net/b04i7LFbHLJkmkzwhwRLMA==/2343059278838229.jpg?param=130y130" },
	   { title: "谷村新司-风姿花传", artist: "", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/日本音乐/谷村新司-风姿花传.mp3", poster: "http://p1.music.126.net/4BgAnUbCDFex3m4z-hWULA==/2509085534622060.jpg?param=130y130" },
	   { title: "轻音乐-断情殇", artist: "", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/简选/空灵/Chunyy-断情殇.mp3", poster: "http://p1.music.126.net/3eyBH8RjxjXG-EqWShU1wg==/18887410742154555.jpg?param=130y130" },
	   { title: "少女时代-Gee", artist: "", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/韩国音乐/少女时代-Gee.mp3", poster: "http://p1.music.126.net/KmPcFcxxg61d15R8yu5x_A==/18681802069425034.jpg?param=130y130" },
	   { title: "WAX-改变化装", artist: "", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/韩国音乐/WAX-改变化装.mp3", poster: "http://p1.music.126.net/xaX_RkkW0cT4f38k62N8yg==/3413983630702236.jpg?param=130y130" },
	   { title: "sara-即使知道要见面", artist: "", mp3: "http://music.asia.ga/OnedriveTJ/音乐视听/泰国音乐/sara-即使知道要见面.mp3", poster: "http://p1.music.126.net/foJM2P9nq8pXHnCZjcf75w==/19047939439716625.jpg?param=130y130" }
	   ];

	//添加播放歌曲

	$("#latest li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:latest[k].title, artist:latest[k].artist,
			//free:true,
			mp3:latest[k].mp3,
			//oga:"",
			poster:latest[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#popular li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:popular[k].title, artist:popular[k].artist,
			//free:true,
			mp3:popular[k].mp3,
			//oga:"",
			poster:popular[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#rank li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:rank[k].title, artist:rank[k].artist,
			//free:true,
			mp3:rank[k].mp3,
			//oga:"",
			poster:rank[k].poster
		});
		myPlaylist.play(-1);
	});
	
$("#main li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: main[k].title, artist: main[k].artist,
		//free:true,
		mp3: main[k].mp3,
		//oga:"",
		poster: main[k].poster
	});
	myPlaylist.play(-1);
});
	
$("#spirit li").find("a.playIcon").click(function () {
	var k = $(this).parent("li").index();
	myPlaylist.add({
		title: spirit[k].title,
		artist: spirit[k].artist,
		//free:true,
		mp3: spirit[k].mp3,
		//oga:"",
		poster: spirit[k].poster
	});
	myPlaylist.play(-1);
});
$("#magic li").find("a.playIcon").click(function () {
	var m = $(this).parent("li").index();
	myPlaylist.add({
		title: magic[m].title,
		artist: magic[m].artist,
		//free:true,
		mp3: magic[m].mp3,
		//oga:"",
		poster: magic[m].poster
	});
	myPlaylist.play(-1);
});
	//添加歌曲结束


	//移除
	$("#playlist-remove").click(function() {
		myPlaylist.remove();		//（0 1 2 ... -2 -1）
	});
	
	$("#listRemove").click(function() {
		myPlaylist.remove();
	});

	// 上一曲、下一曲

	$("#playlist-next").click(function() {
		myPlaylist.next();
	});
	$("#playlist-previous").click(function() {
		myPlaylist.previous();
	});

	// 播放
	$("#playlist-play").click(function() {
		myPlaylist.play();
	});

	$("#playlist-play--2").click(function() {
		myPlaylist.play(-2);
	});
	$("#playlist-play--1").click(function() {
		myPlaylist.play(-1);
	});
	$("#playlist-play-0").click(function() {
		myPlaylist.play(0);
	});
	$("#playlist-play-1").click(function() {
		myPlaylist.play(1);
	});
	$("#playlist-play-2").click(function() {
		myPlaylist.play(2);
	});

	// 暂停

	$("#playlist-pause").click(function() {
		myPlaylist.pause();
	});



	//是否自动播放

	$("#playlist-option-autoPlay-true").click(function() {
		myPlaylist.option("autoPlay", true);
	});
	$("#playlist-option-autoPlay-false").click(function() {
		myPlaylist.option("autoPlay", false);
	});




	//播放器列表滚动条js------------------------------------------------------------------------------------------------
	var $bar=$(".bar");
	var $scrollBar=$(".scrollBar");
	var $maxH = $scrollBar.innerHeight() - $bar.outerHeight();
	var $ul=$(".jp-playlist ul");
	var $li=$(".jp-playlist ul li");
	var disY=0; 
	var iScale=0;
	var iSpeed = 0;
	
	$ul.height(1000);		//设置ul的高度
	
	$bar.mousedown(function (event){
		var event = event || window.event;
		disY = event.clientY - $(this).position().top;                
		$(document).bind("mousemove",function (event){
				var event = event || window.event;
				var iH = event.clientY - disY;                        
				iH <= 0 && (iH = 0);
				iH >= $maxH && (iH = $maxH);
				$bar.css({top : iH + "px"});
				iScale = - iH/$maxH;
				$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});	
				return false;
		});                
		$(document).bind("mouseup",function (){		
				$(document).unbind("mousemove");
				$(document).unbind("mouseup");
		});
		return false;
	});
	
	 //当鼠标移入，监听事件
	$(".jp-playlist-box").mouseover(function(){
			//鼠标滚轮
			addHandler(this, "mousewheel", mouseWheel);//IE
			addHandler(this, "DOMMouseScroll", mouseWheel);//标准
			return false;			
	});
	//绑定事件重写兼容
	 function addHandler(element, type, handler){
			return element.addEventListener ? element.addEventListener(type, handler, false) :
			element.attachEvent("on" + type, handler, false)
	}
	 //鼠标滚轮事件
	function mouseWheel(event){
		var event = event || window.event;
		if(event.wheelDelta) {//IE
				iSpeed = event.wheelDelta > 0 ? -3 : 3;
		}else if(event.detail) {//火孤
				iSpeed = event.detail < 0 ? -3 : 3;
		}
		move();
		
		//FF,绑定事件，阻止默认事件  
		if (event.preventDefault) {  
			event.preventDefault();  
		} 	
	} ;
	//滚轮 要执行的
	function move(){
		var iH=$bar.position().top;
		iH=iH+iSpeed;
		iH <= 0 && (iH = 0);
		iH >= $maxH && (iH = $maxH);
		$bar.css({top:iH+"px"});
		iScale = - iH/$maxH;
		$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});
		return false;
	};
	//播放器列表滚动条js 结束------------------------------------------------
	
	
	
	//音乐播放器 收缩、展开----------------------------------------------
	var fold=true;//标识
	
	//页面加载时，播放器运动出来，延迟2秒，运动回去
	$(".jp-video").animate({left:0},"slow",function(){
		slideOut($(this));		
	}).delay(2000).animate({left:"-480px"},350,function(){
		slideIn($(this));	
	});
	
	//点击按钮运动出来，或运动回去
	$("#btnfold").mouseover(function(){
		if(fold){
			$(".jp-video").animate({left:"-480px"},350,function(){	
				slideIn($(this));
			});	
		}else{
			$(".jp-video").animate({left:0},350,function(){
				slideOut($(this));
			});	
		}
	});
	//封装按钮背景切换1
	function slideOut(obj){
		$("#btnfold").attr({"title":"点击收缩"});
		obj.find("span").css({"transform":"rotate(180deg)"});
		obj.find("span").css({"MozTransform":"rotate(180deg) translateX(2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(180deg)"});
		fold=true;		
	};
	//封装按钮背景切换2
	function slideIn(obj){
		$("#btnfold").attr({"title":"点击展开"});	
		obj.find("span").css({"transform":"rotate(0deg)"});
		obj.find("span").css({"MozTransform":"rotate(0deg) translateX(-2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(0deg)"});
		fold=false;	
	};
	
	//歌曲列表展开、收缩---------------------------------------------------
	var iOpen=false;
	$("#listClose").click(function(){
		if(iOpen){
			$(".jp-playlist-box").animate({height:0},100);
			$("#btnfold").css({top:"5px"});
			$("#listRemove").css({display:"none"});
			$(".scrollBar").css({display:"none"});
			$(".jp-video").animate({height:"94px",bottom:"20px"},100);
			iOpen=false;
		}else{
			$(".jp-playlist-box").animate({height:"80px"},100);
			$("#btnfold").css({top:"52px"});
			$("#listRemove").css({display:"block"});
			$(".scrollBar").css({display:"block"});
			$(".jp-video").animate({height:"175px",bottom:"20px"},100);
			iOpen=true;
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
