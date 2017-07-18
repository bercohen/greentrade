document.addEventListener("DOMContentLoaded",function(){
	
	var quotes=["\"I made $135 off old phones that were sitting in my closet,I highly recommend using GreenTrade! \"","\"hey there delilah\"","\"whatchya gonna do when they come for you\""];
	var images=["url('Links/profile.jpg')","url('Links/girl.jpg')","url('Links/man.jpg')"];
	var names = ["Sam E.","mike", "dan"]
	var num = 0;
			
			document.getElementById("right-arrow-1").addEventListener("click", function(){
				if (num<quotes.length-1){
					num+=1;
		
				}
	 			else{
	 				num=0;
	 			
				 }
	 			document.getElementById("quote-face").style.backgroundImage= images[num];
				document.getElementById("quote-text").innerHTML= quotes[num];
				document.getElementsByClassName("quote-name")[0].innerHTML= names[num];
				
	
			})

			document.getElementById("left-arrow-1").addEventListener("click", function(){


					num-=1;
					document.getElementById("quote-face").style.backgroundImage= images[num];
					document.getElementById("quote-text").innerHTML= quotes[num];
					document.getElementsByClassName("quote-name")[0].innerHTML= names[num];
					
					console.log(num);
	 			
			
			})


})