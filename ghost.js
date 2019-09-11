  var Ghost = function(){
  
  this.ghostArt =[
  "oooookkkkkoooooo",
  "oookkwwwwwkkoooo",
  "ookwwwwwwwwwkooo",
  "okwwwwwwwwwwwkoo",
  "okwkwkwwwwwwwwko",
  "kwwkwkwwwwkkkwwk",
  "kwwkwkwwwkwwkwwk",
  "kwwwwwwwwwwwkwko",
  "kwrwrwrwwwwkwwwk",
  "kwrrrrrwwwwwwwwk",
  "kwrrrrrwwwwwwwwk",
  "okwrrrrrwwwwwwwk",
  "okwrwrwrwwwwwwko",
  "ookwwwwwwwwwwkoo",
  "oookkwwwwwwkkooo",
  "oooookkkkkkooooo"
  ];
  this.ghostStartPos = {x : 670, y : canvas.height-150};
  
  this.drawGhost = function()
  {
	  for(var i=0; i<this.ghostArt.length; i++)
	  {
		  for(var j=0; j<this.ghostArt[i].length; j++)
		  {
			  switch(this.ghostArt[i][j])
			  {
				  case "r":
					  ctx.fillStyle = "#FF0000";
					  ctx.fillRect(this.ghostStartPos.x + j*5, this.ghostStartPos.y + i*5, 5, 5);
					  break;
				  case "o":
					  ctx.fillStyle = "#FFFFFF";
					  //ctx.fillRect(startPos.x + j*5, startPos.y + i*5, 5, 5);
					  break;
				  case "w":
					  ctx.fillStyle = "#DDDDDD";
					  ctx.fillRect(this.ghostStartPos.x + j*5, this.ghostStartPos.y + i*5, 5, 5);
					  break;
				  case "k":
					  ctx.fillStyle = "#555555";
					  ctx.fillRect(this.ghostStartPos.x + j*5, this.ghostStartPos.y + i*5, 5, 5);
					  break;	
			  }
		  }
	  }
  }
	 

  
  this.runGhost = function (displacement,direction)
  {
	  displacement = displacement || 2;
	  direction = direction || -1;
	  this.ghostStartPos.x += (displacement*direction);
  };
  
  
	this.getGhostHead = function()
	{
		return this.ghostStartPos.x;
	};
	this.getGhostTail = function()
	{
		return this.ghostStartPos.x + (this.ghostArt[0].length*5);
	};  
  
};