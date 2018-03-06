//异步加载页头页尾
$(function(){
  $("#footer").load("php/footer.php");
})
//账号密码失去焦点为空或字数不够就提示用户
$("form").on("blur","input[name=uname]",function(){
		if(this.validity.valueMissing){
			this.setCustomValidity('字符应在1到32个字符之间');
			$(this).next().css("visibility","visible");
		}else if(this.validity.tooShort){
		 	this.setCustomValidity('字符长度应在1到32个字符之间');
		 	$(this).next().css("visibility","visible");
		 }else if(this.validity.tooLong){
		 	this.setCustomValidity('用户名太长了');
		 	$(this).next().css("visibility","visible");
		 }else{
		 	this.setCustomValidity('');
		 }
	})
$("form").on("blur","input[name=upwd]",function(){
		if(this.validity.valueMissing){
			this.setCustomValidity('字符应在6到32个字符之间');
			$(this).next().css("visibility","visible");
		}else if(this.validity.tooShort){
		 	this.setCustomValidity('字符长度应在6到32个字符之间');
		 	$(this).next().css("visibility","visible");
		 }else if(this.validity.tooLong){
		 	this.setCustomValidity('用户名太长了');
		 	$(this).next().css("visibility","visible");
		 }else{
		 	this.setCustomValidity('');
		 }
	})
$("form div:not(:last-child) input").focus(function(){
  $(this).next().css("visibility","hidden");
  $(".zuce").css("visibility","visible");
	$(".return").css("visibility","visible")
})
//页头固定绑定
$(window).scroll(function(){
//  console.log(1);
  if($(window).scrollTop()>50){
    $("header").addClass("fixed");
  }else{
    $("header").removeClass("fixed");
  }
})
//实现登陆验证效果
$("#button1").click(function(){
  var inp1=$("#dltxt").val();
//  console.log(inp1);
//  console.log(1);
  var inp2=$("#dlpwd").val();
  if(inp1==""||inp2==""){
    $("#null").animate({"left":0},1000,"linear",function(){
          setTimeout(function(){
            $("#null").animate({"left":"-150px"},1000,"linear")
          },2000)
        })
  }else{
    var inputData=$("#login-form").serialize();
  $.ajax({
    type:"POST",
    url:"php/login.php",
    data:inputData,
    success:function(txt,msg,xhr){
//      console.log(arguments);
      if(txt=="ok"){
        var loginName=$('[name="uname"]').val();
        sessionStorage['loginName']=loginName;
        location.replace("index.html")
      }else{
        $("#err").animate({"left":0},1000,"linear",function(){
          setTimeout(function(){
            $("#err").animate({"left":"-150px"},1000,"linear")
          },2000)
        })
      }
    }
  })
  }
})
//实现登录和注册表格的切换效果
$(".zuce").click(function(){
  $("#login-form").removeClass("block");
  $("#login-form1").addClass("block");
})
$(".return").click(function(){
  $("#login-form1").removeClass("block");
  $("#login-form").addClass("block");
})
//实现注册效果
//获取两个input的值，如果为空，无法注册，不为空再判断用户名是否已经存在
$("[type=checkbox]").change(function(e){
	if(e.target.checked){
		console.log(1);
		$("#zuce2").css("backgroundColor","#67BDCD");
	}else{
		$("#zuce2").css("backgroundColor","#ddd");
	}
})
$("#zuce2").click(function(){
if($("[type=checkbox]").prop('checked')==false){
  $("#zuce2").css("disabled","disabled");
}else{
  var a1=$("#uname").val();
  var a2=$("#upwd").val();
  if(a1==""||a2==""){
  $("#null").animate({"left":0},1000,"linear",function(){
          setTimeout(function(){
            $("#null").animate({"left":"-150px"},1000,"linear")
          },2000)
        })
}else{
  var Data=$("#login-form1").serialize();
  $.ajax({
    type:"POST",
    url:"php/user_add.php",
    data:Data,
    success:function(result){
      if(result.msg=="用户名已存在"){
					$("#success2").animate({"left":0},1000,"linear",function(){
          setTimeout(function(){
            $("#success2").animate({"left":"-150px"},1000,"linear")
          },2000)
        })
      }else if(result.msg=="succ"){
          $("#success").animate({"left":0},1000,"linear",function(){
          setTimeout(function(){
            $("#success").animate({"left":"-150px"},1000,"linear")
          },2000)
        })
        }
      }
    })
  }
}
})

