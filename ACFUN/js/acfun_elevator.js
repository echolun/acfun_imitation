var elevator={
	FHEIGHT:0,
	UPLEVEL:0,
	DOWNLEVEL:0,
	init:function(){
		this.FHEIGHT=parseFloat($("#f1").css("height"))+parseFloat($("#f1").css("margin-bottom"));
		this.UPLEVEL=(innerHeight-this.FHEIGHT)/2;
		this.DOWNLEVEL=this.UPLEVEL+this.FHEIGHT;
		$(document).scroll(this.scroll.bind(this));
		$("#elevator>ul").on("mouseover","li",function(e){
			var $target=$(e.target);
			if(e.target.nodeName=="A"){
				$target=$target.parent();
			}
			$target.children(":first").hide();
			$target.children(":last").show();
		});
		$("#elevator>ul").on("mouseout","li",function(e){
			var $target=$(e.target);
			if(e.target.nodeName=="A"){
				$target=$target.parent();
			}
			var i=$target.index("#elevator>ul>li");
			var $span=$(".floor>header>span:eq("+i+")");
			if(!$span.hasClass("hover")){
				$target.children(":first").show();
				$target.children(":last").hide();
			}
		});
		/*$("#elevator>ul").on("mouseout",li,);*/
		$("#elevator>ul").on("click","li>a.etitle",function(e){
			$("body").stop(true);
			var $li=$(e.target).parent();
			var i=$li.index("#elevator>ul>li");
			var $span=$(".floor>header>span:eq("+i+")");
			$("body").animate({
				scrollTop:$span.offset().top-this.UPLEVEL
			},	this.DURATION
			);
		}.bind(this));
	},
	scroll:function(){
		$(".floor>header>span").each(function(i,elem){
			var totalTop=$(elem).offset().top;
			var scrollTop=$("body").scrollTop();
			var innerTop=totalTop-scrollTop;
			if(innerTop>this.UPLEVEL&&innerTop<=this.DOWNLEVEL){
				$(elem).addClass("hover");
				$("#elevator>ul>li:eq("+i+")>a:first").hide();
				$("#elevator>ul>li:eq("+i+")>a:last").show();
			}else{
				$(elem).removeClass("hover");
				$("#elevator>ul>li:eq("+i+")>a:first").show();
				$("#elevator>ul>li:eq("+i+")>a:last").hide();
				}
		}.bind(this));
		$(".floor>header>span.hover").length>0?$("#elevator").show():$("#elevator").hide();
	}

}
elevator.init();
