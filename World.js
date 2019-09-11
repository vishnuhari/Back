  // JavaScript Document
   var World = function()
   { 
	//BackGround Color
	var y =  Math.random()*70;
		this.drawWorld = function()
		{
			ctxBg.fillStyle = "#000099";
		    ctxBg.fillRect(0,0, canvas.width, canvas.height);
		
			//ground
			ctxBg.fillStyle = "#993300";
			ctxBg.fillRect(0, canvas.height - 80, canvas.width * 2, 80);
			ctxBg.shadowOffsetX =2;
			ctxBg.shadowOffsetY =2;
			ctxBg.shadowBlur = 2;
			ctxBg.shadowColor = "#111111";
			for(var i = 50; i < canvas.width *2; i+= 100)
			{
				ctxBg.beginPath();
				ctxBg.fillStyle = "#551100";
				
				ctxBg.arc(i,canvas.height - ( Math.log10(i)*10), y/5, 0, 360);
				ctxBg.fill();
				ctxBg.closePath();
			}
			ctxBg.fillStyle = "#248f24";
			ctxBg.fillRect(0, canvas.height - 80, canvas.width * 2, 20);
			  
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