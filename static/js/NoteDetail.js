window.onload = function(){
//    var title = (document.getElementById("wordContent")).text();
    var url = window.location.href;
    console.log(url);
    var id = url.match(/id=\d*/);
    id = String(id).replace('id=','');
//    console.log(String(id));
    getData(id);
};
//动态加载数据，最后的str即为原本页面呈现的静态html代码

function getData(id) {
    var u = '/discover/get_travelnote?id=' + id;
    console.log(u);
	$.ajax({
		type: "GET",
        url: u,
        dataType: 'json',
		success: function (response) {
		    var noteData = eval(response);
		    var noteLength = noteData.length;
		    var title = noteData['title'];
		    var author = noteData['author'];
		    var content = noteData['content'];
            //文章题目、作者
            var str = '<div class="head"><p class="title">';
            str = str + title;
            str = str + '</p ><p class="author">';
            str = str + author;
            str = str + '</p ></div>';
            var contentArray = eval('('+content+')');
		    var contentLength =  contentArray.length;
		    var htmltext = '';
		    for(var i = 0; i < contentLength; i++){
		        var currentNode = (new Function("return " + contentArray[i]))();
                var nodeValue = currentNode['node']
//		        console.log(currentNode);
                if (nodeValue == 'day')
                    htmltext = htmltext + getDay(currentNode);
		        else if(nodeValue == 'node')
                    htmltext = htmltext + getNode(currentNode);
		        else if(nodeValue == 'photo')
                    htmltext = htmltext + getPhoto(currentNode);
		        else if(nodeValue == 'text')
                    htmltext = htmltext + getText(currentNode);
		        else{

                }
            }
            document.getElementById("wordContent").innerHTML = str + htmltext;
//            console.log(htmltext);
//            document.getElementById("wordContent").innerHTML = document.getElementById("wordContent").innerHTML + htmltext;




        }
	})
}

function getDay(content) {
    var str = " ";
    str = str + '<div class="date"><hr class="fengexian"/><h6 ><span class="glyphicon glyphicon-camera tagSize"></span><span class="dayIndex">';
    str = str + content["day_date"];
    str = str + '</span><span class="dayDate">';
    str = str + content["day_index"];
    str = str + '</span></h6></div>	';
    return str;
}

function getNode(content){
    var str = "";
    var score;
    str = str + '<div class="node"><span class="glyphicon glyphicon-edit"></span><div class="word"><p class="addressCh">';
    str = str + content["node_name"];
    str = str + '</p >';
    for (var key in content){
        if (key === "node_name"){
            str = str + '<p class="addressEn">';
            str = str + content["node_name_en"];
            str = str + '</p >';
        }else if(key === "score"){
            str = str + '<p class="starComment">我的评价：';
            for(var i = 0;i < parseInt(content["score"][5]); i++) {
                str = str + '<span class="glyphicon glyphicon-star"></span>';
            }
            str = str + '</p >';
        }else if (key === "comment"){
            str = str + '<p class="comment">';
            str = str + content["comment"];
            str = str + '</p >';
        }else{}

    }
    str = str + '</div></div>';
    return str;
}

function getPhoto(content){
    var str = '<div class="picAndComment">';
    for (var key in content){
        if (key === "src") {
            str = str + '<img class="beWriteImg" src="';
            str = str + content["src"];
            str = str + '">';
        }else if(key === "caption"){
            str = str + '<p class="picComment"><span class="glyphicon glyphicon-comment"></span>&nbsp';
            str = str + content["caption"];
            str = str + '</p >	';
        }
    }
    str = str + '</div>';
    console.log(str)
    return str;

}

function getText(content){
    var str = " ";
    str = str + '<div class="addressComment"><img class="commentPicSizeLeft" src="/static/img/commaLeft.png" /><p class="addressText">';
    str = str + content["text_content"];
    str = str + '</p ><img class="commentPicSizeRight" src="/static/img/commaRight.png"/></div></div>';
    return str;
}

