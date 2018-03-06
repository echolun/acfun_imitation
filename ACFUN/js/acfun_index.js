//获取登录的用户名并加载到登录信息栏，如果没有则设置为默认的文字提示信息
var loginname=sessionStorage.getItem('loginName')
$(function(){
	if(loginname==undefined){
//		console.log(1);
		$(".denglu").html("登录/注册");
	}else{
		$(".denglu").html(loginname);
	}
	$.ajax({
		type:"GET",
		url:"php/keji.php",
		success:function(kejilist){
//			console.log(kejilist);
			var html="";
			$.each(kejilist,function(i,val){
				html+=`
					<dl>
						<dt><a href="#"><img src="${val.pic}"></a></dt>
						<dd>${val.pname}</dd>
						<dd><b></b>${val.pbf}<s></s>${val.pzf}</dd>
					</dl>
					`
			})
			$("#kejicontent").html(html);
		}
	})
})
//定义主页搜索框点击事件，跳转，并将值传递给搜索页面实现异步加载
$("#tijiao").click(function(){
	var searchID=$("[name='txtSearch']").val();
	sessionStorage["searchID"]=searchID;
	open("search.html");
})
//定义轮播
var index=0, //设置当前index
	imglong=$("#img li").length; //获取图片总数4
	// console.log(imglong);
var autoChange=setInterval(function(){
	if(index<imglong-1){
		index++;
	}else{
		index=0;
	}
	changeTo(index);
},3000)
function autoChangeagin(){
	autoChange=setInterval(function(){
	if(index<imglong-1){
		index++;
	}else{
		index=0;
	}
	changeTo(index);
},3000)
};
// 为整个轮播区域绑定移入暂停效果
$("#slider").mouseenter(function(){
	clearInterval(autoChange);
})
$("#slider").mouseleave(function(){
	autoChangeagin();
})
// 为每个图片li绑定鼠标移入切换图片效果
$("#index li").mouseenter(function(a){
	var a=$(this).index();
	// console.log(a);
	// clearInterval(autoChange);
	changeTo(a);
	index=a;
});
function changeTo(num){
    var goLeft = num * 452;
    $("#img").animate({"left": "-" + goLeft + "px"},500);
    $("#list").find("li").removeClass("list").eq(num).addClass("list");
    $("#index").find("li").removeClass("index").eq(num).addClass("index");
  }
// 登陆界面弹窗
$(".denglu").click(function(){
  open("acfun_login.html","name");
})
// 导航条对应下拉子频道
$(".nav_ul").on("mouseenter",'li',function(){
  $(this).children('div').stop(true).slideDown();
  });
$(".nav_ul").on("mouseleave",'li',function(){
  $(this).children('div').css("display","none");
  });
// 头部logo鼠标移入增加晃动的动画
$('#logoshake').mouseover(function(){
  $(this).addClass("animated flipInX").stop(true);
});
$('#logoshake').mouseout(function(){
  $(this).removeClass("animated flipInX").stop(true);
})

//搜索框焦点对应框的出现和消失
$("[name=txtSearch]").focus(function(){
//  console.log(1);
  $("#search").slideDown(400);
});
$("[name=txtSearch]").blur(function(){
//  console.log(1);
  $("#search").slideUp(400);
});
//开始定义滚动事件
$(window).scroll(function(){
  var h1=$("#top_box").height();
  var h2=$("#top_photo").height();
  // console.log(h1);
  if($(window).scrollTop()>(h1+h2-100)){
    $("nav").addClass("fixed");
  }else{
    $("nav").removeClass("fixed");
  }
})
//这里定义轮播右边划入事件
$("#main_top_right>ul>li").mouseenter(function(){
  $(this).find("b").css("display","block");
//  console.log(1)
})
$("#main_top_right>ul>li").mouseleave(function(){
  $(this).find("b").css("display","none");
})
//开始处理香蕉榜的点击切换事件。
$(".banana_logo_right").on("click","li",function(e){
//  console.log(1);
  e.preventDefault();
  if(!$(this).children("a").hasClass("normal")){
    $(this).children("a").addClass("normal")
    $(this).siblings("li").children(".normal").removeClass("normal")
  }
 $($(this).children("a").attr("href")).addClass("block").siblings(".block").removeClass("block");
})
//这里处理香蕉榜文章区域的效果切换
$(".article_nav>li>a").mouseenter(function(e){
  e.preventDefault();
  if(!$(this).hasClass("normal1")){
    $(this).addClass("normal1");
    $(this).parent().siblings("li").children(".normal1").removeClass("normal1")
  }
  $($(this).attr("href")).addClass("block").siblings(".block").removeClass("block");
})
//娱乐右侧切换事件
$(".recreation-ul li").click(function(e){
  e.preventDefault();
  if(!$(this).children().hasClass("normal")){
    $(this).children().addClass("normal");
    $(this).siblings("li").children(".normal").removeClass("normal");
  }
 $($(this).children("a").attr("href")).addClass("block").siblings(".block").removeClass("block");
})
//app下载二维码
$(".xiazai").mouseenter(function(){
  $(".xiazai img").fadeIn(200);
//  console.log(2);
})
$(".xiazai").mouseleave(function(){
  $(".xiazai img").fadeOut(200);
})
//定义totop的属性
$(window).scroll(function(){
  if($(window).scrollTop()>500){
    $("#totop").show();
  }else{
    $("#totop").hide();
  }
})
$("#totop").click(function(){
  $("body").animate({"scrollTop":"0px"},1000,"linear")
})
//为每一块添加滚动加载animate css的效果
$(window).scroll(function(){
  var h1=$(".xjbf").offset().top-700;
  console.log(h1)
  var h2=$(".ylbf").offset().top-700;
  console.log(h2)
  var h3=$(".fjbf").offset().top-700;
  var h4=$(".yxbf").offset().top-720;
  var h5=$(".dhbf").offset().top-720;
  var h6=$(".tybf").offset().top-720;
  var h7=$(".yybf").offset().top-720;
  var h8=$(".wdbf").offset().top-720;
  var h9=$(".ysbf").offset().top-720;
  var h10=$(".bnbf").offset().top-720;
  var h11=$(".ytbf").offset().top-720;
  var h12=$(".kjbf").offset().top-720;
  if($(window).scrollTop()>h1){
     $(".xjbf").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h2){
     $("#main_recreation").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h3){
     $("#main_opera").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h4){
     $(".yxbf").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h5){
     $(".dhbf").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h6){
     $(".tybf").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h7){
     $(".yybf").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h8){
     $(".wdbf").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h9){
     $(".ysbf").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h10){
     $(".bnbf").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h11){
     $(".ytbf").addClass("fadeInUp")
    }
  if($(window).scrollTop()>h12){
     $(".kjbf").addClass("fadeInUp")
    }
})
