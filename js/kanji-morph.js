// didn't want to convert project code from paperscript to js, so doing it the dirty way for now.
// see https://stackoverflow.com/questions/33562242/paperjs-access-classes-in-multiple-paperscript-files
const KanjiSvg = window.KanjiSvg; // using this for a bit of quick and dirty interactivity.
const supportedKanji = "123456789!,.:;?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz⺌⺍⺕⺗⺡⺤⺦⺨⻃⻌⻏⻖、。々〆ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゛゜ゝゞァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾ㐬㓁㔾一丁七万丈三上下不与丐丑且丕世丗丘丙丞両並丨个中丱串丶丸丹主丼丿乂乃久之乍乎乏乕乖乗乘乙九乞也乢乱乳乾亀亂亅了予争亊事二于云互五井亘亙些亜亞亟亠亡亢交亥亦亨享京亭亮亰亳亶人亻什仁仂仄仆仇今介仍从仏仔仕他仗付仙仝仞仟代令以仭仮仰仲件价任企伉伊伍伎伏伐休会伜伝伯估伴伶伸伺似伽佃但佇位低住佐佑体何佗余佚佛作佝佞佩佯佰佳併佶佻佼使侃來侈例侍侏侑侖侘供依侠価侫侭侮侯侵侶便係促俄俊俎俐俑俔俗俘俚俛保俟信俣俤俥修俯俱俳俵俶俸俺俾倅倆倉個倍倏們倒倔倖候倚借倡倣値倥倦倨倩倪倫倬倭倶倹偃假偈偉偏偐偕偖做停健偬偲側偵偶偸偽傀傅傍傑傘備傚催傭傲傳傴債傷傾僂僅僉僊働像僑僕僖僚僞僣僥僧僭僮僵價僻儀儁儂億儉儒儔儕儖儘儚償儡優儲儷儺儻儼儿兀允元兄充兆兇先光克兌免兎児兒兔党兜兢入全兩兪八公六兮共关兵其具典兼冀冂内円冉冊册再冏冐冑冒冓冕冖冗写冠冢冤冥冦冨冩冪冫冬冰冱冲决冴况冶冷冽凄凅准凉凋凌凍凖凛凜凝几凡処凧凩凪凭凰凱凵凶凸凹出函凾刀刂刃刄分切刈刊刋刎刑刔列初判別刧利刪刮到刳制刷券刹刺刻剃剄則削剋剌前剏剔剖剛剝剞剣剤剥剩剪副剰剱割剳剴創剽剿劃劇劈劉劍劑劒劔力功加劣助努劫劬劭励労劵効劼劾勁勃勅勇勉勍勒動勗勘務勝勞募勠勢勣勤勦勧勲勳勵勸勹勺勾勿匀匁匂包匆匈匍匏匐匕化北匙匚匝匠匡匣匪匯匱匳匸匹区医匿區十千卅卆升午卉半卍卑卒卓協南単博卜卞占卦卩卮卯印危即却卵卷卸卻卿厂厄厖厘厚原厠厥厦厨厩厭厮厰厳厶去参參又叉及友双反収叔取受叙叛叟叡叢口古句叨叩只叫召叭叮可台叱史右叶号司叺吁吃各合吉吊吋同名后吏吐向君吝吞吟吠否吩含听吭吮吶吸吹吻吼吽吾呀呂呆呈呉告呎呑呟周呪呰呱味呵呶呷呻呼命咀咄咆咋和咎咏咐咒咢咤咥咨咫咬咯咲咳咸咼咽咾哀品哂哄哇哈哉哘員哢哥哦哨哩哭哮哲哺哽唄唆唇唏唐唔唖售唯唱唳唸唹唾啀啄啅商啌問啓啖啗啜啝啣啻啼啾喀喃善喇喉喊喋喘喙喚喜喝喞喟喧喨喩喪喫喬單喰営喻嗄嗅嗇嗔嗚嗜嗟嗣嗤嗷嗹嗽嗾嘆嘉嘔嘖嘗嘘嘛嘩嘯嘱嘲嘴嘶嘸噂噌噎噐噓噛噤器噪噫噬噴噸噺嚀嚆嚇嚊嚏嚔嚠嚢嚥嚮嚴嚶嚼囀囁囂囃囈囎囑囓囗囘囚四回因団囮困囲図囹固国囿圀圃圄圈圉國圍圏園圓圖團圜土圣圦圧在圭地圷圸圻址坂均坊坎坏坐坑坡坤坦坩坪坿垂垈垉型垓垠垢垣垤垪垰垳埀埃埆埋城埒埓埔埖埜域埠埣埴埶執培基埼堀堂堅堆堊堋堕堙堝堡堤堪堯堰報場堵堺堽塀塁塊塋塑塒塔塗塘塙塚塞塡塢塩填塰塲塵塹塾境墅墓増墜墟墨墫墮墳墸墹墺墻墾壁壅壇壊壌壑壓壕壗壘壙壜壞壟壤壥士壬壮壯声壱売壷壹壺壻壼壽夂変夊复夏夐夕外夘夙多夛夜夢夥大天太夫夬夭央失夲夷夸夾奄奇奈奉奎奏奐契奔奕套奘奚奠奢奥奧奨奩奪奬奮女奴奸好妁如妃妄妊妍妓妖妙妛妝妣妥妨妬妲妹妻妾姆姉始姐姑姓委姙姚姜姥姦姨姪姫姶姻姿威娃娉娑娘娚娜娟娠娥娩娯娵娶娼婀婁婆婉婚婢婦婪婬婿媒媚媛媼媽媾嫁嫂嫉嫋嫌嫐嫖嫗嫡嫣嫦嫩嫺嫻嬉嬋嬌嬖嬢嬪嬬嬰嬲嬶嬾孀孃孅子孑孔孕字存孚孛孜孝孟季孤孥学孩孫孰孱孳孵學孺宀它宅宇守安宋完宍宏宕宗官宙定宛宜宝実客宣室宥宦宮宰害宴宵家宸容宿寂寃寄寅密寇寉富寐寒寓寔寛寝寞察寡寢寤寥實寧寨審寫寮寰寳寵寶寸寺対寿封専尃射尅将將專尉尊尋對導小少尓尖尚尠尢尤尨尭就尸尹尺尻尼尽尾尿局屁居屆屈届屋屍屎屏屐屑屓展属屠屡層履屬屮屯山屶屹岌岐岑岔岡岨岩岫岬岱岳岶岷岸岻岼岾峅峇峙峠峡峨峩峪峭峯峰島峺峻峽崇崋崎崑崔崕崖崗崘崙崚崛崟崢崩嵋嵌嵎嵐嵒嵜嵩嵬嵯嵳嵶嶂嶄嶇嶋嶌嶐嶝嶢嶬嶮嶷嶺嶼嶽巉巌巍巒巓巖巛川州巡巣工左巧巨巫差己已巳巴巵巷巻巽巾市布帆帋希帑帖帙帚帛帝帥師席帯帰帳帶帷常帽幀幃幄幅幇幌幎幔幕幗幟幡幢幣幤干平年幵并幸幹幺幻幼幽幾广庁広庄庇床序底庖店庚府庠度座庫庭庵庶康庸廁廂廃廈廉廊廏廐廓廖廚廛廝廟廠廡廢廣廨廩廬廰廱廳廴延廷廸建廻廼廾廿弁弃弄弉弊弋弌弍式弐弑弓弔引弖弗弘弛弟弥弦弧弩弭弯弱張強弸弼弾彁彈彊彌彎彐彑当彖彗彙彜彝彡形彦彩彪彫彬彭彰影彳彷役彼彿往征徂徃径待徇很徊律後徐徑徒従得徘徙從徠御徨復循徭微徳徴徹徼徽心忄必忌忍忖志忘忙応忝忠忤快忰忱念忸忻忽忿怎怏怐怒怕怖怙怛怜思怠怡急怦性怨怩怪怫怯怱怺恁恂恃恆恊恋恍恐恒恕恙恚恟恠恢恣恤恥恨恩恪恫恬恭息恰恵恷悁悃悄悉悋悌悍悒悔悖悗悚悛悟悠患悦悧悩悪悲悳悴悵悶悸悼悽情惆惇惑惓惘惚惜惟惠惡惣惧惨惰惱想惴惶惷惹惺惻愀愁愃愆愈愉愍愎意愕愚愛感愡愧愨愬愴愼愽愾愿慂慄慇慈慊態慌慍慎慓慕慘慙慚慝慟慢慣慥慧慨慫慮慯慰慱慳慴慵慶慷慾憂憇憊憎憐憑憔憖憙憚憤憧憩憫憬憮憲憶憺憾懃懆懇懈應懊懋懌懍懐懣懦懲懴懶懷懸懺懼懽懾懿戀戈戉戊戌戍戎成我戒戔或戚戛戝戞戟戠戡戦截戮戯戰戲戳戴戸戻房所扁扇扈扉手扌才扎打払托扛扞扠扣扨扮扱扶批扼找承技抂抃抄抉把抑抒抓抔投抖抗折抛抜択披抬抱抵抹抻押抽拂担拆拇拈拉拊拌拍拏拐拑拒拓拔拗拘拙招拜拝拠拡括拭拮拯拱拳拵拶拷拾拿持挂指挈按挌挑挙挟挧挨挫振挺挽挾挿捉捌捍捏捐捕捗捜捧捨捩捫据捲捶捷捺捻掀掃授掉掌掎掏排掖掘掛掟掠採探掣接控推掩措掫掬掲掴掵掻掾揀揃揄揆揉描提插揖揚換握揣揩揮援揶揺搆損搏搓搖搗搜搦搨搬搭搴搶携搾摂摎摑摘摧摩摯摶摸摺撃撈撒撓撕撚撞撤撥撩撫播撮撰撲撹撻撼擁擂擅擇操擒擔擘據擠擡擢擣擦擧擬擯擱擲擴擶擺擽擾攀攅攘攜攝攣攤攪攫攬支攴攵收攷攸改攻放政故效敍敏救敕敖敗敘教敝敞敢散敦敬数敲整敵敷數斂斃文斈斉斌斎斐斑斗料斛斜斟斡斤斥斧斫斬断斯新斷方於施斿旁旃旄旅旆旋旌族旒旗旙旛无旡既日旦旧旨早旬旭旱旺旻昂昃昆昇昊昌明昏易昔昜星映春昧昨昭是昴昵昶昼昿晁時晃晄晉晋晏晒晝晞晟晢晤晦晧晨晩普景晰晴晶智暁暃暄暇暈暉暎暑暖暗暘暝暢暦暫暮暴暸暹暼暾曁曄曇曉曖曙曚曜曝曠曦曩曰曲曳更曵曷書曹曼曽曾替最會月有朋服朏朔朕朖朗望朝朞期朦朧木未末本札朮朱朴朶朷朸机朽朿杁杆杉李杏材村杓杖杙杜杞束杠条杢杣杤来杪杭杯杰東杲杳杵杷杼松板枅枇枉枋枌析枕林枚果枝枠枡枢枦枩枯枳枴架枷枸枹柁柄柆柊柎柏某柑染柔柘柚柝柞柢柤柧柩柬柮柯柱柳柴柵査柾柿栂栃栄栓栖栗栞校栢栩株栫栲栴核根格栽桀桁桂桃框案桍桎桐桑桓桔桙桜桝桟档桧桴桶桷桼桾桿梁梃梅梍梏梓梔梗梛條梟梠梢梦梧梨梭梯械梱梳梵梶梹梺梼棄棆棉棊棋棍棒棔棕棗棘棚棟棠棡棣棧森棯棲棹棺椀椁椄椅椈椋椌植椎椏椒椙椚椛検椡椢椣椥椦椨椪椰椴椶椹椽椿楊楓楔楕楙楚楜楝楞楠楡楢楪楫業楮楯楳楴極楷楸楹楼楽楾榁概榊榎榑榔榕榛榜榠榧榮榱榲榴榻榾榿槁槃槇槊構槌槍槎槐槓様槙槝槞槧槨槫槭槲槹槻槽槿樂樅樊樋樌樒樓樔樗標樛樞樟模樢樣権横樫樮樵樶樸樹樺樽橄橇橈橋橘橙機橡橢橦橲橸橿檀檄檍檎檐檗檜檠檢檣檪檬檮檳檸檻櫁櫂櫃櫑櫓櫚櫛櫞櫟櫨櫪櫺櫻欄欅權欒欖欝欟欠次欣欧欲欷欸欹欺欽款歃歇歉歌歎歐歓歔歙歛歟歡止正此武歩歪歯歳歴歸歹死歿殀殃殄殆殉殊残殍殕殖殘殞殤殪殫殯殱殲殳殴段殷殺殻殼殿毀毅毆毋母毎毒毓比毘毛毟毫毬毯毳氈氏民氓气気氛氣氤水氵氷永氺氾汀汁求汎汐汕汗汚汝汞江池汢汨汪汰汲汳決汽汾沁沂沃沈沌沍沐沒沓沖沙沚沛没沢沫沮沱河沸油沺治沼沽沾沿況泄泅泉泊泌泓法泗泙泛泝泡波泣泥注泪泯泰泱泳洋洌洒洗洙洛洞洟津洩洪洫洲洳洵洶洸活洽派流浄浅浙浚浜浣浤浦浩浪浬浮浴海浸浹涅消涌涎涓涕涙涛涜涯液涵涸涼淀淅淆淇淋淌淑淒淕淘淙淞淡淤淦淨淪淫淬淮深淳淵混淹淺添清渇済渉渊渋渓渕渙渚減渝渟渠渡渣渤渥渦温渫測渭渮港游渺渾湃湊湍湎湖湘湛湟湧湫湮湯湲湶湾湿満溂溌溏源準溘溜溝溟溢溥溪溯溲溶溷溺溽滂滄滅滉滋滌滑滓滔滕滝滞滬滯滲滴滷滸滾滿漁漂漆漉漏漑漓演漕漠漢漣漫漬漱漲漸漾漿潁潅潔潘潛潜潟潤潦潭潮潯潰潴潸潺潼澀澁澂澄澆澎澑澗澡澣澤澪澱澳澹激濁濂濃濆濔濕濘濛濟濠濡濤濫濬濮濯濱濳濶濺濾瀁瀉瀋瀏瀑瀕瀘瀚瀛瀝瀞瀟瀦瀧瀬瀰瀲瀾灌灑灘灣火灬灯灰灸灼災炉炊炎炒炙炬炭炮炯炳炸点為烈烋烏烙烝烟烱烹烽焉焔焙焚焜無焦焰然焼煉煌煎煕煖煙煢煤煥煦照煩煬煮煽熄熈熊熏熔熕熙熟熨熬熱熹熾燃燈燉燎燐燒燔燕燗營燠燥燦燧燬燭燮燵燹燻燼燿爆爍爐爛爨爪爬爭爰爲爵父爺爻爼爽爾爿牀牆片版牋牌牒牘牙牛牝牟牡牢牧物牲牴特牽牾犀犁犂犇犒犖犠犢犧犬犭犯犲状犹狂狃狄狆狎狐狒狗狙狛狠狡狢狩独狭狷狸狹狼狽猊猖猗猛猜猝猟猥猩猪猫献猯猴猶猷猾猿獄獅獎獏獗獣獨獪獰獲獵獸獺獻玄率玉王玖玩玲玳玻珀珂珈珊珍珎珞珠珥珪班珮珱珸現球琅理琉琢琥琲琳琴琵琶琺琿瑁瑕瑙瑚瑛瑜瑞瑟瑠瑣瑤瑩瑪瑯瑰瑳瑶瑾璃璋璞璢璧環璽瓊瓏瓔瓜瓠瓢瓣瓦瓧瓩瓮瓰瓱瓲瓶瓷瓸甃甄甅甌甍甎甑甓甕甘甚甜甞生産甥甦用甫甬田由甲申男甸町画甼畄畆畉畊畋界畍畏畐畑畔留畚畛畜畝畠畢畤略畦畧畩番畫畭異畳畴當畷畸畿疂疆疇疉疊疋疎疏疑疒疔疚疝疣疥疫疱疲疳疵疸疹疼疽疾痂痃病症痊痍痒痔痕痘痙痛痞痢痣痩痰痲痳痴痺痼痾痿瘁瘉瘋瘍瘟瘠瘡瘢瘤瘧瘰瘴瘻療癆癇癈癌癒癖癘癜癡癢癧癨癩癪癬癰癲癶癸発登發白百皀皃的皆皇皈皋皎皐皓皖皙皚皮皰皴皷皸皹皺皿盂盃盆盈益盍盒盖盗盛盜盞盟盡監盤盥盧盪目盲直相盻盾省眄眇眈眉看県眛眞真眠眤眥眦眩眷眸眺眼着睇睚睛睡督睥睦睨睫睹睾睿瞋瞎瞑瞞瞠瞥瞬瞭瞰瞳瞶瞹瞻瞼瞽瞿矇矍矗矚矛矜矢矣知矧矩短矮矯石矼砂砌砒研砕砠砥砦砧砲破砺砿硅硝硫硬硯硲硴硼碁碆碇碌碍碎碑碓碕碗碚碣碧碩碪碯碵確碼碾磁磅磆磊磋磐磑磔磚磧磨磬磯磴磽礁礇礎礑礒礙礦礪礫礬示礻礼社祀祁祇祈祉祐祓祕祖祗祚祝神祟祠祢祥票祭祷祺祿禀禁禄禅禊禍禎福禝禦禧禪禮禰禱禳禸禹禺离禽禾禿秀私秉秋科秒秕秘租秡秣秤秦秧秩秬称移稀稈程稍税稔稗稘稙稚稜稟稠種稱稲稷稻稼稽稾稿穀穂穃穆穉積穎穏穐穗穡穢穣穩穫穰穴究穹空穽穿突窃窄窈窒窓窕窖窗窘窟窩窪窮窯窰窶窺窿竃竄竅竇竈竊立竍竏竒竓竕站竚竜竝竟章竡竢竣童竦竪竭端竰競竸竹竺竿笂笄笆笈笊笋笏笑笘笙笛笞笠笥符笨第笳笵笶笹筅筆筈等筋筌筍筏筐筑筒答策筝筥筧筬筮筰筱筴筵筺箆箇箋箍箏箒箔箕算箘箙箚箜箝箟管箪箭箱箴箸節篁範篆篇築篋篌篏篝篠篤篥篦篩篭篳篶篷簀簇簍簑簒簓簔簗簞簟簡簣簧簪簫簷簸簽簾簿籀籃籌籍籏籐籔籖籘籟籠籤籥籬米籵籾粁粂粃粉粋粍粐粒粕粗粘粛粟粡粢粤粥粧粨粫粭粮粱粲粳粹粽精糀糂糅糊糎糒糖糘糜糞糟糠糢糧糯糲糴糶糸糺系糾紀紂約紅紆紊紋納紐純紕紗紘紙級紛紜素紡索紫紬紮累細紲紳紵紹紺紿終絃組絅絆絋経絎絏結絖絛絞絡絢絣給絨絮統絲絳絵絶絹絽綉綏經継続綛綜綟綢綣綫綬維綮綯綰綱網綴綵綸綺綻綽綾綿緇緊緋総緑緒緕緘線緜緝緞締緡緤編緩緬緯緲練緻縁縄縅縉縊縋縒縛縞縟縡縢縣縦縫縮縱縲縵縷縹縺縻總績繁繃繆繊繋繍織繕繖繙繚繝繞繡繦繧繩繪繫繭繰繹繻繼繽繿纂纃纈纉續纎纏纐纒纓纔纖纛纜缶缸缺罅罌罍罎罐网罒罔罕罘罟罠罧罨罩罪罫置罰署罵罷罸罹羂羃羅羆羇羈羊羌美羔羚羝羞羣群羨義羮羯羲羶羸羹羽翁翅翆翊翌習翔翕翠翡翦翩翫翰翳翹翻翼耀老耂考耄者耆耋而耐耒耕耗耘耙耜耡耨耳耶耻耽耿聆聊聒聖聘聚聞聟聡聢聨聯聰聲聳聴聶職聹聽聾聿肄肅肆肇肉肋肌肓肖肘肚肛肝股肢肥肩肪肬肭肯肱育肴肺胃胄胆背胎胖胙胚胛胝胞胡胤胥胯胱胴胸胼能脂脅脆脇脈脉脊脚脛脣脩脯脱脳脹脾腆腋腎腐腑腓腔腕腟腥腦腫腮腰腱腴腸腹腺腿膀膂膃膈膊膏膓膕膚膜膝膠膣膤膨膩膰膳膵膸膺膽膾膿臀臂臆臈臉臍臑臓臘臙臚臟臠臣臥臧臨自臭至致臺臻臼臾舁舂舅與興舉舊舌舍舎舐舒舖舗舘舛舜舞舟舩航舫般舮舳舵舶舷舸船艀艇艘艙艚艝艟艢艤艦艨艪艫艮良艱色艶艷艸艹艾芋芍芒芙芝芟芥芦芫芬芭芯花芳芸芹芻芽苅苑苒苓苔苗苙苛苜苞苟苡苣若苦苧苫英苳苴苹苺苻茂范茄茅茆茉茎茖茗茘茜茣茨茫茯茱茲茴茵茶茸茹荀荅草荊荏荐荒荘荳荵荷荻荼莅莇莉莊莎莓莖莚莞莟莠莢莨莪莫莱莵莽菁菅菊菌菎菓菖菘菜菟菠菩菫華菰菱菲菴菷菻菽萃萄萇萊萋萌萍萎萓萠萢萩萪萬萱萵萸萼落葆葉葎著葛葡葢董葦葩葫葬葭葮葯葱葵葷葹葺蒂蒄蒋蒐蒔蒙蒜蒟蒡蒭蒲蒸蒹蒻蒼蒿蓁蓄蓆蓉蓊蓋蓍蓐蓑蓖蓙蓚蓬蓮蓴蓼蓿蔀蔆蔑蔓蔔蔕蔗蔘蔚蔟蔡蔣蔦蔬蔭蔵蔽蕀蕁蕃蕈蕉蕊蕋蕎蕕蕗蕘蕚蕣蕨蕩蕪蕭蕷蕾薀薄薇薈薊薐薑薔薗薙薛薜薤薦薨薩薪薫薬薮薯薹薺藁藉藍藏藐藕藜藝藤藥藩藪藷藹藺藻藾蘂蘆蘇蘊蘋蘓蘖蘗蘚蘢蘭蘯蘰蘿虍虎虐虔處虚虜虞號虧虫虱虹虻蚊蚋蚌蚓蚕蚣蚤蚩蚪蚫蚯蚰蚶蛄蛆蛇蛉蛋蛍蛎蛔蛙蛛蛞蛟蛤蛩蛬蛭蛮蛯蛸蛹蛻蛾蜀蜂蜃蜆蜈蜉蜊蜍蜑蜒蜘蜚蜜蜥蜩蜴蜷蜻蜿蝉蝋蝌蝎蝓蝕蝗蝙蝟蝠蝣蝦蝨蝪蝮蝴蝶蝸蝿螂融螟螢螫螯螳螺螻螽蟀蟄蟆蟇蟋蟐蟒蟠蟬蟯蟲蟶蟷蟹蟻蟾蠅蠍蠎蠏蠑蠕蠖蠡蠢蠣蠧蠱蠶蠹蠻血衂衄衆行衍衒術街衙衛衝衞衡衢衣衤表衫衰衲衵衷衽衾衿袁袂袈袋袍袒袖袗袙袞袢袤被袮袰袱袴袵袷袿裁裂裃裄装裏裔裕裘裙補裝裟裡裨裲裳裴裸裹裼製裾褂褄複褊褌褐褒褓褝褞褥褪褫褶褸褻襁襃襄襌襍襖襞襟襠襤襦襪襭襯襲襴襷襾西要覃覆覇覈覊見規覓視覗覘覚覡覦覧覩親覬覯覲観覺覽覿觀角觚觜觝解触觧觴觸言訂訃計訊訌討訐訓訖託記訛訝訟訣訥訪設許訳訴訶診註証詁詆詈詐詑詒詔評詛詞詠詢詣試詩詫詬詭詮詰話該詳詼誂誄誅誇誉誌認誑誓誕誘誚語誠誡誣誤誥誦誨説読誰課誹誼調諂諄談請諌諍諏諒論諚諛諜諞諠諡諢諤諦諧諫諭諮諱諳諷諸諺諾謀謁謂謄謇謌謎謐謔謖謗謙謚講謝謠謡謦謨謫謬謳謹謾譁證譌譎譏譖識譚譛譜譟警譫譬譯議譱譲譴護譽讀讃變讌讎讐讒讓讖讙讚谷谺谿豁豆豈豊豌豎豐豕豚象豢豪豫豬豸豹豺豼貂貅貉貊貌貍貎貔貘貝貞負財貢貧貨販貪貫責貭貮貯貰貲貳貴貶買貸費貼貽貿賀賁賂賃賄資賈賊賍賎賑賓賚賛賜賞賠賢賣賤賦質賭賺賻購賽贄贅贇贈贊贋贍贏贐贓贔贖赤赦赧赫赭走赱赳赴起趁超越趙趣趨足趺趾跂跋跌跏跖跚跛距跟跡跣跨跪跫路跳践跼跿踈踉踊踏踐踝踞踟踪踰踴踵蹂蹄蹇蹈蹉蹊蹌蹐蹕蹙蹟蹠蹣蹤蹲蹴蹶蹼躁躄躅躇躊躋躍躑躓躔躙躡躪身躬躯躰躱躾軅軆軈車軋軌軍軒軛軟転軣軫軸軻軼軽軾較輅載輊輌輒輓輔輕輙輛輜輝輟輦輩輪輯輳輸輹輻輾輿轂轄轅轆轉轌轍轎轗轜轟轡轢轣轤辛辜辞辟辣辧辨辭辮辯辰辱農辶辷辺辻込辿迂迄迅迎近返迚迢迥迦迩迪迫迭迯述迴迷迸迹迺追退送逃逅逆逋逍逎透逐逑逓途逕逖逗這通逝逞速造逡逢連逧逮週進逵逶逸逹逼逾遁遂遅遇遉遊運遍過遏遐遑遒道達違遖遘遙遜遞遠遡遣遥遨適遭遮遯遲遵遶遷選遺遼遽避邀邁邂邃還邇邉邊邏邑那邦邨邪邯邱邵邸郁郊郎郛郡郢郤部郭郵郷都鄂鄒鄙鄭鄰鄲酉酊酋酌配酎酒酔酖酘酢酣酥酩酪酬酲酳酵酷酸醂醇醉醋醍醐醒醗醜醢醤醪醫醬醯醴醵醸醺釀釁釆采釈釉釋里重野量釐金釖釘釛釜針釟釡釣釦釧釵釶釼釿鈍鈎鈑鈔鈕鈞鈩鈬鈴鈷鈿鉄鉅鉈鉉鉋鉐鉗鉚鉛鉞鉢鉤鉦鉱鉾銀銃銅銑銓銕銖銘銚銛銜銭銷銹鋏鋒鋤鋩鋪鋭鋲鋳鋸鋺鋼錆錏錐錘錙錚錠錢錣錦錨錫錬錮錯録錵錺錻鍄鍋鍍鍔鍖鍛鍜鍠鍬鍮鍵鍼鍾鎌鎔鎖鎗鎚鎧鎬鎭鎮鎰鎹鏃鏈鏐鏑鏖鏗鏘鏝鏡鏤鏥鏨鐃鐇鐐鐓鐔鐘鐙鐚鐡鐫鐵鐶鐸鐺鑁鑄鑑鑒鑓鑚鑛鑞鑠鑢鑪鑰鑵鑷鑼鑽鑾鑿钁長門閂閃閇閉閊開閏閑間閔閖閘閙閠関閣閤閥閧閨閭閲閹閻閼閾闃闇闊闌闍闔闕闖闘關闡闢闥阜阝阡阨阪阮阯防阻阿陀陂附陋陌降陏限陛陜陝陞陟院陣除陥陦陪陬陰陲陳陵陶陷陸険陽隅隆隈隊隋隍階随隔隕隗隘隙際障隠隣隧隨險隰隱隲隴隶隷隸隹隻隼雀雁雄雅集雇雉雋雌雍雎雑雕雖雙雛雜離難雨雩雪雫雰雲零雷雹電需霄霆震霈霊霍霎霏霑霓霖霙霜霞霤霧霪霰露霸霹霽霾靂靄靆靈靉青靖静靜非靠靡面靤靦靨革靫靭靱靴靹靺靼鞁鞄鞅鞆鞋鞍鞏鞐鞘鞜鞠鞣鞦鞨鞫鞭鞳鞴韃韆韈韋韓韜韭韮韲音韵韶韻響頁頂頃項順須頌頏預頑頒頓頗領頚頡頤頬頭頰頴頷頸頻頼頽顆顋題額顎顏顔顕願顚顛類顧顫顯顰顱顳顴風颪颯颱颶飃飄飆飛飜食飠飢飩飫飭飮飯飲飴飼飽飾餃餅餉養餌餐餒餓餔餘餝餞餠餡餤館餬餮餽餾饂饅饉饋饌饐饑饒饕饗首馗馘香馥馨馬馭馮馳馴馼駁駄駅駆駈駐駑駒駕駘駛駝駟駢駭駮駱駲駸駻駿騁騅騎騏騒験騙騨騫騰騷騾驀驂驃驅驍驕驗驚驛驟驢驤驥驩驪驫骨骭骰骸骼髀髄髏髑髓體高髞髟髢髣髦髪髫髭髮髯髱髴髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬱鬲鬻鬼魁魂魃魄魅魍魎魏魑魔魘魚魯魴鮃鮎鮑鮒鮓鮖鮗鮟鮠鮨鮪鮫鮭鮮鮴鮹鯀鯆鯉鯊鯏鯑鯒鯔鯖鯛鯡鯢鯣鯤鯨鯰鯱鯲鯵鰄鰆鰈鰉鰊鰌鰍鰐鰒鰓鰔鰕鰛鰡鰤鰥鰭鰮鰯鰰鰲鰹鰺鰻鰾鱆鱇鱈鱒鱗鱚鱠鱧鱶鱸鳥鳧鳩鳫鳬鳰鳳鳴鳶鴃鴆鴇鴈鴉鴎鴒鴕鴛鴟鴣鴦鴨鴪鴫鴬鴻鴾鴿鵁鵄鵆鵈鵐鵑鵙鵜鵝鵞鵠鵡鵤鵬鵯鵲鵺鶇鶉鶏鶚鶤鶩鶫鶯鶲鶴鶸鶺鶻鷁鷂鷄鷆鷏鷓鷗鷙鷦鷭鷯鷲鷸鷹鷺鷽鸚鸛鸞鹵鹸鹹鹽鹿麁麈麋麌麑麒麓麕麗麝麟麥麦麩麪麭麸麹麺麻麼麾麿黃黄黌黍黎黏黐黑黒黔默黙黛黜黝點黠黥黨黯黴黶黷黹黻黼黽鼇鼈鼎鼓鼕鼠鼡鼬鼻鼾齊齋齎齏齒齔齟齠齡齢齣齦齧齪齬齲齶齷龍龕龜龝龠冷令嶺玲羚聆鈴零領！𠂊𠂤𠆢𠮟𦥑𧒑"

class KanjiMorph {
  constructor(initialChar, interval, handleMin) {
    this.interval = interval;
    this.handleMin = handleMin;

    this.currentKanji = null;
    this.targetKanji = null;
    this.tStarted = null;
    // indexing into morphStrokes is a bit weird because it's len is max(currentKanji, targetKanji).
    // it's meant to contain enough state to iterate over it while ignoring indices.
    // morphStroke obj is { fromStroke, toStroke, transitionPath, currStroke }
    this.morphStrokes = []

    new KanjiSvg(initialChar, (loadedKanjiSvg) => {
      paper.project.activeLayer.addChild(loadedKanjiSvg.item)
      this.currentKanji = loadedKanjiSvg;
      this.targetKanji = this.currentKanji;
    })
  }

  morphTo(targetChar) {
    if (!this.currentKanji) return; // current KanjiSvg obj not loaded yet
    if (targetChar == this.currentKanji.char || !supportedKanji.includes(targetChar)) return;
    if (this.targetKanji != this.currentKanji) {
      // we're mid-morph; instantly abort current morph.
      this.finalizeMorph();
    }
    new KanjiSvg(targetChar, (loadedTargetKanji) => {
      this.targetKanji = loadedTargetKanji
      this.prepareMorph()
    })
  }

  prepareMorph() {
    let numFrom = this.currentKanji.strokes.length;
    let numTo = this.targetKanji.strokes.length;
    let numMax = Math.max(numFrom, numTo);
    for (let strokeIndex = 0; strokeIndex < numMax; strokeIndex++) {
      let fromStroke = this.currentKanji.strokes[strokeIndex % numFrom];
      let toStroke = this.targetKanji.strokes[strokeIndex % numTo]

      let morphPath = fromStroke.clone();
      morphPath.join(toStroke.clone());
      // joinedStroke.smooth({ type: 'continuous', from: fromStroke.length - 1, to: fromStroke.length });
      this.smoothJoinedPath(morphPath, fromStroke.segments.length - 1);
      morphPath.visible = false;

      this.morphStrokes.push({
        fromStroke: fromStroke,
        toStroke: toStroke,
        transitionPath: morphPath,
        currStroke: fromStroke.clone()
      })
      fromStroke.visible = false;
    }
  }

  morph(progress) {
    // let progressLinear = progress; // linear easing (currently unused)
    let progressSin = (Math.sin(Math.PI * progress + (Math.PI * 1.5)) + 1) / 2; // sine based easing

    for (const morphStroke of this.morphStrokes) {
      let fromStrokeLen = morphStroke.fromStroke.length;
      let toStrokeLen = morphStroke.toStroke.length;
      let transitionPathLen = morphStroke.transitionPath.length;

      // stroke "tail" starts at 0 on the transition path, ends at end of toStroke
      let tailCurveOffset = (transitionPathLen - toStrokeLen) * progressSin;
      // interpolate length of morphStroke from startLength to endLength over progress
      let currStrokeLen = fromStrokeLen + (toStrokeLen - fromStrokeLen) * progressSin;

      let startToTail = morphStroke.transitionPath.clone();
      let currStroke = startToTail.splitAt(tailCurveOffset);
      let headToEnd = currStroke.splitAt(currStrokeLen);
      startToTail.remove();
      headToEnd?.remove(); // sometimes splitAt doesn't return headToEnd (maybe 0 length behavior?)
      currStroke.visible = true; // cloned from invisible morphPath; set visible here.

      morphStroke.currStroke.remove();
      morphStroke.currStroke = currStroke;
    }
  }

  finalizeMorph() {
    // target kanji was never actually in the project tree until now
    paper.project.activeLayer.addChild(this.targetKanji.item)
    this.currentKanji.item.remove()
    this.currentKanji = this.targetKanji
    this.morphStrokes = []
    this.tStarted = null
    console.log("done")
    setTimeout(() => {
      this.morphTo(randomKanji({ excluding: new Set(this.currentKanji.char) }));
    }, 1400);
  }

  step(frameEvent) {
    // not morphing
    if (this.targetKanji == this.currentKanji) return;
    let t = frameEvent.time
    if (!this.tStarted) {
      this.tStarted = t
    } else if (t - this.tStarted > this.interval) {
      this.finalizeMorph()
    } else {
      let progress = (t - this.tStarted) / this.interval;
      this.morph(progress)
    }
  }

  smoothJoinedPath(path, joinIndex) {
    let firstStrokeEnd = path.segments[joinIndex]
    firstStrokeEnd.handleOut = (firstStrokeEnd.handleIn || new Point(0, 0)) * -1
    firstStrokeEnd.handleOut.length = Math.max(firstStrokeEnd.handleOut.length, this.handleMin)

    let nextStrokeStart = path.segments[joinIndex + 1]
    nextStrokeStart.handleIn = (nextStrokeStart.handleOut || new Point(0, 0)) * -1
    nextStrokeStart.handleIn.length = Math.max(nextStrokeStart.handleIn.length, this.handleMin)
  }
}

function onFrame(event) {
  kanjiMorph.step(event)
}

function onMouseDown(event) {
  if (!kanjiMorph.currentKanji) return;
  kanjiMorph.currentKanji.item.selected = !kanjiMorph.currentKanji.item.selected;
  kanjiMorph.targetKanji.item.selected = !kanjiMorph.targetKanji.item.selected;
  window.kanjiSelected = !window.kanjiSelected;
}

function onMouseMove(event) { }

function onKeyDown(event) {
  return; // for WIP release
  if (event.key == 'space') {
    kanjiMorph.morphTo('人');
  }

  if (event.key == 'p') {
    debugger;
  }
  if (event.key == 'k') {
    project.activeLayer.removeChildren();
    kanjiMorph = new KanjiMorph('丿');
  }
}

function randomKanji(options) {
  let selection;
  do {
    selection = supportedKanji[Math.floor(Math.random() * supportedKanji.length)];
  } while (options?.excluding?.has(selection));
  return selection;
}

function createGrid() {
  for (let y = 0; y < view.size.height; y += HANDLE_MIN) {
    let myPath = new Path();
    myPath.strokeColor = 'black';
    myPath.add(new Point(0, y), new Point(view.size.width, y));
  }

  for (let x = 0; x < view.size.width; x += HANDLE_MIN) {
    let myPath = new Path();
    myPath.strokeColor = 'black';
    myPath.add(new Point(x, 0), new Point(x, view.size.height));
  }
}

// createGrid();
let kanjiMorph = new KanjiMorph('二', 2, 500);
setTimeout(() => { kanjiMorph.morphTo('人'); }, 3000);