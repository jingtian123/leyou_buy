//JQ代码
	$(function(){
		
	//获取购物车的cookie数据,并用节点显示
		refresh();
		function refresh(){
			
			var arr = $.cookie("cart");
			
			
			if(arr){
				
//				$(".empty-cart").hide();
//				$(".cart-list").show();	
				
				arr = JSON.parse(arr);
				
				//先清除旧节点
				$("#list").empty();
				
				//再添加新节点
				var totalPrice = 0; //总价
				
				//遍历数组
				for(var i=0 ; i<arr.length ; i++){
					var obj = arr[i];
					
					var tr = $("<tr></tr>").appendTo("#list");
					
				
					
					//是否选中
					if (obj.checked) {
						$('<td class="check-box"><input type="checkbox" checked="checked" class="check"/></td>').appendTo(tr);
					}
					else {
						$('<td class="check-box"><input type="checkbox"  class="check"/></td>').appendTo(tr);
					}
				
					$('<td class="img-box"><div><img  class="img" src="' + obj.img+ '" width=52 height=52/><p class="name"><a href="#">' + obj.name + '</a></p></div></td>').appendTo(tr);
					
					$('<td class="price">' + obj.unit+obj.price + '</td>').appendTo(tr);
		
					$('<td width=125 class="number"><input class="reduce" type="button" value="-" /><input class="num" type="text" value=" '+obj.num + '" /><input class="add" type="button" value="+" /></td>').appendTo(tr);
					
					$('<td style="text-align: center;"><a class="follow" href="#">移入关注</a><br /><a class="del" href="javascript:;">删除</a></td>').appendTo(tr);
				
				
					//计算总价
					if (obj.checked) {
						totalPrice += obj.price * obj.num;
					}	
			
				}
						
			//显示总价
			$("#total").html(totalPrice);
			
		}
		
		else {
			$(".empty-cart").css("display","block");
			
			
//				
			}
		}
		
		//+
		$("#list").on("click", ".add", function(){
			var index = $(this).index("#list .add");
			
			//获取cookie并修改
			var arr = JSON.parse($.cookie("cart"));
			arr[index].num++;
			
			//覆盖原来的cookie
			$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
			
			//刷新节点数据
			refresh();
		
	})	
	
		//-
			$("#list").on("click", ".reduce", function(){
				var index = $(this).index("#list .reduce");
				
				//获取cookie并修改
				var arr = JSON.parse($.cookie("cart"));
				arr[index].num--;
				if (arr[index].num < 1) {
					arr[index].num = 1;
				}
				
				//覆盖原来的cookie
				$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
				
				//刷新节点数据
				refresh();
			})
			
			//删除
				$("#list").on("click", ".del", function(){
					var index = $(this).index("#list .del");
					
					//获取cookie并修改
					var arr = JSON.parse($.cookie("cart"));
					arr.splice(index, 1); //删除数组arr的第index个
										
					//覆盖原来的cookie
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					if(index == 0){												
						$(".cart-list").css("display","none");
						$(".empty-cart").css("display","block");
						
					}
					isAllSelect();
					
					//刷新节点数据
					refresh();
					
					
				})
				
				//勾选
				$("#list").on("click", ".check", function(){
					var index = $(this).index("#list .check");
					
					//获取cookie并修改
					var arr = JSON.parse($.cookie("cart"));
					arr[index].checked = !arr[index].checked;
					
					//覆盖原来的cookie
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					//判断是否全选了
					isAllSelect();
					
					//刷新节点数据
					refresh();
				})
				
				//判断是否全部勾选了
				isAllSelect();
				function isAllSelect(){
					
					//判断是否为undefined
					var arr = $.cookie("cart");
					if (!arr) {
						return;
					}
					
					var arr = JSON.parse($.cookie("cart"));
					
					var sum = 0;
					for (var i=0; i<arr.length; i++) {
						sum += arr[i].checked;
					}
					
					//全选了
					if (arr.length!=0 && sum==arr.length) {
						$("#allSelect").prop("checked", true);
					}
					//未全选
					else {
						$("#allSelect").prop("checked", false);
					}
				}
				
				//全选
				$("#allSelect").click(function(){
					//判断是否为undefined
					var arr = $.cookie("cart");
					if (!arr) {
						return ;
					}
					
					var arr = JSON.parse($.cookie("cart"));
					for (var i=0; i<arr.length; i++) {
						//全选
						if ($(this).prop("checked")){
							arr[i].checked = true;
						}
						//全不选
						else {
							arr[i].checked = false;
						}
					}
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					//刷新
					refresh();
				})
				
				
				//删除选中
				$("#delSelect").click(function(){
					
					//获取cookie并修改
					var arr = JSON.parse($.cookie("cart"));
					
					//将未选中的商品添加到新数组newArr中，再将newArr保存到cookie
					var newArr = [];
					for (var i=0; i<arr.length; i++) {
						if (!arr[i].checked) {
							newArr.push(arr[i]);
						}
					}
					if(newArr.length == 0){
						$(".cart-list").css("display","none");
						$(".empty-cart").css("display","block");
					   
					}
					//覆盖原来的cookie
					$.cookie("cart", JSON.stringify(newArr), {expires:30, path:"/"});
					
					isAllSelect();
					
					//刷新节点数据
					refresh();
				})
				
				
				//继续购物
				$(".continue").click(function(){
					open("index.html");
				})
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
		
	})
	
	