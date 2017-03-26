function flashHeight() {
	var par = $(window.parent.document.getElementById("commenIframe"));
	par.height($(document).height());
}
$(function() {
	$(window.parent.document.getElementById("commenIframe")).height(0);
	addSomeComment(commomJosnList);
	$(window.parent.document.getElementById("lookMore")).click(function() {
		if(commomJosnList.length > 0) {
			addSomeComment(commomJosnList);
		}else{
			alert("no more!");
			return;
		}
	})
})

var commomJosn = {
	userImg: "../img/Yimg2.png",
	commnet: "@jack  What an amazing experience we had. The canoeing was just fabulous. Scenery is breathtaking. Caves are beautiful. The boat trip there and back was lovely too."
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