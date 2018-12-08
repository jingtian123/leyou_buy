



$(function(){
	
//	$("#one").load("common.html");	

	//手机商城
	$("#saoma").mouseenter(function(){
		$(this).css("color","#000000");
		$("#appDown").css({"display":"block"});
		
	})
	$("#saoma").mouseleave(function(){
		$(this).css("color","#666666");		
		$("#appDown").css({"display":"none"});
	})

	$("#appDown").mouseenter(function(){		
		$(this).css({"display":"block"});
		
	})
	$("#appDown").mouseleave(function(){
		
		$(this).css({"display":"none"});
	})

	//客户服务鼠标移入效果
	$("#client").mouseenter(function(){
		$(this).find("i").css("color","#eb010d");
	
		$(this).css("color","#eb010d");
		$("#serves").css("display","block");
		
	})	
	
	$("#client").mouseleave(function(){
		$(this).find("i").css("color","#a1bef9");			
		
		$(this).css("color","#666666");
		$("#serves").css("display","none");
		
	})
	$("#serves").mouseenter(function(){
		$("#client").find("i").css("color","#eb010d");
		$("#client").css("color","#eb010d");						
		$(this).css("display","block");
	})
	$("#serves").mouseleave(function(){
		$("#client").find("i").css("color","#a1bef9");			
		$("#client").css("color","#666666");								
		$(this).css("display","none");
	})





















	//我的乐友
	$("#status ul li:first-child").mouseenter(function(){
		$("#down").css("display","none");
		$("#up").css("display","block");
	})
	$("#status ul li:first-child").mouseleave(function(){
		$("#down").css("display","block");
		$("#up").css("display","none");
		
	})
	
	//新闻
	
	$("#news-nav li").mouseenter(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		
		var index = $(this).index();
		$(".allnews").eq(index).addClass("show").siblings().removeClass("show");
	})
	
	//邀请朋友奖励
	$("#status li:nth-child(3)").mouseenter(function(){
		$("#yaoqing").css("display","block");
	})
	$("#status li:nth-child(3)").mouseleave(function(){
		$("#yaoqing").css("display","none");
	})
	$("#yaoqing").mouseenter(function(){
		$(this).css("display","block");
	})
	$("#yaoqing").mouseleave(function(){
		$(this).css("display","none");
	})
																
			})