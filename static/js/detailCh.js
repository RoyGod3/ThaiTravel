function commentInit() {
	$("#chIframe").click(function() {
		$("#commenIframe").attr("src", "/static/iframe/detailCommentCh.html");
		document.getElementById("commenIframe");
	});
	$("#enIframe").click(function() {
		$("#commenIframe").attr("src", "/static/iframe/detailCommentEn.html");
	});
	$("#thIframe").click(function() {
		$("#commenIframe").attr("src", "/static/iframe/detailCommentTh.html");
	});
}

var imgGroup1 = ["img/panyawan1.png","img/panyawan3.png","img/panyawan2.png","img/panyawan4.png",];

var josnModle = {
	//动态加载进来的数据的格式
	title: "初涉遊艇领域想选个岛？不来攀牙湾你真的亏大啦", //标题
	totalEva: 4, //总体星级评价颗数
	chEva: 5,  //下面三个分别为隐藏窗口里面的中英泰三国星级评价为加载进来的星星的个数//地点文字简介
	enEva: 3, //
	thEva: 4,
	BigPic:"img/panyawanMid1.png",
	imgGroup:imgGroup1,
	mainBody:"攀牙湾位于普吉岛东北角75公里处，属于攀牙府，被誉为全岛风景最美丽的地方，有泰国的“小桂林”之称。这里遍布着数以百计的形态奇特的石灰岩小岛，小岛的名称与其形状极为吻合。还有巧夺天工的钟乳石岩穴和数不清的怪石、海洞。其中007岛（也称铁钉岛）、钟乳岛石洞 （即佛庙洞和隐士洞）更以其天然奇景而名声在外。",
	tag1:"美食",
	tag2:"好玩",
	tag3:"天堂"
}

//动态加载数据，最后的str即为原本页面呈现的静态html代码
function addArticle(josnModle) {
	var str = '<center><p class="title" >';
	str = str + josnModle["title"];
	str = str + '</p></center><div class="commentLogo"><img src="/static/img/comment.png"><div class="btn-group"><button type="button" class="dropdown-toggle commentLogoButton" data-toggle="dropdown">';
	//加载总评评论星星
	for(var i = 0; i < josnModle["totalEva"]; i++) {
		str = str + '<span class="glyphicon glyphicon-star" style="width: 4px;"></span>&nbsp;';
	}
	
	str = str + '</button><ul class="dropdown-menu pull-right" role="menu" style="color: #ffec4b;"><li ><span style="color:#00344B ;">中:</span>';	
	//加载中国评论星星
	for(var i = 0; i < josnModle["chEva"]; i++) {
		str = str + '<span class="glyphicon glyphicon-star" style="width: 4px;"></span>&nbsp;';
	}
	
	str = str + '</br></li><li><span style="color:#00344B ;">英:</span>';
	//加载英语国家评论星星
	for(var i = 0; i < josnModle["enEva"]; i++) {
		str = str + '<span class="glyphicon glyphicon-star" style="width: 4px;"></span>&nbsp;';
	}
	
	str = str + '</li><li><span style="color:#00344B ;">泰:</span>';	
	//加载泰语评论星星
	for(var i = 0; i < josnModle["thEva"]; i++) {
		str = str + '<span class="glyphicon glyphicon-star" style="width: 4px;"></span>&nbsp;';
	}
	str = str + '</li></ul></div></div><div class="pictures"><div class="BigPic"><img src="';
	str = str + josnModle["BigPic"];
	
	str = str + '"/><div class="picGroup">';
	var imgMaxLength = 4;
	if(josnModle["imgGroup"].length < imgMaxLength ) {
		imgMaxLength = josnModle["imgGroup"].length;
	}else {
		imgMaxLength = 4;
	}
	for(var i = 0; i < imgMaxLength;i++) {
		str = str + '<img src="';
		str = str + josnModle["imgGroup"][i];
		str = str + '"  />';
	}
	
	str = str + '</div></div></div><div class="word"><p>';
	str = str + josnModle["mainBody"];

	var tagMaxLength = 10;
	if(josnModle["tagGroup"].length < tagMaxLength){
	    tagMaxLength = josnModle["tagGroup"].length;
	}

	str = str + '</p><div class="tag">';
	for (var i = 0; i < tagMaxLength; i++){
	    str = str + '<button>'
	    str = str + josnModle["tagGroup"][i];
	    str = str + '</button>';
	}
	str = str + '</div></div>';

	document.getElementById("article").innerHTML = document.getElementById("article").innerHTML + str;
}
