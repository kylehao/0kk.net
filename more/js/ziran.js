//播放列表
var music_list =[
{"id":"1","name":"001.阵雨（雨声、电视卡顿、钢琴、马林巴、弦乐器、竖琴、钢片琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/001.阵雨（雨声、电视卡顿、钢琴、马林巴、弦乐器、竖琴、钢片琴）.m4A","images":"img/a1.jpg"},
{"id":"2","name":"002.下雨天（下雨、钢琴、钢片琴、长笛、单簧管）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/002.下雨天（下雨、钢琴、钢片琴、长笛、单簧管）.m4A","images":"img/a2.jpg"},
{"id":"3","name":"003.山里农家（风吹稻田、鸟鸣、马林巴、钢片琴、钢琴、弦乐器）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/003.山里农家（风吹稻田、鸟鸣、马林巴、钢片琴、钢琴、弦乐器）.m4A","images":"img/a3.jpg"},
{"id":"4","name":"004.心语（海浪、钢琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/004.心语（海浪、钢琴、大提琴）.m4A","images":"img/a4.jpg"},
{"id":"5","name":"005.梦见你（呼吸声、呼噜声、钢琴、弦乐器）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/005.梦见你（呼吸声、呼噜声、钢琴、弦乐器）.m4A","images":"img/a5.jpg"},
{"id":"6","name":"006.小晴（潮汐、鸟鸣、马林巴、钢琴、钢片琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/006.小晴（潮汐、鸟鸣、马林巴、钢琴、钢片琴）.m4A","images":"img/a1.jpg"},
{"id":"7","name":"007.下班（轨道的当啷声、脚步声、吉他、钟琴、贝斯、长笛、架子鼓、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/007.下班（轨道的当啷声、脚步声、吉他、钟琴、贝斯、长笛、架子鼓、钢琴）.m4A","images":"img/a2.jpg"},
{"id":"8","name":"008.雨季（雨声、马林巴、钢片琴、竖琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/008.雨季（雨声、马林巴、钢片琴、竖琴）.m4A","images":"img/a3.jpg"},
{"id":"9","name":"009.再遇（雨声、钢琴、马林巴、管风琴、竖琴、弦乐、小钹）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/009.再遇（雨声、钢琴、马林巴、管风琴、竖琴、弦乐、小钹）.m4A","images":"img/a4.jpg"},
{"id":"10","name":"010.渔歌（钓鱼、水流、竖琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/010.渔歌（钓鱼、水流、竖琴）.m4A","images":"img/a5.jpg"},
{"id":"11","name":"011.摇篮（潮汐、虫鸣、钢琴)","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/011.摇篮（潮汐、虫鸣、钢琴).m4A","images":"img/a1.jpg"},
{"id":"12","name":"012.轻轻的脚步声（鸟鸣、狗吠、脚步声、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/012.轻轻的脚步声（鸟鸣、狗吠、脚步声、钢琴）.m4A","images":"img/a2.jpg"},
{"id":"13","name":"013.等你（下雨、拨打电话、钢琴、马林巴、竖琴、钢片琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/013.等你（下雨、拨打电话、钢琴、马林巴、竖琴、钢片琴）.m4A","images":"img/a3.jpg"},
{"id":"14","name":"014.长路慢行（海浪、钢琴、长笛、弦乐器、钢片琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/014.长路慢行（海浪、钢琴、长笛、弦乐器、钢片琴）.m4A","images":"img/a4.jpg"},
{"id":"15","name":"015.凉风有信（淅淅沥沥的下雨、脚步声、钢琴、马林巴、钟琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/015.凉风有信（淅淅沥沥的下雨、脚步声、钢琴、马林巴、钟琴）.m4A","images":"img/a5.jpg"},
{"id":"16","name":"016.为你撑伞（雨水、吉他、竖琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/016.为你撑伞（雨水、吉他、竖琴）.m4A","images":"img/a1.jpg"},
{"id":"17","name":"017.房前清泉（泉水叮咚、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/017.房前清泉（泉水叮咚、钢琴）.m4A","images":"img/a2.jpg"},
{"id":"18","name":"018.浪漫篝火（篝火、钢琴、长笛、双簧管、贝斯）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/018.浪漫篝火（篝火、钢琴、长笛、双簧管、贝斯）.m4A","images":"img/a3.jpg"},
{"id":"19","name":"019.从前慢（虫鸣、钢琴、大提琴、钢片琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/019.从前慢（虫鸣、钢琴、大提琴、钢片琴）.m4A","images":"img/a4.jpg"},
{"id":"20","name":"020.我爱我家（猫咪、篝火、钢琴、钢片琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/020.我爱我家（猫咪、篝火、钢琴、钢片琴）.m4A","images":"img/a5.jpg"},
{"id":"21","name":"021.蒲公英的幻想（溪水、鸟鸣、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/021.蒲公英的幻想（溪水、鸟鸣、钢琴）.m4A","images":"img/a1.jpg"},
{"id":"22","name":"022.流水潺潺（溪水、竖琴、钢琴、钢片琴、钟琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/022.流水潺潺（溪水、竖琴、钢琴、钢片琴、钟琴）.m4A","images":"img/a2.jpg"},
{"id":"23","name":"023.在月亮下跳舞吧（清风、雨水、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/023.在月亮下跳舞吧（清风、雨水、钢琴）.m4A","images":"img/a3.jpg"},
{"id":"24","name":"024.像从前那样（虫鸣、鸟鸣、钢琴、和声）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/024.像从前那样（虫鸣、鸟鸣、钢琴、和声）.m4A","images":"img/a4.jpg"},
{"id":"25","name":"025.夏风之声（潮汐、蝉鸣、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/025.夏风之声（潮汐、蝉鸣、钢琴）.m4A","images":"img/a5.jpg"},
{"id":"26","name":"026.星星、月亮与满满（流水潺潺、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/026.星星、月亮与满满（流水潺潺、钢琴）.m4A","images":"img/a1.jpg"},
{"id":"27","name":"027.月光洒向海面（海水、浪花、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/027.月光洒向海面（海水、浪花、钢琴）.m4A","images":"img/a2.jpg"},
{"id":"28","name":"028.闲逛（鸟鸣、水滴、脚步声、钢琴、长笛）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/028.闲逛（鸟鸣、水滴、脚步声、钢琴、长笛）.m4A","images":"img/a3.jpg"},
{"id":"29","name":"029.踏上稻乡（鸟鸣、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/029.踏上稻乡（鸟鸣、钢琴）.m4A","images":"img/a4.jpg"},
{"id":"30","name":"030.我们的时光（时钟、钟琴、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/030.我们的时光（时钟、钟琴、钢琴）.m4A","images":"img/a5.jpg"},
{"id":"31","name":"031.仲夏夜的梦境（蟋蟀鸟鸣、钢琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/031.仲夏夜的梦境（蟋蟀鸟鸣、钢琴、大提琴）.m4A","images":"img/a1.jpg"},
{"id":"32","name":"032.湛蓝天空（流水声、鸟鸣、萨克斯、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/032.湛蓝天空（流水声、鸟鸣、萨克斯、钢琴）.m4A","images":"img/a2.jpg"},
{"id":"33","name":"033.乡间小路（林中清溪、竖笛、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/033.乡间小路（林中清溪、竖笛、大提琴）.m4A","images":"img/a3.jpg"},
{"id":"34","name":"034.澄澈心灵（夏夜蟋蟀蝉鸣、大提琴、钢琴、木吉他）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/034.澄澈心灵（夏夜蟋蟀蝉鸣、大提琴、钢琴、木吉他）.m4A","images":"img/a4.jpg"},
{"id":"35","name":"035.路在前方（鸟鸣、钢琴、木吉他、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/035.路在前方（鸟鸣、钢琴、木吉他、大提琴）.m4A","images":"img/a5.jpg"},
{"id":"36","name":"036.早安（鸟鸣、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/036.早安（鸟鸣、钢琴）.m4A","images":"img/a1.jpg"},
{"id":"37","name":"037.秘境岛屿（海浪、长笛、木吉他）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/037.秘境岛屿（海浪、长笛、木吉他）.m4A","images":"img/a2.jpg"},
{"id":"38","name":"038.老街（山涧鸟鸣、钢琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/038.老街（山涧鸟鸣、钢琴、大提琴）.m4A","images":"img/a3.jpg"},
{"id":"39","name":"039.悠闲假期（流水、鸟鸣、木吉他、钢琴、提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/039.悠闲假期（流水、鸟鸣、木吉他、钢琴、提琴）.m4A","images":"img/a4.jpg"},
{"id":"40","name":"040.宁静港湾（水边鸟鸣、木吉他、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/040.宁静港湾（水边鸟鸣、木吉他、钢琴）.m4A","images":"img/a5.jpg"},
{"id":"41","name":"041.在花园里劳作（浇水、狗吠、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/041.在花园里劳作（浇水、狗吠、钢琴）.m4A","images":"img/a1.jpg"},
{"id":"42","name":"042.放下烦忧（海浪、木吉他、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/042.放下烦忧（海浪、木吉他、大提琴）.m4A","images":"img/a2.jpg"},
{"id":"43","name":"043.时光的痕迹（沥沥小雨、纯钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/043.时光的痕迹（沥沥小雨、纯钢琴）.m4A","images":"img/a3.jpg"},
{"id":"44","name":"044.黎明（溪水潺潺、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/044.黎明（溪水潺潺、钢琴）.m4A","images":"img/a4.jpg"},
{"id":"45","name":"045.送别（风声、流水、钢琴、提琴、口琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/045.送别（风声、流水、钢琴、提琴、口琴）.m4A","images":"img/a5.jpg"},
{"id":"46","name":"046.小森林（鸟鸣、树叶、钢片琴、马林巴、长笛、竖琴、小提琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/046.小森林（鸟鸣、树叶、钢片琴、马林巴、长笛、竖琴、小提琴、大提琴）.m4A","images":"img/a1.jpg"},
{"id":"47","name":"047.心若无尘（水波、竖琴、短笛）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/047.心若无尘（水波、竖琴、短笛）.m4A","images":"img/a2.jpg"},
{"id":"48","name":"048.远走（鸟鸣、钢琴、提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/048.远走（鸟鸣、钢琴、提琴）.m4A","images":"img/a3.jpg"},
{"id":"49","name":"049.流星花园（鸟鸣、孩子笑声、钢琴、贝斯、钢片琴、大提琴、小提琴、中提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/049.流星花园（鸟鸣、孩子笑声、钢琴、贝斯、钢片琴、大提琴、小提琴、中提琴）.m4A","images":"img/a4.jpg"},
{"id":"50","name":"050.兜风（脚步声、汽车、风声、电子琴、马林巴、钢片琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/050.兜风（脚步声、汽车、风声、电子琴、马林巴、钢片琴）.m4A","images":"img/a5.jpg"},
{"id":"51","name":"051.小可爱（宝宝笑声、钢琴、钢片琴、长笛、黑管）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/051.小可爱（宝宝笑声、钢琴、钢片琴、长笛、黑管）.m4A","images":"img/a1.jpg"},
{"id":"52","name":"052.舞动的花朵（风、鸟鸣、钢琴、钟琴、马林巴、钢片琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/052.舞动的花朵（风、鸟鸣、钢琴、钟琴、马林巴、钢片琴）.m4A","images":"img/a2.jpg"},
{"id":"53","name":"053.明天之后（微风、长笛、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/053.明天之后（微风、长笛、钢琴）.m4A","images":"img/a3.jpg"},
{"id":"54","name":"054.家乡（脚步声、电车、钢琴、贝斯、钟琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/054.家乡（脚步声、电车、钢琴、贝斯、钟琴）.m4A","images":"img/a4.jpg"},
{"id":"55","name":"055.躲雨（雨声、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/055.躲雨（雨声、钢琴）.m4A","images":"img/a5.jpg"},
{"id":"56","name":"056.寻找自我之旅（鸟鸣、自行车、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/056.寻找自我之旅（鸟鸣、自行车、钢琴）.m4A","images":"img/a1.jpg"},
{"id":"57","name":"057.冬至（落叶、钢琴、长笛、单簧管）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/057.冬至（落叶、钢琴、长笛、单簧管）.m4A","images":"img/a2.jpg"},
{"id":"58","name":"058.暖暖的东风（鸟鸣、脚步声、钢琴、钟琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/058.暖暖的东风（鸟鸣、脚步声、钢琴、钟琴）.m4A","images":"img/a3.jpg"},
{"id":"59","name":"059.壁炉（火苗、小猫、钢琴、弦乐器）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/059.壁炉（火苗、小猫、钢琴、弦乐器）.m4A","images":"img/a4.jpg"},
{"id":"60","name":"060.梦游记（虫鸣、弦乐四重奏、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/060.梦游记（虫鸣、弦乐四重奏、钢琴）.m4A","images":"img/a5.jpg"},
{"id":"61","name":"061.我们一家人（鸟鸣、小狗、小猫、钢琴、贝斯）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/061.我们一家人（鸟鸣、小狗、小猫、钢琴、贝斯）.m4A","images":"img/a1.jpg"},
{"id":"62","name":"062.冬日清晨（流水、竖琴、长笛、钢片琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/062.冬日清晨（流水、竖琴、长笛、钢片琴）.m4A","images":"img/a2.jpg"},
{"id":"63","name":"063.蓝色海岸线（海浪、潮汐、钢琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/063.蓝色海岸线（海浪、潮汐、钢琴、大提琴）.m4A","images":"img/a3.jpg"},
{"id":"64","name":"064.从冬眠中醒来（流水、钢琴、钟琴、长笛）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/064.从冬眠中醒来（流水、钢琴、钟琴、长笛）.m4A","images":"img/a4.jpg"},
{"id":"65","name":"065.当春天来到（鸟鸣、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/065.当春天来到（鸟鸣、钢琴）.m4A","images":"img/a5.jpg"},
{"id":"66","name":"066.森林晨景（鸟鸣、宝宝学语声、木吉他、钢琴、长笛）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/066.森林晨景（鸟鸣、宝宝学语声、木吉他、钢琴、长笛）.m4A","images":"img/a1.jpg"},
{"id":"67","name":"067.向着光亮那方（流水、鸟鸣、钢琴、长笛）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/067.向着光亮那方（流水、鸟鸣、钢琴、长笛）.m4A","images":"img/a2.jpg"},
{"id":"68","name":"068.夜晚的星（蟋蟀、虫鸣、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/068.夜晚的星（蟋蟀、虫鸣、钢琴）.m4A","images":"img/a3.jpg"},
{"id":"69","name":"069.日不落（蛙鸣、木吉他、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/069.日不落（蛙鸣、木吉他、钢琴）.m4A","images":"img/a4.jpg"},
{"id":"70","name":"070.喜鹊成双（水波、深山鸟鸣、爵士钢琴、萨克斯）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/070.喜鹊成双（水波、深山鸟鸣、爵士钢琴、萨克斯）.m4A","images":"img/a5.jpg"},
{"id":"71","name":"071.夏日微风（习习凉风、宝宝笑声、纯钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/071.夏日微风（习习凉风、宝宝笑声、纯钢琴）.m4A","images":"img/a1.jpg"},
{"id":"72","name":"072.万事顺心（鸟鸣、风声、水声、钢琴、小提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/072.万事顺心（鸟鸣、风声、水声、钢琴、小提琴）.m4A","images":"img/a2.jpg"},
{"id":"73","name":"073.晨思前奏曲（篝火冉冉、纯钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/073.晨思前奏曲（篝火冉冉、纯钢琴）.m4A","images":"img/a3.jpg"},
{"id":"74","name":"074.从你的全世界路过（海鸟、潮汐、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/074.从你的全世界路过（海鸟、潮汐、钢琴）.m4A","images":"img/a4.jpg"},
{"id":"75","name":"075.世界尽头与冷酷仙境（海风、波涛、钢琴、提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/075.世界尽头与冷酷仙境（海风、波涛、钢琴、提琴）.m4A","images":"img/a5.jpg"},
{"id":"76","name":"076.想见你（缓缓流水、钢琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/076.想见你（缓缓流水、钢琴、大提琴）.m4A","images":"img/a1.jpg"},
{"id":"77","name":"077.牵牛花（啾啾鸟鸣、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/077.牵牛花（啾啾鸟鸣、钢琴）.m4A","images":"img/a2.jpg"},
{"id":"78","name":"078.雨后的天空（春雷、蛙鸣、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/078.雨后的天空（春雷、蛙鸣、钢琴）.m4A","images":"img/a3.jpg"},
{"id":"79","name":"079.日出（早晨山顶、钢琴、竖笛）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/079.日出（早晨山顶、钢琴、竖笛）.m4A","images":"img/a4.jpg"},
{"id":"80","name":"080.山顶日出（流水声、手风琴、短笛、提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/080.山顶日出（流水声、手风琴、短笛、提琴）.m4A","images":"img/a5.jpg"},
{"id":"81","name":"081.念念回首（涟漪、翠鸟声、纯钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/081.念念回首（涟漪、翠鸟声、纯钢琴）.m4A","images":"img/a1.jpg"},
{"id":"82","name":"082.江河共余生（鸟鸣、微风、钢琴、小提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/082.江河共余生（鸟鸣、微风、钢琴、小提琴）.m4A","images":"img/a2.jpg"},
{"id":"83","name":"083.待凛冬离去（春日鸟鸣、钢琴、小提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/083.待凛冬离去（春日鸟鸣、钢琴、小提琴）.m4A","images":"img/a3.jpg"},
{"id":"84","name":"084.候鸟的生活（森林鸟鸣、钢琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/084.候鸟的生活（森林鸟鸣、钢琴、大提琴）.m4A","images":"img/a4.jpg"},
{"id":"85","name":"085.星河长明（仲夏虫鸣、纯钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/085.星河长明（仲夏虫鸣、纯钢琴）.m4A","images":"img/a5.jpg"},
{"id":"86","name":"086.晚歌（虫鸣、纯钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/086.晚歌（虫鸣、纯钢琴）.m4A","images":"img/a1.jpg"},
{"id":"87","name":"087.萤火虫之歌（虫鸣、钢琴、竖琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/087.萤火虫之歌（虫鸣、钢琴、竖琴）.m4A","images":"img/a2.jpg"},
{"id":"88","name":"088.童年梦境（蟋蟀、虫鸣、纯钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/088.童年梦境（蟋蟀、虫鸣、纯钢琴）.m4A","images":"img/a3.jpg"},
{"id":"89","name":"089.童年梦境（蟋蟀、虫鸣、纯钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/089.童年梦境（蟋蟀、虫鸣、纯钢琴）.m4A","images":"img/a4.jpg"},
{"id":"90","name":"090.漂浮的云（鸟鸣、钢琴、八音盒、小提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/090.漂浮的云（鸟鸣、钢琴、八音盒、小提琴）.m4A","images":"img/a5.jpg"},
{"id":"91","name":"091.风平浪静（柔情海浪、大提琴、铁琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/091.风平浪静（柔情海浪、大提琴、铁琴）.m4A","images":"img/a1.jpg"},
{"id":"92","name":"092.一路向北（风浪、长笛、小提琴、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/092.一路向北（风浪、长笛、小提琴、钢琴）.m4A","images":"img/a2.jpg"},
{"id":"93","name":"093.飘雪（风浪、钢琴、木吉他、小提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/093.飘雪（风浪、钢琴、木吉他、小提琴）.m4A","images":"img/a3.jpg"},
{"id":"94","name":"094.风中的信（蟋蟀、晚风、钢琴、小提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/094.风中的信（蟋蟀、晚风、钢琴、小提琴）.m4A","images":"img/a4.jpg"},
{"id":"95","name":"095.日落的时候（山野虫鸣、木吉他、钢琴、小提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/095.日落的时候（山野虫鸣、木吉他、钢琴、小提琴）.m4A","images":"img/a5.jpg"},
{"id":"96","name":"096.心安（缓缓流水、微风、竖琴、长笛、钢琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/096.心安（缓缓流水、微风、竖琴、长笛、钢琴、大提琴）.m4A","images":"img/a1.jpg"},
{"id":"97","name":"097.爱你 是我做过最好的事（水波、鸟鸣、木吉他、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/097.爱你 是我做过最好的事（水波、鸟鸣、木吉他、钢琴）.m4A","images":"img/a2.jpg"},
{"id":"98","name":"098.看海（海浪、海鸟、木吉他、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/098.看海（海浪、海鸟、木吉他、钢琴）.m4A","images":"img/a3.jpg"},
{"id":"99","name":"099.我好想你（微风习习、钢琴、木吉他）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/099.我好想你（微风习习、钢琴、木吉他）.m4A","images":"img/a4.jpg"},
{"id":"100","name":"100.青青草原的傍晚（3D音效、虫鸣、短笛、竖琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/100.青青草原的傍晚（3D音效、虫鸣、短笛、竖琴）.m4A","images":"img/a5.jpg"},
{"id":"101","name":"101.湖畔夜色（3D湖水声、鸟鸣、萨克斯、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/101.湖畔夜色（3D湖水声、鸟鸣、萨克斯、钢琴）.m4A","images":"img/a1.jpg"},
{"id":"102","name":"102.潮起潮落（海风、海浪、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/102.潮起潮落（海风、海浪、钢琴）.m4A","images":"img/a2.jpg"},
{"id":"103","name":"103.夏天的故事（山林声音、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/103.夏天的故事（山林声音、钢琴）.m4A","images":"img/a3.jpg"},
{"id":"104","name":"104.春天森林（大自然声音、钢琴、木吉他、大提琴、小提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/104.春天森林（大自然声音、钢琴、木吉他、大提琴、小提琴）.m4A","images":"img/a4.jpg"},
{"id":"105","name":"105.月亮的梦（3D音效、雷雨、八音盒）戴耳机听更妙噢","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/105.月亮的梦（3D音效、雷雨、八音盒）戴耳机听更妙噢.m4A","images":"img/a5.jpg"},
{"id":"106","name":"106.风雨之后彩虹漫天（3D音效、雷雨、钢琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/106.风雨之后彩虹漫天（3D音效、雷雨、钢琴、大提琴）.m4A","images":"img/a1.jpg"},
{"id":"107","name":"107.山涧小溪缓缓流淌（3D纯大自然声音）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/107.山涧小溪缓缓流淌（3D纯大自然声音）.m4A","images":"img/a2.jpg"},
{"id":"108","name":"108.窗外大海（温柔海浪、3D脑波音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/108.窗外大海（温柔海浪、3D脑波音乐）.m4A","images":"img/a3.jpg"},
{"id":"109","name":"109.静夜思（3D舒睡轻音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/109.静夜思（3D舒睡轻音乐）.m4A","images":"img/a4.jpg"},
{"id":"110","name":"110.朝幸福奔去（3D舒睡轻音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/110.朝幸福奔去（3D舒睡轻音乐）.m4A","images":"img/a5.jpg"},
{"id":"111","name":"111.人间最美是安静（3D纯音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/111.人间最美是安静（3D纯音乐）.m4A","images":"img/a1.jpg"},
{"id":"112","name":"112.森林雨后（涓涓溪流、钢琴、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/112.森林雨后（涓涓溪流、钢琴、大提琴）.m4A","images":"img/a2.jpg"},
{"id":"113","name":"113.天冷了给你拥抱（3D风声、八音盒）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/113.天冷了给你拥抱（3D风声、八音盒）.m4A","images":"img/a3.jpg"},
{"id":"114","name":"114.愿你快乐无忧（海浪、八音盒、钢琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/114.愿你快乐无忧（海浪、八音盒、钢琴）.m4A","images":"img/a4.jpg"},
{"id":"115","name":"115.彼岸烟火（3D舒眠纯音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/115.彼岸烟火（3D舒眠纯音乐）.m4A","images":"img/a5.jpg"},
{"id":"116","name":"116.回到过去（浪花、钢琴、竖笛、大提琴）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/116.回到过去（浪花、钢琴、竖笛、大提琴）.m4A","images":"img/a1.jpg"},
{"id":"117","name":"117.北极的风（3D纯大自然声音）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/117.北极的风（3D纯大自然声音）.m4A","images":"img/a2.jpg"},
{"id":"118","name":"118.心事如浮萍（3D安眠轻音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/118.心事如浮萍（3D安眠轻音乐）.m4A","images":"img/a3.jpg"},
{"id":"119","name":"119.水滴声声（3D舒眠大自然轻音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/119.水滴声声（3D舒眠大自然轻音乐）.m4A","images":"img/a4.jpg"},
{"id":"120","name":"120.牵着你的手到世界尽头（3D晚安轻音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/120.牵着你的手到世界尽头（3D晚安轻音乐）.m4A","images":"img/a5.jpg"},
{"id":"121","name":"121.深海中的水流（3D纯大自然声音）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/121.深海中的水流（3D纯大自然声音）.m4A","images":"img/a1.jpg"},
{"id":"122","name":"122.窗外是雨天（3D纯音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/122.窗外是雨天（3D纯音乐）.m4A","images":"img/a2.jpg"},
{"id":"123","name":"123.为你留了一盏灯（3D纯音乐）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/123.为你留了一盏灯（3D纯音乐）.m4A","images":"img/a3.jpg"},
{"id":"124","name":"124.星空下的篝火（3D大自然声音）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/124.星空下的篝火（3D大自然声音）.m4A","images":"img/a4.jpg"},
{"id":"125","name":"125.呼吸在海平面下10米（3D大自然声音）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/125.呼吸在海平面下10米（3D大自然声音）.m4A","images":"img/a5.jpg"},
{"id":"126","name":"126.水下气泡（3D大自然声音）","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/126.水下气泡（3D大自然声音）.m4A","images":"img/a1.jpg"},
{"id":"127","name":"127.海上栈桥","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/127.海上栈桥.m4A","images":"img/a2.jpg"},
{"id":"128","name":"128.回家的路","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/128.回家的路.m4A","images":"img/a3.jpg"},
{"id":"129","name":"129.夏夜","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/129.夏夜.m4A","images":"img/a4.jpg"},
{"id":"130","name":"130.夏日绿荫","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/130.夏日绿荫.m4A","images":"img/a5.jpg"},
{"id":"131","name":"131.海边微风起","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/131.海边微风起.m4A","images":"img/a1.jpg"},
{"id":"132","name":"132.海鸥岛","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/132.海鸥岛.m4A","images":"img/a2.jpg"},
{"id":"133","name":"133.大海","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/133.大海.m4A","images":"img/a3.jpg"},
{"id":"134","name":"134.山野","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/134.山野.m4A","images":"img/a4.jpg"},
{"id":"135","name":"135.泉眼无声惜细流","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/135.泉眼无声惜细流.m4A","images":"img/a5.jpg"},
{"id":"136","name":"136.风吹雨成夏","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/136.风吹雨成夏.m4A","images":"img/a1.jpg"},
{"id":"137","name":"137.雷雨","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/137.雷雨.m4A","images":"img/a2.jpg"},
{"id":"138","name":"138.北极","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/138.北极.m4A","images":"img/a3.jpg"},
{"id":"139","name":"139.山涧","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/139.山涧.m4A","images":"img/a4.jpg"},
{"id":"140","name":"140.划船","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/140.划船.m4A","images":"img/a5.jpg"},
{"id":"141","name":"141.海底世界","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/141.海底世界.m4A","images":"img/a1.jpg"},
{"id":"142","name":"142.篝火","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/142.篝火.m4A","images":"img/a2.jpg"},
{"id":"143","name":"143.山顶日落","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/143.山顶日落.m4A","images":"img/a3.jpg"},
{"id":"144","name":"144.雪地","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/144.雪地.m4A","images":"img/a4.jpg"},
{"id":"145","name":"145.林中小溪","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/145.林中小溪.m4A","images":"img/a5.jpg"},
{"id":"146","name":"146.走在沙滩上","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/146.走在沙滩上.m4A","images":"img/a1.jpg"},
{"id":"147","name":"147.小森林","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/147.小森林.m4A","images":"img/a2.jpg"},
{"id":"148","name":"148.小可爱","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/148.小可爱.m4A","images":"img/a3.jpg"},
{"id":"149","name":"149.舞动的花朵","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/149.舞动的花朵.m4A","images":"img/a4.jpg"},
{"id":"150","name":"150.回归校园","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/150.回归校园.m4A","images":"img/a5.jpg"},
{"id":"151","name":"151.从冬眠中醒来","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/151.从冬眠中醒来.m4A","images":"img/a1.jpg"},
{"id":"152","name":"152.当春天来到","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/152.当春天来到.m4A","images":"img/a2.jpg"},
{"id":"153","name":"153.家乡","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/153.家乡.m4A","images":"img/a3.jpg"},
{"id":"154","name":"154.早春","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/154.早春.m4A","images":"img/a4.jpg"},
{"id":"155","name":"155.冬日清晨","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/155.冬日清晨.m4A","images":"img/a5.jpg"},
{"id":"156","name":"156.妈妈的厨房","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/156.妈妈的厨房.m4A","images":"img/a1.jpg"},
{"id":"157","name":"157.初夏","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/157.初夏.m4A","images":"img/a2.jpg"},
{"id":"158","name":"158.破晓","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/158.破晓.m4A","images":"img/a3.jpg"},
{"id":"159","name":"159.我们一家人","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/159.我们一家人.m4A","images":"img/a4.jpg"},
{"id":"160","name":"160.流星花园","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/160.流星花园.m4A","images":"img/a5.jpg"},
{"id":"161","name":"161.雪之华","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/161.雪之华.m4A","images":"img/a1.jpg"},
{"id":"162","name":"162.暖暖的东风","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/162.暖暖的东风.m4A","images":"img/a2.jpg"},
{"id":"163","name":"163.平安夜","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/163.平安夜.m4A","images":"img/a3.jpg"},
{"id":"164","name":"164.星语心愿","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/164.星语心愿.m4A","images":"img/a4.jpg"},
{"id":"165","name":"165.雪落下的声音","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/165.雪落下的声音.m4A","images":"img/a5.jpg"},
{"id":"166","name":"166.初雪","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/166.初雪.m4A","images":"img/a1.jpg"},
{"id":"167","name":"167.梦见你","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/167.梦见你.m4A","images":"img/a2.jpg"},
{"id":"168","name":"168.轻轻的脚步声","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/168.轻轻的脚步声.m4A","images":"img/a3.jpg"},
{"id":"169","name":"169.下班","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/169.下班.m4A","images":"img/a4.jpg"},
{"id":"170","name":"170.冬至","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/170.冬至.m4A","images":"img/a5.jpg"},
{"id":"171","name":"171.我爱我家","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/171.我爱我家.m4A","images":"img/a1.jpg"},
{"id":"172","name":"172.蓝色海岸线","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/172.蓝色海岸线.m4A","images":"img/a2.jpg"},
{"id":"173","name":"173.淋雨一直走","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/173.淋雨一直走.m4A","images":"img/a3.jpg"},
{"id":"174","name":"174.下个路口","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/174.下个路口.m4A","images":"img/a4.jpg"},
{"id":"175","name":"175.山里农家","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/175.山里农家.m4A","images":"img/a5.jpg"},
{"id":"176","name":"176.梦游记","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/176.梦游记.m4A","images":"img/a1.jpg"},
{"id":"177","name":"177.旅行的诗","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/177.旅行的诗.m4A","images":"img/a2.jpg"},
{"id":"178","name":"178.渔歌","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/178.渔歌.m4A","images":"img/a3.jpg"},
{"id":"179","name":"179.浪漫篝火","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/179.浪漫篝火.m4A","images":"img/a4.jpg"},
{"id":"180","name":"180.壁炉","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/180.壁炉.m4A","images":"img/a5.jpg"},
{"id":"181","name":"181.凉风有信","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/181.凉风有信.m4A","images":"img/a1.jpg"},
{"id":"182","name":"182.等你回来","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/182.等你回来.m4A","images":"img/a2.jpg"},
{"id":"183","name":"183.此刻的温柔","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/183.此刻的温柔.m4A","images":"img/a3.jpg"},
{"id":"184","name":"184.从前慢","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/184.从前慢.m4A","images":"img/a4.jpg"},
{"id":"185","name":"185.长路慢行","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/185.长路慢行.m4A","images":"img/a5.jpg"},
{"id":"186","name":"186.冬眠","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/186.冬眠.m4A","images":"img/a1.jpg"},
{"id":"187","name":"187.再遇","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/187.再遇.m4A","images":"img/a2.jpg"},
{"id":"188","name":"188.种星星的人","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/188.种星星的人.m4A","images":"img/a3.jpg"},
{"id":"189","name":"189.好想你","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/189.好想你.m4A","images":"img/a4.jpg"},
{"id":"190","name":"190.流水潺潺","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/190.流水潺潺.m4A","images":"img/a5.jpg"},
{"id":"191","name":"191.心语","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/191.心语.m4A","images":"img/a1.jpg"},
{"id":"192","name":"192.海底总动员","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/192.海底总动员.m4A","images":"img/a2.jpg"},
{"id":"193","name":"193.寻找自我之旅","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/193.寻找自我之旅.m4A","images":"img/a3.jpg"},
{"id":"194","name":"194.老电影","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/194.老电影.m4A","images":"img/a4.jpg"},
{"id":"195","name":"195.雨城","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/195.雨城.m4A","images":"img/a5.jpg"},
{"id":"196","name":"196.在水一方","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/196.在水一方.m4A","images":"img/a1.jpg"},
{"id":"197","name":"197.仲夏夜之梦","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/197.仲夏夜之梦.m4A","images":"img/a2.jpg"},
{"id":"198","name":"198.直到春天过去","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/198.直到春天过去.m4A","images":"img/a3.jpg"},
{"id":"199","name":"199.等你","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/199.等你.m4A","images":"img/a4.jpg"},
{"id":"200","name":"200.阵雨","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/200.阵雨.m4A","images":"img/a5.jpg"},
{"id":"201","name":"201.闲逛","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/201.闲逛.m4A","images":"img/a1.jpg"},
{"id":"202","name":"202.小晴","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/202.小晴.m4A","images":"img/a2.jpg"},
{"id":"203","name":"203.躲雨","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/203.躲雨.m4A","images":"img/a3.jpg"},
{"id":"204","name":"204.兜风","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/204.兜风.m4A","images":"img/a4.jpg"},
{"id":"205","name":"205.雨季","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/205.雨季.m4A","images":"img/a5.jpg"},
{"id":"206","name":"206.下雨天","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/206.下雨天.m4A","images":"img/a1.jpg"},
{"id":"207","name":"207.为你撑伞","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/207.为你撑伞.m4A","images":"img/a2.jpg"},
{"id":"208","name":"208.我们的时光","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/208.我们的时光.m4A","images":"img/a3.jpg"},
{"id":"209","name":"209.早安","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/209.早安.m4A","images":"img/a4.jpg"},
{"id":"210","name":"210.在花园里劳作","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/210.在花园里劳作.m4A","images":"img/a5.jpg"},
{"id":"211","name":"211.雨中蛙声 - 雨下大了蛙声也渐渐变小","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/211.雨中蛙声 - 雨下大了蛙声也渐渐变小.m4A","images":"img/a1.jpg"},
{"id":"212","name":"212.雨后-树下的雨滴稀稀疏疏","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/212.雨后-树下的雨滴稀稀疏疏.m4A","images":"img/a2.jpg"},
{"id":"213","name":"213.下雨天 - 车里无转向灯 带耳机效果超赞","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/213.下雨天 - 车里无转向灯 带耳机效果超赞.m4A","images":"img/a3.jpg"},
{"id":"214","name":"214.下雨天 - 车里打着转向灯 带耳机效果超赞","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/214.下雨天 - 车里打着转向灯 带耳机效果超赞.m4A","images":"img/a4.jpg"},
{"id":"215","name":"215.棕叶下的雨 关注声谷 众公号了解自然录音","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/215.棕叶下的雨 关注声谷 众公号了解自然录音.m4A","images":"img/a5.jpg"},
{"id":"216","name":"216.深夜的雨声 大自然声音","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/216.深夜的雨声 大自然声音.m4A","images":"img/a1.jpg"},
{"id":"217","name":"217.深夜林中细雨 大自然的声音 纯音乐","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/217.深夜林中细雨 大自然的声音 纯音乐.m4A","images":"img/a2.jpg"},
{"id":"218","name":"218.雨声行人鸟儿飞机 舒适自然 大自然的声音 纯音乐","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/218.雨声行人鸟儿飞机 舒适自然 大自然的声音 纯音乐.m4A","images":"img/a3.jpg"},
{"id":"219","name":"219.亭子下的雨声 大自然的声音 纯音乐［声谷］","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/219.亭子下的雨声 大自然的声音 纯音乐［声谷］.m4A","images":"img/a4.jpg"},
{"id":"220","name":"220.台风来时 大自然的声音 纯音乐［声谷］","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/220.台风来时 大自然的声音 纯音乐［声谷］.m4A","images":"img/a5.jpg"},
{"id":"221","name":"221.云栖竹林听雨 午后禅定 大自然的声音 纯音乐 [声谷]","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/221.云栖竹林听雨 午后禅定 大自然的声音 纯音乐 [声谷].m4A","images":"img/a1.jpg"},
{"id":"222","name":"222.清晨的雨声 大自然的声音 纯音乐［声谷］","singer":"","duration":"","src":"http://music.asia.ga/OnedriveTJ/音乐视听/自然之声/222.清晨的雨声 大自然的声音 纯音乐［声谷］.m4A","images":"img/a2.jpg"},

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

