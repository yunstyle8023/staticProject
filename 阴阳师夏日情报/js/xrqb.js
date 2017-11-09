        var ul=document.getElementById("ul");
        var shadow=ul.getElementsByTagName("div");
	    var li=document.getElementsByClassName("j1");
	    
	    

        var big=document.getElementById("big");
        var big_box=document.getElementById("big-box");
	    var odiv=document.getElementById("odiv");
	    var onew=odiv.getElementsByTagName("div");
        var left=document.getElementById("left");
        var right=document.getElementById("right");
        var able=document.getElementById("able");
        var cancer=document.getElementById("cancer");
        
        /*加阴影*/
        for (var i = 0; i < shadow.length; i++) {
         	shadow[i].style.background="url(images/quan/role_bg_0"+(i+1)+".png) no-repeat center center";
         	shadow[i].style.backgroundSize="cover";
        }
        cancer.onclick=function(){
            big.style.display="none";
            for (var i = 0; i < onew.length; i++) {
            	onew[i].id="";
            }
        }
        left.onclick=function(){
        	toleft()
        }
        right.onclick=function(){
        	toright();
        }
        for (var i = 0; i < li.length; i++) {
        	li[i].index=i;
        	li[i].onclick=function(){
        		for (var i = 0; i < onew.length; i++) {
        			onew[i].className="";
        		}
        		big.style.display="block";
        		if(this.index==0){
        		onew[5].className="zuo";
        		onew[this.index].className="show";
        		onew[this.index+1].className="you";
        		}
        		else if(this.index==5){
        		onew[this.index-1].className="zuo";
        		onew[this.index].className="show";
        		onew[0].className="you";
        		}
        		else{
        		onew[this.index-1].className="zuo";
        		onew[this.index].className="show";
        		onew[this.index+1].className="you";	
        		}
        		// onew[this.index].getElementsByTagName("img")[0].className="I2";
        		// onew[this.index].getElementsByTagName("img")[1].className="J2";
        		// onew[this.index].getElementsByTagName("span")[0].className="S2";
        		onew[this.index].id="act2";
            	big_box.className="bg";
            	setTimeout(qing, 10);
        	} 
        }
        function qing(){
        	for (var s = 0; s < onew.length; s++) {
	        		if(onew[s].className=="show"){
			            // onew[s].getElementsByTagName("img")[0].className="I1";
		        		// onew[s].getElementsByTagName("img")[1].className="J1";
		        		// onew[s].getElementsByTagName("span")[0].className="S1";
		        		onew[s].id="act";
	            		break;
	        		}
        		}
            big_box.className="bg2";
        }
        function toleft(){
        for (var i = 0; i < onew.length; i++) {
        	if(onew[i].className=="show"){
	        		for (var j = 0; j < onew.length; j++) {
	        			onew[j].className="";
	        		}
        		if(i==1){
        			onew[i].className="you";
        			onew[i-1].className="show";
        			onew[5].className="zuo";
        		}
        		else if(i==0){
        			onew[i].className="you";
        			onew[5].className="show";
        			onew[4].className="zuo";
        			break;
        		}
        		else{
        			onew[i].className="you";
        			onew[i-1].className="show";
        			onew[i-2].className="zuo";
        			}
       			}
        	}
		}
		function toright(){
        for (var i = 0; i < onew.length; i++) {
        	if(onew[i].className=="show"){
        		for (var j = 0; j < onew.length; j++) {
        			onew[j].className="";
        		}
        		if(i==5){
        			onew[i].className="zuo";
        			onew[0].className="show";
        			onew[1].className="you";
        			break;
        		}
        		else if(i==4){
        			onew[i].className="zuo";
        			onew[5].className="show";
        			onew[0].className="you";
        			break;

        		}
        		else{
        			onew[i].className="zuo";
        			onew[i+1].className="show";
        			onew[i+2].className="you";
        			break;
        			}
       			}
        	}
		}
  //      for (var i = 0; i < li.length; i++) {
  //           onew[i].classList.add('none');
  //           li[i].index=i;
		// 	li[i].onclick=function () {
		// 		big.style.display="block";
		// 		onew[this.index].classList.remove('none');
		// 	}
		// }
		// left.onclick=function(){
		// 	for(var i=0;i<onew.length;i++){
				
		// 	if(onew[i].style.display="block"){
		// 		onew[i].style.display="none";
  //               onew[i+1].style.display="block";
		// 		}
		// 	}
		// }
		// right.onclick=function(){
		// 	for(var i=0;i<onew.length;i++){
				
		// 	if(onew[i].style.display="block"){
		// 		onew[i].style.display="none";
  //               onew[i-1].style.display="block";
		// 		}
		// 	}
		// }
  //       left.onclick=function(){		
		//     if(i==1)
		//         {i=-5;}
		//     var n=i*300;
		//     odiv.style.transform="translateX("+n+"px)";
		//     i++;     		
	 //    }
	 //    right.onclick=function(){
		//     if(i==-5)
		//         {i=1;}
		//     var n=(i-1)*300;
		//     odiv.style.transform="translateX("+n+"px)";
		//     i--;		
		// }
		
        
  //       function test(x){
		//   var i=0;
		//   return function(){

		//   	odiv.style.transform="translateX("+x[i++]+"px)";
			
		//   }
		// }		
		// var next=test([100,200,300]);
		// left.onclick=function(){
		// 	next();
		// }

		// function test1(x){
		//   var i=0;
		//   return function(){
		//   	odiv.style.transform="translateX("+x[i++]+"px)";
			
		//   }
		// }		
		// var next1=test1([-100,-200,-300]);
		// right.onclick=function(){
		// 	next1();
		// }