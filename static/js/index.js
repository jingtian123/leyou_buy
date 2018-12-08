
onload = function(){

	function $(id){
		return document.getElementById(id);
	}

//缓冲运动函数
function animate(obj, json, fn){  	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		//表示是否所有属性都到达目标值了
		var bStop = true;
		
		for (var attr in json) {
			var iTarget = json[attr]; //目标值
			
			//1, current
			var current;
			if (attr == "opacity") {  //透明度
				current = Math.round(getStyleAttr(obj, attr) * 100);
			}
			else { //left,top,width,height...
				current = parseFloat(getStyleAttr(obj, attr));  
				current = Math.round(current); //四舍五入
			}
			
			//2, 速度
			var speed = (iTarget-current)/3;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);  
			
			//3, 临界值
			if (current != iTarget) {
				//如果有一个属性没有到达目标值，则不能停止定时器，将bStop=false
				bStop = false;
			}
			
			//4, 运动  
			if (attr == "opacity") {
				obj.style[attr] = (current + speed)/100;
				obj.style.filter = "alpha(opacity="+ (current + speed) +");"
			}
			else {
				obj.style[attr] = current + speed + "px";
			}
		
		}
		
		if (bStop) {
			clearInterval(obj.timer); //停止定时器, 停止运动
			if (fn) fn();			
		}				
	}, 30);

}
	$("saoma").onmouseenter = function(e){			
		e = e || event;
		this.style.color = "#000000";
		$("appDown").style.display = "block";
		animate($("appDown"),{height:256});		        
	}
	
	$("saoma").onmouseleave = function(e){		
		e = e || event;
		this.style.color = "#666666";		
//		$("appDown").style.display = "none";
		animate($("appDown"),{height:0});		
	}
	
	$("appDown").onmouseenter = function(e){
		e = e || event;	
		
		this.style.display = "block";
		animate($("appDown"),{height:256});		        		
	}
	
	$("appDown").onmouseleave = function(e){		
		e = e || event;	
		
//		this.style.display = "none";
		animate($("appDown"),{height:0});		        		
	}
	
	//顶部导航鼠标移入效果
	var aA = $("top-nav").getElementsByTagName("a");
	
	for(var i=0 ; i<aA.length ; i++){
		aA[i].onmouseenter = function(e){
		    e = e || event;	
			for( var j=0 ; j<aA.length ; j++){
				aA[j].style.color = "#666666";
			}
			this.style.color = "#000000";
		}
	}
//	
	//客户服务鼠标移入效果
	$("client").onmouseenter = function(e){
		e = e || event;
		this.style.color = "#eb010d";		
		$("serves").style.display = "block";
	}
	$("client").onmouseleave = function(e){
		e = e || event;	
		this.style.color = "#666666";						
		$("serves").style.display = "none";
	}
	$("serves").onmouseenter = function(e){
		e = e || event;	
		$("client").style.color = "#eb010d";						
		this.style.display = "block";
	}
	$("serves").onmouseleave = function(e){
		e = e || event;	
		$("client").style.color = "#666666";								
		this.style.display = "none";
	}      	
	
	//轮播
	//banner背景色
		var aBg = $("bg-color").getElementsByTagName("li");
		//轮播图
		var aLi = $("list01").getElementsByTagName("li");
		var aLi2 = $("list02").getElementsByTagName("li");//在move外面获取，变成全局变量
		var box = document.getElementsByClassName("lunbo");
		
		//默认显示第一张图
		aLi[0].style.opacity = 1;
		aLi[0].style.filter = "alpha(opactiy=100)";
		
		aBg[0].style.opacity = 1;
		aBg[0].style.filter = "alpha(opactiy=100)";
		
		//自动播放
		var index = 0;
		var timer = setInterval(function(){
			index++;
			move();
		},5000);
		
		function move(){
			if(index >= 3){
				index=0;
			}
			//banner背景色动画
			for( var i=0 ; i<aBg.length ; i++){
				
				if(index == i){							
					animate(aBg[i],{opacity:100});
				}
				else{
					animate(aBg[i],{opacity:0});
					
				}
			}
			//动画显示
			for( var i=0 ; i<aLi.length ; i++){
				
				if(index == i){							
					animate(aLi[i],{opacity:100});
				}
				else{
					animate(aLi[i],{opacity:0});
					
				}
			}														
//	     console.log(index);
	     for( var i=0 ; i<aLi2.length ; i++){
			     	if( i == index ){
			     		aLi2[i].className = "active";
			     	}
			     	else{
			     		aLi2[i].className = "";			     		
			     	}
			     }
       }
		//list2中的li添加鼠标移入时间
		for( var i=0 ; i<aLi2.length ; i++){
			aLi2[i].index = i;
			aLi2[i].onmouseenter = function(){
				index = this.index;
				move();
			}
		}
		
		//鼠标悬停，动画停止
		box.onmouseenter = function(){
			clearInterval(timer);					
		}
		
		//鼠标移开，动画继续
		box.onmouseleave = function(){
			clearInterval(timer);
			setInterval(function(){
				index++;
				move();
			},5000);
		}
		
		//新闻热讯
		
		var aP = $("news-box").getElementsByTagName("div");
		
		for( var i=0; i<aP.length; i++){
			
			aP[i].onmouseenter = function(e){
				e = e || event;
				
				for( var i=0; i<aP.length; i++){
					aP[i].getElementsByTagName("dd")[0].style.display = 'none';
				}
				this.getElementsByTagName("dd")[0].style.display = 'block';
                this.style.color = "a10000";               
			}

		}
		
		
		
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

























