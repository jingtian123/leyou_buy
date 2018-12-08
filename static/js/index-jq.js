$(function(){
		
		//轮播
	//banner背景色
		var aBg = $("#bg-color li");
//		//轮播图
		var aLi = $("#list01 li");
		var aLi2 = $("#list02 li");//在move外面获取，变成全局变量
		var box = $(".lunbo");
		
		//默认显示第一张图
		aLi.eq(0).show().siblings().hide();
		
		aBg.eq(0).show().siblings().hide();
		
		//图片总数量
		var size3 = $("#list01 li").size();					
		
		//自动轮播
		var n = 0; //记录图片下标
		var timer = setInterval(function(){
			n++;
			move(); 
		}, 2000);
		
		//移动的函数
		function move(){
			
			//如果i超出了图片总数量
			if (n == size3) {
				n = 0; //即将移动到2张图
			}
			
			//透明度切换到第i张图
			aLi.eq(n).stop().fadeIn().siblings().stop().fadeOut();
			aBg.eq(n).stop().fadeIn().siblings().stop().fadeOut();
			
			//改变ul2的按钮状态
			aLi2.eq(n).removeClass().addClass("active").siblings().removeClass("active"); 
			
		}
		//li2上面的按钮
			aLi2.hover(function(){
				var index = $(this).index();
//				console.log(index);
				n = index;
				move();
			})
		
			//移入box, 移出box
				box.hover(function(){
					//移入, 关闭定时器
					clearInterval(timer);
				}, 
				function(){
					//移出, 重新开启定时器
					timer = setInterval(function(){
						i++;
						move();
					}, 2000);
				})
				
		//新闻热讯
			
			$("#news-box div").hover(function(){								
					$(this).find("dd").css("display","block");
					$(this).siblings().find("dd").css("display","none");					
							              
			})		
		
		
//		三级菜单
        $(".fy-menu li").mouseenter(function(){
        	var index = $(this).index();
        	$(".menu3-box").eq(index).css("display","block");       	              	
        })
   		$(".fy-menu li").mouseleave(function(){
        	
        	$(".menu3-box").css("display","none");       	              	
        })
		$(".menu3-box").mouseenter(function(){
			$(this).css("display","block");
		})
		$(".menu3-box").mouseleave(function(){
			$(this).css("display","none");
		})
	
	//独家特惠 品牌特卖
	$(".ab-main-nav ul li").mouseenter(function(){
		$(this).addClass("hover2").siblings().removeClass("hover2");
		$(this).find("span").addClass("show2").parent().siblings().find("span").removeClass("show2");    
		
		var index = $(this).index();
		$(".list").eq(index).addClass("show3").siblings().removeClass("show3");
	})
	
	//新品发布
	//默认显示第一张图片
        var ul1 = $(".f-list ul");
        var _li1 = $(".f-list ul li");
        var _li2 = $(".ac-list li");
        
	    _li1.first().clone(true).appendTo(ul1);
	    
	//图片总量
	    var smallsize = $(".f-list ul li").size();

		ul1.width(188*smallsize);
	//自动播放
	    var ai = 0;
		var timer = setInterval(function(){
			ai++;
			move1();
//			console.log(i)
		},2000);
		
	//动画显示
	function move1(){
		
		if( ai<0 ){
			console.log(smallsize)
			ul1.css("left",-188*(smallsize-1));
			var hsize = smallsize;
			ai = hsize-2;
		}
		if( ai >= smallsize ){
			
			ul1.css("left",0);
			ai = 1;
		}
		ul1.stop().animate({left:-ai*188},500);
		//console.log(i);
        _li2.eq(ai).addClass("active2").siblings().removeClass("active2");
        
		if( ai == smallsize-1){
            _li2.eq(0).addClass("active2").siblings().removeClass("active2");
			
		}

	}


//	数字按钮 鼠标移入相对应的图片显示
	    _li2.hover(function(){	    	
	    	var index = $(this).index();
	    	i = index;
	    	move1();	    	
	    })
	
	//鼠标悬停
	$("#first").on({
		"mouseenter":function(){
			clearInterval(timer);
		},
		"mouseleave":function(){
				timer = setInterval(function(){
				i++;
				move1();
			},2000);
		}
	})
		
	//热卖推荐
	var _dl = $(".recom-in dl");
	var i1 = $(".recom i:nth-child(1)");
	var i2 = $(".recom i:nth-child(2)");
	
	
	//显示第一张图片
	_dl.eq(0).show().siblings().hide();
	
	//图片总数量
	var size = _dl.size();
		
	var i = 0; //记录图片下标
	var timer = setInterval(function(){
		i++;
		move2(); 
	}, 5000);
	
	//移动的函数
	function move2(){
		
		//如果i超出了图片总数量
		if (i == size) {
			i = 0; //即将移动到2张图
		}
		
		//透明度切换到第i张图
		_dl.eq(i).stop().fadeIn().siblings().stop().fadeOut();						 		
	}
	
	
		//上一页
		i1.click(function(){
			i--;
			move2();
		})
		
		//下一页
		i2.click(function(){
			i++;
			move2();
		})

		
//		floor导航
        var _ul2 = $(".article-nav");
        var _li = $(".article-nav li");
        
        _li.on({       
        	"mouseenter":function(){
    	        $(this).find("h3").addClass("hover3").parent().siblings().find("h3").removeClass("hover3");
        		
        		$(".bg").eq($(this).parent().index(".article-nav")).animate({left:this.offsetLeft});      		
        }
        	
        }) 
        
        //  孕妈需要什么呵护
         $('.section').eq(0).find('.article .article-nav>li').each(function(){
        	$(this).hover(function(){
        		
        		var z_index = $(this).index();
        		console.log($('.article .goods>ul').eq(z_index))
        		$('.section').eq(0).find('.article .goods>ul').eq(z_index).addClass('show4')
        		$('.section').eq(0).find('.article .goods>ul').eq(z_index).siblings().removeClass('show4');
        	})
        })                    
		//article 商品
		var arr=[];
		
		$.get("json/goods.json", function(data){
			
			arr = data;
			
			//遍历json中的所有数据，并用节点显示
			for( var i=0 ; i<arr.length ; i++){
				
				var arr2 = arr[i]; 
//					console.log(arr2) 					
					for( var k=0 ; k<arr2.length ; k++){	
						
						var ullist = $('.goods-in');
						
						var li = $("<li data-id="+arr2[k].id+"></li>").appendTo(ullist[i]);
						$("<img src="+ arr2[k].img + ">").appendTo(li);
						$("<p class='name'>"+ arr2[k].name +"</p>").appendTo(li);
						$("<span class='price'>"+ arr2[k].unit + arr2[k].price +"</span>").appendTo(li);					
					}											
			}			
		})
		
		
		//点击商品
				$(".goods-in").on("click", "li", function(){
					//console.log("click");
					
					id = $(this).data().id;
					
					//进入详情页， 且将当前点击的商品的id传入
					location.href = "detail.html?id=" +id;
					
				})
		
		//宝宝吃什么
		 $('.section').eq(1).find('.article .article-nav>li').each(function(){
        	$(this).hover(function(){
        		
        		var z_index = $(this).index();
        		console.log($('.article .goods>ul').eq(z_index))
        		$('.section').eq(1).find('.article .goods>ul').eq(z_index).addClass('show4')
        		$('.section').eq(1).find('.article .goods>ul').eq(z_index).siblings().removeClass('show4');
        	})
        })
		//article 商品
		$.get("json/goods2.json", function(data){
			var arr4 = data;
			
			//遍历json中的所有数据，并用节点显示
			for( var i=0 ; i<arr4.length ; i++){
				var arr5 = arr4[i]; 
					
					for( var k=0 ; k<arr5.length ; k++){						
						var ullist2 = $('.goods2');						
						var li = $("<li></li>").appendTo(ullist2[i]);
						$("<img src="+ arr5[k].img + ">").appendTo(li);
						$("<p class='name'>"+ arr5[k].name +"</p>").appendTo(li);
						$("<span class='price'>"+ arr5[k].unit + arr5[k].price +"</span>").appendTo(li);					
					}											
			}			
		})
	
	
	//宝宝穿什么
	 $('.section').eq(2).find('.article .article-nav>li').each(function(){
        	$(this).hover(function(){
        		
        		var z_index = $(this).index();
        		console.log($('.article .goods>ul').eq(z_index))
        		$('.section').eq(2).find('.article .goods>ul').eq(z_index).addClass('show4')
        		$('.section').eq(2).find('.article .goods>ul').eq(z_index).siblings().removeClass('show4');
        	})
        })
		//article 商品
		$.get("json/goods3.json", function(data){
			var arr6 = data;
			
			//遍历json中的所有数据，并用节点显示
			for( var i=0 ; i<arr6.length ; i++){
				var arr7 = arr6[i]; 
					
					for( var k=0 ; k<arr7.length ; k++){						
						var ullist3 = $('.goods3');						
						var li = $("<li></li>").appendTo(ullist3[i]);
						$("<img src="+ arr7[k].img + ">").appendTo(li);
						$("<p class='name'>"+ arr7[k].name +"</p>").appendTo(li);
						$("<span class='price'>"+ arr7[k].unit + arr7[k].price +"</span>").appendTo(li);					
					}											
			}			
		})
	
	//宝宝用什么
	 $('.section').eq(3).find('.article .article-nav>li').each(function(){
        	$(this).hover(function(){
        		
        		var z_index = $(this).index();
        		console.log($('.article .goods>ul').eq(z_index))
        		$('.section').eq(3).find('.article .goods>ul').eq(z_index).addClass('show4')
        		$('.section').eq(3).find('.article .goods>ul').eq(z_index).siblings().removeClass('show4');
        	})
        })
		//article 商品
		$.get("json/goods4.json", function(data){
			var arr8 = data;
			
			//遍历json中的所有数据，并用节点显示
			for( var i=0 ; i<arr8.length ; i++){
				var arr9 = arr8[i]; 
					
					for( var k=0 ; k<arr9.length ; k++){						
						var ullist3 = $('.goods4');						
						var li = $("<li></li>").appendTo(ullist3[i]);
						$("<img src="+ arr9[k].img + ">").appendTo(li);
						$("<p class='name'>"+ arr9[k].name +"</p>").appendTo(li);
						$("<span class='price'>"+ arr9[k].unit + arr9[k].price +"</span>").appendTo(li);					
					}											
			}			
		})
		
		//宝宝玩中学什么
		 $('.section').eq(4).find('.article .article-nav>li').each(function(){
        	$(this).hover(function(){
        		
        		var z_index = $(this).index();
        		console.log($('.article .goods>ul').eq(z_index))
        		$('.section').eq(4).find('.article .goods>ul').eq(z_index).addClass('show4')
        		$('.section').eq(4).find('.article .goods>ul').eq(z_index).siblings().removeClass('show4');
        	})
        })
		//article 商品
		$.get("json/goods5.json", function(data){
			var arr6 = data;
			
			//遍历json中的所有数据，并用节点显示
			for( var i=0 ; i<arr6.length ; i++){
				var arr7 = arr6[i]; 
					
					for( var k=0 ; k<arr7.length ; k++){						
						var ullist3 = $('.goods5');						
						var li = $("<li></li>").appendTo(ullist3[i]);
						$("<img src="+ arr7[k].img + ">").appendTo(li);
						$("<p class='name'>"+ arr7[k].name +"</p>").appendTo(li);
						$("<span class='price'>"+ arr7[k].unit + arr7[k].price +"</span>").appendTo(li);					
					}											
			}			
		})
	
	//乐海淘
	 $('.section').eq(5).find('.article .article-nav>li').each(function(){
        	$(this).hover(function(){
        		
        		var z_index = $(this).index();
        		console.log($('.article .goods>ul').eq(z_index))
        		$('.section').eq(5).find('.article .goods>ul').eq(z_index).addClass('show4')
        		$('.section').eq(5).find('.article .goods>ul').eq(z_index).siblings().removeClass('show4');
        	})
        })
		//article 商品
		$.get("json/goods6.json", function(data){
			var arr6 = data;
			
			//遍历json中的所有数据，并用节点显示
			for( var i=0 ; i<arr6.length ; i++){
				var arr7 = arr6[i]; 
					
					for( var k=0 ; k<arr7.length ; k++){						
						var ullist3 = $('.goods6');						
						var li = $("<li></li>").appendTo(ullist3[i]);
						$("<img src="+ arr7[k].img + ">").appendTo(li);
						$("<p class='name'>"+ arr7[k].name +"</p>").appendTo(li);
						$("<span class='price'>"+ arr7[k].unit + arr7[k].price +"</span>").appendTo(li);					
					}											
			}			
		})

	
	//热门评论
	$(".hot-com-nav li").mouseenter(function(){
		$(this).css("fontWeight",900).siblings().css("fontWeight",100);
		$("#bord").animate({left:this.offsetLeft});
		
		var index = $(this).index();
		$(".comment").eq(index).addClass("show5").siblings().removeClass("show5");
	})
	
	
	$.get("json/comment.json", function(data){
			var arr1 = data;
			
			//遍历json中的所有数据，并用节点显示
			for( var i=0 ; i<arr1.length ; i++){
				
					var arr3 = arr1[i];
					
					for( var k=0 ; k<arr3.length ; k++){
						
						var obj = arr3[k];
						
						var ullist3 = $(".comment");												

						var li = $("<li></li>").appendTo(ullist3[i]);
						$("<a href='javascript:;'><img src="+ obj.img + "></a>").appendTo(li);
						$("<b><a href='javascript:;'>" + obj.name + "</a><b>").appendTo(li);
						$("<span><img src=" + obj.star + "></span>").appendTo(li);
						$("<p ><a href='javascript:;'>" + obj.describe + "</a></p>").appendTo(li);
						
					    }			
					}										
			
			})
			
	
	
	//返回顶部
	$(document).scroll(function(){
		
		var scrolltop = document.documentElement.scrollTop 
                  	             || document.body.scrollTop;
		if( scrolltop >= 300){
			$("#return-top").css("display","block");
		}
		else{
			$("#return-top").css("display","none");
			
		}
	
	
		$("#return-top").click(function(){
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0 ;
		})
		
	})
	
})