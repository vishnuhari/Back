  // JavaScript Document
  
  var Mario = function(){
	  
	  this.marioStartPos = {x : canvas.width - 70, y : canvas.height-150};
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
	  
	  this.MoveMario = function(speed)
		{
			speed = speed || 1;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			this.marioStartPos.x += -speed;	
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
			//window.requestAnimationFrame(MoveMario);
		};
	  
  };