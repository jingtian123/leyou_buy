$(function(){
	


//console.log($.cookie("asdfsa"))
//全部商品分类
	
	$("#all-list").mouseenter(function(){
		$("#classify").css("display","block");
	})
	$("#all-list").mouseleave(function(){
		$("#classify").css("display","none");
	})
	$("#classify").mouseenter(function(){
		$(this).css("display","block")
	})
	$("#classify").mouseleave(function(){
		$(this).css("display","none")
	})
	$(".menu3-box").mouseenter(function(){
		$("#classify").css("display","block");
	})
	$(".menu3-box").mouseleave(function(){
		$("#classify").css("display","none");
	})
	
	

	
	//获取从首页传过来的id
			// location.search : 参数部门，
			var param = location.search.substring(1);
			var pid = getParams(param, "id");
//			console.log(pid);
	
	//获取json中的数据
			var arr = [];
			var arr2 = [];
			$.get("json/goods.json", function(data){
				arr = data;
				
				for(var i  = 0; i<arr.length;i++){
					
					for(var j=0 ; j<arr[i].length ; j++){
						
						var obj = arr[i][j]
						//找到id相同的商品后，就可以使用obj了
						
						if (obj.id == pid) {
							arr2 = obj;
							loadUI(obj);
//							console.log(arr2)
						}
					}
				}
					
				
			})

	function loadUI(obj){
					$("#img-list li:nth-child(1) img").attr("src", obj.img01);
					$("#img-list li:nth-child(2) img").attr("src", obj.img02);
					$("#img-list li:nth-child(3) img").attr("src", obj.img03);
					$("#img-list li:nth-child(4) img").attr("src", obj.img04);					
					$(".middle-img img").attr("src", obj.img01);
					$(".bigArea img").attr("src", obj.img01);
					$(".about .name").html( obj.name );
					$("#chajia").html( obj.unit + obj.price );
					$("#xianjia").html( obj.unit + obj.price );
					$("#integra").html(obj.price );					
				}
	
	
	//查找参数对应的值
			function getParams(str, name){
				var arr3 = str.split("&");
				for (var i=0; i<arr3.length; i++) {
					var str1 = arr3[i]; 
//					console.log(str1);
					var arr1 = str1.split("=");
					if (arr1[0] == name) {
						return arr1[1];
					}
				}
				return "";
			}
	//加入购物车
	$(".shop-cart").click(function(){
		
	
		
		//将当前点击的商品数据加入购物车（cookie）
		var arr4 = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
		//console.log(arr4)
		
		//判断原来的购物车中是否有相同商品
		var isExist = false;
		for (var i=0; i<arr4.length; i++) {
			if (arr4[i].id == arr2.id) {
				arr4[i].num++;
				isExist = true;
				break;
			}
		}
		if (isExist ==  false) {
			arr2.num = 1;
			arr2.checked = true; //是否选中， 默认选中 
			arr4.push(arr2);
		}
		
		//将arr4添加到cookie中
		$.cookie("cart", JSON.stringify(arr4), {expires:30, path:"/"});
		console.log( $.cookie("cart") );
		
		
		
		
	})
	//放大镜效果
	var bigImg = $(".bigArea img");
	var middleImg = $(".middle-img");
	var samllArea = $("#smallArea");
//	console.log(bigImg.width())

//	等比公式
	//小图width/大图width == 小区域width/大区域width
	
	samllArea.width( middleImg.width() * $(".bigArea").width() / bigImg.width() );
	samllArea.height( middleImg.height() * $(".bigArea").height() / bigImg.height() );
	
	
	//放大系数
	var scale = bigImg.width() / middleImg.width();
	
//	console.log(scale);
	
	//在小图中移动
		middleImg.mousemove(function(e){
			samllArea.show(); //显示小区域
			$(".bigArea").show(); //显示大区域
			
			
			var x = e.pageX - middleImg.offset().left - samllArea.width()/2;
			var y = e.pageY - middleImg.offset().top - samllArea.height()/2;
			
			//控制不超出左右边界
			if (x < 0){
				x = 0;
			}
			else if (x > middleImg.width()-samllArea.width()){
				x = middleImg.width()-samllArea.width();
			}
			//控制不超出上下边界
			if (y < 0){
				y = 0
			}
			else if (y > middleImg.height()-samllArea.height()) {
				y = middleImg.height()-samllArea.height();
			}
			
			//小区域移动
			samllArea.css({left:x, top:y});
			
			//大图移动
			bigImg.css({left: -scale*x,top: -scale*y});
		})
		
		//移除小图
		middleImg.mouseleave(function(){
			samllArea.hide(); //隐藏小区域
			$(".bigArea").hide(); //隐藏大区域
		})
	
	//list添加移入事件
	$("#img-list li").mouseenter(function(){
//		console.log(this.firstChild.getAttribute("src"))
		
//		middleImg.find("img").eq(0).attr("src","images2/img-0" + ($(this).index()+1)+".JPG");
		middleImg.find("img").eq(0).attr("src",this.firstChild.getAttribute("src"));
		
//		console.log("obj.img0"+$(this).index()+1)
		bigImg.attr("src",this.firstChild.getAttribute("src"));	
	})
	
	
//商品信息
	$("#figue-nav li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	
	//回到顶部和客服
	$("#service i").mouseenter(function(){
		$("#service span").css("display","block");
		$(this).css("background","#fa8422");
		$("#service").css("background","#fa8422");
	})		
	
	$("#service i").mouseleave(function(){
		$("#service span").css("display","none");
		$(this).css("background","#7a6e6e");
		$("#service").css("background","transparent");
	})
	
	$("#up i").mouseenter(function(){
		$("#up span").css("display","block");
		$(this).css("background","#fa8422");
		$("#up").css("background","#fa8422");
	})
	
	
	$("#up i").mouseleave(function(){
		$("#up span").css("display","none");
		$(this).css("background","#7a6e6e");
		$("#up").css("background","transparent");
	})
	
	
	
	//收货地址
	$(".area span").click(function(){
		
		
		
		
		
		
	})
	
	










})








