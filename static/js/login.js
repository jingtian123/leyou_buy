
$(function(){
	
	//验证码
		var verifyCode = new GVerify("v_container");
		$("#code_input").change(function(){
			var res = verifyCode.validate($("#code_input").val());
			if(res){
				
				$("#yanzheng .wrong").css("display","none");
				
			}			
			else{
				$("#yanzheng .wrong").css("display","block");				
				
			}
			
		})


	$("#checked").click(function(){
		var d = new Date();
    		d.setDate(d.getDate() + 10);    	
	})

	$("#go").click(function(){
		
		var xhr = new XMLHttpRequest();
        xhr.open("post", "http://localhost/leyou/code/php/login.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var str = "phone="+$("#phone").val() + "&pwd="+ $("#pwd").val();
        xhr.send(str);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == 200) {
//					console.log(xhr.responseText);
//					//json解析
				var obj = JSON.parse(xhr.responseText);
				console.log(obj.status);
				if (obj.status == 1) {

//					//如果注册成功则进入登录页面
//						console.log(1);
					location.href = "index.html";

//					//如果失败则弹出提示信息
				}
				else{
					alert("登录失败");
				}

			}
		}



	})
	
	
})


















