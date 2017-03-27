function flashHeight() {
	var par = $(window.parent.document.getElementById("commenIframe"));
	par.height($(document).height());
}

$(function() {
	$(window.parent.document.getElementById("commenIframe")).height(0);
	$(window.parent.document.getElementById("lookMoreButton")).fadeIn();
	$(window.parent.document.getElementById("moreCommentLink")).fadeOut();
	addSomeComment(commomJosnListCh);
	var comment_numb = 5;
	$(window.parent.document.getElementById("lookMoreButton")).click(function() {
		if(commomJosnListCh.length > comment_numb-1) {
			$(window.parent.document.getElementById("moreCommentLink")).hide();
			addSomeComment(commomJosnListCh);
		}else{
			if(commomJosnListCh.length == 0) {
				$(window.parent.document.getElementById("moreCommentLink")).fadeIn();
				$(window.parent.document.getElementById("lookMoreButton")).fadeOut();
			}else{
				$(window.parent.document.getElementById("lookMoreButton")).fadeOut();
				$(window.parent.document.getElementById("moreCommentLink")).show();
//				alert("再无更多内容，点击跳转到原网站");
				addSomeComment(commomJosnListCh);
			}
			return;
		}
	})
})

var commomJosn = {
	userImg: "../img/Yimg3.png",
	userName:"@粉团子PINK",
	userLabel:"旅游达人",
	commnet: "@粉团子PINK  泰国最有名的冬阴功汤，是以新鲜大虾煮成的酸辣汤，口味既辣又酸且甜，不仅用到了大量的咖喱，还要加入柠檬叶，香茅，辣椒等滋味独特的天然香料来调味，所以这道这道汤酸酸辣辣香香甜甜，可以说是五味俱全。"
}

var commomJosnListCh = [{
	userImg: "../img/Yimg3.png",
	userName:"@粉团子PINK",
	userLabel:"旅游达人",
	commnet: "@粉团子PINK  泰国最有名的冬阴功汤，是以新鲜大虾煮成的酸辣汤，口味既辣又酸且甜，不仅用到了大量的咖喱，还要加入柠檬叶，香茅，辣椒等滋味独特的天然香料来调味，所以这道这道汤酸酸辣辣香香甜甜，可以说是五味俱全。"
},
{
	userImg: "../img/Yimg2.png",
	userName:"@粉团子PINK",
	userLabel:"旅游达人",
	commnet: "@粉团子PINK  泰国最有名的冬阴功汤，是以新鲜大虾煮成的酸辣汤，口味既辣又酸且甜，不仅用到了大量的咖喱，还要加入柠檬叶，香茅，辣椒等滋味独特的天然香料来调味，所以这道这道汤酸酸辣辣香香甜甜，可以说是五味俱全。"
},
{
	userImg: "../img/Yimg2.png",
	userName:"@粉团子PINK",
	userLabel:"旅游达人",
	commnet: "@粉团子PINK  泰国最有名的冬阴功汤，是以新鲜大虾煮成的酸辣汤，口味既辣又酸且甜，不仅用到了大量的咖喱，还要加入柠檬叶，香茅，辣椒等滋味独特的天然香料来调味，所以这道这道汤酸酸辣辣香香甜甜，可以说是五味俱全。"
},
{
	userImg: "../img/Yimg2.png",
	userName:"@粉团子PINK",
	userLabel:"旅游达人",
	commnet: "@粉团子PINK  泰国最有名的冬阴功汤，是以新鲜大虾煮成的酸辣汤，口味既辣又酸且甜，不仅用到了大量的咖喱，还要加入柠檬叶，香茅，辣椒等滋味独特的天然香料来调味，所以这道这道汤酸酸辣辣香香甜甜，可以说是五味俱全。"
},
{
	userImg: "../img/Yimg2.png",
	userName:"@粉团子PINK",
	userLabel:"旅游达人",
	commnet: "@粉团子PINK  泰国最有名的冬阴功汤，是以新鲜大虾煮成的酸辣汤，口味既辣又酸且甜，不仅用到了大量的咖喱，还要加入柠檬叶，香茅，辣椒等滋味独特的天然香料来调味，所以这道这道汤酸酸辣辣香香甜甜，可以说是五味俱全。"
}
];
//for(var i = 0; i < 5; i++) {
//	commomJosnList.push(commomJosn);
//}

function addSomeComment(commomJosnListCh) {
	for(var i = 0; i < commomJosnListCh.length; i++) {
		addAnComment(commomJosnListCh[i]);
	}
}

function addAnComment(commomJosnCh) {
	var str = '<div class="user"><div class="media"><div class="pull-left"><div class="ph_move"><img src="';
	str = str + commomJosnCh["userImg"];
	str = str + '" class="img-circle"></div><div id="user_name">';
	str = str + commomJosnCh["userName"];
	str = str + '</div><p class="level">&nbsp';
	str = str + commomJosnCh["userLabel"];
	str = str + '</p></div><div class="media-body"><p class="user_comment"><span class="user_comment">';
	str = str + commomJosnCh["commnet"];
	str = str + '</span></p></div></div></div><hr />';
	document.getElementById("body").innerHTML = document.getElementById("body").innerHTML + str;
	flashHeight();
}