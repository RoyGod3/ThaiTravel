function flashHeight() {
	var par = $(window.parent.document.getElementById("commenIframe"));
	par.height($(document).height());
}

$(function() {
	$(window.parent.document.getElementById("commenIframe")).height(0);
	$(window.parent.document.getElementById("lookMoreButton")).fadeIn();
	$(window.parent.document.getElementById("moreCommentLink")).fadeOut();
	addSomeComment(commomJosnListTh);
	var comment_numb = 5;
	$(window.parent.document.getElementById("lookMoreButton")).click(function() {
		if(commomJosnListTh.length > comment_numb-1) {
			$(window.parent.document.getElementById("moreCommentLink")).hide();
			addSomeComment(commomJosnListTh);
		}else{
			if(commomJosnListTh.length == 0){
//				alert("再无更多内容，点击跳转到原网站");
				$(window.parent.document.getElementById("moreCommentLink")).fadeIn();
				$(window.parent.document.getElementById("lookMoreButton")).fadeOut();
			}else{
				$(window.parent.document.getElementById("lookMoreButton")).fadeOut();
				$(window.parent.document.getElementById("moreCommentLink")).show();
//				alert("再无更多内容，点击跳转到原网站");
				addmoreComment(commomJosnListTh);
			}
			return;
		}
	})
})

var commomJosn = {
	userImg: "../img/Zimg1.png",
	userName:"@jack",
	userLabel:"旅游达人",
	commnet: "เราจ่ายเงินสำหรับเที่ยวแบบวันเดียวที่ฉัน และสามีของฉันบนนี้วันธรรมดาเข้าอุทยานแห่งชาติ มันเยี่ยมมาก! เรามีความสุขกับทุกส่วนของเรือการเดินทางนี้ ไม่สามารถจำชื่อบริษัททัวร์ แต่ชาวบ้าน ทัศนียภาพที่ดีออกจากถ้ำ สัตว์ป่าและน้ำทะเลสีฟ้า ดีจริง ๆ จ่าย 6000 บาทต่อคนต่อคืนพร้อมอาหาร 2 เราคิดว่าเป็นข้อตกลงที่ดี เพราะมันจะมีไกด์ของเราเองที่เราพายเรือคายัค"
}

var commomJosnListTh = [
	{
	userImg: "../img/Zimg1.png",
	userName:"@jack",
	userLabel:"旅游达人",
	commnet: "เราจ่ายเงินสำหรับเที่ยวแบบวันเดียวที่ฉัน และสามีของฉันบนนี้วันธรรมดาเข้าอุทยานแห่งชาติ มันเยี่ยมมาก! เรามีความสุขกับทุกส่วนของเรือการเดินทางนี้ ไม่สามารถจำชื่อบริษัททัวร์ แต่ชาวบ้าน ทัศนียภาพที่ดีออกจากถ้ำ สัตว์ป่าและน้ำทะเลสีฟ้า ดีจริง ๆ จ่าย 6000 บาทต่อคนต่อคืนพร้อมอาหาร 2 เราคิดว่าเป็นข้อตกลงที่ดี เพราะมันจะมีไกด์ของเราเองที่เราพายเรือคายัค"
},
{
	userImg: "../img/Zimg1.png",
	userName:"@jack",
	userLabel:"旅游达人",
	commnet: "เราจ่ายเงินสำหรับเที่ยวแบบวันเดียวที่ฉัน และสามีของฉันบนนี้วันธรรมดาเข้าอุทยานแห่งชาติ มันเยี่ยมมาก! เรามีความสุขกับทุกส่วนของเรือการเดินทางนี้ ไม่สามารถจำชื่อบริษัททัวร์ แต่ชาวบ้าน ทัศนียภาพที่ดีออกจากถ้ำ สัตว์ป่าและน้ำทะเลสีฟ้า ดีจริง ๆ จ่าย 6000 บาทต่อคนต่อคืนพร้อมอาหาร 2 เราคิดว่าเป็นข้อตกลงที่ดี เพราะมันจะมีไกด์ของเราเองที่เราพายเรือคายัค"
},
{
	userImg: "../img/Zimg1.png",
	userName:"@jack",
	userLabel:"旅游达人",
	commnet: "เราจ่ายเงินสำหรับเที่ยวแบบวันเดียวที่ฉัน และสามีของฉันบนนี้วันธรรมดาเข้าอุทยานแห่งชาติ มันเยี่ยมมาก! เรามีความสุขกับทุกส่วนของเรือการเดินทางนี้ ไม่สามารถจำชื่อบริษัททัวร์ แต่ชาวบ้าน ทัศนียภาพที่ดีออกจากถ้ำ สัตว์ป่าและน้ำทะเลสีฟ้า ดีจริง ๆ จ่าย 6000 บาทต่อคนต่อคืนพร้อมอาหาร 2 เราคิดว่าเป็นข้อตกลงที่ดี เพราะมันจะมีไกด์ของเราเองที่เราพายเรือคายัค"
},
{
	userImg: "../img/Zimg1.png",
	userName:"@NANA",
	userLabel:"旅游达人",
	commnet: "เราจ่ายเงินสำหรับเที่ยวแบบวันเดียวที่ฉัน และสามีของฉันบนนี้วันธรรมดาเข้าอุทยานแห่งชาติ มันเยี่ยมมาก! เรามีความสุขกับทุกส่วนของเรือการเดินทางนี้ ไม่สามารถจำชื่อบริษัททัวร์ แต่ชาวบ้าน ทัศนียภาพที่ดีออกจากถ้ำ สัตว์ป่าและน้ำทะเลสีฟ้า ดีจริง ๆ จ่าย 6000 บาทต่อคนต่อคืนพร้อมอาหาร 2 เราคิดว่าเป็นข้อตกลงที่ดี เพราะมันจะมีไกด์ของเราเองที่เราพายเรือคายัค"
}

];
//for(var i = 0; i < 5; i++) {
//	commomJosnList.push(commomJosn);
//}

function addSomeComment(commomJosnListTh) {
	for(var i = 0; i < commomJosnListTh.length; i++) {
		addAnComment(commomJosnListTh[i]);
	}
}

function addAnComment(commomJosnTh) {
	var str = '<div class="user"><div class="media"><div class="pull-left"><div class="ph_move"><img src="';
	str = str + commomJosnTh["userImg"];
	str = str + '" class="img-circle"></div><div id="user_name">';
	str = str + commomJosnTh["userName"];
	str = str + '</div><p class="level">&nbsp';
	str = str + commomJosnTh["userLabel"];
	str = str + '</p></div><div class="media-body"><p class="user_comment"><span class="user_comment">';
	str = str + commomJosnTh["commnet"];
	str = str + '</span></p></div></div></div><hr />';
	document.getElementById("body").innerHTML = document.getElementById("body").innerHTML + str;
	flashHeight();
}