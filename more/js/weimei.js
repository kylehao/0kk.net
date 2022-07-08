//播放列表
var music_list =[
{"id":"1","name":"001.半山听雨，放空自己（古琴）-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/001.半山听雨，放空自己（古琴）-唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"2","name":"002.故乡风景，醉美画卷 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/002.故乡风景，醉美画卷 - 唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"3","name":"003.静水禅音，返朴归真-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/003.静水禅音，返朴归真-唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"4","name":"004.天籁之音，荡涤心灵 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/004.天籁之音，荡涤心灵 - 唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"5","name":"005.心灵雨伞 — 轻音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/005.心灵雨伞 — 轻音乐.m4a","images":"img/a5.jpg"},
{"id":"6","name":"006.童年-纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/006.童年-纯音乐.m4a","images":"img/a1.jpg"},
{"id":"7","name":"007.易经—纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/007.易经—纯音乐.m4a","images":"img/a2.jpg"},
{"id":"8","name":"008.太极 — 纯音乐 （古琴）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/008.太极 — 纯音乐 （古琴）.m4a","images":"img/a3.jpg"},
{"id":"9","name":"009.琵琶语-纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/009.琵琶语-纯音乐.m4a","images":"img/a4.jpg"},
{"id":"10","name":"010.夜曲(很伤感的纯音乐) - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/010.夜曲(很伤感的纯音乐) - 神秘园.m4a","images":"img/a5.jpg"},
{"id":"11","name":"011.无悔 -李汉颖 （加长版）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/011.无悔 -李汉颖 （加长版）.m4a","images":"img/a1.jpg"},
{"id":"12","name":"012.和兰花在一起 — 雅尼.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/012.和兰花在一起 — 雅尼.m4a","images":"img/a2.jpg"},
{"id":"13","name":"013.纯音乐 - 昨日重现（钢琴）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/013.纯音乐 - 昨日重现（钢琴）.m4a","images":"img/a3.jpg"},
{"id":"14","name":"014.纯音乐 - 此情永不移（钢琴）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/014.纯音乐 - 此情永不移（钢琴）.m4a","images":"img/a4.jpg"},
{"id":"15","name":"015.纯音乐 - 高山流水 (古筝).m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/015.纯音乐 - 高山流水 (古筝).m4a","images":"img/a5.jpg"},
{"id":"16","name":"016.纯音乐 - 雪花神剑（萧）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/016.纯音乐 - 雪花神剑（萧）.m4a","images":"img/a1.jpg"},
{"id":"17","name":"017.寂静之声 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/017.寂静之声 - 班得瑞.m4a","images":"img/a2.jpg"},
{"id":"18","name":"018.走过绿意 - Kevin Kern.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/018.走过绿意 - Kevin Kern.m4a","images":"img/a3.jpg"},
{"id":"19","name":"019.安妮的仙境 - 轻音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/019.安妮的仙境 - 轻音乐.m4a","images":"img/a4.jpg"},
{"id":"20","name":"020.净化心灵的声音 - Karunesh.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/020.净化心灵的声音 - Karunesh.m4a","images":"img/a5.jpg"},
{"id":"21","name":"021.岁月如歌 ——哼唱歌手.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/021.岁月如歌 ——哼唱歌手.m4a","images":"img/a1.jpg"},
{"id":"22","name":"022.The Beginning (开始) - Ryran·Tomson.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/022.The Beginning (开始) - Ryran·Tomson.m4a","images":"img/a2.jpg"},
{"id":"23","name":"023.日晷之梦(电台背景音乐) ——纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/023.日晷之梦(电台背景音乐) ——纯音乐.m4a","images":"img/a3.jpg"},
{"id":"24","name":"024.好一朵美丽的茉莉花 - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/024.好一朵美丽的茉莉花 - 钢琴曲.m4a","images":"img/a4.jpg"},
{"id":"25","name":"025.梦里水乡 - 中国民乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/025.梦里水乡 - 中国民乐.m4a","images":"img/a5.jpg"},
{"id":"26","name":"026.青花瓷 - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/026.青花瓷 - 钢琴曲.m4a","images":"img/a1.jpg"},
{"id":"27","name":"027.梦中的婚礼 - 理查德.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/027.梦中的婚礼 - 理查德.m4a","images":"img/a2.jpg"},
{"id":"28","name":"028.星空—理查德·克莱德曼（钢琴）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/028.星空—理查德·克莱德曼（钢琴）.m4a","images":"img/a3.jpg"},
{"id":"29","name":"029.风之彩 绝对经典 - 陶笛排萧乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/029.风之彩 绝对经典 - 陶笛排萧乐.m4a","images":"img/a4.jpg"},
{"id":"30","name":"030.西风（排箫）芈月传 - 王备.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/030.西风（排箫）芈月传 - 王备.m4a","images":"img/a5.jpg"},
{"id":"31","name":"031.人生最美初见时 - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/031.人生最美初见时 - 钢琴曲.m4a","images":"img/a1.jpg"},
{"id":"32","name":"032.夏日香气 - 电视剧原声 (很好听的钢琴曲).m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/032.夏日香气 - 电视剧原声 (很好听的钢琴曲).m4a","images":"img/a2.jpg"},
{"id":"33","name":"033.森林幻想曲 - Bandari.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/033.森林幻想曲 - Bandari.m4a","images":"img/a3.jpg"},
{"id":"34","name":"034.传奇 (琴牵美人吟Ⅱ) - 段银莹.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/034.传奇 (琴牵美人吟Ⅱ) - 段银莹.m4a","images":"img/a4.jpg"},
{"id":"35","name":"035.一剪梅 - 中国民乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/035.一剪梅 - 中国民乐.m4a","images":"img/a5.jpg"},
{"id":"36","name":"036.广陵散之笑傲江湖曲 —琴箫合奏).m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/036.广陵散之笑傲江湖曲 —琴箫合奏).m4a","images":"img/a1.jpg"},
{"id":"37","name":"037.佛教音乐 - 菩提树.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/037.佛教音乐 - 菩提树.m4a","images":"img/a2.jpg"},
{"id":"38","name":"038.你离开的真相 — 舒缓睡眠.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/038.你离开的真相 — 舒缓睡眠.m4a","images":"img/a3.jpg"},
{"id":"39","name":"039.罗密欧与朱丽叶-群星.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/039.罗密欧与朱丽叶-群星.m4a","images":"img/a4.jpg"},
{"id":"40","name":"040.蝴蝶华尔兹(助眠) — 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/040.蝴蝶华尔兹(助眠) — 纯音乐.m4a","images":"img/a5.jpg"},
{"id":"41","name":"041.我心永恒 — 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/041.我心永恒 — 纯音乐.m4a","images":"img/a1.jpg"},
{"id":"42","name":"042.康妮的蝴蝶 — 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/042.康妮的蝴蝶 — 纯音乐.m4a","images":"img/a2.jpg"},
{"id":"43","name":"043.A Simple Life (唯美小清新治愈系) - Brian Crain.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/043.A Simple Life (唯美小清新治愈系) - Brian Crain.m4a","images":"img/a3.jpg"},
{"id":"44","name":"044.古诗 (Greek Meditation) - 吉他排笛.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/044.古诗 (Greek Meditation) - 吉他排笛.m4a","images":"img/a4.jpg"},
{"id":"45","name":"045.耳边私语 (Almost a Whisper) - Chris Phillips.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/045.耳边私语 (Almost a Whisper) - Chris Phillips.m4a","images":"img/a5.jpg"},
{"id":"46","name":"046.宽阔的海水 (The Water Is Wide) - David Nevue.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/046.宽阔的海水 (The Water Is Wide) - David Nevue.m4a","images":"img/a1.jpg"},
{"id":"47","name":"047.美好清晨 - Daveed.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/047.美好清晨 - Daveed.m4a","images":"img/a2.jpg"},
{"id":"48","name":"048.Forrest Gump 电影《阿甘正传》插曲 — 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/048.Forrest Gump 电影《阿甘正传》插曲 — 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"49","name":"049.茶茗-静心禅乐 (Flowing With The Tea) - Karunesh.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/049.茶茗-静心禅乐 (Flowing With The Tea) - Karunesh.m4a","images":"img/a4.jpg"},
{"id":"50","name":"050.绵雪 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/050.绵雪 - 纯音乐.m4a","images":"img/a5.jpg"},
{"id":"51","name":"051.迷情仙境 - 轻音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/051.迷情仙境 - 轻音乐.m4a","images":"img/a1.jpg"},
{"id":"52","name":"052.神秘园之歌 - 钢琴.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/052.神秘园之歌 - 钢琴.m4a","images":"img/a2.jpg"},
{"id":"53","name":"053.胡伟立 - 市集.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/053.胡伟立 - 市集.m4a","images":"img/a3.jpg"},
{"id":"54","name":"054.Bandari - 安妮的歌.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/054.Bandari - 安妮的歌.m4a","images":"img/a4.jpg"},
{"id":"55","name":"055.忧伤的步美 - 名侦探柯南插曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/055.忧伤的步美 - 名侦探柯南插曲.m4a","images":"img/a5.jpg"},
{"id":"56","name":"056.美丽的神话 - 王崴.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/056.美丽的神话 - 王崴.m4a","images":"img/a1.jpg"},
{"id":"57","name":"057.无尽地平线 (Endless Horizon) - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/057.无尽地平线 (Endless Horizon) - 班得瑞.m4a","images":"img/a2.jpg"},
{"id":"58","name":"058.Adagio 柔板 - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/058.Adagio 柔板 - 神秘园.m4a","images":"img/a3.jpg"},
{"id":"59","name":"059.寂色 (绝美的小提琴曲) - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/059.寂色 (绝美的小提琴曲) - 神秘园.m4a","images":"img/a4.jpg"},
{"id":"60","name":"060.三个人的时光 (天之痕) - 吴欣睿.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/060.三个人的时光 (天之痕) - 吴欣睿.m4a","images":"img/a5.jpg"},
{"id":"61","name":"061.舒伯特小夜曲 (世界名曲) - 舒伯特.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/061.舒伯特小夜曲 (世界名曲) - 舒伯特.m4a","images":"img/a1.jpg"},
{"id":"62","name":"062.偏偏喜欢你 (钢琴) - 赵海洋.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/062.偏偏喜欢你 (钢琴) - 赵海洋.m4a","images":"img/a2.jpg"},
{"id":"63","name":"063.一切为了你 (Everything I Do) - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/063.一切为了你 (Everything I Do) - 班得瑞.m4a","images":"img/a3.jpg"},
{"id":"64","name":"064.望天 (来不及说我爱你插曲) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/064.望天 (来不及说我爱你插曲) - 纯音乐.m4a","images":"img/a4.jpg"},
{"id":"65","name":"065.蝶恋花 - 二胡版.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/065.蝶恋花 - 二胡版.m4a","images":"img/a5.jpg"},
{"id":"66","name":"066.静静的雪 (Snow) - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/066.静静的雪 (Snow) - 班得瑞.m4a","images":"img/a1.jpg"},
{"id":"67","name":"067.永远同在 - 八音盒.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/067.永远同在 - 八音盒.m4a","images":"img/a2.jpg"},
{"id":"68","name":"068.Wish (神思者的哀伤和唯美) - 神思者.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/068.Wish (神思者的哀伤和唯美) - 神思者.m4a","images":"img/a3.jpg"},
{"id":"69","name":"069.一帘幽梦(古筝) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/069.一帘幽梦(古筝) - 纯音乐.m4a","images":"img/a4.jpg"},
{"id":"70","name":"070.月光仙子 (Princess Of The Moon) - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/070.月光仙子 (Princess Of The Moon) - 班得瑞.m4a","images":"img/a5.jpg"},
{"id":"71","name":"071.孤独的巡礼 ，真实的自己-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/071.孤独的巡礼 ，真实的自己-唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"72","name":"072.风舞者 Windancer - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/072.风舞者 Windancer - 神秘园.m4a","images":"img/a2.jpg"},
{"id":"73","name":"073.出水莲 (古筝独奏) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/073.出水莲 (古筝独奏) - 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"74","name":"074.月光曲 - 贝多芬.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/074.月光曲 - 贝多芬.m4a","images":"img/a4.jpg"},
{"id":"75","name":"075.爱殇 - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/075.爱殇 - 钢琴曲.m4a","images":"img/a5.jpg"},
{"id":"76","name":"076.优美动听古典音乐 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/076.优美动听古典音乐 - 纯音乐.m4a","images":"img/a1.jpg"},
{"id":"77","name":"077.中国古典音乐 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/077.中国古典音乐 - 纯音乐.m4a","images":"img/a2.jpg"},
{"id":"78","name":"078.梦于月光中 (Dreaming In The Moonlight) - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/078.梦于月光中 (Dreaming In The Moonlight) - 班得瑞.m4a","images":"img/a3.jpg"},
{"id":"79","name":"079.枉凝眉箫曲 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/079.枉凝眉箫曲 - 纯音乐.m4a","images":"img/a4.jpg"},
{"id":"80","name":"080.莎莉花园 (绿野仙踪) - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/080.莎莉花园 (绿野仙踪) - 班得瑞.m4a","images":"img/a5.jpg"},
{"id":"81","name":"081.海王星 (Neptune) - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/081.海王星 (Neptune) - 班得瑞.m4a","images":"img/a1.jpg"},
{"id":"82","name":"082.天使情人 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/082.天使情人 - 纯音乐.m4a","images":"img/a2.jpg"},
{"id":"83","name":"083.阿根廷别为我哭泣.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/083.阿根廷别为我哭泣.m4a","images":"img/a3.jpg"},
{"id":"84","name":"084.风动草( 陶笛) - 伴奏版.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/084.风动草( 陶笛) - 伴奏版.m4a","images":"img/a4.jpg"},
{"id":"85","name":"085.蝶舞娉婷 Papillon - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/085.蝶舞娉婷 Papillon - 神秘园.m4a","images":"img/a5.jpg"},
{"id":"86","name":"086.你鼓舞了我 You Raise Me Up - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/086.你鼓舞了我 You Raise Me Up - 神秘园.m4a","images":"img/a1.jpg"},
{"id":"87","name":"087.微风小径 (The Winding Path) - Kevin Kern.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/087.微风小径 (The Winding Path) - Kevin Kern.m4a","images":"img/a2.jpg"},
{"id":"88","name":"088.童年的味道 (轻快的纯音乐) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/088.童年的味道 (轻快的纯音乐) - 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"89","name":"089.Sometimes When It Rains (下雨的时候) - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/089.Sometimes When It Rains (下雨的时候) - 神秘园.m4a","images":"img/a4.jpg"},
{"id":"90","name":"090.倩女幽魂 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/090.倩女幽魂 - 纯音乐.m4a","images":"img/a5.jpg"},
{"id":"91","name":"091.蒙娜丽莎的眼泪 - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/091.蒙娜丽莎的眼泪 - 钢琴曲.m4a","images":"img/a1.jpg"},
{"id":"92","name":"092.镜中的安娜 - 纯音乐（吉他).m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/092.镜中的安娜 - 纯音乐（吉他).m4a","images":"img/a2.jpg"},
{"id":"93","name":"093.星语心愿 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/093.星语心愿 - 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"94","name":"094.山不转水转 (萨克斯 )- 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/094.山不转水转 (萨克斯 )- 纯音乐.m4a","images":"img/a4.jpg"},
{"id":"95","name":"095.治愈心灵的神曲 - 轻音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/095.治愈心灵的神曲 - 轻音乐.m4a","images":"img/a5.jpg"},
{"id":"96","name":"096.莫斯科郊外的晚上 - 萨克斯.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/096.莫斯科郊外的晚上 - 萨克斯.m4a","images":"img/a1.jpg"},
{"id":"97","name":"097.Lotus 莲花 - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/097.Lotus 莲花 - 神秘园.m4a","images":"img/a2.jpg"},
{"id":"98","name":"098.一直很安静 伴奏 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/098.一直很安静 伴奏 - 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"99","name":"099.魂断蓝桥主题曲 - 萨克斯.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/099.魂断蓝桥主题曲 - 萨克斯.m4a","images":"img/a4.jpg"},
{"id":"100","name":"0全部文件.txt","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/0全部文件.txt","images":"img/a5.jpg"},
{"id":"101","name":"0批量生成文件目录树列表.bat","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/0批量生成文件目录树列表.bat","images":"img/a1.jpg"},
{"id":"102","name":"100.奥里诺科之梦 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/100.奥里诺科之梦 - 班得瑞.m4a","images":"img/a2.jpg"},
{"id":"103","name":"101.Heartstrings 心弦 - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/101.Heartstrings 心弦 - 神秘园.m4a","images":"img/a3.jpg"},
{"id":"104","name":"102.伤感音乐 - 太多 (小提琴) - 轻音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/102.伤感音乐 - 太多 (小提琴) - 轻音乐.m4a","images":"img/a4.jpg"},
{"id":"105","name":"103.在那遥远的地方 - 吉他曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/103.在那遥远的地方 - 吉他曲.m4a","images":"img/a5.jpg"},
{"id":"106","name":"104.风居住的街道 - 矶村由纪子.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/104.风居住的街道 - 矶村由纪子.m4a","images":"img/a1.jpg"},
{"id":"107","name":"105.后来 (小提琴 长笛) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/105.后来 (小提琴 长笛) - 纯音乐.m4a","images":"img/a2.jpg"},
{"id":"108","name":"106.中央台天气预报背景音乐 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/106.中央台天气预报背景音乐 - 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"109","name":"107.月光下漫舞 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/107.月光下漫舞 - 纯音乐.m4a","images":"img/a4.jpg"},
{"id":"110","name":"108.流行的云 - 吉他纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/108.流行的云 - 吉他纯音乐.m4a","images":"img/a5.jpg"},
{"id":"111","name":"109.踏古 - 林海 （琵琶）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/109.踏古 - 林海 （琵琶）.m4a","images":"img/a1.jpg"},
{"id":"112","name":"110.流动的城市 - 林海 （钢琴曲）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/110.流动的城市 - 林海 （钢琴曲）.m4a","images":"img/a2.jpg"},
{"id":"113","name":"111.杨柳 - 林海.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/111.杨柳 - 林海.m4a","images":"img/a3.jpg"},
{"id":"114","name":"112.林海 - 暗香.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/112.林海 - 暗香.m4a","images":"img/a4.jpg"},
{"id":"115","name":"113.火星金星 (Mars And Venus) - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/113.火星金星 (Mars And Venus) - 班得瑞.m4a","images":"img/a5.jpg"},
{"id":"116","name":"114.新不了情主题曲 - 纯音乐（萨克斯）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/114.新不了情主题曲 - 纯音乐（萨克斯）.m4a","images":"img/a1.jpg"},
{"id":"117","name":"115.那天的遇见 (钢琴曲) - 赵海洋.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/115.那天的遇见 (钢琴曲) - 赵海洋.m4a","images":"img/a2.jpg"},
{"id":"118","name":"116.纯音乐 - 橄榄树.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/116.纯音乐 - 橄榄树.m4a","images":"img/a3.jpg"},
{"id":"119","name":"117.风的誓言 (風の誓い) - 梁邦彦.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/117.风的誓言 (風の誓い) - 梁邦彦.m4a","images":"img/a4.jpg"},
{"id":"120","name":"118.幽灵公主 - 轻音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/118.幽灵公主 - 轻音乐.m4a","images":"img/a5.jpg"},
{"id":"121","name":"119.雨的旋律 (中西器乐合璧) - 古筝.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/119.雨的旋律 (中西器乐合璧) - 古筝.m4a","images":"img/a1.jpg"},
{"id":"122","name":"120.往事 Ride On - Phil Coulter.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/120.往事 Ride On - Phil Coulter.m4a","images":"img/a2.jpg"},
{"id":"123","name":"121.一起走过的日子 - 古筝.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/121.一起走过的日子 - 古筝.m4a","images":"img/a3.jpg"},
{"id":"124","name":"122.印度琵琶之魂 - 缪晓铮.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/122.印度琵琶之魂 - 缪晓铮.m4a","images":"img/a4.jpg"},
{"id":"125","name":"123.好听古典音乐 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/123.好听古典音乐 - 纯音乐.m4a","images":"img/a5.jpg"},
{"id":"126","name":"124.在我心中的夏天 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/124.在我心中的夏天 - 纯音乐.m4a","images":"img/a1.jpg"},
{"id":"127","name":"125.青空下的约定 - 伊藤贤治.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/125.青空下的约定 - 伊藤贤治.m4a","images":"img/a2.jpg"},
{"id":"128","name":"126.罗多伦咖啡店 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/126.罗多伦咖啡店 - 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"129","name":"127.Moon River 月亮河.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/127.Moon River 月亮河.m4a","images":"img/a4.jpg"},
{"id":"130","name":"128.君生我未生 (我生君已老) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/128.君生我未生 (我生君已老) - 纯音乐.m4a","images":"img/a5.jpg"},
{"id":"131","name":"129.醉人的钢琴声- 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/129.醉人的钢琴声- 纯音乐.m4a","images":"img/a1.jpg"},
{"id":"132","name":"130.珍爱时光 (The Moment) - Kenny G.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/130.珍爱时光 (The Moment) - Kenny G.m4a","images":"img/a2.jpg"},
{"id":"133","name":"131.无法超越的灵魂音乐 (乱红) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/131.无法超越的灵魂音乐 (乱红) - 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"134","name":"132.追梦人 (雪山飞狐主题曲) - 笛子.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/132.追梦人 (雪山飞狐主题曲) - 笛子.m4a","images":"img/a4.jpg"},
{"id":"135","name":"133.娜迪亚主旋律 - Chris Phillips.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/133.娜迪亚主旋律 - Chris Phillips.m4a","images":"img/a5.jpg"},
{"id":"136","name":"134.Chaconne 恰空舞曲 - 神秘园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/134.Chaconne 恰空舞曲 - 神秘园.m4a","images":"img/a1.jpg"},
{"id":"137","name":"135.莲语的呢喃 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/135.莲语的呢喃 - 纯音乐.m4a","images":"img/a2.jpg"},
{"id":"138","name":"136.《卷珠帘》意境钢琴版 - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/136.《卷珠帘》意境钢琴版 - 钢琴曲.m4a","images":"img/a3.jpg"},
{"id":"139","name":"137.欲望(Touch of Desire) (琵琶,吟唱) - 吕秀龄.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/137.欲望(Touch of Desire) (琵琶,吟唱) - 吕秀龄.m4a","images":"img/a4.jpg"},
{"id":"140","name":"138.我梦见了你 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/138.我梦见了你 - 纯音乐.m4a","images":"img/a5.jpg"},
{"id":"141","name":"139.珍宝 (The Treasure) - Bernward Koch.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/139.珍宝 (The Treasure) - Bernward Koch.m4a","images":"img/a1.jpg"},
{"id":"142","name":"140.Your Eyes 你的眼神 - Andrew Jasinski.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/140.Your Eyes 你的眼神 - Andrew Jasinski.m4a","images":"img/a2.jpg"},
{"id":"143","name":"141.Down By The Salley Gardens (莎莉花园) - James Galway.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/141.Down By The Salley Gardens (莎莉花园) - James Galway.m4a","images":"img/a3.jpg"},
{"id":"144","name":"142.婚礼钟声 (Wedding Bell 吉他曲) - Depapepe.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/142.婚礼钟声 (Wedding Bell 吉他曲) - Depapepe.m4a","images":"img/a4.jpg"},
{"id":"145","name":"143.浪客剑心 (Departure 钢琴+吉他) - 日本ACG.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/143.浪客剑心 (Departure 钢琴+吉他) - 日本ACG.m4a","images":"img/a5.jpg"},
{"id":"146","name":"144.阿兰胡埃斯之爱 (优美的长笛) - Patrick Gallois.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/144.阿兰胡埃斯之爱 (优美的长笛) - Patrick Gallois.m4a","images":"img/a1.jpg"},
{"id":"147","name":"145.风光秀丽的小岛 (La Isla Bonita) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/145.风光秀丽的小岛 (La Isla Bonita) - 纯音乐.m4a","images":"img/a2.jpg"},
{"id":"148","name":"146.大千世界(钢琴) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/146.大千世界(钢琴) - 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"149","name":"147.送别 - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/147.送别 - 钢琴曲.m4a","images":"img/a4.jpg"},
{"id":"150","name":"148.穿越时空的思念 - 和田薰.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/148.穿越时空的思念 - 和田薰.m4a","images":"img/a5.jpg"},
{"id":"151","name":"149.通往幸福的路 (Path To Happiness) - Kondor.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/149.通往幸福的路 (Path To Happiness) - Kondor.m4a","images":"img/a1.jpg"},
{"id":"152","name":"150.永远同在 - 宗次郎.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/150.永远同在 - 宗次郎.m4a","images":"img/a2.jpg"},
{"id":"153","name":"151.闪烁的星星 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/151.闪烁的星星 - 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"154","name":"152.威尼斯天使 (Forever after) - 竖琴.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/152.威尼斯天使 (Forever after) - 竖琴.m4a","images":"img/a4.jpg"},
{"id":"155","name":"153.唯美浪漫的纯音乐 N°025 - Relaxdaily.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/153.唯美浪漫的纯音乐 N°025 - Relaxdaily.m4a","images":"img/a5.jpg"},
{"id":"156","name":"154.在那遥远的地方 (萨克斯) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/154.在那遥远的地方 (萨克斯) - 纯音乐.m4a","images":"img/a1.jpg"},
{"id":"157","name":"155.盛开成花树 - 喵步小雨中.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/155.盛开成花树 - 喵步小雨中.m4a","images":"img/a2.jpg"},
{"id":"158","name":"156.生活的乐趣 (The Joy Of Life) - Kenny G.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/156.生活的乐趣 (The Joy Of Life) - Kenny G.m4a","images":"img/a3.jpg"},
{"id":"159","name":"157.风之诗 - 吉他名曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/157.风之诗 - 吉他名曲.m4a","images":"img/a4.jpg"},
{"id":"160","name":"158.爱尔兰晨风(笛) - 陈悦.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/158.爱尔兰晨风(笛) - 陈悦.m4a","images":"img/a5.jpg"},
{"id":"161","name":"159.Memories 回忆 - Wendi.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/159.Memories 回忆 - Wendi.m4a","images":"img/a1.jpg"},
{"id":"162","name":"160.晴了的某日 - 全素妍.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/160.晴了的某日 - 全素妍.m4a","images":"img/a2.jpg"},
{"id":"163","name":"161.在你的怀抱中最安全 - Kevin Kern.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/161.在你的怀抱中最安全 - Kevin Kern.m4a","images":"img/a3.jpg"},
{"id":"164","name":"162.天际 (大自然音乐) - Mickey Lee.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/162.天际 (大自然音乐) - Mickey Lee.m4a","images":"img/a4.jpg"},
{"id":"165","name":"163.流星雨 - 陈冠宇.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/163.流星雨 - 陈冠宇.m4a","images":"img/a5.jpg"},
{"id":"166","name":"164.约定 - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/164.约定 - 钢琴曲.m4a","images":"img/a1.jpg"},
{"id":"167","name":"165.奥里诺科之梦 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/165.奥里诺科之梦 - 班得瑞.m4a","images":"img/a2.jpg"},
{"id":"168","name":"166.变幻之风 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/166.变幻之风 - 班得瑞.m4a","images":"img/a3.jpg"},
{"id":"169","name":"167.星际安魂曲 - 山下直人.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/167.星际安魂曲 - 山下直人.m4a","images":"img/a4.jpg"},
{"id":"170","name":"168.风车 (Wind-mill) - Andemund Orchestra.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/168.风车 (Wind-mill) - Andemund Orchestra.m4a","images":"img/a5.jpg"},
{"id":"171","name":"169.雨空 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/169.雨空 - 纯音乐.m4a","images":"img/a1.jpg"},
{"id":"172","name":"170.春野 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/170.春野 - 班得瑞.m4a","images":"img/a2.jpg"},
{"id":"173","name":"171.华丽的节奏钢琴 (Midnight Affair) - Tom Barabas.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/171.华丽的节奏钢琴 (Midnight Affair) - Tom Barabas.m4a","images":"img/a3.jpg"},
{"id":"174","name":"172.秘密的庭院 (钢琴轻音乐) - 理查德.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/172.秘密的庭院 (钢琴轻音乐) - 理查德.m4a","images":"img/a4.jpg"},
{"id":"175","name":"173.精灵之吻 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/173.精灵之吻 - 班得瑞.m4a","images":"img/a5.jpg"},
{"id":"176","name":"174.满天星 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/174.满天星 - 班得瑞.m4a","images":"img/a1.jpg"},
{"id":"177","name":"175.迷雾水珠 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/175.迷雾水珠 - 班得瑞.m4a","images":"img/a2.jpg"},
{"id":"178","name":"176.秘密 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/176.秘密 - 班得瑞.m4a","images":"img/a3.jpg"},
{"id":"179","name":"177.森林中的一夜 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/177.森林中的一夜 - 班得瑞.m4a","images":"img/a4.jpg"},
{"id":"180","name":"178.我心深处 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/178.我心深处 - 班得瑞.m4a","images":"img/a5.jpg"},
{"id":"181","name":"179.印地安之梦 - 班得瑞.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/179.印地安之梦 - 班得瑞.m4a","images":"img/a1.jpg"},
{"id":"182","name":"180.蓝色星球 - Guido Negraszus.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/180.蓝色星球 - Guido Negraszus.m4a","images":"img/a2.jpg"},
{"id":"183","name":"181.我的歌声里 - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/181.我的歌声里 - 钢琴曲.m4a","images":"img/a3.jpg"},
{"id":"184","name":"182.Moon Flow (听起来十分舒畅) - Nomak.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/182.Moon Flow (听起来十分舒畅) - Nomak.m4a","images":"img/a4.jpg"},
{"id":"185","name":"183.Autumn Journey 秋之旅 - Eric Chiryoku.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/183.Autumn Journey 秋之旅 - Eric Chiryoku.m4a","images":"img/a5.jpg"},
{"id":"186","name":"184.无尽之雨 (唯美钢琴曲) - 林有三.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/184.无尽之雨 (唯美钢琴曲) - 林有三.m4a","images":"img/a1.jpg"},
{"id":"187","name":"185.夏恋 - Otokaze.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/185.夏恋 - Otokaze.m4a","images":"img/a2.jpg"},
{"id":"188","name":"186.夏日星 (Summer Star) - Lanx.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/186.夏日星 (Summer Star) - Lanx.m4a","images":"img/a3.jpg"},
{"id":"189","name":"187.轻松的古典小夜曲 (Serenade) - Andre Rieu.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/187.轻松的古典小夜曲 (Serenade) - Andre Rieu.m4a","images":"img/a4.jpg"},
{"id":"190","name":"188.海阔天空 - 钢琴.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/188.海阔天空 - 钢琴.m4a","images":"img/a5.jpg"},
{"id":"191","name":"189.森林之歌 Forest Hymn - Bill Douglas.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/189.森林之歌 Forest Hymn - Bill Douglas.m4a","images":"img/a1.jpg"},
{"id":"192","name":"190.没有夜晚（There Is No Night） - Mairead Nesbitt.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/190.没有夜晚（There Is No Night） - Mairead Nesbitt.m4a","images":"img/a2.jpg"},
{"id":"193","name":"191.全心全意 (Heart and Soul) - Kenny G.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/191.全心全意 (Heart and Soul) - Kenny G.m4a","images":"img/a3.jpg"},
{"id":"194","name":"192.寂静之声 (吉他) - 明仔.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/192.寂静之声 (吉他) - 明仔.m4a","images":"img/a4.jpg"},
{"id":"195","name":"193.阿兰胡埃斯协奏曲 - Julian Bream.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/193.阿兰胡埃斯协奏曲 - Julian Bream.m4a","images":"img/a5.jpg"},
{"id":"196","name":"194.Between Worlds (带有力量的宁静) - Roger Subirana.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/194.Between Worlds (带有力量的宁静) - Roger Subirana.m4a","images":"img/a1.jpg"},
{"id":"197","name":"195.寂静之声 (吉他) - 明仔.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/195.寂静之声 (吉他) - 明仔.m4a","images":"img/a2.jpg"},
{"id":"198","name":"196.After the Rain (雨后) - Kevin Kern.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/196.After the Rain (雨后) - Kevin Kern.m4a","images":"img/a3.jpg"},
{"id":"199","name":"197.小酒窝钢琴版 - 王喆.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/197.小酒窝钢琴版 - 王喆.m4a","images":"img/a4.jpg"},
{"id":"200","name":"198.你的微笑 (Tu Sonrisa 微风吉他二重奏) - La Vienta.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/198.你的微笑 (Tu Sonrisa 微风吉他二重奏) - La Vienta.m4a","images":"img/a5.jpg"},
{"id":"201","name":"199.美丽的神话 - Pure Music.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/199.美丽的神话 - Pure Music.m4a","images":"img/a1.jpg"},
{"id":"202","name":"200.季节的轮回 - 奥户巴寿.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/200.季节的轮回 - 奥户巴寿.m4a","images":"img/a2.jpg"},
{"id":"203","name":"201.当我遇 - 甘仕良.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/201.当我遇 - 甘仕良.m4a","images":"img/a3.jpg"},
{"id":"204","name":"202.神秘园之歌 钢琴曲 - 赵海洋.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/202.神秘园之歌 钢琴曲 - 赵海洋.m4a","images":"img/a4.jpg"},
{"id":"205","name":"203.玛奇朵飘浮 (手风琴) - 王雁盟.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/203.玛奇朵飘浮 (手风琴) - 王雁盟.m4a","images":"img/a5.jpg"},
{"id":"206","name":"204.落日大道 - Guido Negraszus.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/204.落日大道 - Guido Negraszus.m4a","images":"img/a1.jpg"},
{"id":"207","name":"205.别说我的眼泪你无所谓 (钢琴) - 王喆.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/205.别说我的眼泪你无所谓 (钢琴) - 王喆.m4a","images":"img/a2.jpg"},
{"id":"208","name":"206.秋～華恋～ - α·Pav.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/206.秋～華恋～ - α·Pav.m4a","images":"img/a3.jpg"},
{"id":"209","name":"207.你的心河 (River Flows In You) - Eisblume.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/207.你的心河 (River Flows In You) - Eisblume.m4a","images":"img/a4.jpg"},
{"id":"210","name":"208.蓝色生死恋I主题曲 - Lawrence.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/208.蓝色生死恋I主题曲 - Lawrence.m4a","images":"img/a5.jpg"},
{"id":"211","name":"209.季节的女王 (The Queen Of Season) - Danbi.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/209.季节的女王 (The Queen Of Season) - Danbi.m4a","images":"img/a1.jpg"},
{"id":"212","name":"210.一起走过的日子(古筝) - 李炜.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/210.一起走过的日子(古筝) - 李炜.m4a","images":"img/a2.jpg"},
{"id":"213","name":"211.以思念 (十九岁的纯情背景音乐) - 钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/211.以思念 (十九岁的纯情背景音乐) - 钢琴曲.m4a","images":"img/a3.jpg"},
{"id":"214","name":"212.Childhood's Memory 陶笛版 (思い出の小箱) - 宗次郎.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/212.Childhood's Memory 陶笛版 (思い出の小箱) - 宗次郎.m4a","images":"img/a4.jpg"},
{"id":"215","name":"213.卡农 (小提琴) - 利未人室内乐团.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/213.卡农 (小提琴) - 利未人室内乐团.m4a","images":"img/a5.jpg"},
{"id":"216","name":"214.我在那一角落患过伤风 - 赵海洋.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/214.我在那一角落患过伤风 - 赵海洋.m4a","images":"img/a1.jpg"},
{"id":"217","name":"215.Follow Your Heart (聆听心灵深处的呼唤) - Karunesh.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/215.Follow Your Heart (聆听心灵深处的呼唤) - Karunesh.m4a","images":"img/a2.jpg"},
{"id":"218","name":"216.微笑的弧度 (Silent Love) - 何真真.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/216.微笑的弧度 (Silent Love) - 何真真.m4a","images":"img/a3.jpg"},
{"id":"219","name":"217.花言叶 - α·Pav.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/217.花言叶 - α·Pav.m4a","images":"img/a4.jpg"},
{"id":"220","name":"218.欢乐的珍珠——凯文·科恩.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/218.欢乐的珍珠——凯文·科恩.m4a","images":"img/a5.jpg"},
{"id":"221","name":"219.生命之舞(钢琴与排笛) - Brad White & Pierre Grill.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/219.生命之舞(钢琴与排笛) - Brad White & Pierre Grill.m4a","images":"img/a1.jpg"},
{"id":"222","name":"220.希望曙光 - 喵步小雨中.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/220.希望曙光 - 喵步小雨中.m4a","images":"img/a2.jpg"},
{"id":"223","name":"221.睁不开眼就看不见- 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/221.睁不开眼就看不见- 纯音乐.m4a","images":"img/a3.jpg"},
{"id":"224","name":"222.suiren - a_hisa.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/222.suiren - a_hisa.m4a","images":"img/a4.jpg"},
{"id":"225","name":"223.游戏《蓝莓花园》的原声集 (Entre deux) - Daduk.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/223.游戏《蓝莓花园》的原声集 (Entre deux) - Daduk.m4a","images":"img/a5.jpg"},
{"id":"226","name":"224.善良的心 - Marc Enfroy.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/224.善良的心 - Marc Enfroy.m4a","images":"img/a1.jpg"},
{"id":"227","name":"225.梦中见——凯文·科恩.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/225.梦中见——凯文·科恩.m4a","images":"img/a2.jpg"},
{"id":"228","name":"226.久远~光和波的记忆~ -日本ACG.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/226.久远~光和波的记忆~ -日本ACG.m4a","images":"img/a3.jpg"},
{"id":"229","name":"227.雪花颂E (Snow Flower Song E) - Sweet Rain.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/227.雪花颂E (Snow Flower Song E) - Sweet Rain.m4a","images":"img/a4.jpg"},
{"id":"230","name":"228.爱的记忆- Phil Coulter.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/228.爱的记忆- Phil Coulter.m4a","images":"img/a5.jpg"},
{"id":"231","name":"229.醉梦西班牙 - Aage Kvalbein.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/229.醉梦西班牙 - Aage Kvalbein.m4a","images":"img/a1.jpg"},
{"id":"232","name":"230.舒伯特：天鹅之歌 (小夜曲) - Arthur Grumiaux.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/230.舒伯特：天鹅之歌 (小夜曲) - Arthur Grumiaux.m4a","images":"img/a2.jpg"},
{"id":"233","name":"231.Numb 钢琴版 - 林肯公园.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/231.Numb 钢琴版 - 林肯公园.m4a","images":"img/a3.jpg"},
{"id":"234","name":"232.ひだまりの（向阳之乡） - 日本ACG.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/232.ひだまりの（向阳之乡） - 日本ACG.m4a","images":"img/a4.jpg"},
{"id":"235","name":"233.Palace Memories~Sunset - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/233.Palace Memories~Sunset - 纯音乐.m4a","images":"img/a5.jpg"},
{"id":"236","name":"234.Your Beautiful Love - Back to Earth.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/234.Your Beautiful Love - Back to Earth.m4a","images":"img/a1.jpg"},
{"id":"237","name":"235.暗恋过结局呢(节奏) - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/235.暗恋过结局呢(节奏) - 纯音乐.m4a","images":"img/a2.jpg"},
{"id":"238","name":"236.悲歌 Cancion Triste - Jesse Cook.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/236.悲歌 Cancion Triste - Jesse Cook.m4a","images":"img/a3.jpg"},
{"id":"239","name":"237.小夜曲 - 舒伯特.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/237.小夜曲 - 舒伯特.m4a","images":"img/a4.jpg"},
{"id":"240","name":"238.跨越时代的思念 (钢琴曲) - 和田薰.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/238.跨越时代的思念 (钢琴曲) - 和田薰.m4a","images":"img/a5.jpg"},
{"id":"241","name":"239.我爱你 Ya Tebya Lubliu (吉他) - Acoustic Alchemy.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/239.我爱你 Ya Tebya Lubliu (吉他) - Acoustic Alchemy.m4a","images":"img/a1.jpg"},
{"id":"242","name":"240.散花 - Key Sounds Label.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/240.散花 - Key Sounds Label.m4a","images":"img/a2.jpg"},
{"id":"243","name":"241.Lost my pieces (龙与虎 感人配乐) - 桥本由香利.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/241.Lost my pieces (龙与虎 感人配乐) - 桥本由香利.m4a","images":"img/a3.jpg"},
{"id":"244","name":"242.Do You Live, Do You Love (活着而爱着) - Danny Wright.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/242.Do You Live, Do You Love (活着而爱着) - Danny Wright.m4a","images":"img/a4.jpg"},
{"id":"245","name":"243.Pachebel's Canon in D (卡农钢琴曲) - Danny Wright.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/243.Pachebel's Canon in D (卡农钢琴曲) - Danny Wright.m4a","images":"img/a5.jpg"},
{"id":"246","name":"244.Sleepless beauty (万有引力) - 浅仑大介.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/244.Sleepless beauty (万有引力) - 浅仑大介.m4a","images":"img/a1.jpg"},
{"id":"247","name":"245.河西走廊之梦-雅尼.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/245.河西走廊之梦-雅尼.m4a","images":"img/a2.jpg"},
{"id":"248","name":"246.如果我能告诉你-雅尼.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/246.如果我能告诉你-雅尼.m4a","images":"img/a3.jpg"},
{"id":"249","name":"247.当星星落下时-安菲尔.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/247.当星星落下时-安菲尔.m4a","images":"img/a4.jpg"},
{"id":"250","name":"248.雨中漫步-雅尼.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/248.雨中漫步-雅尼.m4a","images":"img/a5.jpg"},
{"id":"251","name":"249.永远不会太晚-雅尼.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/249.永远不会太晚-雅尼.m4a","images":"img/a1.jpg"},
{"id":"252","name":"250.一直在我心中 - Udo Vismann.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/250.一直在我心中 - Udo Vismann.m4a","images":"img/a2.jpg"},
{"id":"253","name":"251.秋天的色彩 - Soothing Relaxation.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/251.秋天的色彩 - Soothing Relaxation.m4a","images":"img/a3.jpg"},
{"id":"254","name":"252.Always 永远 - Soothing Relaxation.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/252.Always 永远 - Soothing Relaxation.m4a","images":"img/a4.jpg"},
{"id":"255","name":"253.绿袖子 (Greensleeves) - 理查德.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/253.绿袖子 (Greensleeves) - 理查德.m4a","images":"img/a5.jpg"},
{"id":"256","name":"254.胡伟立 - 温馨时刻.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/254.胡伟立 - 温馨时刻.m4a","images":"img/a1.jpg"},
{"id":"257","name":"255.纯音乐 - 莫失莫忘.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/255.纯音乐 - 莫失莫忘.m4a","images":"img/a2.jpg"},
{"id":"258","name":"256.胡伟立 - 雪千寻.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/256.胡伟立 - 雪千寻.m4a","images":"img/a3.jpg"},
{"id":"259","name":"257.如梦岁月-纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/257.如梦岁月-纯音乐.m4a","images":"img/a4.jpg"},
{"id":"260","name":"258.刹那永恒-纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/258.刹那永恒-纯音乐.m4a","images":"img/a5.jpg"},
{"id":"261","name":"259.秋的思念 - 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/259.秋的思念 - 纯音乐.m4a","images":"img/a1.jpg"},
{"id":"262","name":"260.中华通络操-纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/260.中华通络操-纯音乐.m4a","images":"img/a2.jpg"},
{"id":"263","name":"261.我和我的祖国-钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/261.我和我的祖国-钢琴曲.m4a","images":"img/a3.jpg"},
{"id":"264","name":"262.我爱你中国 -小提琴.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/262.我爱你中国 -小提琴.m4a","images":"img/a4.jpg"},
{"id":"265","name":"263.如烟长廊-吉他.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/263.如烟长廊-吉他.m4a","images":"img/a5.jpg"},
{"id":"266","name":"264.牧羊曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/264.牧羊曲.m4a","images":"img/a1.jpg"},
{"id":"267","name":"265.AIR-青空（钢琴版）.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/265.AIR-青空（钢琴版）.m4a","images":"img/a2.jpg"},
{"id":"268","name":"266.青空.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/266.青空.m4a","images":"img/a3.jpg"},
{"id":"269","name":"267.空纳万境.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/267.空纳万境.m4a","images":"img/a4.jpg"},
{"id":"270","name":"268.告白の夜.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/268.告白の夜.m4a","images":"img/a5.jpg"},
{"id":"271","name":"269.幻昼.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/269.幻昼.m4a","images":"img/a1.jpg"},
{"id":"272","name":"270.风平浪静.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/270.风平浪静.m4a","images":"img/a2.jpg"},
{"id":"273","name":"271.夜、萤火虫和你.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/271.夜、萤火虫和你.m4a","images":"img/a3.jpg"},
{"id":"274","name":"272.一人静.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/272.一人静.m4a","images":"img/a4.jpg"},
{"id":"275","name":"273.岩山---昭乌达盟民歌.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/273.岩山---昭乌达盟民歌.m4a","images":"img/a5.jpg"},
{"id":"276","name":"274.Einsamer Hirte 孤独的牧羊人 ( 口琴 ).m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/274.Einsamer Hirte 孤独的牧羊人 ( 口琴 ).m4a","images":"img/a1.jpg"},
{"id":"277","name":"275.Heavenly (feat. Felicia Farerre).m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/275.Heavenly (feat. Felicia Farerre).m4a","images":"img/a2.jpg"},
{"id":"278","name":"276.心绪 Continuous Thought.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/276.心绪 Continuous Thought.m4a","images":"img/a3.jpg"},
{"id":"279","name":"277.打雷下雨的声音真好听.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/277.打雷下雨的声音真好听.m4a","images":"img/a4.jpg"},
{"id":"280","name":"278.痴情冢 【笛子版】.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/278.痴情冢 【笛子版】.m4a","images":"img/a5.jpg"},
{"id":"281","name":"279.someone like you 原版伴奏.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/279.someone like you 原版伴奏.m4a","images":"img/a1.jpg"},
{"id":"282","name":"280.雨碎江南，花影斑斓-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/280.雨碎江南，花影斑斓-唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"283","name":"281.茶.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/281.茶.m4a","images":"img/a3.jpg"},
{"id":"284","name":"282.好听的古典音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/282.好听的古典音乐.m4a","images":"img/a4.jpg"},
{"id":"285","name":"283.桃花渡.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/283.桃花渡.m4a","images":"img/a5.jpg"},
{"id":"286","name":"284.临安初雨，春水凝碧-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/284.临安初雨，春水凝碧-唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"287","name":"285.探清水河.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/285.探清水河.m4a","images":"img/a2.jpg"},
{"id":"288","name":"286.云海间.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/286.云海间.m4a","images":"img/a3.jpg"},
{"id":"289","name":"287.山野幽居，宁静幽谧-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/287.山野幽居，宁静幽谧-唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"290","name":"288.苍竹滴翠，寂然如水-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/288.苍竹滴翠，寂然如水-唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"291","name":"289.回想-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/289.回想-唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"292","name":"290.琵琶行-钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/290.琵琶行-钢琴曲.m4a","images":"img/a2.jpg"},
{"id":"293","name":"291.三个人的时光.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/291.三个人的时光.m4a","images":"img/a3.jpg"},
{"id":"294","name":"292.繁华的寂静-钢琴曲.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/292.繁华的寂静-钢琴曲.m4a","images":"img/a4.jpg"},
{"id":"295","name":"293.秋来风起，叶落禅意-唯美轻音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/293.秋来风起，叶落禅意-唯美轻音乐.m4a","images":"img/a5.jpg"},
{"id":"296","name":"294.伴读静心唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/294.伴读静心唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"297","name":"295.那些关于你的爱恨情长.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/295.那些关于你的爱恨情长.m4a","images":"img/a2.jpg"},
{"id":"298","name":"296.那个你熟悉且难忘的声音 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/296.那个你熟悉且难忘的声音 - 唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"299","name":"297.雨韵悠然，滋润心田- 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/297.雨韵悠然，滋润心田- 唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"300","name":"298.千年一叹，婉韵悠远（古筝） - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/298.千年一叹，婉韵悠远（古筝） - 唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"301","name":"299.水姻缘（古筝新韵）-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/299.水姻缘（古筝新韵）-唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"302","name":"300.女儿情 （古筝） - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/300.女儿情 （古筝） - 唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"303","name":"301.水-禅意名曲 (茶禅一味) - 唯美轻音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/301.水-禅意名曲 (茶禅一味) - 唯美轻音乐.m4a","images":"img/a3.jpg"},
{"id":"304","name":"302.睡莲（二胡）-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/302.睡莲（二胡）-唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"305","name":"303.碧玉的江孜（净化心灵的西藏乐曲）- 纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/303.碧玉的江孜（净化心灵的西藏乐曲）- 纯音乐.m4a","images":"img/a5.jpg"},
{"id":"306","name":"304.潮汐的旋律，心灵的慰藉 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/304.潮汐的旋律，心灵的慰藉 - 唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"307","name":"305.天籁之音,来自印第安 -唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/305.天籁之音,来自印第安 -唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"308","name":"306.花开不记年-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/306.花开不记年-唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"309","name":"307.姻缘（古典）-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/307.姻缘（古典）-唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"310","name":"308.墨兰香，韵悠扬-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/308.墨兰香，韵悠扬-唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"311","name":"309.天籁排箫 最后的莫西干人.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/309.天籁排箫 最后的莫西干人.m4a","images":"img/a1.jpg"},
{"id":"312","name":"310.织女·心丝 (笛箫版) - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/310.织女·心丝 (笛箫版) - 唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"313","name":"311.风云依旧，人已老 (钢琴曲) - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/311.风云依旧，人已老 (钢琴曲) - 唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"314","name":"312.下雨的时候（小提琴） -唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/312.下雨的时候（小提琴） -唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"315","name":"313.红颜旧，此情不忘，忍别离 (笛子版)-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/313.红颜旧，此情不忘，忍别离 (笛子版)-唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"316","name":"314.《水墨兰亭》沉静如水，静逸如诗-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/314.《水墨兰亭》沉静如水，静逸如诗-唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"317","name":"315.司岗里情，相依相望-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/315.司岗里情，相依相望-唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"318","name":"316.江南印象，隽永舒畅-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/316.江南印象，隽永舒畅-唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"319","name":"317.薰衣草的阴影-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/317.薰衣草的阴影-唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"320","name":"318.缘聚 （醉人的水墨中国风）-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/318.缘聚 （醉人的水墨中国风）-唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"321","name":"319.绾青丝，别离殇（二胡）唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/319.绾青丝，别离殇（二胡）唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"322","name":"320.玉烟笛梦，诉说人生-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/320.玉烟笛梦，诉说人生-唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"323","name":"321.是谁在你耳畔呢喃-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/321.是谁在你耳畔呢喃-唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"324","name":"322.相恋在夏季-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/322.相恋在夏季-唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"325","name":"323.曾经追梦，现已不年轻-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/323.曾经追梦，现已不年轻-唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"326","name":"324.爱恨离别，梁祝化蝶 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/324.爱恨离别，梁祝化蝶 - 唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"327","name":"325.时光如流沙，珍惜当下 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/325.时光如流沙，珍惜当下 - 唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"328","name":"326.世外桃源 ，飘逸幽远 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/326.世外桃源 ，飘逸幽远 - 唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"329","name":"327.放空自己，心灵之旅- 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/327.放空自己，心灵之旅- 唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"330","name":"328.深山禅林，幽远意境 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/328.深山禅林，幽远意境 - 唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"331","name":"329.尽余欢，今宵别梦寒-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/329.尽余欢，今宵别梦寒-唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"332","name":"330.《静水禅音》静心极乐 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/330.《静水禅音》静心极乐 - 唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"333","name":"331.佛号静心，涤荡红尘-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/331.佛号静心，涤荡红尘-唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"334","name":"332.月下起舞（傣族民乐）-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/332.月下起舞（傣族民乐）-唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"335","name":"333.生活安详，舟渔晚唱 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/333.生活安详，舟渔晚唱 - 唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"336","name":"334.万水千山总是情 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/334.万水千山总是情 - 唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"337","name":"335.湖光水面，宁静幽远 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/335.湖光水面，宁静幽远 - 唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"338","name":"336.旭日清晨，唯美醉人 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/336.旭日清晨，唯美醉人 - 唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"339","name":"337.流水潺潺，筝音婉转-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/337.流水潺潺，筝音婉转-唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"340","name":"338.别样晚秋，是喜是忧-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/338.别样晚秋，是喜是忧-唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"341","name":"339.恢弘史诗，大气磅礴-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/339.恢弘史诗，大气磅礴-唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"342","name":"340.岁月华章，再现辉煌-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/340.岁月华章，再现辉煌-唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"343","name":"341.不变的心，永恒的爱-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/341.不变的心，永恒的爱-唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"344","name":"342.梦里水乡，让人向往 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/342.梦里水乡，让人向往 - 唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"345","name":"343.且听风吟 ，触动人心 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/343.且听风吟 ，触动人心 - 唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"346","name":"344.安静养心，舒缓心情 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/344.安静养心，舒缓心情 - 唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"347","name":"345.永浴爱河 ，至真至深- 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/345.永浴爱河 ，至真至深- 唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"348","name":"346.真爱永恒，相伴一生 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/346.真爱永恒，相伴一生 - 唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"349","name":"347.青春短暂，让人怀念 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/347.青春短暂，让人怀念 - 唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"350","name":"348.一曲一净土，一弦一清心 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/348.一曲一净土，一弦一清心 - 唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"351","name":"349.余生很短，请别错过 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/349.余生很短，请别错过 - 唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"352","name":"350.秋叶珊珊，伴君入眠 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/350.秋叶珊珊，伴君入眠 - 唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"353","name":"351.竹笛声悠扬，和夜莺很像-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/351.竹笛声悠扬，和夜莺很像-唯美纯音乐.m4a","images":"img/a3.jpg"},
{"id":"354","name":"352.音符跳动，抚慰心灵-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/352.音符跳动，抚慰心灵-唯美纯音乐.m4a","images":"img/a4.jpg"},
{"id":"355","name":"353.灵魂的呼唤，雄鹰之歌-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/353.灵魂的呼唤，雄鹰之歌-唯美纯音乐.m4a","images":"img/a5.jpg"},
{"id":"356","name":"354.英雄落寞，悲壮豪迈-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/354.英雄落寞，悲壮豪迈-唯美纯音乐.m4a","images":"img/a1.jpg"},
{"id":"357","name":"355.清新自然，雪的梦幻 - 唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/355.清新自然，雪的梦幻 - 唯美纯音乐.m4a","images":"img/a2.jpg"},
{"id":"358","name":"356.失去你，我会迷失-唯美纯音乐.m4a","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/唯美纯音乐/356.失去你，我会迷失-唯美纯音乐.m4a","images":"img/a3.jpg"},

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

