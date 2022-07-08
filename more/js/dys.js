//播放列表
var music_list =[
{"id":"1","name":"郭德纲-金兰谱.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-金兰谱.mp3","images":"img/a1.jpg"},
{"id":"2","name":"郭德纲-京中名妓.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-京中名妓.mp3","images":"img/a2.jpg"},
{"id":"3","name":"郭德纲-九条命.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-九条命.mp3","images":"img/a3.jpg"},
{"id":"4","name":"郭德纲-九义闹公堂.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-九义闹公堂.mp3","images":"img/a4.jpg"},
{"id":"5","name":"郭德纲-酒令 2010.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-酒令 2010.mp3","images":"img/a5.jpg"},
{"id":"6","name":"郭德纲-倔强的鸡腿.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-倔强的鸡腿.mp3","images":"img/a1.jpg"},
{"id":"7","name":"郭德纲-哭论.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-哭论.mp3","images":"img/a2.jpg"},
{"id":"8","name":"郭德纲-夸住宅.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-夸住宅.mp3","images":"img/a3.jpg"},
{"id":"9","name":"郭德纲-夸住宅+返场》（郭德纲、于谦）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-夸住宅+返场》（郭德纲、于谦）.mp3","images":"img/a4.jpg"},
{"id":"10","name":"郭德纲-拉风的屌丝气质.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-拉风的屌丝气质.mp3","images":"img/a5.jpg"},
{"id":"11","name":"郭德纲-浪的难受.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-浪的难受.mp3","images":"img/a1.jpg"},
{"id":"12","name":"郭德纲-老郭唱评戏.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-老郭唱评戏.mp3","images":"img/a2.jpg"},
{"id":"13","name":"郭德纲-老老年 高峰 郭德纲.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-老老年 高峰 郭德纲.mp3","images":"img/a3.jpg"},
{"id":"14","name":"郭德纲-老老年.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-老老年.mp3","images":"img/a4.jpg"},
{"id":"15","name":"郭德纲-老师来了.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-老师来了.mp3","images":"img/a5.jpg"},
{"id":"16","name":"郭德纲-老师太缺德了.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-老师太缺德了.mp3","images":"img/a1.jpg"},
{"id":"17","name":"郭德纲-老王八出身.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-老王八出身.mp3","images":"img/a2.jpg"},
{"id":"18","name":"郭德纲-老于家的过节史.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-老于家的过节史.mp3","images":"img/a3.jpg"},
{"id":"19","name":"郭德纲-乐在元宵.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-乐在元宵.mp3","images":"img/a4.jpg"},
{"id":"20","name":"郭德纲-脸我不要了，我有的是牛逼.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-脸我不要了，我有的是牛逼.mp3","images":"img/a5.jpg"},
{"id":"21","name":"郭德纲-梁山伯与祝英台.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-梁山伯与祝英台.mp3","images":"img/a1.jpg"},
{"id":"22","name":"郭德纲-梁祝衰史.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-梁祝衰史.mp3","images":"img/a2.jpg"},
{"id":"23","name":"郭德纲-列宁评戏.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-列宁评戏.mp3","images":"img/a3.jpg"},
{"id":"24","name":"郭德纲-论50年之现状.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-论50年之现状.mp3","images":"img/a4.jpg"},
{"id":"25","name":"郭德纲-论过节.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-论过节.mp3","images":"img/a5.jpg"},
{"id":"26","name":"郭德纲-论梦 .mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-论梦 .mp3","images":"img/a1.jpg"},
{"id":"27","name":"郭德纲-论梦 2010.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-论梦 2010.mp3","images":"img/a2.jpg"},
{"id":"28","name":"郭德纲-论梦.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-论梦.mp3","images":"img/a3.jpg"},
{"id":"29","name":"郭德纲-论梦》郭德纲 李菁 .mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-论梦》郭德纲 李菁 .mp3","images":"img/a4.jpg"},
{"id":"30","name":"郭德纲-论捧逗.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-论捧逗.mp3","images":"img/a5.jpg"},
{"id":"31","name":"郭德纲-论太平歌词.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-论太平歌词.mp3","images":"img/a1.jpg"},
{"id":"32","name":"郭德纲-麻雀也能下鹅蛋.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-麻雀也能下鹅蛋.mp3","images":"img/a2.jpg"},
{"id":"33","name":"郭德纲-买面茶.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-买面茶.mp3","images":"img/a3.jpg"},
{"id":"34","name":"郭德纲-卖布头.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-卖布头.mp3","images":"img/a4.jpg"},
{"id":"35","name":"郭德纲-卖布衣.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-卖布衣.mp3","images":"img/a5.jpg"},
{"id":"36","name":"郭德纲-卖裤头.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-卖裤头.mp3","images":"img/a1.jpg"},
{"id":"37","name":"郭德纲-卖五器.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-卖五器.mp3","images":"img/a2.jpg"},
{"id":"38","name":"郭德纲-满汉全席.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-满汉全席.mp3","images":"img/a3.jpg"},
{"id":"39","name":"郭德纲-美丽人生.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-美丽人生.mp3","images":"img/a4.jpg"},
{"id":"40","name":"郭德纲-美女幽魂.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-美女幽魂.mp3","images":"img/a5.jpg"},
{"id":"41","name":"郭德纲-梦中婚.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-梦中婚.mp3","images":"img/a1.jpg"},
{"id":"42","name":"郭德纲-梦中婚专场.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-梦中婚专场.mp3","images":"img/a2.jpg"},
{"id":"43","name":"郭德纲-妙峰山.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-妙峰山.mp3","images":"img/a3.jpg"},
{"id":"44","name":"郭德纲-民以食为天.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-民以食为天.mp3","images":"img/a4.jpg"},
{"id":"45","name":"郭德纲-墨尔本小调.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-墨尔本小调.mp3","images":"img/a5.jpg"},
{"id":"46","name":"郭德纲-母仪天下.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-母仪天下.mp3","images":"img/a1.jpg"},
{"id":"47","name":"郭德纲-你本善良.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你本善良.mp3","images":"img/a2.jpg"},
{"id":"48","name":"郭德纲-你猜猜我是谁.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你猜猜我是谁.mp3","images":"img/a3.jpg"},
{"id":"49","name":"郭德纲-你得娶我.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你得娶我.mp3","images":"img/a4.jpg"},
{"id":"50","name":"郭德纲-你的罩罩掉了.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你的罩罩掉了.mp3","images":"img/a5.jpg"},
{"id":"51","name":"郭德纲-你是我的玫瑰.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你是我的玫瑰.mp3","images":"img/a1.jpg"},
{"id":"52","name":"郭德纲-你压力大吗.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你压力大吗.mp3","images":"img/a2.jpg"},
{"id":"53","name":"郭德纲-你要高雅.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你要高雅.mp3","images":"img/a3.jpg"},
{"id":"54","name":"郭德纲-你要娶我.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你要娶我.mp3","images":"img/a4.jpg"},
{"id":"55","name":"郭德纲-你要折腾.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你要折腾.mp3","images":"img/a5.jpg"},
{"id":"56","name":"郭德纲--你有病啊.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲--你有病啊.mp3","images":"img/a1.jpg"},
{"id":"57","name":"郭德纲-你怎么不擦啊？.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你怎么不擦啊？.mp3","images":"img/a2.jpg"},
{"id":"58","name":"郭德纲-你这半辈子.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你这半辈子.mp3","images":"img/a3.jpg"},
{"id":"59","name":"郭德纲-你这股浪劲.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你这股浪劲.mp3","images":"img/a4.jpg"},
{"id":"60","name":"郭德纲-你真骚.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-你真骚.mp3","images":"img/a5.jpg"},
{"id":"61","name":"郭德纲-潘杨讼.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-潘杨讼.mp3","images":"img/a1.jpg"},
{"id":"62","name":"郭德纲-朋友论.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-朋友论.mp3","images":"img/a2.jpg"},
{"id":"63","name":"郭德纲-朋友谱.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-朋友谱.mp3","images":"img/a3.jpg"},
{"id":"64","name":"郭德纲-捧爱徒.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-捧爱徒.mp3","images":"img/a4.jpg"},
{"id":"65","name":"郭德纲-批三国.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-批三国.mp3","images":"img/a5.jpg"},
{"id":"66","name":"郭德纲-七月七.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-七月七.mp3","images":"img/a1.jpg"},
{"id":"67","name":"郭德纲-器官移植.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-器官移植.mp3","images":"img/a2.jpg"},
{"id":"68","name":"郭德纲-瞧这一家子.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-瞧这一家子.mp3","images":"img/a3.jpg"},
{"id":"69","name":"郭德纲-怯拜年.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-怯拜年.mp3","images":"img/a4.jpg"},
{"id":"70","name":"郭德纲-怯大鼓.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-怯大鼓.mp3","images":"img/a5.jpg"},
{"id":"71","name":"郭德纲-怯富贵.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-怯富贵.mp3","images":"img/a1.jpg"},
{"id":"72","name":"郭德纲-怯拉车.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-怯拉车.mp3","images":"img/a2.jpg"},
{"id":"73","name":"郭德纲-怯生活.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-怯生活.mp3","images":"img/a3.jpg"},
{"id":"74","name":"郭德纲-怯洗澡.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-怯洗澡.mp3","images":"img/a4.jpg"},
{"id":"75","name":"郭德纲-情义谱01.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-情义谱01.mp3","images":"img/a5.jpg"},
{"id":"76","name":"郭德纲-情义谱02.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-情义谱02.mp3","images":"img/a1.jpg"},
{"id":"77","name":"郭德纲-请教六句话 .mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-请教六句话 .mp3","images":"img/a2.jpg"},
{"id":"78","name":"郭德纲-曲协主席.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-曲协主席.mp3","images":"img/a3.jpg"},
{"id":"79","name":"郭德纲-群八扇.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-群八扇.mp3","images":"img/a4.jpg"},
{"id":"80","name":"郭德纲-人在江湖.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-人在江湖.mp3","images":"img/a5.jpg"},
{"id":"81","name":"郭德纲-日本梆子.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-日本梆子.mp3","images":"img/a1.jpg"},
{"id":"82","name":"郭德纲-日本小妹.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-日本小妹.mp3","images":"img/a2.jpg"},
{"id":"83","name":"郭德纲-三人行.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-三人行.mp3","images":"img/a3.jpg"},
{"id":"84","name":"郭德纲-嫂夫人.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-嫂夫人.mp3","images":"img/a4.jpg"},
{"id":"85","name":"郭德纲-嫂子别闹.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-嫂子别闹.mp3","images":"img/a5.jpg"},
{"id":"86","name":"郭德纲-色论.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-色论.mp3","images":"img/a1.jpg"},
{"id":"87","name":"郭德纲-神马都是浮云.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-神马都是浮云.mp3","images":"img/a2.jpg"},
{"id":"88","name":"郭德纲-师傅经.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-师傅经.mp3","images":"img/a3.jpg"},
{"id":"89","name":"郭德纲-师娘很好客.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-师娘很好客.mp3","images":"img/a4.jpg"},
{"id":"90","name":"郭德纲-十年.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-十年.mp3","images":"img/a5.jpg"},
{"id":"91","name":"郭德纲-收徒欧弟.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-收徒欧弟.mp3","images":"img/a1.jpg"},
{"id":"92","name":"郭德纲-寿比南山.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-寿比南山.mp3","images":"img/a2.jpg"},
{"id":"93","name":"郭德纲-鼠来宝 郭德纲 于谦 高峰.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-鼠来宝 郭德纲 于谦 高峰.mp3","images":"img/a3.jpg"},
{"id":"94","name":"郭德纲-数来宝2010.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-数来宝2010.mp3","images":"img/a4.jpg"},
{"id":"95","name":"郭德纲-拴娃娃.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-拴娃娃.mp3","images":"img/a5.jpg"},
{"id":"96","name":"郭德纲-双背地理图.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-双背地理图.mp3","images":"img/a1.jpg"},
{"id":"97","name":"郭德纲-双唱快板.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-双唱快板.mp3","images":"img/a2.jpg"},
{"id":"98","name":"郭德纲-双唱小曲.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-双唱小曲.mp3","images":"img/a3.jpg"},
{"id":"99","name":"郭德纲-双学济南话.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-双学济南话.mp3","images":"img/a4.jpg"},
{"id":"100","name":"郭德纲-谁动了我的减肥茶.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-谁动了我的减肥茶.mp3","images":"img/a5.jpg"},
{"id":"101","name":"郭德纲-说点别人不知道的.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-说点别人不知道的.mp3","images":"img/a1.jpg"},
{"id":"102","name":"郭德纲-说过节.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-说过节.mp3","images":"img/a2.jpg"},
{"id":"103","name":"郭德纲-死鬼快进来.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-死鬼快进来.mp3","images":"img/a3.jpg"},
{"id":"104","name":"郭德纲-四大名著.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-四大名著.mp3","images":"img/a4.jpg"},
{"id":"105","name":"郭德纲-隋唐木狗.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-隋唐木狗.mp3","images":"img/a5.jpg"},
{"id":"106","name":"郭德纲-太平歌词秦琼观阵.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-太平歌词秦琼观阵.mp3","images":"img/a1.jpg"},
{"id":"107","name":"郭德纲-泰国归来.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-泰国归来.mp3","images":"img/a2.jpg"},
{"id":"108","name":"郭德纲-泰国归来不看鸡.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-泰国归来不看鸡.mp3","images":"img/a3.jpg"},
{"id":"109","name":"郭德纲-探清水河.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-探清水河.mp3","images":"img/a4.jpg"},
{"id":"110","name":"郭德纲-讨论个和尚.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-讨论个和尚.mp3","images":"img/a5.jpg"},
{"id":"111","name":"郭德纲-特级烧烤师.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-特级烧烤师.mp3","images":"img/a1.jpg"},
{"id":"112","name":"郭德纲-跳大神.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-跳大神.mp3","images":"img/a2.jpg"},
{"id":"113","name":"郭德纲-贴身大丫鬟.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-贴身大丫鬟.mp3","images":"img/a3.jpg"},
{"id":"114","name":"郭德纲-痛.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-痛.mp3","images":"img/a4.jpg"},
{"id":"115","name":"郭德纲-偷斧子.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-偷斧子.mp3","images":"img/a5.jpg"},
{"id":"116","name":"郭德纲-偷论.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-偷论.mp3","images":"img/a1.jpg"},
{"id":"117","name":"郭德纲-托妻献子 (2).mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-托妻献子 (2).mp3","images":"img/a2.jpg"},
{"id":"118","name":"郭德纲-托妻献子.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-托妻献子.mp3","images":"img/a3.jpg"},
{"id":"119","name":"郭德纲-歪唱太平歌词 侯震 郭德纲.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-歪唱太平歌词 侯震 郭德纲.mp3","images":"img/a4.jpg"},
{"id":"120","name":"郭德纲-歪唱太平歌词.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-歪唱太平歌词.mp3","images":"img/a5.jpg"},
{"id":"121","name":"郭德纲-歪批三国 郭德纲 李菁.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-歪批三国 郭德纲 李菁.mp3","images":"img/a1.jpg"},
{"id":"122","name":"郭德纲-王八托石碑.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-王八托石碑.mp3","images":"img/a2.jpg"},
{"id":"123","name":"郭德纲-王二姐思夫.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-王二姐思夫.mp3","images":"img/a3.jpg"},
{"id":"124","name":"郭德纲-未央宫斩韩信.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-未央宫斩韩信.mp3","images":"img/a4.jpg"},
{"id":"125","name":"郭德纲-文史专家.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-文史专家.mp3","images":"img/a5.jpg"},
{"id":"126","name":"郭德纲-文武双全.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-文武双全.mp3","images":"img/a1.jpg"},
{"id":"127","name":"郭德纲-闻屎专家.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-闻屎专家.mp3","images":"img/a2.jpg"},
{"id":"128","name":"郭德纲-我爱看春晚.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我爱看春晚.mp3","images":"img/a3.jpg"},
{"id":"129","name":"郭德纲-我爱自由.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我爱自由.mp3","images":"img/a4.jpg"},
{"id":"130","name":"郭德纲-我爱祖国.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我爱祖国.mp3","images":"img/a5.jpg"},
{"id":"131","name":"郭德纲-我的辈分.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我的辈分.mp3","images":"img/a1.jpg"},
{"id":"132","name":"郭德纲-我的大学生活（完整版带返场）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我的大学生活（完整版带返场）.mp3","images":"img/a2.jpg"},
{"id":"133","name":"郭德纲-我的奋斗史.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我的奋斗史.mp3","images":"img/a3.jpg"},
{"id":"134","name":"郭德纲-我的伙伴.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我的伙伴.mp3","images":"img/a4.jpg"},
{"id":"135","name":"郭德纲-我的老哥.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我的老哥.mp3","images":"img/a5.jpg"},
{"id":"136","name":"郭德纲-我的老家.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我的老家.mp3","images":"img/a1.jpg"},
{"id":"137","name":"郭德纲-我的姥爷.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我的姥爷.mp3","images":"img/a2.jpg"},
{"id":"138","name":"郭德纲-我和我的小伙伴儿.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我和我的小伙伴儿.mp3","images":"img/a3.jpg"},
{"id":"139","name":"郭德纲-我家的狗丢了.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我家的狗丢了.mp3","images":"img/a4.jpg"},
{"id":"140","name":"郭德纲-我们好像见过.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我们好像见过.mp3","images":"img/a5.jpg"},
{"id":"141","name":"郭德纲-我是大师.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我是大师.mp3","images":"img/a1.jpg"},
{"id":"142","name":"郭德纲-我是军事家.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我是军事家.mp3","images":"img/a2.jpg"},
{"id":"143","name":"郭德纲-我是文学家（版本二）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我是文学家（版本二）.mp3","images":"img/a3.jpg"},
{"id":"144","name":"郭德纲-我是文学家（版本三）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我是文学家（版本三）.mp3","images":"img/a4.jpg"},
{"id":"145","name":"郭德纲-我是文学家.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我是文学家.mp3","images":"img/a5.jpg"},
{"id":"146","name":"郭德纲-我是舞蹈家 （版本二）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我是舞蹈家 （版本二）.mp3","images":"img/a1.jpg"},
{"id":"147","name":"郭德纲-我是舞蹈家（2010版本）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我是舞蹈家（2010版本）.mp3","images":"img/a2.jpg"},
{"id":"148","name":"郭德纲-我是舞蹈家.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我是舞蹈家.mp3","images":"img/a3.jpg"},
{"id":"149","name":"郭德纲-我为歌狂.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我为歌狂.mp3","images":"img/a4.jpg"},
{"id":"150","name":"郭德纲-我要唱歌 .mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要唱歌 .mp3","images":"img/a5.jpg"},
{"id":"151","name":"郭德纲-我要吃饺子.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要吃饺子.mp3","images":"img/a1.jpg"},
{"id":"152","name":"郭德纲-我要穿越.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要穿越.mp3","images":"img/a2.jpg"},
{"id":"153","name":"郭德纲-我要登基.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要登基.mp3","images":"img/a3.jpg"},
{"id":"154","name":"郭德纲-我要读书（版本二）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要读书（版本二）.mp3","images":"img/a4.jpg"},
{"id":"155","name":"郭德纲-我要读书.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要读书.mp3","images":"img/a5.jpg"},
{"id":"156","name":"郭德纲-我要反三俗（2008元旦版加返场）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要反三俗（2008元旦版加返场）.mp3","images":"img/a1.jpg"},
{"id":"157","name":"郭德纲-我要反三俗（全本）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要反三俗（全本）.mp3","images":"img/a2.jpg"},
{"id":"158","name":"郭德纲-我要反三俗(新).mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要反三俗(新).mp3","images":"img/a3.jpg"},
{"id":"159","name":"郭德纲-我要反三俗.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要反三俗.mp3","images":"img/a4.jpg"},
{"id":"160","name":"郭德纲-我要奋斗（版本二）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要奋斗（版本二）.mp3","images":"img/a5.jpg"},
{"id":"161","name":"郭德纲-我要奋斗（版本三）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要奋斗（版本三）.mp3","images":"img/a1.jpg"},
{"id":"162","name":"郭德纲-我要奋斗.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要奋斗.mp3","images":"img/a2.jpg"},
{"id":"163","name":"郭德纲-我要结婚（版本二）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要结婚（版本二）.mp3","images":"img/a3.jpg"},
{"id":"164","name":"郭德纲-我要结婚（版本三）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要结婚（版本三）.mp3","images":"img/a4.jpg"},
{"id":"165","name":"郭德纲-我要旅游（带返场）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要旅游（带返场）.mp3","images":"img/a5.jpg"},
{"id":"166","name":"郭德纲-我要旅游.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要旅游.mp3","images":"img/a1.jpg"},
{"id":"167","name":"郭德纲-我要闹绯闻（版本二）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要闹绯闻（版本二）.mp3","images":"img/a2.jpg"},
{"id":"168","name":"郭德纲-我要闹绯闻（版本三）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要闹绯闻（版本三）.mp3","images":"img/a3.jpg"},
{"id":"169","name":"郭德纲-我要闹绯闻（版本四）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要闹绯闻（版本四）.mp3","images":"img/a4.jpg"},
{"id":"170","name":"郭德纲-我要闹绯闻（加返场）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要闹绯闻（加返场）.mp3","images":"img/a5.jpg"},
{"id":"171","name":"郭德纲-我要闹绯闻.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要闹绯闻.mp3","images":"img/a1.jpg"},
{"id":"172","name":"郭德纲-我要上春晚（版本二）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要上春晚（版本二）.mp3","images":"img/a2.jpg"},
{"id":"173","name":"郭德纲-我要上春晚（版本三）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要上春晚（版本三）.mp3","images":"img/a3.jpg"},
{"id":"174","name":"郭德纲-我要上春晚（版本四）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要上春晚（版本四）.mp3","images":"img/a4.jpg"},
{"id":"175","name":"郭德纲-我要上春晚.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要上春晚.mp3","images":"img/a5.jpg"},
{"id":"176","name":"郭德纲-我要玩网游 .mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要玩网游 .mp3","images":"img/a1.jpg"},
{"id":"177","name":"郭德纲-我要下春晚.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要下春晚.mp3","images":"img/a2.jpg"},
{"id":"178","name":"郭德纲-我要幸福 （版本二）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要幸福 （版本二）.mp3","images":"img/a3.jpg"},
{"id":"179","name":"郭德纲-我要幸福 （版本三）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要幸福 （版本三）.mp3","images":"img/a4.jpg"},
{"id":"180","name":"郭德纲-我要幸福 （版本四）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要幸福 （版本四）.mp3","images":"img/a5.jpg"},
{"id":"181","name":"郭德纲-我要幸福（版本一）.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我要幸福（版本一）.mp3","images":"img/a1.jpg"},
{"id":"182","name":"郭德纲-我有强迫症.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我有强迫症.mp3","images":"img/a2.jpg"},
{"id":"183","name":"郭德纲-我又成长了.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-我又成长了.mp3","images":"img/a3.jpg"},
{"id":"184","name":"郭德纲-五红图.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-五红图.mp3","images":"img/a4.jpg"},
{"id":"185","name":"郭德纲-五星级酒店.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-五星级酒店.mp3","images":"img/a5.jpg"},
{"id":"186","name":"郭德纲-武坠子.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-武坠子.mp3","images":"img/a1.jpg"},
{"id":"187","name":"郭德纲-舞蹈家.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-舞蹈家.mp3","images":"img/a2.jpg"},
{"id":"188","name":"郭德纲-西瓜地的故事.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-西瓜地的故事.mp3","images":"img/a3.jpg"},
{"id":"189","name":"郭德纲-西河大鼓灞桥挑袍.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-西河大鼓灞桥挑袍.mp3","images":"img/a4.jpg"},
{"id":"190","name":"郭德纲-西征梦.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-西征梦.mp3","images":"img/a5.jpg"},
{"id":"191","name":"郭德纲-戏剧与方言.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-戏剧与方言.mp3","images":"img/a1.jpg"},
{"id":"192","name":"郭德纲-戏叔别兄.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-戏叔别兄.mp3","images":"img/a2.jpg"},
{"id":"193","name":"郭德纲-相面.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-相面.mp3","images":"img/a3.jpg"},
{"id":"194","name":"郭德纲-相声论.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-相声论.mp3","images":"img/a4.jpg"},
{"id":"195","name":"郭德纲-相声演员随身两包烟.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-相声演员随身两包烟.mp3","images":"img/a5.jpg"},
{"id":"196","name":"郭德纲-新—你这半辈子.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-新—你这半辈子.mp3","images":"img/a1.jpg"},
{"id":"197","name":"郭德纲-新西征梦.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-新西征梦.mp3","images":"img/a2.jpg"},
{"id":"198","name":"郭德纲-学电台.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-学电台.mp3","images":"img/a3.jpg"},
{"id":"199","name":"郭德纲-学评书.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-学评书.mp3","images":"img/a4.jpg"},
{"id":"200","name":"郭德纲-学生也疯狂.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-学生也疯狂.mp3","images":"img/a5.jpg"},
{"id":"201","name":"郭德纲-学跳舞.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-学跳舞.mp3","images":"img/a1.jpg"},
{"id":"202","name":"郭德纲-学问家.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-学问家.mp3","images":"img/a2.jpg"},
{"id":"203","name":"郭德纲-学小曲 2010.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-学小曲 2010.mp3","images":"img/a3.jpg"},
{"id":"204","name":"郭德纲-学小曲.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-学小曲.mp3","images":"img/a4.jpg"},
{"id":"205","name":"郭德纲-养王八.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-养王八.mp3","images":"img/a5.jpg"},
{"id":"206","name":"郭德纲-邀请函.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-邀请函.mp3","images":"img/a1.jpg"},
{"id":"207","name":"郭德纲-药引子.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-药引子.mp3","images":"img/a2.jpg"},
{"id":"208","name":"郭德纲-要做文明人.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-要做文明人.mp3","images":"img/a3.jpg"},
{"id":"209","name":"郭德纲-夜行记.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-夜行记.mp3","images":"img/a4.jpg"},
{"id":"210","name":"郭德纲-夜里听歌.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-夜里听歌.mp3","images":"img/a5.jpg"},
{"id":"211","name":"郭德纲-夜总会歪唱.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-夜总会歪唱.mp3","images":"img/a1.jpg"},
{"id":"212","name":"郭德纲-一定要向上.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-一定要向上.mp3","images":"img/a2.jpg"},
{"id":"213","name":"郭德纲-一户侯.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-一户侯.mp3","images":"img/a3.jpg"},
{"id":"214","name":"郭德纲-幽默的说话.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-幽默的说话.mp3","images":"img/a4.jpg"},
{"id":"215","name":"郭德纲-有钱人就是不一样.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-有钱人就是不一样.mp3","images":"img/a5.jpg"},
{"id":"216","name":"郭德纲-于老师家里新职业.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-于老师家里新职业.mp3","images":"img/a1.jpg"},
{"id":"217","name":"郭德纲-于谦的风流人生.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-于谦的风流人生.mp3","images":"img/a2.jpg"},
{"id":"218","name":"郭德纲-于谦发唱片.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-于谦发唱片.mp3","images":"img/a3.jpg"},
{"id":"219","name":"郭德纲-于谦了不起的媳妇们.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-于谦了不起的媳妇们.mp3","images":"img/a4.jpg"},
{"id":"220","name":"郭德纲-于谦与姑娘游泳.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-于谦与姑娘游泳.mp3","images":"img/a5.jpg"},
{"id":"221","name":"郭德纲-于氏父子轶事.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-于氏父子轶事.mp3","images":"img/a1.jpg"},
{"id":"222","name":"郭德纲-愚人节.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-愚人节.mp3","images":"img/a2.jpg"},
{"id":"223","name":"郭德纲-宇宙牌香烟.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-宇宙牌香烟.mp3","images":"img/a3.jpg"},
{"id":"224","name":"郭德纲-云淡风轻.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-云淡风轻.mp3","images":"img/a4.jpg"},
{"id":"225","name":"郭德纲-怎么这么倒霉.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-怎么这么倒霉.mp3","images":"img/a5.jpg"},
{"id":"226","name":"郭德纲-重口味段子集锦.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-重口味段子集锦.mp3","images":"img/a1.jpg"},
{"id":"227","name":"郭德纲-猪八戒出来了.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-猪八戒出来了.mp3","images":"img/a2.jpg"},
{"id":"228","name":"郭德纲-追着幸福跑.mp3","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/德云社mp3/郭德纲/郭德纲-追着幸福跑.mp3","images":"img/a3.jpg"},

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

