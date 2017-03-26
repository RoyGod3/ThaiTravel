function flashHeight() {
	var par = $(window.parent.document.getElementById("commenIframe"));
	par.height($(document).height());
}

$(function() {
	$(window.parent.document.getElementById("commenIframe")).height(0);
	addSomeComment(commomJosnList)
	$(window.parent.document.getElementById("lookMore")).click(function() {
		if(commomJosnList.length > 0) {
			addSomeComment(commomJosnList);
			 $("#moreCommentLink").hide();
		}else{
			$("#lookMore").fadeout;
			$("#moreCommentLink").show();
			alert("再无更多内容，点击跳转到原网站");
			return;
		}
	})
})

var commomJosn = {
	userImg: "../img/Yimg3.png",
	commnet: "@粉团子PINK  泰国最有名的冬阴功汤，是以新鲜大虾煮成的酸辣汤，口味既辣又酸且甜，不仅用到了大量的咖喱，还要加入柠檬叶，香茅，辣椒等滋味独特的天然香料来调味，所以这道这道汤酸酸辣辣香香甜甜，可以说是五味俱全。"
}

var commomJosnList = [];
for(var i = 0; i < 5; i++) {
	commomJosnList.push(commomJosn);
}

function addSomeComment(commomJosnList) {
	for(var i = 0; i < commomJosnList.length; i++) {
		addAnComment(commomJosnList[i]);
	}
}

function addAnComment(commomJosn) {
	var str = '<div class="user"><div class="media"><div class="pull-left"><img src="';
	str = str + commomJosn["userImg"];
	str = str + '" class="img-circle"></div><div class="media-body"><p>';
	str = str + commomJosn["commnet"];
	str = str + '<hr />';
	document.getElementById("body").innerHTML = document.getElementById("body").innerHTML + str;
	flashHeight();
}