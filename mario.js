  // JavaScript Document
  
  var Mario = function(){
	  
	  this.marioInitialPos = {x :  70, y : canvas.height-150};
	  this.marioStartPos = {x :  70, y : canvas.height-150};
	  this._currentDirection = "R";
	  this.marioArt = [
					"ooorrrrrroooo",
					"oorrrrrrrrrro",
					"ootttpppkpooo",
					"otptppppkpppo",
					"otpttppppkppp",
					"ottpppppkkkko",
					"oooppppppppoo",
					"oorrbrrrroooo",
					"orrrbrrbrrrro",
					"rrrrbbbbrrrro",
					"pprbybbybrppo",
					"pppbbbbbbpppo",
					"ppbbbbbbbbppo",
					"oobbboobbbooo",
					"otttooootttoo",
					"ttttooootttto"
				  ];
	  this.drawMario = function()
				  {
					  for(var i=0; i<this.marioArt.length; i++)
					  {
						  for(var j=0; j<this.marioArt[i].length; j++)
						  {
							  switch(this.marioArt[i][j])
							  {
								  case "r":
									  ctx.fillStyle = "#FF0000";
									  ctx.fillRect(this.marioStartPos.x + j*5, this.marioStartPos.y + i*5, 5, 5);
									  break;
								  case "o":
									  ctx.fillStyle = "#FFFFFF";
									  //ctx.fillRect(startPos.x + j*5, startPos.y + i*5, 5, 5);
									  break;
								  case "b":
									  ctx.fillStyle = "#0000FF";
									  ctx.fillRect(this.marioStartPos.x + j*5, this.marioStartPos.y + i*5, 5, 5);
									  break;
								  case "t":
									  ctx.fillStyle = "#555555";
									  ctx.fillRect(this.marioStartPos.x + j*5, this.marioStartPos.y + i*5, 5, 5);
									  break;	
								  case "p":
									  ctx.fillStyle = "#ffd699";
									  ctx.fillRect(this.marioStartPos.x + j*5, this.marioStartPos.y + i*5, 5, 5);
									  break;
								  case "k":
								  ctx.fillStyle = "#000000";
								  ctx.fillRect(this.marioStartPos.x + j*5, this.marioStartPos.y + i*5, 5, 5);
								  break;
							  }
						  }
					  }  
					  
				  };

		
		this.jump = function (height, frameCount)
		{
			this._onJump = true;
			if(height)
				this._height = height;
			if(frameCount)
				{
					this._frameCount = frameCount;
					this._heightFactor = height/frameCount;
				}
			window.requestAnimationFrame(function ()
			{
				if(this._frameCount<=0)
						{
							this._heightFactor *= 1.2;
							this.marioStartPos.y += this._heightFactor;
						}
				else
						{
							this._heightFactor *= .9;
							this.marioStartPos.y -= this._heightFactor;
						}
						
				this._frameCount--;
				//console.log("initial = " + this.marioInitialPos.y + );
				if(this.marioInitialPos.y > this.marioStartPos.y)
				{
					this.jump();	
				}
				else
				{
					this.marioStartPos.y = this.marioInitialPos.y;
					this._onJump = false;	
				}
			}.bind(this)
			);
		};
		this.turnMario = function(direction)
		{
			if((this._currentDirection === "R" && direction === "L") || (this._currentDirection === "L" && direction === "R"))
			 {
				 for(var i=0; i<this.marioArt.length; i++)
				  {
					 this.marioArt[i] = this.marioArt[i].split("").reverse().join("");
					 
				  }
			  this._currentDirection = direction;
			 }
		};
		
		this.updateMarioPos = function(x, y)
		{
			this.marioStartPos.x += x;
			if(this.marioStartPos.x <= 0 || this.marioStartPos.x >= 550)
				this.marioStartPos.x -= x;
			this.marioStartPos.y += y;
			this.drawMario();
		};
		
		this.getMarioBack = function()
		{
			return this.marioStartPos.x;
		};
		this.getMarioFront = function()
		{
			return this.marioStartPos.x + (this.marioArt[0].length*5);
		};
		this.getMarioLegPos = function()
		{
			return this.marioStartPos.y + (this.marioArt.length*5);
		};
	  
  };