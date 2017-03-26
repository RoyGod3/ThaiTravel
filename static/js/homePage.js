//该jq文件的作用是判断输入框是否为空
$(document).ready(function(){
	$("#searchButton").click(function(){
		var searchValue = document.getElementById("input_text").value
		if(searchValue == null || searchValue == ""){
			alert("输入不能为空!");
			return;
		}else{
			return searchValue;
		}
		
	})
})

var josnModle = {
	//动态加载进来的数据的格式
	picSrc: "img/turtle.jpg", //图片的链接
	titleSrc: "detailCh.html", //具体页面链接
	titleText: "斯米兰群岛",  //地点文字简介
	address: "目的地：斯米兰", //下面三个为加载进来的星星的个数
	abstract: "错过等半年丨在斯米兰群岛，邂逅大海龟！"
}

//动态加载数据，最后的str即为原本页面呈现的静态html代码
function addOneNote(josnModle) {
	var str = '<div class="col-md-3 col"><div class="media"><div class="pull-left"><a href="#"><img src="';
	str = str + josnModle["picSrc"];
	str = str + '" style="width: 165px; height: 165px;" class=" media-object" /></a></div><div class="media-body"><a href="'
	str = str + josnModle["titleSrc"];
	str = str + '"><h4 class="media-heading">'
	str = str + josnModle["titleText"];
	str = str + '</h4></a><p class="tab-p2">'
	str = str + josnModle["address"]
	str = str + '</p><p>'
	str = str + josnModle["abstract"]
	str = str + '</p></div></div></div>'
	document.getElementById("fourCommend").innerHTML = document.getElementById("fourCommend").innerHTML + str;
}

 window.onload = function(){
 	for(var i=0;i<4;i++) {
 		addOneNote(josnModle)
 	}
}
