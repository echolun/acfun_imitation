//异步加载页头页尾，同时接受主页传输的关键词，同步加载。
$(function(){
	$("header").load("php/header.php");
  $("footer").load("php/footer.php")
	var data=sessionStorage.getItem("searchID");
	console.log(data);
	ajax(data);
})
//传输关键词并进行数据库查询，将匹配的数据返回页面
$(".inpbut").click(function(){
	//var data=$("#xiamu").serialize();
//	console.log(data);
//	console.log(1);
	var data=$(".inptxt").val();
	ajax(data);

})
function ajax(data){
	$.ajax({
		type:"GET",
		url:"php/search.php",
		data:{xname:data},
		success:function(xiamu){
			// console.log(xiamu);
			var html="";
			$.each(xiamu,function(i,val){
				html+=`
						<div class="list1">
							<img src="${val.pic}" alt="">
							<div class="left">
								<h3>${val.xname}</h3>
								<p><a href="#">UP主：${val.zname}</a> <span href="">点击：${val.xbf}</span></p>
								<div>简介：${val.xjj} </div>
								<p>标签： ${val.xbq}</p>
							</div>
						</div>`
			})
			$("#list").html(html);
		}
	})
}
