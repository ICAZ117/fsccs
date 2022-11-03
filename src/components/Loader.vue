<template>
	<div class="loaderBody">
		<div id="stars"></div>
		<div id="stars2"></div>
		<div id="stars3"></div>
		<div id="title">
			<div id="loader" style="scale: 2">
				<div class="ls-particles ls-part-1"></div>
				<div class="ls-particles ls-part-2"></div>
				<div class="ls-particles ls-part-3"></div>
				<div class="ls-particles ls-part-4"></div>
				<div class="ls-particles ls-part-5"></div>
				<div class="lightsaber ls-left ls-green"></div>
				<div class="lightsaber ls-right ls-red"></div>
			</div>
			<h1 class="loaderHeader">Loading...</h1>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.loaderHeader {
	position: absolute;
	color: white;
	left: 50%;
	transform: translateX(-100%);
	scale: 0.5;
}

@media (max-width: 800px) {
	.loaderHeader {
		transform: translateX(-190%) translateY(10rem);
		scale: 0.25;
	}
}

.loaderBody {
	height: 100vh;
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	overflow: hidden;
}

#stars {
	width: 1px;
	height: 1px;
	background: transparent;
	box-shadow: 166px 1173px #fff, 954px 1111px #fff, 535px 221px #fff,
		1750px 1187px #fff, 641px 749px #fff, 1490px 1655px #fff,
		500px 1705px #fff, 287px 823px #fff, 1532px 445px #fff,
		1111px 1619px #fff, 913px 453px #fff, 1240px 1387px #fff,
		218px 1891px #fff, 404px 155px #fff, 34px 457px #fff, 1043px 1982px #fff,
		368px 736px #fff, 533px 249px #fff, 1820px 1731px #fff,
		1335px 1773px #fff, 21px 741px #fff, 708px 172px #fff, 1170px 975px #fff,
		339px 1527px #fff, 1334px 1300px #fff, 1043px 1435px #fff,
		1390px 93px #fff, 821px 1532px #fff, 335px 1628px #fff,
		284px 1164px #fff, 1540px 1078px #fff, 1215px 319px #fff,
		779px 1052px #fff, 29px 170px #fff, 1001px 882px #fff, 1314px 724px #fff,
		537px 1823px #fff, 323px 1672px #fff, 1183px 997px #fff,
		1181px 1969px #fff, 529px 1767px #fff, 704px 1678px #fff,
		454px 496px #fff, 1867px 153px #fff, 1379px 91px #fff, 328px 1798px #fff,
		1486px 1307px #fff, 178px 1409px #fff, 1031px 816px #fff,
		1294px 181px #fff, 360px 1907px #fff, 1568px 1778px #fff,
		1804px 523px #fff, 909px 1819px #fff, 209px 1446px #fff,
		965px 1665px #fff, 1220px 1166px #fff, 692px 302px #fff,
		1664px 1816px #fff, 1491px 368px #fff, 1370px 624px #fff,
		749px 1197px #fff, 735px 899px #fff, 410px 1435px #fff, 475px 439px #fff,
		1146px 679px #fff, 1526px 139px #fff, 1816px 494px #fff,
		1983px 42px #fff, 350px 806px #fff, 1673px 489px #fff,
		1158px 1938px #fff, 1336px 2000px #fff, 64px 867px #fff,
		1362px 211px #fff, 1869px 1814px #fff, 1060px 1049px #fff,
		911px 316px #fff, 845px 209px #fff, 1949px 316px #fff, 1194px 921px #fff,
		1174px 1852px #fff, 1675px 38px #fff, 954px 1489px #fff,
		1920px 1585px #fff, 1878px 1198px #fff, 776px 199px #fff,
		91px 676px #fff, 1411px 915px #fff, 1678px 934px #fff, 1984px 357px #fff,
		30px 1855px #fff, 1738px 526px #fff, 981px 1308px #fff,
		1258px 1871px #fff, 781px 662px #fff, 489px 883px #fff,
		1099px 929px #fff, 786px 194px #fff, 103px 1206px #fff,
		1033px 1625px #fff, 354px 1342px #fff, 451px 269px #fff, 940px 24px #fff,
		646px 327px #fff, 672px 1502px #fff, 157px 59px #fff, 1598px 1902px #fff,
		1759px 597px #fff, 757px 1770px #fff, 381px 1374px #fff,
		363px 1697px #fff, 1484px 1791px #fff, 1479px 1580px #fff,
		449px 482px #fff, 110px 1142px #fff, 1012px 739px #fff,
		237px 1360px #fff, 224px 1878px #fff, 1673px 870px #fff,
		372px 1202px #fff, 400px 886px #fff, 1906px 1598px #fff,
		550px 956px #fff, 1664px 1945px #fff, 1511px 1825px #fff,
		216px 445px #fff, 1661px 635px #fff, 466px 1402px #fff,
		654px 1401px #fff, 292px 1878px #fff, 1309px 1973px #fff,
		1984px 489px #fff, 1814px 360px #fff, 6px 1641px #fff, 593px 284px #fff,
		1690px 124px #fff, 1564px 1154px #fff, 177px 1776px #fff,
		1283px 557px #fff, 1596px 1309px #fff, 1962px 454px #fff,
		807px 553px #fff, 748px 1933px #fff, 1423px 865px #fff, 312px 980px #fff,
		738px 373px #fff, 1785px 473px #fff, 1559px 1762px #fff,
		1359px 1560px #fff, 346px 1323px #fff, 626px 627px #fff,
		295px 336px #fff, 1638px 1891px #fff, 210px 859px #fff, 708px 961px #fff,
		1822px 1108px #fff, 812px 782px #fff, 597px 4px #fff, 351px 1073px #fff,
		1898px 1962px #fff, 1524px 706px #fff, 1833px 1329px #fff,
		166px 1781px #fff, 1501px 942px #fff, 279px 212px #fff, 448px 803px #fff,
		1084px 114px #fff, 1029px 1668px #fff, 501px 1714px #fff,
		457px 890px #fff, 1291px 1760px #fff, 1590px 1125px #fff,
		1258px 1200px #fff, 415px 673px #fff, 311px 1553px #fff, 72px 815px #fff,
		641px 1631px #fff, 1449px 109px #fff, 686px 1142px #fff,
		934px 1051px #fff, 806px 1107px #fff, 333px 856px #fff,
		1259px 1866px #fff, 1636px 965px #fff, 1402px 427px #fff,
		1812px 1217px #fff, 561px 1558px #fff, 355px 1211px #fff,
		477px 964px #fff, 1975px 1282px #fff, 1910px 575px #fff,
		779px 1492px #fff, 114px 432px #fff, 68px 1228px #fff, 910px 946px #fff,
		1240px 774px #fff, 56px 12px #fff, 133px 225px #fff, 1993px 1729px #fff,
		1186px 309px #fff, 1463px 1786px #fff, 1887px 256px #fff,
		1301px 765px #fff, 542px 1018px #fff, 214px 1874px #fff, 497px 19px #fff,
		266px 1298px #fff, 994px 1556px #fff, 872px 1139px #fff,
		280px 113px #fff, 848px 204px #fff, 1632px 1582px #fff, 317px 490px #fff,
		111px 372px #fff, 315px 1503px #fff, 1624px 408px #fff,
		231px 1023px #fff, 1783px 1347px #fff, 1702px 1371px #fff,
		1363px 614px #fff, 665px 1066px #fff, 1136px 1973px #fff,
		522px 1001px #fff, 1228px 1096px #fff, 943px 655px #fff,
		272px 686px #fff, 962px 419px #fff, 874px 1988px #fff, 1134px 93px #fff,
		1193px 174px #fff, 1484px 923px #fff, 827px 885px #fff,
		460px 1171px #fff, 1064px 678px #fff, 265px 1290px #fff,
		1175px 1279px #fff, 1228px 155px #fff, 189px 1770px #fff, 9px 255px #fff,
		1163px 705px #fff, 1500px 826px #fff, 1555px 1263px #fff,
		655px 236px #fff, 1166px 812px #fff, 1309px 1830px #fff,
		1889px 992px #fff, 1904px 1439px #fff, 1089px 1581px #fff,
		1856px 1101px #fff, 60px 1174px #fff, 1003px 100px #fff,
		1132px 1068px #fff, 631px 1454px #fff, 93px 885px #fff,
		1344px 1098px #fff, 1810px 1777px #fff, 1290px 1298px #fff,
		971px 1093px #fff, 1660px 1374px #fff, 587px 230px #fff,
		114px 1158px #fff, 459px 72px #fff, 769px 1195px #fff, 896px 315px #fff,
		1841px 1943px #fff, 1884px 1923px #fff, 802px 1479px #fff,
		1462px 84px #fff, 860px 463px #fff, 1154px 1266px #fff,
		1755px 808px #fff, 1927px 1958px #fff, 336px 1889px #fff,
		961px 1677px #fff, 1382px 1141px #fff, 348px 1493px #fff,
		92px 1125px #fff, 776px 445px #fff, 1769px 1665px #fff,
		1511px 1455px #fff, 307px 1715px #fff, 72px 1629px #fff,
		286px 1785px #fff, 371px 126px #fff, 52px 1902px #fff, 771px 1036px #fff,
		1745px 343px #fff, 359px 139px #fff, 584px 705px #fff,
		1625px 1669px #fff, 387px 607px #fff, 5px 1212px #fff, 768px 1128px #fff,
		1892px 803px #fff, 1021px 1187px #fff, 1834px 1471px #fff,
		834px 86px #fff, 1471px 1200px #fff, 1281px 1899px #fff,
		389px 1406px #fff, 1905px 406px #fff, 1649px 450px #fff,
		1679px 1488px #fff, 615px 1186px #fff, 678px 1753px #fff,
		495px 1100px #fff, 1086px 1540px #fff, 658px 1988px #fff,
		647px 868px #fff, 842px 1045px #fff, 1916px 1640px #fff,
		531px 102px #fff, 1152px 288px #fff, 1341px 824px #fff,
		1380px 1018px #fff, 1433px 742px #fff, 338px 701px #fff,
		784px 1342px #fff, 119px 673px #fff, 1551px 582px #fff, 285px 463px #fff,
		279px 42px #fff, 895px 1472px #fff, 1589px 1500px #fff, 285px 133px #fff,
		944px 525px #fff, 49px 1699px #fff, 1021px 731px #fff,
		1451px 1582px #fff, 695px 93px #fff, 949px 1228px #fff,
		1212px 205px #fff, 1887px 1864px #fff, 871px 605px #fff,
		1695px 91px #fff, 463px 204px #fff, 877px 866px #fff, 291px 358px #fff,
		789px 1527px #fff, 356px 1913px #fff, 548px 981px #fff,
		1396px 1194px #fff, 915px 1032px #fff, 516px 321px #fff,
		1815px 1356px #fff, 141px 925px #fff, 1519px 1909px #fff,
		172px 606px #fff, 1129px 1917px #fff, 1104px 679px #fff,
		1242px 796px #fff, 1250px 1524px #fff, 1949px 1978px #fff,
		1407px 633px #fff, 1708px 1328px #fff, 1540px 1872px #fff,
		1151px 281px #fff, 1220px 1811px #fff, 1983px 1930px #fff,
		231px 244px #fff, 1874px 1056px #fff, 685px 1402px #fff,
		1559px 1099px #fff, 1867px 1498px #fff, 103px 700px #fff,
		1492px 892px #fff, 1130px 610px #fff, 724px 1529px #fff,
		513px 1398px #fff, 275px 512px #fff, 1117px 374px #fff, 839px 433px #fff,
		1755px 1985px #fff, 536px 480px #fff, 1586px 1030px #fff,
		65px 375px #fff, 1175px 1559px #fff, 1859px 509px #fff, 180px 771px #fff,
		1100px 1551px #fff, 614px 1222px #fff, 850px 819px #fff,
		898px 1496px #fff, 290px 879px #fff, 812px 1464px #fff,
		1075px 621px #fff, 976px 756px #fff, 857px 1330px #fff, 743px 223px #fff,
		801px 1749px #fff, 1783px 1914px #fff, 438px 1963px #fff,
		1158px 1151px #fff, 535px 897px #fff, 117px 1419px #fff,
		1050px 1696px #fff, 1963px 509px #fff, 941px 383px #fff,
		1418px 1150px #fff, 370px 1870px #fff, 1628px 404px #fff,
		844px 310px #fff, 460px 1726px #fff, 1324px 1865px #fff,
		474px 805px #fff, 401px 1980px #fff, 1156px 1374px #fff,
		1539px 1377px #fff, 1917px 465px #fff, 1394px 1935px #fff,
		1830px 1764px #fff, 1874px 75px #fff, 1053px 452px #fff,
		1096px 610px #fff, 1786px 1950px #fff, 1151px 722px #fff,
		1295px 1977px #fff, 125px 638px #fff, 25px 824px #fff, 384px 49px #fff,
		1200px 1190px #fff, 329px 1842px #fff, 392px 510px #fff,
		1916px 1996px #fff, 1178px 56px #fff, 719px 1429px #fff,
		632px 295px #fff, 1468px 272px #fff, 1173px 353px #fff, 90px 908px #fff,
		1165px 205px #fff, 742px 498px #fff, 55px 650px #fff, 1951px 1426px #fff,
		337px 802px #fff, 1954px 921px #fff, 132px 1465px #fff,
		1657px 167px #fff, 1140px 709px #fff, 974px 1385px #fff,
		1558px 97px #fff, 1668px 232px #fff, 1921px 581px #fff,
		1448px 688px #fff, 1505px 928px #fff, 1273px 503px #fff,
		1629px 826px #fff, 481px 832px #fff, 1195px 1927px #fff,
		1810px 113px #fff, 1342px 796px #fff, 1200px 1212px #fff,
		340px 1272px #fff, 1311px 1397px #fff, 562px 1443px #fff,
		471px 1595px #fff, 223px 1009px #fff, 1491px 293px #fff,
		1648px 1333px #fff, 330px 381px #fff, 736px 100px #fff, 590px 644px #fff,
		1955px 187px #fff, 46px 388px #fff, 1781px 977px #fff, 1401px 144px #fff,
		388px 951px #fff, 1836px 185px #fff, 1110px 702px #fff,
		819px 1084px #fff, 1290px 1770px #fff, 1157px 344px #fff,
		1804px 1576px #fff, 1997px 789px #fff, 1508px 420px #fff,
		1001px 403px #fff, 379px 373px #fff, 929px 7px #fff, 888px 534px #fff,
		868px 1779px #fff, 631px 1608px #fff, 301px 462px #fff, 2px 1909px #fff,
		502px 1288px #fff, 81px 907px #fff, 374px 1062px #fff,
		1512px 1792px #fff, 828px 813px #fff, 1775px 243px #fff,
		861px 1030px #fff, 1451px 1695px #fff, 1451px 66px #fff,
		1027px 1612px #fff, 1167px 754px #fff, 107px 717px #fff,
		1486px 460px #fff, 82px 59px #fff, 72px 1824px #fff, 352px 525px #fff,
		650px 311px #fff, 454px 1682px #fff, 1676px 1183px #fff,
		545px 1609px #fff, 271px 298px #fff, 1670px 1575px #fff,
		1355px 780px #fff, 1274px 653px #fff, 1889px 1123px #fff,
		1249px 698px #fff, 509px 338px #fff, 95px 563px #fff, 969px 1839px #fff,
		351px 1117px #fff, 593px 1549px #fff, 1040px 1382px #fff,
		1733px 1961px #fff, 433px 1611px #fff, 957px 1460px #fff,
		193px 1319px #fff, 259px 1918px #fff, 1484px 625px #fff,
		555px 227px #fff, 1838px 1478px #fff, 304px 490px #fff, 960px 306px #fff,
		378px 1701px #fff, 1197px 817px #fff, 803px 637px #fff,
		1261px 1075px #fff, 1745px 1519px #fff, 401px 1987px #fff,
		1616px 1783px #fff, 1996px 1981px #fff, 178px 580px #fff,
		1127px 120px #fff, 1724px 180px #fff, 1736px 748px #fff,
		830px 204px #fff, 878px 1658px #fff, 673px 1614px #fff,
		1587px 1461px #fff, 455px 704px #fff, 80px 1136px #fff, 962px 921px #fff,
		838px 1687px #fff, 988px 341px #fff, 593px 811px #fff,
		1159px 1997px #fff, 1239px 931px #fff, 570px 1737px #fff,
		1824px 1139px #fff, 520px 808px #fff, 801px 282px #fff,
		1521px 465px #fff, 1582px 1392px #fff, 98px 1604px #fff,
		1376px 756px #fff, 317px 192px #fff, 1246px 26px #fff, 603px 1585px #fff,
		1032px 15px #fff, 637px 9px #fff, 1763px 1723px #fff, 1179px 1741px #fff,
		1209px 134px #fff, 1550px 166px #fff, 1040px 1499px #fff,
		931px 591px #fff, 1163px 390px #fff, 1305px 1053px #fff,
		1612px 274px #fff, 1920px 318px #fff, 1167px 524px #fff,
		1097px 782px #fff, 1537px 1664px #fff, 1850px 1247px #fff,
		1096px 444px #fff, 1320px 602px #fff, 1910px 157px #fff,
		120px 1597px #fff, 183px 589px #fff, 953px 1976px #fff, 803px 586px #fff,
		577px 606px #fff, 1959px 1750px #fff, 405px 1811px #fff,
		767px 1873px #fff, 281px 1653px #fff, 1393px 37px #fff, 922px 572px #fff,
		842px 598px #fff, 1189px 1399px #fff, 1757px 360px #fff,
		575px 891px #fff, 1920px 762px #fff, 748px 250px #fff, 190px 1754px #fff,
		1214px 311px #fff, 811px 1551px #fff, 1098px 569px #fff,
		131px 1214px #fff, 1004px 1790px #fff, 88px 1882px #fff,
		1575px 904px #fff, 892px 931px #fff, 481px 1701px #fff,
		1560px 1394px #fff, 1211px 1768px #fff, 1670px 1544px #fff,
		1239px 72px #fff, 557px 1580px #fff, 593px 235px #fff, 1735px 789px #fff,
		1435px 66px #fff, 1368px 1632px #fff, 693px 727px #fff,
		1433px 379px #fff, 749px 849px #fff, 1178px 260px #fff, 1916px 29px #fff,
		1828px 330px #fff, 1740px 1520px #fff, 1357px 697px #fff,
		1474px 1755px #fff, 899px 1051px #fff, 409px 1347px #fff,
		1829px 304px #fff, 1877px 1080px #fff, 3px 1978px #fff, 933px 825px #fff,
		1672px 391px #fff, 383px 1162px #fff, 78px 446px #fff,
		1930px 1354px #fff, 513px 192px #fff, 279px 1688px #fff,
		237px 768px #fff, 377px 12px #fff, 230px 1px #fff, 273px 1978px #fff,
		1107px 1415px #fff, 113px 1335px #fff, 811px 630px #fff,
		1394px 1936px #fff, 1003px 230px #fff, 1855px 1178px #fff,
		1696px 357px #fff, 1682px 496px #fff, 1131px 1710px #fff,
		1977px 1135px #fff, 1896px 1570px #fff, 1925px 1647px #fff,
		1345px 1524px #fff, 1210px 1220px #fff, 1942px 187px #fff,
		931px 1591px #fff, 276px 1866px #fff, 800px 427px #fff, 196px 128px #fff,
		548px 753px #fff, 651px 1255px #fff, 460px 19px #fff, 762px 1203px #fff,
		632px 227px #fff, 397px 1811px #fff, 1400px 520px #fff, 308px 541px #fff,
		876px 1141px #fff, 786px 731px #fff, 503px 532px #fff, 191px 1086px #fff,
		745px 1570px #fff, 1656px 248px #fff, 1451px 1231px #fff,
		1901px 17px #fff, 644px 570px #fff, 1868px 1080px #fff, 882px 871px #fff,
		670px 1633px #fff, 1705px 1786px #fff, 1496px 1988px #fff,
		1881px 171px #fff, 1653px 250px #fff, 1923px 557px #fff,
		376px 310px #fff, 952px 1746px #fff, 1962px 921px #fff, 44px 827px #fff,
		1880px 721px #fff, 1179px 1549px #fff, 1495px 187px #fff,
		1217px 662px #fff, 1005px 185px #fff, 1621px 1336px #fff,
		1091px 1107px #fff, 1552px 1236px #fff, 309px 1625px #fff,
		1449px 433px #fff, 1898px 1402px #fff;
	animation: animStar 50s linear infinite;
}
#stars:after {
	content: " ";
	position: absolute;
	top: 2000px;
	width: 1px;
	height: 1px;
	background: transparent;
	box-shadow: 166px 1173px #fff, 954px 1111px #fff, 535px 221px #fff,
		1750px 1187px #fff, 641px 749px #fff, 1490px 1655px #fff,
		500px 1705px #fff, 287px 823px #fff, 1532px 445px #fff,
		1111px 1619px #fff, 913px 453px #fff, 1240px 1387px #fff,
		218px 1891px #fff, 404px 155px #fff, 34px 457px #fff, 1043px 1982px #fff,
		368px 736px #fff, 533px 249px #fff, 1820px 1731px #fff,
		1335px 1773px #fff, 21px 741px #fff, 708px 172px #fff, 1170px 975px #fff,
		339px 1527px #fff, 1334px 1300px #fff, 1043px 1435px #fff,
		1390px 93px #fff, 821px 1532px #fff, 335px 1628px #fff,
		284px 1164px #fff, 1540px 1078px #fff, 1215px 319px #fff,
		779px 1052px #fff, 29px 170px #fff, 1001px 882px #fff, 1314px 724px #fff,
		537px 1823px #fff, 323px 1672px #fff, 1183px 997px #fff,
		1181px 1969px #fff, 529px 1767px #fff, 704px 1678px #fff,
		454px 496px #fff, 1867px 153px #fff, 1379px 91px #fff, 328px 1798px #fff,
		1486px 1307px #fff, 178px 1409px #fff, 1031px 816px #fff,
		1294px 181px #fff, 360px 1907px #fff, 1568px 1778px #fff,
		1804px 523px #fff, 909px 1819px #fff, 209px 1446px #fff,
		965px 1665px #fff, 1220px 1166px #fff, 692px 302px #fff,
		1664px 1816px #fff, 1491px 368px #fff, 1370px 624px #fff,
		749px 1197px #fff, 735px 899px #fff, 410px 1435px #fff, 475px 439px #fff,
		1146px 679px #fff, 1526px 139px #fff, 1816px 494px #fff,
		1983px 42px #fff, 350px 806px #fff, 1673px 489px #fff,
		1158px 1938px #fff, 1336px 2000px #fff, 64px 867px #fff,
		1362px 211px #fff, 1869px 1814px #fff, 1060px 1049px #fff,
		911px 316px #fff, 845px 209px #fff, 1949px 316px #fff, 1194px 921px #fff,
		1174px 1852px #fff, 1675px 38px #fff, 954px 1489px #fff,
		1920px 1585px #fff, 1878px 1198px #fff, 776px 199px #fff,
		91px 676px #fff, 1411px 915px #fff, 1678px 934px #fff, 1984px 357px #fff,
		30px 1855px #fff, 1738px 526px #fff, 981px 1308px #fff,
		1258px 1871px #fff, 781px 662px #fff, 489px 883px #fff,
		1099px 929px #fff, 786px 194px #fff, 103px 1206px #fff,
		1033px 1625px #fff, 354px 1342px #fff, 451px 269px #fff, 940px 24px #fff,
		646px 327px #fff, 672px 1502px #fff, 157px 59px #fff, 1598px 1902px #fff,
		1759px 597px #fff, 757px 1770px #fff, 381px 1374px #fff,
		363px 1697px #fff, 1484px 1791px #fff, 1479px 1580px #fff,
		449px 482px #fff, 110px 1142px #fff, 1012px 739px #fff,
		237px 1360px #fff, 224px 1878px #fff, 1673px 870px #fff,
		372px 1202px #fff, 400px 886px #fff, 1906px 1598px #fff,
		550px 956px #fff, 1664px 1945px #fff, 1511px 1825px #fff,
		216px 445px #fff, 1661px 635px #fff, 466px 1402px #fff,
		654px 1401px #fff, 292px 1878px #fff, 1309px 1973px #fff,
		1984px 489px #fff, 1814px 360px #fff, 6px 1641px #fff, 593px 284px #fff,
		1690px 124px #fff, 1564px 1154px #fff, 177px 1776px #fff,
		1283px 557px #fff, 1596px 1309px #fff, 1962px 454px #fff,
		807px 553px #fff, 748px 1933px #fff, 1423px 865px #fff, 312px 980px #fff,
		738px 373px #fff, 1785px 473px #fff, 1559px 1762px #fff,
		1359px 1560px #fff, 346px 1323px #fff, 626px 627px #fff,
		295px 336px #fff, 1638px 1891px #fff, 210px 859px #fff, 708px 961px #fff,
		1822px 1108px #fff, 812px 782px #fff, 597px 4px #fff, 351px 1073px #fff,
		1898px 1962px #fff, 1524px 706px #fff, 1833px 1329px #fff,
		166px 1781px #fff, 1501px 942px #fff, 279px 212px #fff, 448px 803px #fff,
		1084px 114px #fff, 1029px 1668px #fff, 501px 1714px #fff,
		457px 890px #fff, 1291px 1760px #fff, 1590px 1125px #fff,
		1258px 1200px #fff, 415px 673px #fff, 311px 1553px #fff, 72px 815px #fff,
		641px 1631px #fff, 1449px 109px #fff, 686px 1142px #fff,
		934px 1051px #fff, 806px 1107px #fff, 333px 856px #fff,
		1259px 1866px #fff, 1636px 965px #fff, 1402px 427px #fff,
		1812px 1217px #fff, 561px 1558px #fff, 355px 1211px #fff,
		477px 964px #fff, 1975px 1282px #fff, 1910px 575px #fff,
		779px 1492px #fff, 114px 432px #fff, 68px 1228px #fff, 910px 946px #fff,
		1240px 774px #fff, 56px 12px #fff, 133px 225px #fff, 1993px 1729px #fff,
		1186px 309px #fff, 1463px 1786px #fff, 1887px 256px #fff,
		1301px 765px #fff, 542px 1018px #fff, 214px 1874px #fff, 497px 19px #fff,
		266px 1298px #fff, 994px 1556px #fff, 872px 1139px #fff,
		280px 113px #fff, 848px 204px #fff, 1632px 1582px #fff, 317px 490px #fff,
		111px 372px #fff, 315px 1503px #fff, 1624px 408px #fff,
		231px 1023px #fff, 1783px 1347px #fff, 1702px 1371px #fff,
		1363px 614px #fff, 665px 1066px #fff, 1136px 1973px #fff,
		522px 1001px #fff, 1228px 1096px #fff, 943px 655px #fff,
		272px 686px #fff, 962px 419px #fff, 874px 1988px #fff, 1134px 93px #fff,
		1193px 174px #fff, 1484px 923px #fff, 827px 885px #fff,
		460px 1171px #fff, 1064px 678px #fff, 265px 1290px #fff,
		1175px 1279px #fff, 1228px 155px #fff, 189px 1770px #fff, 9px 255px #fff,
		1163px 705px #fff, 1500px 826px #fff, 1555px 1263px #fff,
		655px 236px #fff, 1166px 812px #fff, 1309px 1830px #fff,
		1889px 992px #fff, 1904px 1439px #fff, 1089px 1581px #fff,
		1856px 1101px #fff, 60px 1174px #fff, 1003px 100px #fff,
		1132px 1068px #fff, 631px 1454px #fff, 93px 885px #fff,
		1344px 1098px #fff, 1810px 1777px #fff, 1290px 1298px #fff,
		971px 1093px #fff, 1660px 1374px #fff, 587px 230px #fff,
		114px 1158px #fff, 459px 72px #fff, 769px 1195px #fff, 896px 315px #fff,
		1841px 1943px #fff, 1884px 1923px #fff, 802px 1479px #fff,
		1462px 84px #fff, 860px 463px #fff, 1154px 1266px #fff,
		1755px 808px #fff, 1927px 1958px #fff, 336px 1889px #fff,
		961px 1677px #fff, 1382px 1141px #fff, 348px 1493px #fff,
		92px 1125px #fff, 776px 445px #fff, 1769px 1665px #fff,
		1511px 1455px #fff, 307px 1715px #fff, 72px 1629px #fff,
		286px 1785px #fff, 371px 126px #fff, 52px 1902px #fff, 771px 1036px #fff,
		1745px 343px #fff, 359px 139px #fff, 584px 705px #fff,
		1625px 1669px #fff, 387px 607px #fff, 5px 1212px #fff, 768px 1128px #fff,
		1892px 803px #fff, 1021px 1187px #fff, 1834px 1471px #fff,
		834px 86px #fff, 1471px 1200px #fff, 1281px 1899px #fff,
		389px 1406px #fff, 1905px 406px #fff, 1649px 450px #fff,
		1679px 1488px #fff, 615px 1186px #fff, 678px 1753px #fff,
		495px 1100px #fff, 1086px 1540px #fff, 658px 1988px #fff,
		647px 868px #fff, 842px 1045px #fff, 1916px 1640px #fff,
		531px 102px #fff, 1152px 288px #fff, 1341px 824px #fff,
		1380px 1018px #fff, 1433px 742px #fff, 338px 701px #fff,
		784px 1342px #fff, 119px 673px #fff, 1551px 582px #fff, 285px 463px #fff,
		279px 42px #fff, 895px 1472px #fff, 1589px 1500px #fff, 285px 133px #fff,
		944px 525px #fff, 49px 1699px #fff, 1021px 731px #fff,
		1451px 1582px #fff, 695px 93px #fff, 949px 1228px #fff,
		1212px 205px #fff, 1887px 1864px #fff, 871px 605px #fff,
		1695px 91px #fff, 463px 204px #fff, 877px 866px #fff, 291px 358px #fff,
		789px 1527px #fff, 356px 1913px #fff, 548px 981px #fff,
		1396px 1194px #fff, 915px 1032px #fff, 516px 321px #fff,
		1815px 1356px #fff, 141px 925px #fff, 1519px 1909px #fff,
		172px 606px #fff, 1129px 1917px #fff, 1104px 679px #fff,
		1242px 796px #fff, 1250px 1524px #fff, 1949px 1978px #fff,
		1407px 633px #fff, 1708px 1328px #fff, 1540px 1872px #fff,
		1151px 281px #fff, 1220px 1811px #fff, 1983px 1930px #fff,
		231px 244px #fff, 1874px 1056px #fff, 685px 1402px #fff,
		1559px 1099px #fff, 1867px 1498px #fff, 103px 700px #fff,
		1492px 892px #fff, 1130px 610px #fff, 724px 1529px #fff,
		513px 1398px #fff, 275px 512px #fff, 1117px 374px #fff, 839px 433px #fff,
		1755px 1985px #fff, 536px 480px #fff, 1586px 1030px #fff,
		65px 375px #fff, 1175px 1559px #fff, 1859px 509px #fff, 180px 771px #fff,
		1100px 1551px #fff, 614px 1222px #fff, 850px 819px #fff,
		898px 1496px #fff, 290px 879px #fff, 812px 1464px #fff,
		1075px 621px #fff, 976px 756px #fff, 857px 1330px #fff, 743px 223px #fff,
		801px 1749px #fff, 1783px 1914px #fff, 438px 1963px #fff,
		1158px 1151px #fff, 535px 897px #fff, 117px 1419px #fff,
		1050px 1696px #fff, 1963px 509px #fff, 941px 383px #fff,
		1418px 1150px #fff, 370px 1870px #fff, 1628px 404px #fff,
		844px 310px #fff, 460px 1726px #fff, 1324px 1865px #fff,
		474px 805px #fff, 401px 1980px #fff, 1156px 1374px #fff,
		1539px 1377px #fff, 1917px 465px #fff, 1394px 1935px #fff,
		1830px 1764px #fff, 1874px 75px #fff, 1053px 452px #fff,
		1096px 610px #fff, 1786px 1950px #fff, 1151px 722px #fff,
		1295px 1977px #fff, 125px 638px #fff, 25px 824px #fff, 384px 49px #fff,
		1200px 1190px #fff, 329px 1842px #fff, 392px 510px #fff,
		1916px 1996px #fff, 1178px 56px #fff, 719px 1429px #fff,
		632px 295px #fff, 1468px 272px #fff, 1173px 353px #fff, 90px 908px #fff,
		1165px 205px #fff, 742px 498px #fff, 55px 650px #fff, 1951px 1426px #fff,
		337px 802px #fff, 1954px 921px #fff, 132px 1465px #fff,
		1657px 167px #fff, 1140px 709px #fff, 974px 1385px #fff,
		1558px 97px #fff, 1668px 232px #fff, 1921px 581px #fff,
		1448px 688px #fff, 1505px 928px #fff, 1273px 503px #fff,
		1629px 826px #fff, 481px 832px #fff, 1195px 1927px #fff,
		1810px 113px #fff, 1342px 796px #fff, 1200px 1212px #fff,
		340px 1272px #fff, 1311px 1397px #fff, 562px 1443px #fff,
		471px 1595px #fff, 223px 1009px #fff, 1491px 293px #fff,
		1648px 1333px #fff, 330px 381px #fff, 736px 100px #fff, 590px 644px #fff,
		1955px 187px #fff, 46px 388px #fff, 1781px 977px #fff, 1401px 144px #fff,
		388px 951px #fff, 1836px 185px #fff, 1110px 702px #fff,
		819px 1084px #fff, 1290px 1770px #fff, 1157px 344px #fff,
		1804px 1576px #fff, 1997px 789px #fff, 1508px 420px #fff,
		1001px 403px #fff, 379px 373px #fff, 929px 7px #fff, 888px 534px #fff,
		868px 1779px #fff, 631px 1608px #fff, 301px 462px #fff, 2px 1909px #fff,
		502px 1288px #fff, 81px 907px #fff, 374px 1062px #fff,
		1512px 1792px #fff, 828px 813px #fff, 1775px 243px #fff,
		861px 1030px #fff, 1451px 1695px #fff, 1451px 66px #fff,
		1027px 1612px #fff, 1167px 754px #fff, 107px 717px #fff,
		1486px 460px #fff, 82px 59px #fff, 72px 1824px #fff, 352px 525px #fff,
		650px 311px #fff, 454px 1682px #fff, 1676px 1183px #fff,
		545px 1609px #fff, 271px 298px #fff, 1670px 1575px #fff,
		1355px 780px #fff, 1274px 653px #fff, 1889px 1123px #fff,
		1249px 698px #fff, 509px 338px #fff, 95px 563px #fff, 969px 1839px #fff,
		351px 1117px #fff, 593px 1549px #fff, 1040px 1382px #fff,
		1733px 1961px #fff, 433px 1611px #fff, 957px 1460px #fff,
		193px 1319px #fff, 259px 1918px #fff, 1484px 625px #fff,
		555px 227px #fff, 1838px 1478px #fff, 304px 490px #fff, 960px 306px #fff,
		378px 1701px #fff, 1197px 817px #fff, 803px 637px #fff,
		1261px 1075px #fff, 1745px 1519px #fff, 401px 1987px #fff,
		1616px 1783px #fff, 1996px 1981px #fff, 178px 580px #fff,
		1127px 120px #fff, 1724px 180px #fff, 1736px 748px #fff,
		830px 204px #fff, 878px 1658px #fff, 673px 1614px #fff,
		1587px 1461px #fff, 455px 704px #fff, 80px 1136px #fff, 962px 921px #fff,
		838px 1687px #fff, 988px 341px #fff, 593px 811px #fff,
		1159px 1997px #fff, 1239px 931px #fff, 570px 1737px #fff,
		1824px 1139px #fff, 520px 808px #fff, 801px 282px #fff,
		1521px 465px #fff, 1582px 1392px #fff, 98px 1604px #fff,
		1376px 756px #fff, 317px 192px #fff, 1246px 26px #fff, 603px 1585px #fff,
		1032px 15px #fff, 637px 9px #fff, 1763px 1723px #fff, 1179px 1741px #fff,
		1209px 134px #fff, 1550px 166px #fff, 1040px 1499px #fff,
		931px 591px #fff, 1163px 390px #fff, 1305px 1053px #fff,
		1612px 274px #fff, 1920px 318px #fff, 1167px 524px #fff,
		1097px 782px #fff, 1537px 1664px #fff, 1850px 1247px #fff,
		1096px 444px #fff, 1320px 602px #fff, 1910px 157px #fff,
		120px 1597px #fff, 183px 589px #fff, 953px 1976px #fff, 803px 586px #fff,
		577px 606px #fff, 1959px 1750px #fff, 405px 1811px #fff,
		767px 1873px #fff, 281px 1653px #fff, 1393px 37px #fff, 922px 572px #fff,
		842px 598px #fff, 1189px 1399px #fff, 1757px 360px #fff,
		575px 891px #fff, 1920px 762px #fff, 748px 250px #fff, 190px 1754px #fff,
		1214px 311px #fff, 811px 1551px #fff, 1098px 569px #fff,
		131px 1214px #fff, 1004px 1790px #fff, 88px 1882px #fff,
		1575px 904px #fff, 892px 931px #fff, 481px 1701px #fff,
		1560px 1394px #fff, 1211px 1768px #fff, 1670px 1544px #fff,
		1239px 72px #fff, 557px 1580px #fff, 593px 235px #fff, 1735px 789px #fff,
		1435px 66px #fff, 1368px 1632px #fff, 693px 727px #fff,
		1433px 379px #fff, 749px 849px #fff, 1178px 260px #fff, 1916px 29px #fff,
		1828px 330px #fff, 1740px 1520px #fff, 1357px 697px #fff,
		1474px 1755px #fff, 899px 1051px #fff, 409px 1347px #fff,
		1829px 304px #fff, 1877px 1080px #fff, 3px 1978px #fff, 933px 825px #fff,
		1672px 391px #fff, 383px 1162px #fff, 78px 446px #fff,
		1930px 1354px #fff, 513px 192px #fff, 279px 1688px #fff,
		237px 768px #fff, 377px 12px #fff, 230px 1px #fff, 273px 1978px #fff,
		1107px 1415px #fff, 113px 1335px #fff, 811px 630px #fff,
		1394px 1936px #fff, 1003px 230px #fff, 1855px 1178px #fff,
		1696px 357px #fff, 1682px 496px #fff, 1131px 1710px #fff,
		1977px 1135px #fff, 1896px 1570px #fff, 1925px 1647px #fff,
		1345px 1524px #fff, 1210px 1220px #fff, 1942px 187px #fff,
		931px 1591px #fff, 276px 1866px #fff, 800px 427px #fff, 196px 128px #fff,
		548px 753px #fff, 651px 1255px #fff, 460px 19px #fff, 762px 1203px #fff,
		632px 227px #fff, 397px 1811px #fff, 1400px 520px #fff, 308px 541px #fff,
		876px 1141px #fff, 786px 731px #fff, 503px 532px #fff, 191px 1086px #fff,
		745px 1570px #fff, 1656px 248px #fff, 1451px 1231px #fff,
		1901px 17px #fff, 644px 570px #fff, 1868px 1080px #fff, 882px 871px #fff,
		670px 1633px #fff, 1705px 1786px #fff, 1496px 1988px #fff,
		1881px 171px #fff, 1653px 250px #fff, 1923px 557px #fff,
		376px 310px #fff, 952px 1746px #fff, 1962px 921px #fff, 44px 827px #fff,
		1880px 721px #fff, 1179px 1549px #fff, 1495px 187px #fff,
		1217px 662px #fff, 1005px 185px #fff, 1621px 1336px #fff,
		1091px 1107px #fff, 1552px 1236px #fff, 309px 1625px #fff,
		1449px 433px #fff, 1898px 1402px #fff;
}

#stars2 {
	width: 2px;
	height: 2px;
	background: transparent;
	box-shadow: 151px 234px #fff, 843px 37px #fff, 1779px 102px #fff,
		1351px 1268px #fff, 780px 340px #fff, 57px 1563px #fff,
		1581px 1350px #fff, 1705px 593px #fff, 821px 400px #fff,
		971px 1106px #fff, 1483px 362px #fff, 1319px 875px #fff,
		604px 1176px #fff, 1001px 745px #fff, 112px 1941px #fff,
		791px 707px #fff, 1474px 1327px #fff, 1366px 1759px #fff,
		1180px 1146px #fff, 1264px 645px #fff, 1423px 1235px #fff,
		1357px 1798px #fff, 1783px 1407px #fff, 980px 1600px #fff,
		736px 1870px #fff, 1623px 194px #fff, 1786px 1908px #fff,
		1702px 1837px #fff, 557px 1861px #fff, 863px 404px #fff,
		1773px 588px #fff, 1613px 634px #fff, 344px 455px #fff,
		219px 1183px #fff, 1397px 596px #fff, 426px 1072px #fff, 198px 19px #fff,
		1389px 1090px #fff, 893px 1310px #fff, 1768px 1269px #fff,
		718px 774px #fff, 1426px 1884px #fff, 1236px 1390px #fff,
		916px 920px #fff, 193px 841px #fff, 1417px 1344px #fff, 461px 207px #fff,
		450px 465px #fff, 341px 504px #fff, 834px 1867px #fff,
		1675px 1557px #fff, 1232px 316px #fff, 771px 1484px #fff,
		642px 1824px #fff, 625px 1284px #fff, 1098px 1996px #fff,
		1346px 1498px #fff, 1489px 1408px #fff, 1565px 1805px #fff,
		256px 1366px #fff, 932px 1121px #fff, 1524px 1714px #fff,
		739px 1227px #fff, 1246px 246px #fff, 277px 1293px #fff,
		1856px 1740px #fff, 1543px 1178px #fff, 381px 1625px #fff,
		170px 1001px #fff, 1515px 1426px #fff, 1813px 924px #fff,
		1132px 1981px #fff, 1743px 139px #fff, 5px 585px #fff, 946px 1607px #fff,
		1558px 334px #fff, 436px 298px #fff, 55px 1874px #fff, 1963px 134px #fff,
		1376px 1724px #fff, 776px 1833px #fff, 296px 729px #fff,
		1573px 975px #fff, 1070px 1973px #fff, 500px 342px #fff,
		1165px 1672px #fff, 982px 1052px #fff, 1194px 854px #fff,
		3px 1658px #fff, 959px 1674px #fff, 639px 470px #fff, 241px 495px #fff,
		3px 424px #fff, 1500px 1498px #fff, 1333px 1899px #fff,
		1687px 1171px #fff, 732px 1671px #fff, 1055px 38px #fff,
		181px 315px #fff, 1261px 1183px #fff, 868px 1301px #fff,
		976px 1176px #fff, 1710px 334px #fff, 1120px 1754px #fff,
		535px 632px #fff, 548px 332px #fff, 1323px 1864px #fff, 959px 848px #fff,
		1684px 848px #fff, 5px 1125px #fff, 724px 1240px #fff,
		1752px 1382px #fff, 837px 963px #fff, 818px 1030px #fff,
		134px 624px #fff, 1213px 1606px #fff, 1556px 1524px #fff,
		1207px 1910px #fff, 1736px 708px #fff, 795px 1800px #fff,
		1327px 1210px #fff, 28px 1104px #fff, 510px 1501px #fff,
		1891px 1096px #fff, 77px 1323px #fff, 1527px 961px #fff,
		1591px 264px #fff, 1246px 944px #fff, 531px 417px #fff,
		1744px 1435px #fff, 1033px 387px #fff, 816px 47px #fff,
		346px 1209px #fff, 318px 135px #fff, 1604px 599px #fff,
		1204px 1498px #fff, 75px 1250px #fff, 160px 1997px #fff,
		311px 714px #fff, 693px 1953px #fff, 160px 1603px #fff,
		1731px 266px #fff, 1789px 1165px #fff, 1379px 378px #fff,
		731px 1458px #fff, 331px 669px #fff, 286px 1850px #fff,
		1371px 402px #fff, 1928px 328px #fff, 124px 511px #fff,
		782px 1373px #fff, 1688px 667px #fff, 1587px 209px #fff,
		1031px 614px #fff, 775px 1134px #fff, 848px 1349px #fff,
		797px 1695px #fff, 298px 1711px #fff, 720px 1039px #fff, 805px 7px #fff,
		1385px 1639px #fff, 214px 1272px #fff, 92px 49px #fff, 436px 1858px #fff,
		1929px 831px #fff, 1329px 573px #fff, 942px 919px #fff,
		1823px 450px #fff, 4px 1861px #fff, 1348px 482px #fff, 676px 865px #fff,
		659px 1772px #fff, 240px 1068px #fff, 31px 1210px #fff, 1182px 39px #fff,
		744px 1534px #fff, 588px 1971px #fff, 1997px 1578px #fff,
		1445px 1189px #fff, 1334px 1253px #fff, 119px 665px #fff,
		1694px 1666px #fff, 1697px 1050px #fff, 1893px 759px #fff,
		1272px 939px #fff, 249px 194px #fff, 1450px 1627px #fff,
		921px 348px #fff, 1830px 1172px #fff, 1658px 1003px #fff,
		1391px 726px #fff, 503px 1700px #fff, 674px 65px #fff, 2px 339px #fff,
		1307px 1334px #fff, 1627px 1274px #fff, 550px 315px #fff,
		1472px 417px #fff, 1863px 144px #fff, 1390px 1137px #fff;
	animation: animStar 100s linear infinite;
}
#stars2:after {
	content: " ";
	position: absolute;
	top: 2000px;
	width: 2px;
	height: 2px;
	background: transparent;
	box-shadow: 151px 234px #fff, 843px 37px #fff, 1779px 102px #fff,
		1351px 1268px #fff, 780px 340px #fff, 57px 1563px #fff,
		1581px 1350px #fff, 1705px 593px #fff, 821px 400px #fff,
		971px 1106px #fff, 1483px 362px #fff, 1319px 875px #fff,
		604px 1176px #fff, 1001px 745px #fff, 112px 1941px #fff,
		791px 707px #fff, 1474px 1327px #fff, 1366px 1759px #fff,
		1180px 1146px #fff, 1264px 645px #fff, 1423px 1235px #fff,
		1357px 1798px #fff, 1783px 1407px #fff, 980px 1600px #fff,
		736px 1870px #fff, 1623px 194px #fff, 1786px 1908px #fff,
		1702px 1837px #fff, 557px 1861px #fff, 863px 404px #fff,
		1773px 588px #fff, 1613px 634px #fff, 344px 455px #fff,
		219px 1183px #fff, 1397px 596px #fff, 426px 1072px #fff, 198px 19px #fff,
		1389px 1090px #fff, 893px 1310px #fff, 1768px 1269px #fff,
		718px 774px #fff, 1426px 1884px #fff, 1236px 1390px #fff,
		916px 920px #fff, 193px 841px #fff, 1417px 1344px #fff, 461px 207px #fff,
		450px 465px #fff, 341px 504px #fff, 834px 1867px #fff,
		1675px 1557px #fff, 1232px 316px #fff, 771px 1484px #fff,
		642px 1824px #fff, 625px 1284px #fff, 1098px 1996px #fff,
		1346px 1498px #fff, 1489px 1408px #fff, 1565px 1805px #fff,
		256px 1366px #fff, 932px 1121px #fff, 1524px 1714px #fff,
		739px 1227px #fff, 1246px 246px #fff, 277px 1293px #fff,
		1856px 1740px #fff, 1543px 1178px #fff, 381px 1625px #fff,
		170px 1001px #fff, 1515px 1426px #fff, 1813px 924px #fff,
		1132px 1981px #fff, 1743px 139px #fff, 5px 585px #fff, 946px 1607px #fff,
		1558px 334px #fff, 436px 298px #fff, 55px 1874px #fff, 1963px 134px #fff,
		1376px 1724px #fff, 776px 1833px #fff, 296px 729px #fff,
		1573px 975px #fff, 1070px 1973px #fff, 500px 342px #fff,
		1165px 1672px #fff, 982px 1052px #fff, 1194px 854px #fff,
		3px 1658px #fff, 959px 1674px #fff, 639px 470px #fff, 241px 495px #fff,
		3px 424px #fff, 1500px 1498px #fff, 1333px 1899px #fff,
		1687px 1171px #fff, 732px 1671px #fff, 1055px 38px #fff,
		181px 315px #fff, 1261px 1183px #fff, 868px 1301px #fff,
		976px 1176px #fff, 1710px 334px #fff, 1120px 1754px #fff,
		535px 632px #fff, 548px 332px #fff, 1323px 1864px #fff, 959px 848px #fff,
		1684px 848px #fff, 5px 1125px #fff, 724px 1240px #fff,
		1752px 1382px #fff, 837px 963px #fff, 818px 1030px #fff,
		134px 624px #fff, 1213px 1606px #fff, 1556px 1524px #fff,
		1207px 1910px #fff, 1736px 708px #fff, 795px 1800px #fff,
		1327px 1210px #fff, 28px 1104px #fff, 510px 1501px #fff,
		1891px 1096px #fff, 77px 1323px #fff, 1527px 961px #fff,
		1591px 264px #fff, 1246px 944px #fff, 531px 417px #fff,
		1744px 1435px #fff, 1033px 387px #fff, 816px 47px #fff,
		346px 1209px #fff, 318px 135px #fff, 1604px 599px #fff,
		1204px 1498px #fff, 75px 1250px #fff, 160px 1997px #fff,
		311px 714px #fff, 693px 1953px #fff, 160px 1603px #fff,
		1731px 266px #fff, 1789px 1165px #fff, 1379px 378px #fff,
		731px 1458px #fff, 331px 669px #fff, 286px 1850px #fff,
		1371px 402px #fff, 1928px 328px #fff, 124px 511px #fff,
		782px 1373px #fff, 1688px 667px #fff, 1587px 209px #fff,
		1031px 614px #fff, 775px 1134px #fff, 848px 1349px #fff,
		797px 1695px #fff, 298px 1711px #fff, 720px 1039px #fff, 805px 7px #fff,
		1385px 1639px #fff, 214px 1272px #fff, 92px 49px #fff, 436px 1858px #fff,
		1929px 831px #fff, 1329px 573px #fff, 942px 919px #fff,
		1823px 450px #fff, 4px 1861px #fff, 1348px 482px #fff, 676px 865px #fff,
		659px 1772px #fff, 240px 1068px #fff, 31px 1210px #fff, 1182px 39px #fff,
		744px 1534px #fff, 588px 1971px #fff, 1997px 1578px #fff,
		1445px 1189px #fff, 1334px 1253px #fff, 119px 665px #fff,
		1694px 1666px #fff, 1697px 1050px #fff, 1893px 759px #fff,
		1272px 939px #fff, 249px 194px #fff, 1450px 1627px #fff,
		921px 348px #fff, 1830px 1172px #fff, 1658px 1003px #fff,
		1391px 726px #fff, 503px 1700px #fff, 674px 65px #fff, 2px 339px #fff,
		1307px 1334px #fff, 1627px 1274px #fff, 550px 315px #fff,
		1472px 417px #fff, 1863px 144px #fff, 1390px 1137px #fff;
}

#stars3 {
	width: 3px;
	height: 3px;
	background: transparent;
	box-shadow: 1765px 877px #fff, 958px 1912px #fff, 250px 219px #fff,
		1507px 800px #fff, 731px 1656px #fff, 1879px 1831px #fff,
		997px 1789px #fff, 491px 729px #fff, 240px 1864px #fff, 846px 474px #fff,
		1529px 1979px #fff, 1294px 528px #fff, 424px 121px #fff,
		1705px 1783px #fff, 114px 1621px #fff, 1255px 1796px #fff,
		860px 1853px #fff, 728px 808px #fff, 1250px 275px #fff,
		1639px 1689px #fff, 1706px 192px #fff, 814px 1998px #fff,
		413px 461px #fff, 827px 1182px #fff, 619px 126px #fff, 418px 1740px #fff,
		979px 362px #fff, 87px 1117px #fff, 300px 246px #fff, 214px 1472px #fff,
		1640px 1426px #fff, 344px 1874px #fff, 450px 1710px #fff,
		1232px 1199px #fff, 113px 1706px #fff, 978px 912px #fff,
		405px 569px #fff, 564px 1801px #fff, 1095px 1718px #fff,
		296px 260px #fff, 1967px 101px #fff, 83px 1531px #fff,
		1043px 1952px #fff, 984px 658px #fff, 310px 376px #fff,
		309px 1460px #fff, 466px 1585px #fff, 424px 753px #fff,
		1536px 1470px #fff, 509px 1488px #fff, 1289px 942px #fff,
		477px 1990px #fff, 1874px 975px #fff, 161px 1602px #fff,
		1098px 1131px #fff, 1907px 955px #fff, 930px 879px #fff,
		1265px 1810px #fff, 313px 1881px #fff, 1763px 1765px #fff,
		1815px 948px #fff, 761px 746px #fff, 398px 1596px #fff,
		1482px 1688px #fff, 52px 1567px #fff, 52px 1342px #fff,
		1364px 1948px #fff, 75px 372px #fff, 37px 963px #fff, 783px 1490px #fff,
		1183px 1420px #fff, 256px 1133px #fff, 1960px 740px #fff,
		1271px 1118px #fff, 577px 1597px #fff, 739px 1273px #fff,
		1924px 1124px #fff, 702px 738px #fff, 337px 324px #fff,
		981px 1980px #fff, 133px 1393px #fff, 618px 799px #fff, 16px 1070px #fff,
		523px 1143px #fff, 1593px 1337px #fff, 385px 173px #fff,
		1192px 1446px #fff, 762px 122px #fff, 1787px 1408px #fff,
		1468px 30px #fff, 92px 1450px #fff, 388px 1040px #fff, 615px 839px #fff,
		784px 1947px #fff, 1049px 889px #fff, 1010px 515px #fff,
		1599px 1441px #fff, 1320px 640px #fff, 358px 531px #fff,
		1861px 185px #fff;
	animation: animStar 150s linear infinite;
}
#stars3:after {
	content: " ";
	position: absolute;
	top: 2000px;
	width: 3px;
	height: 3px;
	background: transparent;
	box-shadow: 1765px 877px #fff, 958px 1912px #fff, 250px 219px #fff,
		1507px 800px #fff, 731px 1656px #fff, 1879px 1831px #fff,
		997px 1789px #fff, 491px 729px #fff, 240px 1864px #fff, 846px 474px #fff,
		1529px 1979px #fff, 1294px 528px #fff, 424px 121px #fff,
		1705px 1783px #fff, 114px 1621px #fff, 1255px 1796px #fff,
		860px 1853px #fff, 728px 808px #fff, 1250px 275px #fff,
		1639px 1689px #fff, 1706px 192px #fff, 814px 1998px #fff,
		413px 461px #fff, 827px 1182px #fff, 619px 126px #fff, 418px 1740px #fff,
		979px 362px #fff, 87px 1117px #fff, 300px 246px #fff, 214px 1472px #fff,
		1640px 1426px #fff, 344px 1874px #fff, 450px 1710px #fff,
		1232px 1199px #fff, 113px 1706px #fff, 978px 912px #fff,
		405px 569px #fff, 564px 1801px #fff, 1095px 1718px #fff,
		296px 260px #fff, 1967px 101px #fff, 83px 1531px #fff,
		1043px 1952px #fff, 984px 658px #fff, 310px 376px #fff,
		309px 1460px #fff, 466px 1585px #fff, 424px 753px #fff,
		1536px 1470px #fff, 509px 1488px #fff, 1289px 942px #fff,
		477px 1990px #fff, 1874px 975px #fff, 161px 1602px #fff,
		1098px 1131px #fff, 1907px 955px #fff, 930px 879px #fff,
		1265px 1810px #fff, 313px 1881px #fff, 1763px 1765px #fff,
		1815px 948px #fff, 761px 746px #fff, 398px 1596px #fff,
		1482px 1688px #fff, 52px 1567px #fff, 52px 1342px #fff,
		1364px 1948px #fff, 75px 372px #fff, 37px 963px #fff, 783px 1490px #fff,
		1183px 1420px #fff, 256px 1133px #fff, 1960px 740px #fff,
		1271px 1118px #fff, 577px 1597px #fff, 739px 1273px #fff,
		1924px 1124px #fff, 702px 738px #fff, 337px 324px #fff,
		981px 1980px #fff, 133px 1393px #fff, 618px 799px #fff, 16px 1070px #fff,
		523px 1143px #fff, 1593px 1337px #fff, 385px 173px #fff,
		1192px 1446px #fff, 762px 122px #fff, 1787px 1408px #fff,
		1468px 30px #fff, 92px 1450px #fff, 388px 1040px #fff, 615px 839px #fff,
		784px 1947px #fff, 1049px 889px #fff, 1010px 515px #fff,
		1599px 1441px #fff, 1320px 640px #fff, 358px 531px #fff,
		1861px 185px #fff;
}

#title {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	color: #fff;
	text-align: center;
	font-family: "lato", sans-serif;
	font-weight: 300;
	font-size: 50px;
	letter-spacing: 10px;
	margin-top: -60px;
	padding-left: 10px;
}
#title span {
	background: -webkit-linear-gradient(white, #38495a);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

@keyframes animStar {
	from {
		transform: translateY(0px);
	}
	to {
		transform: translateY(-2000px);
	}
}

#loader {
	width: 80px;
	height: 40px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -20px -40px;
	z-index: 1000;
}

.lightsaber {
	position: absolute;
	width: 4px;
	height: 12px;
	background-color: #666;
	border-radius: 1px;
	bottom: 0;
}

.lightsaber.ls-left {
	left: 0;
}

.lightsaber.ls-right {
	right: 0;
}

.lightsaber:before {
	position: absolute;
	content: " ";
	display: block;
	width: 2px;
	height: 25px;
	max-height: 1px;
	left: 1px;
	top: 1px;
	background-color: #fff;
	border-radius: 1px;
	-webkit-transform: rotateZ(180deg);
	transform: rotateZ(180deg);
	-webkit-transform-origin: center top;
	-ms-transform-origin: center top;
	transform-origin: center top;
}

.lightsaber:after {
	position: absolute;
	content: " ";
	display: block;
	width: 2px;
	height: 2px;
	left: 1px;
	top: 4px;
	background-color: #fff;
	border-radius: 50%;
}

.ls-particles {
	position: absolute;
	left: 42px;
	top: 10px;
	width: 1px;
	height: 5px;
	background-color: rgb(51, 51, 51, 0);
	-webkit-transform: rotateZ(0deg);
	transform: rotateZ(0deg);
}

.lightsaber.ls-green:before {
	-webkit-animation: showlightgreen 2s ease-in-out infinite 1s;
	animation: showlightgreen 2s ease-in-out infinite 1s;
}

.lightsaber.ls-red:before {
	-webkit-animation: showlightred 2s ease-in-out infinite 1s;
	animation: showlightred 2s ease-in-out infinite 1s;
}

.lightsaber.ls-left {
	-webkit-animation: fightleft 2s ease-in-out infinite 1s;
	animation: fightleft 2s ease-in-out infinite 1s;
}

.lightsaber.ls-right {
	-webkit-animation: fightright 2s ease-in-out infinite 1s;
	animation: fightright 2s ease-in-out infinite 1s;
}

.ls-particles.ls-part-1 {
	-webkit-animation: particles1 2s ease-out infinite 1s;
	animation: particles1 2s ease-out infinite 1s;
}

.ls-particles.ls-part-2 {
	-webkit-animation: particles2 2s ease-out infinite 1s;
	animation: particles2 2s ease-out infinite 1s;
}

.ls-particles.ls-part-3 {
	-webkit-animation: particles3 2s ease-out infinite 1s;
	animation: particles3 2s ease-out infinite 1s;
}

.ls-particles.ls-part-4 {
	-webkit-animation: particles4 2s ease-out infinite 1s;
	animation: particles4 2s ease-out infinite 1s;
}

.ls-particles.ls-part-5 {
	-webkit-animation: particles5 2s ease-out infinite 1s;
	animation: particles5 2s ease-out infinite 1s;
}

@-webkit-keyframes showlightgreen {
	0% {
		max-height: 0;
		box-shadow: 0 0 0 0 #87c054;
	}

	5% {
		box-shadow: 0 0 4px 2px #87c054;
	}

	10% {
		max-height: 22px;
	}

	80% {
		max-height: 22px;
	}

	85% {
		box-shadow: 0 0 4px 2px #87c054;
	}

	100% {
		max-height: 0;
		box-shadow: 0 0 0 0 #87c054;
	}
}

@-webkit-keyframes showlightred {
	0% {
		max-height: 0;
		box-shadow: 0 0 0 0 #f06363;
	}

	20% {
		box-shadow: 0 0 4px 2px #f06363;
	}

	25% {
		max-height: 22px;
	}

	80% {
		max-height: 22px;
	}

	85% {
		box-shadow: 0 0 4px 2px #f06363;
	}

	100% {
		max-height: 0;
		box-shadow: 0 0 0 0 #f06363;
	}
}

@-webkit-keyframes fightleft {
	0% {
		-webkit-transform: rotateZ(0deg);
		transform: rotateZ(0deg);
		left: 0;
		bottom: 0;
	}

	30% {
		-webkit-transform: rotateZ(0deg);
		transform: rotateZ(0deg);
		bottom: 0;
	}

	40% {
		-webkit-transform: rotateZ(45deg);
		transform: rotateZ(45deg);
		left: 0;
		bottom: 2px;
	}

	45% {
		-webkit-transform: rotateZ(65deg);
		transform: rotateZ(65deg);
		left: 0;
	}

	65% {
		-webkit-transform: rotateZ(410deg);
		transform: rotateZ(410deg);
		left: 30px;
		bottom: 10px;
	}

	95% {
		-webkit-transform: rotateZ(410deg);
		transform: rotateZ(410deg);
		left: 0;
		bottom: 0;
	}

	100% {
		-webkit-transform: rotateZ(360deg);
		transform: rotateZ(360deg);
		left: 0;
		bottom: 0;
	}
}

@-webkit-keyframes fightright {
	0% {
		-webkit-transform: rotateZ(0deg);
		transform: rotateZ(0deg);
		right: 0;
		bottom: 0;
	}

	30% {
		-webkit-transform: rotateZ(0deg);
		transform: rotateZ(0deg);
		bottom: 0;
	}

	45% {
		-webkit-transform: rotateZ(-45deg);
		transform: rotateZ(-45deg);
		right: 0;
		bottom: 2px;
	}

	50% {
		-webkit-transform: rotateZ(-65deg);
		transform: rotateZ(-65deg);
		right: 0;
	}

	68% {
		-webkit-transform: rotateZ(-410deg);
		transform: rotateZ(-410deg);
		right: 27px;
		bottom: 13px;
	}

	95% {
		-webkit-transform: rotateZ(-410deg);
		transform: rotateZ(-410deg);
		right: 0;
		bottom: 0;
	}

	100% {
		-webkit-transform: rotateZ(-360deg);
		transform: rotateZ(-360deg);
		right: 0;
		bottom: 0;
	}
}

@-webkit-keyframes particles1 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(35deg) translateY(0px);
		transform: rotateZ(35deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(35deg) translateY(0px);
		transform: rotateZ(35deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(35deg) translateY(0px);
		transform: rotateZ(35deg) translateY(0px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(35deg) translateY(-30px);
		transform: rotateZ(35deg) translateY(-30px);
	}
}

@-webkit-keyframes particles2 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-65deg) translateY(0px);
		transform: rotateZ(-65deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-65deg) translateY(0px);
		transform: rotateZ(-65deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(-65deg) translateY(0px);
		transform: rotateZ(-65deg) translateY(0px);
	}

	95% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-65deg) translateY(-40px);
		transform: rotateZ(-65deg) translateY(-40px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-65deg) translateY(-40px);
		transform: rotateZ(-65deg) translateY(-40px);
	}
}

@-webkit-keyframes particles3 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-75deg) translateY(0px);
		transform: rotateZ(-75deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-75deg) translateY(0px);
		transform: rotateZ(-75deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(-75deg) translateY(0px);
		transform: rotateZ(-75deg) translateY(0px);
	}

	97% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-75deg) translateY(-35px);
		transform: rotateZ(-75deg) translateY(-35px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-75deg) translateY(-35px);
		transform: rotateZ(-75deg) translateY(-35px);
	}
}

@-webkit-keyframes particles4 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-25deg) translateY(0px);
		transform: rotateZ(-25deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-25deg) translateY(0px);
		transform: rotateZ(-25deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(-25deg) translateY(0px);
		transform: rotateZ(-25deg) translateY(0px);
	}

	97% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-25deg) translateY(-30px);
		transform: rotateZ(-25deg) translateY(-30px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-25deg) translateY(-30px);
		transform: rotateZ(-25deg) translateY(-30px);
	}
}

@-webkit-keyframes particles5 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(65deg) translateY(0px);
		transform: rotateZ(65deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(65deg) translateY(0px);
		transform: rotateZ(65deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(65deg) translateY(0px);
		transform: rotateZ(65deg) translateY(0px);
	}

	97% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(65deg) translateY(-35px);
		transform: rotateZ(65deg) translateY(-35px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(65deg) translateY(-35px);
		transform: rotateZ(65deg) translateY(-35px);
	}
}

@keyframes showlightgreen {
	0% {
		max-height: 0;
		box-shadow: 0 0 0 0 #87c054;
	}

	5% {
		box-shadow: 0 0 4px 2px #87c054;
	}

	10% {
		max-height: 22px;
	}

	80% {
		max-height: 22px;
	}

	85% {
		box-shadow: 0 0 4px 2px #87c054;
	}

	100% {
		max-height: 0;
		box-shadow: 0 0 0 0 #87c054;
	}
}

@keyframes showlightred {
	0% {
		max-height: 0;
		box-shadow: 0 0 0 0 #f06363;
	}

	20% {
		box-shadow: 0 0 4px 2px #f06363;
	}

	25% {
		max-height: 22px;
	}

	80% {
		max-height: 22px;
	}

	85% {
		box-shadow: 0 0 4px 2px #f06363;
	}

	100% {
		max-height: 0;
		box-shadow: 0 0 0 0 #f06363;
	}
}

@keyframes fightleft {
	0% {
		-webkit-transform: rotateZ(0deg);
		transform: rotateZ(0deg);
		left: 0;
		bottom: 0;
	}

	30% {
		-webkit-transform: rotateZ(0deg);
		transform: rotateZ(0deg);
		bottom: 0;
	}

	40% {
		-webkit-transform: rotateZ(45deg);
		transform: rotateZ(45deg);
		left: 0;
		bottom: 2px;
	}

	45% {
		-webkit-transform: rotateZ(65deg);
		transform: rotateZ(65deg);
		left: 0;
	}

	65% {
		-webkit-transform: rotateZ(410deg);
		transform: rotateZ(410deg);
		left: 30px;
		bottom: 10px;
	}

	95% {
		-webkit-transform: rotateZ(410deg);
		transform: rotateZ(410deg);
		left: 0;
		bottom: 0;
	}

	100% {
		-webkit-transform: rotateZ(360deg);
		transform: rotateZ(360deg);
		left: 0;
		bottom: 0;
	}
}

@keyframes fightright {
	0% {
		-webkit-transform: rotateZ(0deg);
		transform: rotateZ(0deg);
		right: 0;
		bottom: 0;
	}

	30% {
		-webkit-transform: rotateZ(0deg);
		transform: rotateZ(0deg);
		bottom: 0;
	}

	45% {
		-webkit-transform: rotateZ(-45deg);
		transform: rotateZ(-45deg);
		right: 0;
		bottom: 2px;
	}

	50% {
		-webkit-transform: rotateZ(-65deg);
		transform: rotateZ(-65deg);
		right: 0;
	}

	68% {
		-webkit-transform: rotateZ(-410deg);
		transform: rotateZ(-410deg);
		right: 27px;
		bottom: 13px;
	}

	95% {
		-webkit-transform: rotateZ(-410deg);
		transform: rotateZ(-410deg);
		right: 0;
		bottom: 0;
	}

	100% {
		-webkit-transform: rotateZ(-360deg);
		transform: rotateZ(-360deg);
		right: 0;
		bottom: 0;
	}
}

@keyframes particles1 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(35deg) translateY(0px);
		transform: rotateZ(35deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(35deg) translateY(0px);
		transform: rotateZ(35deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(35deg) translateY(0px);
		transform: rotateZ(35deg) translateY(0px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(35deg) translateY(-30px);
		transform: rotateZ(35deg) translateY(-30px);
	}
}

@keyframes particles2 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-65deg) translateY(0px);
		transform: rotateZ(-65deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-65deg) translateY(0px);
		transform: rotateZ(-65deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(-65deg) translateY(0px);
		transform: rotateZ(-65deg) translateY(0px);
	}

	95% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-65deg) translateY(-40px);
		transform: rotateZ(-65deg) translateY(-40px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-65deg) translateY(-40px);
		transform: rotateZ(-65deg) translateY(-40px);
	}
}

@keyframes particles3 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-75deg) translateY(0px);
		transform: rotateZ(-75deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-75deg) translateY(0px);
		transform: rotateZ(-75deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(-75deg) translateY(0px);
		transform: rotateZ(-75deg) translateY(0px);
	}

	97% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-75deg) translateY(-35px);
		transform: rotateZ(-75deg) translateY(-35px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-75deg) translateY(-35px);
		transform: rotateZ(-75deg) translateY(-35px);
	}
}

@keyframes particles4 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-25deg) translateY(0px);
		transform: rotateZ(-25deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-25deg) translateY(0px);
		transform: rotateZ(-25deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(-25deg) translateY(0px);
		transform: rotateZ(-25deg) translateY(0px);
	}

	97% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-25deg) translateY(-30px);
		transform: rotateZ(-25deg) translateY(-30px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(-25deg) translateY(-30px);
		transform: rotateZ(-25deg) translateY(-30px);
	}
}

@keyframes particles5 {
	0% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(65deg) translateY(0px);
		transform: rotateZ(65deg) translateY(0px);
	}

	63% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(65deg) translateY(0px);
		transform: rotateZ(65deg) translateY(0px);
	}

	64% {
		background-color: rgba(51, 51, 51, 1);
		-webkit-transform: rotateZ(65deg) translateY(0px);
		transform: rotateZ(65deg) translateY(0px);
	}

	97% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(65deg) translateY(-35px);
		transform: rotateZ(65deg) translateY(-35px);
	}

	100% {
		background-color: rgba(51, 51, 51, 0);
		-webkit-transform: rotateZ(65deg) translateY(-35px);
		transform: rotateZ(65deg) translateY(-35px);
	}
}
</style>