$(function(){
  $("header").load("php/header.php");
  $("footer").load("php/footer.php")
})
//定义背景轮播
var slider = {
  DRATION: 20000,
  img: ['images/danmu-1.png', 'images/danmu-2.png'],
  init: function () {
			this.updateImg();
			this.moveAuto();
		},
  moveAuto:function(){
			setInterval(this.move.bind(this), 100);
		},
  move: function () {
			$("#content").animate({"left": "-1910px"}, this.DRATION, 'linear'
				,this.moveEnd.bind(this));
		},
  moveEnd: function () {
		this.img = this.img.concat(this.img.splice(0, 1));
			// console.log(this.img);
		$("#content").css({"left":"0"});
			this.updateImg();
  },
  updateImg: function () {
    $('#content>li:eq(0)').css('background', 'url(' + this.img[0] + ')');
    $('#content>li:eq(1)').css('background', 'url(' + this.img[1] + ')');
  }
};
slider.init();