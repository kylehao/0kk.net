//播放列表
var music_list =[
{"id":"1","name":"ALin-给我一个理由忘记","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/ALin-给我一个理由忘记.mp3","images":"img/a1.jpg"},
{"id":"2","name":"ALin-有一种悲伤","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/ALin-有一种悲伤.mp3","images":"img/a2.jpg"},
{"id":"3","name":"阿悄-陪我去流浪","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/阿悄-陪我去流浪.mp3","images":"img/a3.jpg"},
{"id":"4","name":"阿桑-疯了","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/阿桑-疯了.mp3","images":"img/a4.jpg"},
{"id":"5","name":"阿桑-寂寞在唱歌","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/阿桑-寂寞在唱歌.mp3","images":"img/a5.jpg"},
{"id":"6","name":"阿桑-受了点伤","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/阿桑-受了点伤.mp3","images":"img/a1.jpg"},
{"id":"7","name":"岑宁儿-追光者","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/岑宁儿-追光者.mp3","images":"img/a2.jpg"},
{"id":"8","name":"岑雨桥、萧全-触电(爱的魔力转圈圈)","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/岑雨桥、萧全-触电(爱的魔力转圈圈).mp3","images":"img/a3.jpg"},
{"id":"9","name":"陈冠蒲-就让你走","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈冠蒲-就让你走.mp3","images":"img/a4.jpg"},
{"id":"10","name":"陈冠蒲-太多","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈冠蒲-太多.mp3","images":"img/a5.jpg"},
{"id":"11","name":"陈慧娴-千千阙歌","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈慧娴-千千阙歌.mp3","images":"img/a1.jpg"},
{"id":"12","name":"陈琳-爱就爱了","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈琳-爱就爱了.mp3","images":"img/a2.jpg"},
{"id":"13","name":"陈明-等你爱我","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈明-等你爱我.mp3","images":"img/a3.jpg"},
{"id":"14","name":"陈明-我要找到你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈明-我要找到你.mp3","images":"img/a4.jpg"},
{"id":"15","name":"陈瑞-白狐","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈瑞-白狐.mp3","images":"img/a5.jpg"},
{"id":"16","name":"陈淑桦-情关","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈淑桦-情关.mp3","images":"img/a1.jpg"},
{"id":"17","name":"陈伟霆、宝石Gem-野狼Disco","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/陈伟霆、宝石Gem-野狼Disco.mp3","images":"img/a2.jpg"},
{"id":"18","name":"成龙、金喜善-无尽的爱","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/成龙、金喜善-无尽的爱.mp3","images":"img/a3.jpg"},
{"id":"19","name":"大壮-我们不一样","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/大壮-我们不一样.mp3","images":"img/a4.jpg"},
{"id":"20","name":"戴佩妮-爱疯了","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/戴佩妮-爱疯了.mp3","images":"img/a5.jpg"},
{"id":"21","name":"戴佩妮-街角的祝福","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/戴佩妮-街角的祝福.mp3","images":"img/a1.jpg"},
{"id":"22","name":"戴佩妮-你要的爱","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/戴佩妮-你要的爱.mp3","images":"img/a2.jpg"},
{"id":"23","name":"戴佩妮-怎样","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/戴佩妮-怎样.mp3","images":"img/a3.jpg"},
{"id":"24","name":"邓紫棋-倒数","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邓紫棋-倒数.mp3","images":"img/a4.jpg"},
{"id":"25","name":"邓紫棋-光年之外","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邓紫棋-光年之外.mp3","images":"img/a5.jpg"},
{"id":"26","name":"邓紫棋-你把我灌醉","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邓紫棋-你把我灌醉.mp3","images":"img/a1.jpg"},
{"id":"27","name":"邓紫棋-泡沫","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邓紫棋-泡沫.mp3","images":"img/a2.jpg"},
{"id":"28","name":"迪丽热巴、汪苏泷-偏偏","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/迪丽热巴、汪苏泷-偏偏.mp3","images":"img/a3.jpg"},
{"id":"29","name":"付笛声、任静-知心爱人","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/付笛声、任静-知心爱人.mp3","images":"img/a4.jpg"},
{"id":"30","name":"高胜美、左宏元-渡情","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/高胜美、左宏元-渡情.mp3","images":"img/a5.jpg"},
{"id":"31","name":"光良-第一次","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/光良-第一次.mp3","images":"img/a1.jpg"},
{"id":"32","name":"光良-都是你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/光良-都是你.mp3","images":"img/a2.jpg"},
{"id":"33","name":"光良-童话","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/光良-童话.mp3","images":"img/a3.jpg"},
{"id":"34","name":"韩雪-飘雪","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/韩雪-飘雪.mp3","images":"img/a4.jpg"},
{"id":"35","name":"韩雪-想起","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/韩雪-想起.mp3","images":"img/a5.jpg"},
{"id":"36","name":"黑豹乐队-无地自容","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/黑豹乐队-无地自容.mp3","images":"img/a1.jpg"},
{"id":"37","name":"胡夏、郁可唯-知否知否","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/胡夏、郁可唯-知否知否.mp3","images":"img/a2.jpg"},
{"id":"38","name":"黄小琥-伴","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/黄小琥-伴.mp3","images":"img/a3.jpg"},
{"id":"39","name":"黄小琥-没那么简单","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/黄小琥-没那么简单.mp3","images":"img/a4.jpg"},
{"id":"40","name":"黄小琥-顺其自然","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/黄小琥-顺其自然.mp3","images":"img/a5.jpg"},
{"id":"41","name":"黄小琥-重来","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/黄小琥-重来.mp3","images":"img/a1.jpg"},
{"id":"42","name":"火箭少女101-卡路里","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/火箭少女101-卡路里.mp3","images":"img/a2.jpg"},
{"id":"43","name":"姜育恒-梅花三弄","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/姜育恒-梅花三弄.mp3","images":"img/a3.jpg"},
{"id":"44","name":"李健-贝加尔湖畔","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李健-贝加尔湖畔.mp3","images":"img/a4.jpg"},
{"id":"45","name":"李健-当你老了(Live)","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李健-当你老了(Live).mp3","images":"img/a5.jpg"},
{"id":"46","name":"李健-风吹麦浪","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李健-风吹麦浪.mp3","images":"img/a1.jpg"},
{"id":"47","name":"李玟-想你的365天","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李玟-想你的365天.mp3","images":"img/a2.jpg"},
{"id":"48","name":"李玟-月光爱人","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李玟-月光爱人.mp3","images":"img/a3.jpg"},
{"id":"49","name":"李沁-小偷","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李沁-小偷.mp3","images":"img/a4.jpg"},
{"id":"50","name":"李荣浩-麻雀","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李荣浩-麻雀.mp3","images":"img/a5.jpg"},
{"id":"51","name":"李荣浩-模特","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李荣浩-模特.mp3","images":"img/a1.jpg"},
{"id":"52","name":"李荣浩-年少有为","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李荣浩-年少有为.mp3","images":"img/a2.jpg"},
{"id":"53","name":"李圣杰-痴心绝对","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李圣杰-痴心绝对.mp3","images":"img/a3.jpg"},
{"id":"54","name":"李圣杰-手放开","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李圣杰-手放开.mp3","images":"img/a4.jpg"},
{"id":"55","name":"李昕融、樊桐舟、李凯稠-你笑起来真好看","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李昕融、樊桐舟、李凯稠-你笑起来真好看.mp3","images":"img/a5.jpg"},
{"id":"56","name":"李宇春-梨花香","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李宇春-梨花香.mp3","images":"img/a1.jpg"},
{"id":"57","name":"李宇春-无价之姐","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/李宇春-无价之姐.mp3","images":"img/a2.jpg"},
{"id":"58","name":"梁静茹-爱你不是两三天","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/梁静茹-爱你不是两三天.mp3","images":"img/a3.jpg"},
{"id":"59","name":"梁静茹-可惜不是你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/梁静茹-可惜不是你.mp3","images":"img/a4.jpg"},
{"id":"60","name":"梁静茹-勇气","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/梁静茹-勇气.mp3","images":"img/a5.jpg"},
{"id":"61","name":"林俊杰-江南","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林俊杰-江南.mp3","images":"img/a1.jpg"},
{"id":"62","name":"林俊杰-一千年以后","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林俊杰-一千年以后.mp3","images":"img/a2.jpg"},
{"id":"63","name":"林俊杰-醉赤壁","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林俊杰-醉赤壁.mp3","images":"img/a3.jpg"},
{"id":"64","name":"林心如-落花","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林心如-落花.mp3","images":"img/a4.jpg"},
{"id":"65","name":"林心如-倾听我","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林心如-倾听我.mp3","images":"img/a5.jpg"},
{"id":"66","name":"林忆莲-不必在乎我是谁","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林忆莲-不必在乎我是谁.mp3","images":"img/a1.jpg"},
{"id":"67","name":"林忆莲-伤痕","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林忆莲-伤痕.mp3","images":"img/a2.jpg"},
{"id":"68","name":"林忆莲-至少还有你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林忆莲-至少还有你.mp3","images":"img/a3.jpg"},
{"id":"69","name":"林志炫-没离开过","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林志炫-没离开过.mp3","images":"img/a4.jpg"},
{"id":"70","name":"林志炫-烟花易冷","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/林志炫-烟花易冷.mp3","images":"img/a5.jpg"},
{"id":"71","name":"零点乐队-相信自己","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/零点乐队-相信自己.mp3","images":"img/a1.jpg"},
{"id":"72","name":"刘德华-冰雨","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/刘德华-冰雨.mp3","images":"img/a2.jpg"},
{"id":"73","name":"刘珂矣-芙蓉雨","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/刘珂矣-芙蓉雨.mp3","images":"img/a3.jpg"},
{"id":"74","name":"刘若英-很爱很爱你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/刘若英-很爱很爱你.mp3","images":"img/a4.jpg"},
{"id":"75","name":"刘若英-后来","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/刘若英-后来.mp3","images":"img/a5.jpg"},
{"id":"76","name":"刘若英-为爱痴狂","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/刘若英-为爱痴狂.mp3","images":"img/a1.jpg"},
{"id":"77","name":"刘若英-一辈子的孤单","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/刘若英-一辈子的孤单.mp3","images":"img/a2.jpg"},
{"id":"78","name":"卢冠廷-一生所爱","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/卢冠廷-一生所爱.mp3","images":"img/a3.jpg"},
{"id":"79","name":"罗文、甄妮-铁血丹心","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/罗文、甄妮-铁血丹心.mp3","images":"img/a4.jpg"},
{"id":"80","name":"满文军-懂你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/满文军-懂你.mp3","images":"img/a5.jpg"},
{"id":"81","name":"梦然-少年","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/梦然-少年.mp3","images":"img/a1.jpg"},
{"id":"82","name":"莫文蔚-电台情歌","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/莫文蔚-电台情歌.mp3","images":"img/a2.jpg"},
{"id":"83","name":"莫文蔚-盛夏的果实","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/莫文蔚-盛夏的果实.mp3","images":"img/a3.jpg"},
{"id":"84","name":"潘玮柏-不得不爱","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/潘玮柏-不得不爱.mp3","images":"img/a4.jpg"},
{"id":"85","name":"潘玮柏-快乐崇拜","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/潘玮柏-快乐崇拜.mp3","images":"img/a5.jpg"},
{"id":"86","name":"潘越云-天天天蓝","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/潘越云-天天天蓝.mp3","images":"img/a1.jpg"},
{"id":"87","name":"潘越云-我是不是你最疼爱的人","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/潘越云-我是不是你最疼爱的人.mp3","images":"img/a2.jpg"},
{"id":"88","name":"齐秦-不让我的眼泪陪我过夜","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/齐秦-不让我的眼泪陪我过夜.mp3","images":"img/a3.jpg"},
{"id":"89","name":"齐秦-大约在冬季","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/齐秦-大约在冬季.mp3","images":"img/a4.jpg"},
{"id":"90","name":"齐秦-往事随风","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/齐秦-往事随风.mp3","images":"img/a5.jpg"},
{"id":"91","name":"齐秦-无情的雨无情的你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/齐秦-无情的雨无情的你.mp3","images":"img/a1.jpg"},
{"id":"92","name":"齐秦-夜夜夜夜","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/齐秦-夜夜夜夜.mp3","images":"img/a2.jpg"},
{"id":"93","name":"齐豫-橄榄树","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/齐豫-橄榄树.mp3","images":"img/a3.jpg"},
{"id":"94","name":"邱永传-十一年","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邱永传-十一年.mp3","images":"img/a4.jpg"},
{"id":"95","name":"裘海正-爱我的人和我爱的人","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/裘海正-爱我的人和我爱的人.mp3","images":"img/a5.jpg"},
{"id":"96","name":"裘海正-九千九百九十九滴眼泪","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/裘海正-九千九百九十九滴眼泪.mp3","images":"img/a1.jpg"},
{"id":"97","name":"任贤齐-小雪","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/任贤齐-小雪.mp3","images":"img/a2.jpg"},
{"id":"98","name":"任贤齐-心太软","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/任贤齐-心太软.mp3","images":"img/a3.jpg"},
{"id":"99","name":"容祖儿-小小","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/容祖儿-小小.mp3","images":"img/a4.jpg"},
{"id":"100","name":"沙宝亮-暗香","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/沙宝亮-暗香.mp3","images":"img/a5.jpg"},
{"id":"101","name":"沙宝亮-斑马斑马","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/沙宝亮-斑马斑马.mp3","images":"img/a1.jpg"},
{"id":"102","name":"苏芮-牵手","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/苏芮-牵手.mp3","images":"img/a2.jpg"},
{"id":"103","name":"孙燕姿-天黑黑","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/孙燕姿-天黑黑.mp3","images":"img/a3.jpg"},
{"id":"104","name":"孙燕姿-我要的幸福","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/孙燕姿-我要的幸福.mp3","images":"img/a4.jpg"},
{"id":"105","name":"孙燕姿-遇见","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/孙燕姿-遇见.mp3","images":"img/a5.jpg"},
{"id":"106","name":"孙燕姿-原来你什么都不要","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/孙燕姿-原来你什么都不要.mp3","images":"img/a1.jpg"},
{"id":"107","name":"孙悦-心情不错","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/孙悦-心情不错.mp3","images":"img/a2.jpg"},
{"id":"108","name":"邰正宵、孙悦-好人好梦","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邰正宵、孙悦-好人好梦.mp3","images":"img/a3.jpg"},
{"id":"109","name":"邰正宵-九百九十九朵玫瑰","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邰正宵-九百九十九朵玫瑰.mp3","images":"img/a4.jpg"},
{"id":"110","name":"邰正宵-千纸鹤","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邰正宵-千纸鹤.mp3","images":"img/a5.jpg"},
{"id":"111","name":"邰正宵-心要让你听见","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邰正宵-心要让你听见.mp3","images":"img/a1.jpg"},
{"id":"112","name":"邰正宵-一千零一夜","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邰正宵-一千零一夜.mp3","images":"img/a2.jpg"},
{"id":"113","name":"邰正宵-找一个字代替","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/邰正宵-找一个字代替.mp3","images":"img/a3.jpg"},
{"id":"114","name":"田馥甄-小幸运","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/田馥甄-小幸运.mp3","images":"img/a4.jpg"},
{"id":"115","name":"汪峰-北京北京","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/汪峰-北京北京.mp3","images":"img/a5.jpg"},
{"id":"116","name":"汪峰-存在","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/汪峰-存在.mp3","images":"img/a1.jpg"},
{"id":"117","name":"汪峰-怒放的生命","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/汪峰-怒放的生命.mp3","images":"img/a2.jpg"},
{"id":"118","name":"汪正正-超越梦想","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/汪正正-超越梦想.mp3","images":"img/a3.jpg"},
{"id":"119","name":"汪正正-重头再来","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/汪正正-重头再来.mp3","images":"img/a4.jpg"},
{"id":"120","name":"王菲-传奇","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王菲-传奇.mp3","images":"img/a5.jpg"},
{"id":"121","name":"王杰-伤心1999","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王杰-伤心1999.mp3","images":"img/a1.jpg"},
{"id":"122","name":"王杰-忘记你不如忘记自己","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王杰-忘记你不如忘记自己.mp3","images":"img/a2.jpg"},
{"id":"123","name":"王杰-忘了你忘了我","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王杰-忘了你忘了我.mp3","images":"img/a3.jpg"},
{"id":"124","name":"王杰-为了爱梦一生","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王杰-为了爱梦一生.mp3","images":"img/a4.jpg"},
{"id":"125","name":"王杰-一场游戏一场梦","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王杰-一场游戏一场梦.mp3","images":"img/a5.jpg"},
{"id":"126","name":"王杰-一无所有","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王杰-一无所有.mp3","images":"img/a1.jpg"},
{"id":"127","name":"王力宏-爱的就是你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王力宏-爱的就是你.mp3","images":"img/a2.jpg"},
{"id":"128","name":"王力宏-唯一","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王力宏-唯一.mp3","images":"img/a3.jpg"},
{"id":"129","name":"王铮亮-时间都去哪儿了","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/王铮亮-时间都去哪儿了.mp3","images":"img/a4.jpg"},
{"id":"130","name":"萧煌奇-偷走","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/萧煌奇-偷走.mp3","images":"img/a5.jpg"},
{"id":"131","name":"萧亚轩-Cappuccino","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/萧亚轩-Cappuccino.mp3","images":"img/a1.jpg"},
{"id":"132","name":"萧亚轩-HoneyHoneyHoney","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/萧亚轩-HoneyHoneyHoney.mp3","images":"img/a2.jpg"},
{"id":"133","name":"萧亚轩-窗外的天气","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/萧亚轩-窗外的天气.mp3","images":"img/a3.jpg"},
{"id":"134","name":"萧亚轩-突然想起你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/萧亚轩-突然想起你.mp3","images":"img/a4.jpg"},
{"id":"135","name":"萧亚轩-我爱你那么多","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/萧亚轩-我爱你那么多.mp3","images":"img/a5.jpg"},
{"id":"136","name":"萧亚轩-一个人的精彩","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/萧亚轩-一个人的精彩.mp3","images":"img/a1.jpg"},
{"id":"137","name":"萧亚轩-最熟悉的陌生人","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/萧亚轩-最熟悉的陌生人.mp3","images":"img/a2.jpg"},
{"id":"138","name":"小潘潘、小峰峰-学猫叫","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/小潘潘、小峰峰-学猫叫.mp3","images":"img/a3.jpg"},
{"id":"139","name":"辛晓琪-味道","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/辛晓琪-味道.mp3","images":"img/a4.jpg"},
{"id":"140","name":"信乐团-海阔天空","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/信乐团-海阔天空.mp3","images":"img/a5.jpg"},
{"id":"141","name":"信乐团-假如","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/信乐团-假如.mp3","images":"img/a1.jpg"},
{"id":"142","name":"信乐团-离歌","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/信乐团-离歌.mp3","images":"img/a2.jpg"},
{"id":"143","name":"信乐团-死了都要爱","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/信乐团-死了都要爱.mp3","images":"img/a3.jpg"},
{"id":"144","name":"徐佳莹-突然好想你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/徐佳莹-突然好想你.mp3","images":"img/a4.jpg"},
{"id":"145","name":"许慧欣-七月七日晴","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许慧欣-七月七日晴.mp3","images":"img/a5.jpg"},
{"id":"146","name":"许佳慧-预谋","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许佳慧-预谋.mp3","images":"img/a1.jpg"},
{"id":"147","name":"许美静-荡漾","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许美静-荡漾.mp3","images":"img/a2.jpg"},
{"id":"148","name":"许美静-都是夜归人","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许美静-都是夜归人.mp3","images":"img/a3.jpg"},
{"id":"149","name":"许美静-快乐无罪","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许美静-快乐无罪.mp3","images":"img/a4.jpg"},
{"id":"150","name":"许美静-蔓延","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许美静-蔓延.mp3","images":"img/a5.jpg"},
{"id":"151","name":"许美静-迷乱","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许美静-迷乱.mp3","images":"img/a1.jpg"},
{"id":"152","name":"许美静-迫在眉梢","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许美静-迫在眉梢.mp3","images":"img/a2.jpg"},
{"id":"153","name":"许美静-铁窗","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许美静-铁窗.mp3","images":"img/a3.jpg"},
{"id":"154","name":"许美静-阳光总在风雨后","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许美静-阳光总在风雨后.mp3","images":"img/a4.jpg"},
{"id":"155","name":"许美静-遗憾","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许美静-遗憾.mp3","images":"img/a5.jpg"},
{"id":"156","name":"许茹芸-独角戏","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许茹芸-独角戏.mp3","images":"img/a1.jpg"},
{"id":"157","name":"许茹芸-泪海","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许茹芸-泪海.mp3","images":"img/a2.jpg"},
{"id":"158","name":"许茹芸-日光机场","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许茹芸-日光机场.mp3","images":"img/a3.jpg"},
{"id":"159","name":"许茹芸-如果云知道","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许茹芸-如果云知道.mp3","images":"img/a4.jpg"},
{"id":"160","name":"许茹芸-一直是晴天","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许茹芸-一直是晴天.mp3","images":"img/a5.jpg"},
{"id":"161","name":"许韶洋-花香","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许韶洋-花香.mp3","images":"img/a1.jpg"},
{"id":"162","name":"许韶洋-幸福的瞬间","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许韶洋-幸福的瞬间.mp3","images":"img/a2.jpg"},
{"id":"163","name":"许巍-曾经的你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/许巍-曾经的你.mp3","images":"img/a3.jpg"},
{"id":"164","name":"薛之谦-暧昧","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/薛之谦-暧昧.mp3","images":"img/a4.jpg"},
{"id":"165","name":"薛之谦-丑八怪","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/薛之谦-丑八怪.mp3","images":"img/a5.jpg"},
{"id":"166","name":"薛之谦-你还要我怎样","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/薛之谦-你还要我怎样.mp3","images":"img/a1.jpg"},
{"id":"167","name":"薛之谦-演员","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/薛之谦-演员.mp3","images":"img/a2.jpg"},
{"id":"168","name":"严艺丹-三寸天堂","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/严艺丹-三寸天堂.mp3","images":"img/a3.jpg"},
{"id":"169","name":"杨宗纬 张碧晨-凉凉","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/杨宗纬 张碧晨-凉凉.mp3","images":"img/a4.jpg"},
{"id":"170","name":"叶丽仪-上海滩","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/叶丽仪-上海滩.mp3","images":"img/a5.jpg"},
{"id":"171","name":"叶倩文、林子祥-选择","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/叶倩文、林子祥-选择.mp3","images":"img/a1.jpg"},
{"id":"172","name":"叶倩文-真心真意过一生","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/叶倩文-真心真意过一生.mp3","images":"img/a2.jpg"},
{"id":"173","name":"于文文-体面","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/于文文-体面.mp3","images":"img/a3.jpg"},
{"id":"174","name":"俞静-红豆红","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/俞静-红豆红.mp3","images":"img/a4.jpg"},
{"id":"175","name":"羽·泉-感觉不到你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/羽·泉-感觉不到你.mp3","images":"img/a5.jpg"},
{"id":"176","name":"羽·泉-冷酷到底","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/羽·泉-冷酷到底.mp3","images":"img/a1.jpg"},
{"id":"177","name":"羽·泉-深呼吸","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/羽·泉-深呼吸.mp3","images":"img/a2.jpg"},
{"id":"178","name":"羽·泉-最美","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/羽·泉-最美.mp3","images":"img/a3.jpg"},
{"id":"179","name":"庾澄庆-情非得已","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/庾澄庆-情非得已.mp3","images":"img/a4.jpg"},
{"id":"180","name":"郁可唯-时间煮雨","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/郁可唯-时间煮雨.mp3","images":"img/a5.jpg"},
{"id":"181","name":"郁可唯-思慕","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/郁可唯-思慕.mp3","images":"img/a1.jpg"},
{"id":"182","name":"袁娅维-说散就散","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/袁娅维-说散就散.mp3","images":"img/a2.jpg"},
{"id":"183","name":"张碧晨-年轮","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张碧晨-年轮.mp3","images":"img/a3.jpg"},
{"id":"184","name":"张惠妹-剪爱","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张惠妹-剪爱.mp3","images":"img/a4.jpg"},
{"id":"185","name":"张惠妹-哭不出来","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张惠妹-哭不出来.mp3","images":"img/a5.jpg"},
{"id":"186","name":"张惠妹-听海","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张惠妹-听海.mp3","images":"img/a1.jpg"},
{"id":"187","name":"张惠妹-站在高岗上","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张惠妹-站在高岗上.mp3","images":"img/a2.jpg"},
{"id":"188","name":"张靓颖-画心","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张靓颖-画心.mp3","images":"img/a3.jpg"},
{"id":"189","name":"张韶涵-呐喊","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张韶涵-呐喊.mp3","images":"img/a4.jpg"},
{"id":"190","name":"张韶涵-欧若拉","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张韶涵-欧若拉.mp3","images":"img/a5.jpg"},
{"id":"191","name":"张韶涵-隐形的翅膀","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张韶涵-隐形的翅膀.mp3","images":"img/a1.jpg"},
{"id":"192","name":"张韶涵-寓言","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张韶涵-寓言.mp3","images":"img/a2.jpg"},
{"id":"193","name":"张卫健-孤独不苦","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张卫健-孤独不苦.mp3","images":"img/a3.jpg"},
{"id":"194","name":"张卫健-虚虚实实","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张卫健-虚虚实实.mp3","images":"img/a4.jpg"},
{"id":"195","name":"张卫健-一辈子一场梦","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张卫健-一辈子一场梦.mp3","images":"img/a5.jpg"},
{"id":"196","name":"张信哲、范文芳-别让情两难","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲、范文芳-别让情两难.mp3","images":"img/a1.jpg"},
{"id":"197","name":"张信哲、刘嘉玲-有一点动心","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲、刘嘉玲-有一点动心.mp3","images":"img/a2.jpg"},
{"id":"198","name":"张信哲-爱不留","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-爱不留.mp3","images":"img/a3.jpg"},
{"id":"199","name":"张信哲-爱就一个字","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-爱就一个字.mp3","images":"img/a4.jpg"},
{"id":"200","name":"张信哲-爱如潮水","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-爱如潮水.mp3","images":"img/a5.jpg"},
{"id":"201","name":"张信哲-别怕我伤心","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-别怕我伤心.mp3","images":"img/a1.jpg"},
{"id":"202","name":"张信哲-不要对他说","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-不要对他说.mp3","images":"img/a2.jpg"},
{"id":"203","name":"张信哲-从开始到现在","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-从开始到现在.mp3","images":"img/a3.jpg"},
{"id":"204","name":"张信哲-过火","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-过火.mp3","images":"img/a4.jpg"},
{"id":"205","name":"张信哲-宽容","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-宽容.mp3","images":"img/a5.jpg"},
{"id":"206","name":"张信哲-某某某","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-某某某.mp3","images":"img/a1.jpg"},
{"id":"207","name":"张信哲-难以抗拒你容颜","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-难以抗拒你容颜.mp3","images":"img/a2.jpg"},
{"id":"208","name":"张信哲-太想爱你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-太想爱你.mp3","images":"img/a3.jpg"},
{"id":"209","name":"张信哲-信仰","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-信仰.mp3","images":"img/a4.jpg"},
{"id":"210","name":"张信哲-用情","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-用情.mp3","images":"img/a5.jpg"},
{"id":"211","name":"张信哲-直觉","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张信哲-直觉.mp3","images":"img/a1.jpg"},
{"id":"212","name":"张学友-当我想起你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张学友-当我想起你.mp3","images":"img/a2.jpg"},
{"id":"213","name":"张学友-分手总要在雨天","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张学友-分手总要在雨天.mp3","images":"img/a3.jpg"},
{"id":"214","name":"张学友-情书","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张学友-情书.mp3","images":"img/a4.jpg"},
{"id":"215","name":"张学友-秋意浓","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张学友-秋意浓.mp3","images":"img/a5.jpg"},
{"id":"216","name":"张学友-吻别","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张学友-吻别.mp3","images":"img/a1.jpg"},
{"id":"217","name":"张学友-心如刀割","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张学友-心如刀割.mp3","images":"img/a2.jpg"},
{"id":"218","name":"张学友-一千个伤心的理由","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张学友-一千个伤心的理由.mp3","images":"img/a3.jpg"},
{"id":"219","name":"张宇-一言难尽","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张宇-一言难尽.mp3","images":"img/a4.jpg"},
{"id":"220","name":"张宇-雨一直下","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张宇-雨一直下.mp3","images":"img/a5.jpg"},
{"id":"221","name":"张雨生-大海","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张雨生-大海.mp3","images":"img/a1.jpg"},
{"id":"222","name":"张云雷-探清水河","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/张云雷-探清水河.mp3","images":"img/a2.jpg"},
{"id":"223","name":"赵方婧-闭月","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵方婧-闭月.mp3","images":"img/a3.jpg"},
{"id":"224","name":"赵方婧-尽头","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵方婧-尽头.mp3","images":"img/a4.jpg"},
{"id":"225","name":"赵方婧-芒种","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵方婧-芒种.mp3","images":"img/a5.jpg"},
{"id":"226","name":"赵方婧-青灯","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵方婧-青灯.mp3","images":"img/a1.jpg"},
{"id":"227","name":"赵方婧-瑞鹤仙","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵方婧-瑞鹤仙.mp3","images":"img/a2.jpg"},
{"id":"228","name":"赵方婧-小暑","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵方婧-小暑.mp3","images":"img/a3.jpg"},
{"id":"229","name":"赵方婧-直觉","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵方婧-直觉.mp3","images":"img/a4.jpg"},
{"id":"230","name":"赵雷-成都","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵雷-成都.mp3","images":"img/a5.jpg"},
{"id":"231","name":"赵露思-时光话","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/赵露思-时光话.mp3","images":"img/a1.jpg"},
{"id":"232","name":"周笔畅-笔记","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周笔畅-笔记.mp3","images":"img/a2.jpg"},
{"id":"233","name":"周传雄-黄昏","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周传雄-黄昏.mp3","images":"img/a3.jpg"},
{"id":"234","name":"周华健-风雨无阻","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周华健-风雨无阻.mp3","images":"img/a4.jpg"},
{"id":"235","name":"周华健-难念的经","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周华健-难念的经.mp3","images":"img/a5.jpg"},
{"id":"236","name":"周蕙-不想让你知道","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周蕙-不想让你知道.mp3","images":"img/a1.jpg"},
{"id":"237","name":"周蕙-风铃","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周蕙-风铃.mp3","images":"img/a2.jpg"},
{"id":"238","name":"周蕙-好想好好爱你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周蕙-好想好好爱你.mp3","images":"img/a3.jpg"},
{"id":"239","name":"周蕙-没有你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周蕙-没有你.mp3","images":"img/a4.jpg"},
{"id":"240","name":"周蕙-我看","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周蕙-我看.mp3","images":"img/a5.jpg"},
{"id":"241","name":"周蕙-相遇太早","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周蕙-相遇太早.mp3","images":"img/a1.jpg"},
{"id":"242","name":"周蕙-约定","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周蕙-约定.mp3","images":"img/a2.jpg"},
{"id":"243","name":"周杰伦-稻香","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周杰伦-稻香.mp3","images":"img/a3.jpg"},
{"id":"244","name":"周杰伦-告白气球","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周杰伦-告白气球.mp3","images":"img/a4.jpg"},
{"id":"245","name":"周杰伦-菊花台","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周杰伦-菊花台.mp3","images":"img/a5.jpg"},
{"id":"246","name":"周杰伦-青花瓷","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周杰伦-青花瓷.mp3","images":"img/a1.jpg"},
{"id":"247","name":"周深-触不可及","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-触不可及.mp3","images":"img/a2.jpg"},
{"id":"248","name":"周深-此生惟你","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-此生惟你.mp3","images":"img/a3.jpg"},
{"id":"249","name":"周深-大鱼","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-大鱼.mp3","images":"img/a4.jpg"},
{"id":"250","name":"周深-欢颜","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-欢颜.mp3","images":"img/a5.jpg"},
{"id":"251","name":"周深-年轮(Live)","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-年轮(Live).mp3","images":"img/a1.jpg"},
{"id":"252","name":"周深-水形物语","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-水形物语.mp3","images":"img/a2.jpg"},
{"id":"253","name":"周深-微光海洋","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-微光海洋.mp3","images":"img/a3.jpg"},
{"id":"254","name":"周深-雪落下的声音(Live)","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-雪落下的声音(Live).mp3","images":"img/a4.jpg"},
{"id":"255","name":"周深-与卿","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-与卿.mp3","images":"img/a5.jpg"},
{"id":"256","name":"周深-愿得一心人","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周深-愿得一心人.mp3","images":"img/a1.jpg"},
{"id":"257","name":"周迅-飘摇","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/周迅-飘摇.mp3","images":"img/a2.jpg"},
{"id":"258","name":"庄心妍、祁隆-一万个舍不得","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/庄心妍、祁隆-一万个舍不得.mp3","images":"img/a3.jpg"},
{"id":"259","name":"庄心妍-爱囚","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/庄心妍-爱囚.mp3","images":"img/a4.jpg"},
{"id":"260","name":"庄心妍-以后的以后","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/庄心妍-以后的以后.mp3","images":"img/a5.jpg"},
{"id":"261","name":"庄心妍-再见只是陌生人","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/庄心妍-再见只是陌生人.mp3","images":"img/a1.jpg"},
{"id":"262","name":"庄心妍-走着走着就散了","singer":"","duration":"","src":"http://code.aliyun.com/free163/sharelist/raw/77e4a35c288b6dbe864592a90e21e7c2dc01fc7f/简选/国语/庄心妍-走着走着就散了.mp3","images":"img/a2.jpg"},

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

