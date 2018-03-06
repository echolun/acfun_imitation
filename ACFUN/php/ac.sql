SET NAMES UTF8;
DROP DATABASE IF EXISTS acf;
CREATE DATABASE acf CHARSET=UTF8;
USE acf;
CREATE TABLE acf_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
INSERT INTO acf_user VALUES
(1, 'dalun123', '123456'),
(2, 'dalun456', '456789');
CREATE TABLE acf_keji(
	kid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  pname VARCHAR(32),
	pbf VARCHAR(32),
	pzf VARCHAR(32)
);
INSERT INTO acf_keji VALUES
(1,'recreation/images/Science_01.jpg','[新人初作]可以,这很屁股!',31773,180),
(2,'recreation/images/Science_02.jpg','本草纲目-老司机与和谐故',7499,50),
(3,'recreation/images/Science_03.jpg','[宇宙大新闻]双节棍大妈独步',3173,180),
(4,'recreation/images/Science_04.jpg','[男的有情郎]15 有点辣眼睛',1319,120),
(5,'recreation/images/Science_05.jpg','桂林妹子们最讨厌哪种人',3123,30),
(6,'recreation/images/Science_06.jpg','[这个魔术我看了十遍,还是看',31148,20),
(7,'recreation/images/Science_07.jpg','台湾大学生二度虐猫引众怒',5332,41),
(8,'recreation/images/Science_08.jpg','MC石头:他和她-发生在KTV',8646,180),
(9,'recreation/images/Science_09.jpg','[鹦鹉小厨]英国传统牧羊人派',31773,180),
(10,'recreation/images/Science_10.jpg','[新人初作]可以,这很屁股!',31773,180);
CREATE TABLE acf_xiamu(
	xid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(128),
	xname VARCHAR(32),
	zname VARCHAR(32),
	xbf VARCHAR(32),
	xjj VARCHAR(32),
	xbq VARCHAR(32)
);
INSERT INTO acf_xiamu VALUES
(1,'images/xiamu1.jpg','夏目友人帐第五季',"sky",96852,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quaerat in perferendis mollitia aperiam iste incidunt ipsa? Neque omnis doloribus labore earum ullam ex commodi eveniet doloremque corporis, quaerat culpa. ","催泪 治愈 治愈"),
(2,'images/xiamu2.jpg','夏目友人帐第四季',"三颗猫饼干",12543,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quaerat in perferendis mollitia aperiam iste incidunt ipsa? Neque omnis doloribus labore earum ullam ex commodi eveniet doloremque corporis, quaerat culpa. ","催泪 治愈 新番"),
(3,'images/xiamu3.jpg','夏目友人帐剪辑',"玩脱D狄妮莎",25632,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quaerat in perferendis mollitia aperiam iste incidunt ipsa? Neque omnis doloribus labore earum ullam ex commodi eveniet doloremque corporis, quaerat culpa. ","催泪 治愈 MAD"),
(4,'images/xiamu4.jpg','夏目友人帐MAD',"围巾的梦",12312,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quaerat in perferendis mollitia aperiam iste incidunt ipsa? Neque omnis doloribus labore earum ullam ex commodi eveniet doloremque corporis, quaerat culpa. ","催泪 治愈 剪辑"),
(5,'images/swxf1.jpg','守望先锋官方漫画合辑',"他名叫SKY",92152,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quaerat in perferendis mollitia aperiam iste incidunt ipsa? Neque omnis doloribus labore earum ullam ex commodi eveniet doloremque corporis, quaerat culpa. ","守望先锋 治愈 漫画"),
(6,'images/swxf2.jpg','守望先锋MAD',"小小花落",21152,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quaerat in perferendis mollitia aperiam iste incidunt ipsa? Neque omnis doloribus labore earum ullam ex commodi eveniet doloremque corporis, quaerat culpa. ","守望先锋 治愈 漫画"),
(7,'images/swxf3.jpg','守望先锋操作秀',"落花小乔",19152,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quaerat in perferendis mollitia aperiam iste incidunt ipsa? Neque omnis doloribus labore earum ullam ex commodi eveniet doloremque corporis, quaerat culpa. ","守望先锋 治愈 漫画"),
(8,'images/swxf4.jpg','守望先锋岛田兄弟',"sky落花",25684,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quaerat in perferendis mollitia aperiam iste incidunt ipsa? Neque omnis doloribus labore earum ullam ex commodi eveniet doloremque corporis, quaerat culpa. ","守望先锋 治愈 漫画");