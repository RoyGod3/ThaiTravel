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

//暂时设置最大页面为100
var maxPage = 100;
//换页按钮的页码设置
window.onload = function() {
	var pageNow = -1;
	if(window.location.href.split("page=")[1] == null){
		pageNow = 1;
	}else{
		pageNow = parseInt(window.location.href.split("page=")[1]);
	}
	if(pageNow >= maxPage - 2) {  //设置页数为98~100时的页码
		document.getElementById("pageNum1").innerText = maxPage - 2;
		document.getElementById("pageNum1").onclick = function() {
			window.location.href = "hotSearch.html?page=" + (maxPage - 2);
		}
		document.getElementById("pageNum2").innerText = maxPage - 1;
		document.getElementById("pageNum2").onclick = function() {
			window.location.href = "hotSearch.html?page=" + (maxPage - 1);
		}
		document.getElementById("pageNum3").innerText = maxPage;
		document.getElementById("pageNum3").onclick = function() {
			window.location.href = "hotSearch.html?page=" + (maxPage);
		}
	} else if(pageNow <= 1) { //设置页数为1时的页码
		document.getElementById("pageNum1").innerText = 1;
		document.getElementById("pageNum1").onclick = function() {
			window.location.href = "hotSearch.html?page=" + (1);
		}
		document.getElementById("pageNum2").innerText = 2;
		document.getElementById("pageNum2").onclick = function() {
			window.location.href = "hotSearch.html?page=" + (2);
		}
		document.getElementById("pageNum3").innerText = 3;
		document.getElementById("pageNum3").onclick = function() {
			window.location.href = "hotSearch.html?page=" + (3);
		}
	} else {
		document.getElementById("pageNum1").innerText = pageNow - 1;
		document.getElementById("pageNum1").onclick = function() {
			window.location.href = "hotSearch.html?page=" + (pageNow - 1);
		}
		document.getElementById("pageNum2").innerText = pageNow;
		document.getElementById("pageNum2").onclick = function() {
			window.location.href = "hotSearch.html?page=" + (pageNow);
		}
		document.getElementById("pageNum3").innerText = pageNow + 1;
		document.getElementById("pageNum3").onclick = function() {
			window.location.href = "hotSearch.html?page=" + (pageNow + 1);
		}
	}
	document.getElementById("pagePrev").onclick = function() {
		if(pageNow == 1) {
			alert("已经是第一页了！");
			return;
		}
		window.location.href = "hotSearch.html?page=" + (pageNow - 1);
	}
	document.getElementById("pageNext").onclick = function() {
		if(pageNow == maxPage) {
			alert("已经是最后一页了！");
			return;
		}
		window.location.href = "hotSearch.html?page=" + (pageNow + 1);
	}
	for (var i = 0; i < 2; i++) {
		//每行加载4张图片及文字简介
		for(var j = 0;j<4; j++) {
			addOneNote(josnModle)
		}
	}
}

var josnModle = {
	//动态加载进来的数据的格式
	picSrc: "img/turtle.jpg", //图片的链接
	titleSrc: "detailCh.html", //具体页面链接
	titleText: "错过等半年丨在斯米兰群岛，邂逅大海龟！",  //地点文字简介
	address:"目的地：斯米兰"
}

//动态加载数据，最后的str即为原本页面呈现的静态html代码
function addOneNote(josnModle) {
	var str = '<div class="col-md-3 col"><div class="content"><div class="content-img"><a href="#"><img src="';
	str = str + josnModle["picSrc"];
	str = str + '" style="width: 200px; height: 200px;" class=" media-object" /></a></div><div class="word"><a href=""'
	str = str + josnModle["titleSrc"];
	str = str + '"><p>'
	str = str + josnModle["titleText"];
	str = str + '</p></a><p class="word-p">'
	str = str + josnModle["address"]
	str = str + '</p></div></div></div>	'
	document.getElementById("pictureContent").innerHTML = document.getElementById("pictureContent").innerHTML + str;
}