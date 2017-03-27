function flashHeight() {
	var par = $(window.parent.document.getElementById("commenIframe"));
	par.height($(document).height());
}

$(function() {
	$(window.parent.document.getElementById("commenIframe")).height(0);
	$(window.parent.document.getElementById("lookMoreButton")).fadeIn();
	$(window.parent.document.getElementById("moreCommentLink")).fadeOut();
	addSomeComment(commomJosnListEn);
	var comment_numb = 5;
	$(window.parent.document.getElementById("lookMoreButton")).click(function() {
		if(commomJosnListEn.length > comment_numb-1) {
			$(window.parent.document.getElementById("moreCommentLink")).hide();
			addSomeComment(commomJosnListEn);
		}else{
			if(commomJosnListEn.length == 0){
//				alert("再无更多内容，点击跳转到原网站");
				$(window.parent.document.getElementById("moreCommentLink")).fadeIn();
				$(window.parent.document.getElementById("lookMoreButton")).fadeOut();
			}else{
				$(window.parent.document.getElementById("lookMoreButton")).fadeOut();
				$(window.parent.document.getElementById("moreCommentLink")).show();
//				alert("再无更多内容，点击跳转到原网站");
				addmoreComment(commomJosnListEn);
			}
			return;
		}
	})
})

var commomJosn = {
	userImg: "../img/Yimg2.png",
	userName:"@jack",
	userLabel:"旅游达人",
	commnet: "What an amazing experience we had. The canoeing was just fabulous. Scenery is breathtaking. Caves are beautiful. The boat trip there and back was lovely too."
}

var commomJosnListEn = [commomJosn];
//for(var i = 0; i < 5; i++) {
//	commomJosnList.push(commomJosn);
//}

function addSomeComment(commomJosnListEn) {
	for(var i = 0; i < commomJosnListEn.length; i++) {
		addAnComment(commomJosnListEn[i]);
	}
}

function addAnComment(commomJosnEn) {
	var str = '<div class="user"><div class="media"><div class="pull-left"><div class="ph_move"><img src="';
	str = str + commomJosnEn["userImg"];
	str = str + '" class="img-circle"></div><div id="user_name">';
	str = str + commomJosnEn["userName"];
	str = str + '</div><p class="level">&nbsp';
	str = str + commomJosnEn["userLabel"];
	str = str + '</p></div><div class="media-body"><p class="user_comment"><span class="user_comment">';
	str = str + commomJosnEn["commnet"];
	str = str + '</span></p></div></div></div><hr />';
	document.getElementById("body").innerHTML = document.getElementById("body").innerHTML + str;
	flashHeight();
}