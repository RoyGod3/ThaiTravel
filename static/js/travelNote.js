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
//var maxPage = 100;
//换页按钮的页码设置
function init(allScene, maxPage) {
	var pageNow = -1;
	var maxPage = parseInt(maxPage)
	if(parseInt(allScene.length / 10) == (allScene.length / 10)){
	    maxPage = allScene.length;
	}else{
	    maxPage = parseInt(allScene.length / 10) + 1
	}
	if(window.location.href.split("page=")[1] == null){
		pageNow = 1;
	}else{
		pageNow = parseInt(window.location.href.split("page=")[1]);
	}
	if(pageNow >= maxPage - 2) {  //设置页数为98~100时的页码
		document.getElementById("pageNum1").innerText = maxPage - 2;
		document.getElementById("pageNum1").onclick = function() {
			window.location.href = window.location.href.replace(/page=\d*/, "page=") + (maxPage - 2);
		}
		document.getElementById("pageNum2").innerText = maxPage - 1;
		document.getElementById("pageNum2").onclick = function() {
			window.location.href = window.location.href.replace(/page=\d*/, "page=") + (maxPage - 1);
		}
		document.getElementById("pageNum3").innerText = maxPage;
		document.getElementById("pageNum3").onclick = function() {
			window.location.href = window.location.href.replace(/page=\d*/, "page=") + (maxPage);
		}
	} else if(pageNow <= 1) { //设置页数为1时的页码
		document.getElementById("pageNum1").innerText = 1;
		document.getElementById("pageNum1").onclick = function() {
			window.location.href = window.location.href.replace(/page=\d*/, "page=1");
		}
		document.getElementById("pageNum2").innerText = 2;
		document.getElementById("pageNum2").onclick = function() {
			window.location.href = window.location.href.replace(/page=\d*/, "page=2");
		}
		document.getElementById("pageNum3").innerText = 3;
		document.getElementById("pageNum3").onclick = function() {
			window.location.href = window.location.href.replace(/page=\d*/, "page=3");
			alert(window.location.href)
		}
	} else {
		document.getElementById("pageNum1").innerText = pageNow - 1;
		document.getElementById("pageNum1").onclick = function() {
			window.location.href = window.location.href.replace(/page=\d*/, "page=") + (pageNow - 1);
		}
		document.getElementById("pageNum2").innerText = pageNow;
		document.getElementById("pageNum2").onclick = function() {
			window.location.href = window.location.href.replace(/page=\d*/, "page=") + (pageNow);
		}
		document.getElementById("pageNum3").innerText = pageNow + 1;
		document.getElementById("pageNum3").onclick = function() {
			window.location.href = window.location.href.replace(/page=\d*/, "page=") + (pageNow + 1);
		}
	}
	document.getElementById("pagePrev").onclick = function() {
		if(pageNow == 1) {
			alert("已经是第一页了！");
			return;
		}
		window.location.href = window.location.href.replace(/page=\d*/, "page=") + (pageNow - 1);
	}
	document.getElementById("pageNext").onclick = function() {
		if(pageNow == maxPage) {
			alert("已经是最后一页了！");
			return;
		}
		window.location.href = window.location.href.replace(/page=\d*/, "page=") + (pageNow + 1);
	}

	document.getElementById("firstPage").onclick = function(){
	    window.location.href = window.location.href.replace(/page=\d*/, "page=") + (1);
	}
	document.getElementById("lastPage").onclick = function(){
	    window.location.href = window.location.href.replace(/page=\d*/, "page=") + (maxPage);
	}
    for(var i = 0; i < 10; i++){
	    var json = eval('(' + allScene[i] + ')');
		addOneNote(json);
	}
}

var josnModle = {
	//动态加载进来的数据的格式
	picSrc: "./img/panyawanMid2.png", //图片的链接
	titleSrc: "detailCh.html", //具体页面链接
	titleText: "错过等半年丨在斯米兰群岛，邂逅大海龟！",  //地点文字简介
	ch: 5, //下面三个为加载进来的星星的个数
	en: 3,
	th: 4
}

//动态加载数据，最后的str即为原本页面呈现的静态html代码
function addOneNote(josnModle) {
	var str = '<div class="pic"><img class="picAdd" src="';
	str = str + josnModle["picSrc"];
	str = str + '"/><div class="word"><a href="'
	str = str + josnModle["titleSrc"];
	str = str + '"><p style="font-size: 18px;">'
	str = str + josnModle["titleText"];
	str = str + '</p></a><span >中:</span>'
	//加载评论星星
	for(var i = 0; i < josnModle["ch"]; i++) {
		str = str + '<span class="glyphicon glyphicon-star"></span>'
	}
	str = str + '</br><span >英:</span>'
	for(var i = 0; i < josnModle["en"]; i++) {
		str = str + '<span class="glyphicon glyphicon-star"></span>'
	}
	str = str + '</br><span >泰:</span>'
	for(var i = 0; i < josnModle["th"]; i++) {
		str = str + '<span class="glyphicon glyphicon-star"></span>'
	}
	str = str + '</div></div>'
	document.getElementById("pictureContent").innerHTML = document.getElementById("pictureContent").innerHTML + str;
}