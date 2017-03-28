function flashHeight() {
	var par = $(window.parent.document.getElementById("commenIframe"));
	par.height($(document).height());
}

$(function() {
    var counter = 0; /*计数器*/
    var pageStart = 0; /*offset*/
    var pageSize = 5; /*size*/
	var view = $(window.parent.document.getElementsByClassName("title")).text();
	$(window.parent.document.getElementById("commenIframe")).height(0);
	$(window.parent.document.getElementById("lookMoreButton")).fadeIn();
	$(window.parent.document.getElementById("moreCommentLink")).fadeOut();
    getData(view, pageStart, pageSize);
	$(window.parent.document.getElementById("lookMoreButton")).click(function() {
        counter ++;
        pageStart = counter * pageSize;
        getData(view, pageStart, pageSize);
	})
})
function getData(view, index, pageSize) {
    var u = '';
    u = u+'/search/get_comments/?scene=' + view + '&offset=' + index.toString() + '&lang=eng';
	$.ajax({
		type: 'GET',
		url: u,
		dataType: 'json',
		success: function(response){
			var commentData = eval(response);
			var sum = commentData.length;
			if (sum < pageSize){
				pageSize = sum;
			}

//			document.write(sum);
			if (sum > pageSize - 1){
                $(window.parent.document.getElementById("moreCommentLink")).hide();
                addComments(commentData, pageSize);
			}else{
			    if(sum == 0) {
                    $(window.parent.document.getElementById("moreCommentLink")).fadeIn();
                    $(window.parent.document.getElementById("lookMoreButton")).fadeOut();
 			    }else{
                    $(window.parent.document.getElementById("moreCommentLink")).show();
                    addComments(commentData, pageSize);
			    }
			}

		}
	})

}

var commomJosn = {
	userImg: "../img/Yimg3.png",
	userName:"@粉团子PINK",
	userLabel:"旅游达人",
	commnet: "@粉团子PINK  泰国最有名的冬阴功汤，是以新鲜大虾煮成的酸辣汤，口味既辣又酸且甜，不仅用到了大量的咖喱，还要加入柠檬叶，香茅，辣椒等滋味独特的天然香料来调味，所以这道这道汤酸酸辣辣香香甜甜，可以说是五味俱全。"
}



//function addSomeComment(commomJosnListCh) {
//    comments = eval(commomJosnListCh);
//	for(var i = 0; i < comments.length; i++) {
//	    var json = eval('(' + comments[i] + ')');
//		addAnComment(json);
//	}
//}

function addComments(commentData, pageSize) {
		for (var i = 0; i < pageSize; i++){
            var json = eval('(' + commentData[i] + ')');
            var str = '<div class="user"><div class="media"><div class="pull-left"><div class="ph_move"><img src="';
            str = str + json["head"];
            str = str + '" class="img-circle"></div><div id="user_name">';
            str = str + json["user_name"];
            str = str + '</div><p class="level">&nbsp';
            str = str + json["user_label"];
            str = str + '</p></div><div class="media-body"><p class="user_comment"><span class="user_comment">';
            str = str + json["content"];
            str = str + '</span></p></div></div></div><hr />';
            document.getElementById("body").innerHTML = document.getElementById("body").innerHTML + str;
            flashHeight();
        }
}