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
		}else{
			alert("ไม่มีรายละเอียดเพิ่มเติม");
			return;
		}
	})
})

var commomJosn = {
	userImg: "../img/Zimg1.png",
	commnet: "@Teddy  เราจ่ายเงินสำหรับเที่ยวแบบวันเดียวที่ฉัน และสามีของฉันบนนี้วันธรรมดาเข้าอุทยานแห่งชาติ มันเยี่ยมมาก! เรามีความสุขกับทุกส่วนของเรือการเดินทางนี้ ไม่สามารถจำชื่อบริษัททัวร์ แต่ชาวบ้าน ทัศนียภาพที่ดีออกจากถ้ำ สัตว์ป่าและน้ำทะเลสีฟ้า ดีจริง ๆ จ่าย 6000 บาทต่อคนต่อคืนพร้อมอาหาร 2 เราคิดว่าเป็นข้อตกลงที่ดี เพราะมันจะมีไกด์ของเราเองที่เราพายเรือคายัค"
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