function flashHeight() {
	var par = $(window.parent.document.getElementById("commenIframe"));
	par.height($(document).height());
}

$(function() {
    var counter = 0; /*计数器*/
    var index = 0; /*offset*/
    var pageSize = 5; /*size*/
	var view = $(window.parent.document.getElementsByClassName("title")).text();
	$(window.parent.document.getElementById("commenIframe")).height(0);
	$(window.parent.document.getElementById("lookMoreButton")).fadeIn();
	$(window.parent.document.getElementById("moreCommentLink")).fadeOut();
    getData(view, index, pageSize);
	$(window.parent.document.getElementById("lookMoreButton")).click(function() {
        counter ++;
        index = counter * pageSize;
        getData(view, index, pageSize);
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
			var result_dict = eval(response);
			var sum = result_dict['comments'].length;
			if (sum < pageSize){
				pageSize = sum;
				$(window.parent.document.getElementById("lookMoreButton")).fadeOut();
				$(window.parent.document.getElementById("moreCommentLink")).fadeIn();
				var str = '<a href="';
				str = str + result_dict['url'].url
				str = str + '" >再无更多内容，点击跳转到原网站</a>';
                window.parent.document.getElementById("moreCommentLink").innerHTML = str;
			}
			addComments(result_dict['comments'], pageSize, index, view);


		}
	})

}

var commomJosn = {
	userImg: "../img/Yimg3.png",
	userName:"@粉团子PINK",
	userLabel:"旅游达人",
	commnet: "@粉团子PINK  泰国最有名的冬阴功汤，是以新鲜大虾煮成的酸辣汤，口味既辣又酸且甜，不仅用到了大量的咖喱，还要加入柠檬叶，香茅，辣椒等滋味独特的天然香料来调味，所以这道这道汤酸酸辣辣香香甜甜，可以说是五味俱全。"
}

function getTranslation(view, index) {
    var u = '/search/get_translate?scene_name=' + view + '&index=' + index.toString() + '&lang=eng';
    console.log(u);
    $.ajax({
        type: "get",
        url: u,
        datatype: 'json',
        success: function (response) {
            console.log(response);
            var resultJson = eval('('+response+')');
            var str = '<div class="user"><div class="media"><div class="pull-left"><div class="ph_move"><img src="';
            str = str + resultJson["head"];
            str = str + '" class="img-circle"></div><div id="user_name">';
            str = str + resultJson["user_name"];
            str = str + '</div><p class="level">&nbsp';
            str = str + resultJson["userLabel"];
            str = str + '</p></div><div class="media-body"><p class="user_comment"><span class="user_comment">';
            str = str + resultJson["content"];
            str = str + '</span></p></div></div></div><hr />';
            var buttonId = 'translation'+String(index)
            console.log(buttonId);
            document.getElementById(buttonId).innerHTML = str;
            flashHeight();
        }
    })
}



function addComments(commentData, pageSize, index, view) {
		for (var i = 0; i < pageSize; i++){
		    var buttonId = 'translation'+String(index*pageSize+i);
            var json = eval('(' + commentData[i] + ')');
            var str = '<div class="user"><div class="media"><div class="pull-left"><div class="ph_move"><img src="';
            str = str + json["head"];
            str = str + '" class="img-circle"></div><div id="user_name">';
            str = str + json["user_name"];
            str = str + '</div><p class="level">&nbsp';
            str = str + json["userLabel"];
            str = str + '</p></div><div class="media-body"><p class="user_comment"><span class="user_comment">';
            str = str + json["content"];
            str = str + '<button id="' + buttonId + '">翻译</button>';
            str = str + '</span></p></div></div></div><hr />';
            document.getElementById("body").innerHTML = document.getElementById("body").innerHTML + str;
            flashHeight();

        }


        for (var j = 0; j < pageSize; j++){
            var num = index*pageSize+j;
            var button_name = 'translation'+String(num);
            console.log(button_name);
            document.getElementById(button_name).onclick = function () {
                console.log(num);
                getTranslation(view, num);
            }
        }

}