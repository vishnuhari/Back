  // JavaScript Document
   var World = function()
   { 
	//BackGround Color
	var y =  Math.random()*70;
		this.drawWorld = function()
		{
			ctxBg.fillStyle = "#000099";
		    ctxBg.fillRect(0,0, canvas.width, canvas.height);
	
			//grass
			ctxBg.fillStyle = "#00ff00";
			ctxBg.beginPath();
            for(var i =0; i<= 600; i +=20)
		    {
				var r = 9 + Math.random() * 5;
				ctxBg.arc(0 + i, canvas.height - 150, r, Math.PI, 0);
				ctxBg.fill();
			}
			ctxBg.fillRect(0, canvas.height - 150, canvas.width , 100);
			
			//ground
			ctxBg.fillStyle = "#993300";
			ctxBg.fillRect(0, canvas.height - 80, canvas.width * 2, 80);
			ctxBg.shadowOffsetX =2;
			ctxBg.shadowOffsetY =2;
			ctxBg.shadowBlur = 2;
			ctxBg.shadowColor = "#111111";
			ctxBg.fillStyle = "#248f24";
			ctxBg.fillRect(0, canvas.height - 80, canvas.width * 2, 20);
			
			//cloud
			ctxBg.fillStyle = "#ffffffcc";
			ctxBg.beginPath();
            for(var i =0; i<= 600; i +=20)
		    {
				var r =  Math.random() * 30;
				if(r>20)
				{
					ctxBg.arc(0 + i,  50, r, 2*Math.PI, 0);
					ctxBg.fill();
					ctxBg.arc(10 + i,  50, r *.75, 2*Math.PI, 0);
					ctxBg.fill();
					ctxBg.arc(-20 + i,  50, r *.5, 2*Math.PI, 0);
					ctxBg.fill();
				}
			}
			//ctxBg.fillRect(0, canvas.height - 150, canvas.width , 100);
			

		};
		
		
		
   };
   
   World.getInstance = function()
		{
		  if(!this._instance)
		  {
			  this._instance = new World();// this.drawWorld();
		  }
		  
		  return this._instance;
		};