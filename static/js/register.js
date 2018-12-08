


$(function(){
	
	var flag1 = false;
	var flag2 = false;
	
	var val1;
	$("#phone").change(function(){
		
		//验证手机号
		var reg1 = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
		val1 = $(this).val();
		if(reg1.test(val1)){
			flag1 = true;
			
		}										
		else{
			$("#tb .wrong").eq(0).css("display","block");
			    flag1 = false;
		  }						
		
		
	})
	
	//验证码
		var verifyCode = new GVerify("v_container");
		$("#code_input").change(function(){
			var res = verifyCode.validate($("#code_input").val());
			if(res){
				$("#tb .right").eq(0).css("display","block");
				$("#tb .wrong").eq(1).css("display","none");
				
			}
			else{
				$("#tb .wrong").eq(1).css("display","block");
				$("#tb .right").eq(0).css("display","none");
				
			}
			
		})
		//验证密码
		var val2;//全局变量
		$("#pwd").change(function(){
			
			var reg2 =  /^.{8,16}$/;
			val2 = $(this).val();
			if(reg2.test(val2)){
				flag2 = true;
				$("#tb .right").eq(1).css("display","block");
				$("#tb .wrong").eq(2).css("display","none");
				
			}		
			else{
				$("#tb .wrong").eq(2).css("display","block");
				$("#tb .right").eq(1).css("display","none");
				
				flag2 = false;
			}
		})
		
		//确认密码
		var val3;
		$("#con-pwd").change(function(){			
			 val3 = $(this).val();
			if(val3 == val2){
				$("#tb .right").eq(2).css("display","block");
				$("#tb .wrong").eq(3).css("display","none");
			
			}
			else{
				$("#tb .right").eq(2).css("display","none");
				
				$("#tb .wrong").eq(3).css("display","block");

			
			}
		})
		
	//注册跳转
	$("#next").click(function(){
			//ajax
			var xhr = new XMLHttpRequest();
			xhr.open("post", "http://localhost/leyou/code/php/register.php", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			var str = "phone="+ $("#phone").val()   + "&pwd="+ $("#pwd").val() ;
//			console.log(str);
			xhr.send(str);
			xhr.onreadystatechange = function(){
				if (xhr.readyState==4 && xhr.status==200){
					console.log(xhr.responseText);
//					//json解析
                  	var obj = JSON.parse(xhr.responseText);
                     console.log(obj.status);
					if(obj.status == 1){
						
//					//如果注册成功则进入登录页面
//						console.log(1);
					    location.href ="login.html";
//                        $.cookie("phone",$('#phone').val(),{expires:10, path:"/"});
//						$.cookie("pwd",$("#pwd").val(),{expires:10, path:"/"});
//					//如果失败则弹出提示信息
				}
					else{
		
						if(!flag1){
							$("#tb .wrong").eq(0).css("display","block");
						
						}
						else if(!flag2){
							$("#tb .wrong").eq(2).css("display","block");	
							
							
						}
						else if(val3 != val2){
							$("#tb .wrong").eq(3).css("display","block");
							
							
						}
					}
			}
		}
	})
	
			
	
	
})

	
























