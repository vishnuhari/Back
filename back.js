  //Main Script 
  
  var world = World.getInstance();
  world.drawWorld();
  var mario  = new Mario();
  var ghost = new Ghost();
  var pressedKeys = {"L" : false, "R" : false, "U" : false };
  var onJump = false;
  var GAMESTARTED = false;
  var LIFE = 5;
  var SCORE = 0;
  var SCOREFACTOR = 5;
  var PREVSCORE = 0;

  
  var checkCollision = function()
  {
	  if( (ghost.getGhostHead() < mario.getMarioFront()) && (ghost.getGhostHead() > mario.getMarioBack()) && (ghost.ghostStartPos.y < (mario.getMarioLegPos())) )
	  {
		 ghost = new Ghost();
		 mario  = new Mario();
		 LIFE--;
		 ctx.fillStyle = "#ff000033";
		 ctx.fillRect(0, 0, canvas.width, canvas.height);
	  }
	  
	   if( ( mario.getMarioBack() < ghost.getGhostTail()) && (mario.getMarioBack() > ghost.getGhostHead()) && (ghost.ghostStartPos.y < (mario.getMarioLegPos())) )
	  {
		 ghost = new Ghost();
		 SCORE += SCOREFACTOR;
	  }
	  if(ghost.getGhostTail() < -50)
	  {
		   ghost = new Ghost();
	  }
	  
  };
  
   var updatePoints = function ()
		{
			
				ctx.fillStyle = "#ff8f24";
				ctx.font = "20px Arial";
				ctx.textAlign = "left";
  				ctx.fillText("LIFES : " + LIFE, 10, 20);
				ctx.textAlign = "right";
				ctx.fillText(" SCORE : " + SCORE, canvas.width - 10, 20);
				if(LIFE <= 0)
				{
					GAMESTARTED = false;
					PREVSCORE = SCORE;
					SCOREFACTOR =5;	
				}
		};
  
  
  /**
  * Main Running Loop
  **/
   var runnerFn = function()
	  {
		  ctx.clearRect(0, 0, canvas.width, canvas.height);
		  //world.getInstance();
		  console.log("Runner GAME STARTED = " + GAMESTARTED);
          if(GAMESTARTED){
			  mario.drawMario(2);
			  ghost.runGhost(getGhostSpeed());
			  ghost.drawGhost();
			  checkCollision();
			  updatePoints();
			 if(pressedKeys.R)
				   mario.updateMarioPos(5,0);
			 if(pressedKeys.L)
				   mario.updateMarioPos(-5,0);
				   
			 window.requestAnimationFrame(runnerFn);
		  }
		  else {
			  showInfo();
		  }
	  };
	 
  
  
  /**
  * Key Listners
  **/
  var pressedKeys = {"L" : false, "R" : false, "U" : false };
  window.addEventListener("keydown", function(event) {
            const code = event.code;
		console.log(code + "GAME STARTED = " + GAMESTARTED);
            if (code === "ArrowRight")
			{
			   pressedKeys.R = true;
            }
            if (code === "ArrowLeft") {
				pressedKeys.L = true;
            }
            if ((code === "ArrowUp" || pressedKeys.U) && !mario._onJump) {
                mario.jump(400,20);
				pressedKeys.U = true;
				onJump = true;
            }
			if(code === "Space" || code === "Spacebar" || code === " "){
				if(!GAMESTARTED)
					{
						GAMESTARTED = true;
						LIFE = 5;
						SCORE = 0;
						runnerFn();
					}
			}
			
        }, false);
  window.addEventListener("keyup", function(event) {
	  const code = event.code;
	   if (code === "ArrowRight") {
			   pressedKeys.R = false;
            }
            if (code === "ArrowLeft") {
				pressedKeys.L = false;
            }
            if (code === "ArrowUp") {
				pressedKeys.U = false;
            }
			
  }, false);
  
  var showInfo = function()
  {
	  world.drawWorld();
	  ctx.fillStyle = "#ff8fff";
	  ctx.font = "20px Arial";
	  ctx.textAlign = "center";
	  ctx.fillText(" Trap the Ghost from Back!",canvas.width/2, 50);
	  ctx.font = "15px Arial";
	  ctx.fillText(" Colliding Ghost from FRONT will lose a life.", canvas.width/2, 100);
	  ctx.fillText(" Jump over the Ghost and catch it from backside to earn points.", canvas.width/2, 125);
	  ctx.fillText(" Use " + String.fromCharCode(8701) +" and " + String.fromCharCode(8702) + " arrow keys to Move Backward and Forward.", canvas.width/2, 200);
	  ctx.fillText(" Press " + String.fromCharCode(8593) +" arrow to JUMP.", canvas.width/2, 225);
	  ctx.font = "18px Arial";
	  ctx.fillText(" Press SPACE to start the game.", canvas.width/2, 300);
	  if(PREVSCORE > 0)
	  {
		  ctx.strokeStyle = "#ff0000";
	  	  ctx.font = "30px Arial";
	  	  ctx.textAlign = "center";
	  	  ctx.strokeText(" YOUR SCORE : " + PREVSCORE,canvas.width/2, 375);
	  }
  };
  
  var getGhostSpeed = function()
  {
	  var speed =2;
	  if(SCORE > 20)
	    {
			speed++;
			SCOREFACTOR = 10;
		}
	  if(SCORE > 50)
	    {
			speed++;
			SCOREFACTOR = 20;
		}
	  if(SCORE > 100)
	    {
			speed++;
			SCOREFACTOR = 25;
		}
	  if(SCORE > 200)
	    {
			speed++;
			SCOREFACTOR = 30;
		}
	  if(SCORE > 400)
	    {
			speed++;
			SCOREFACTOR = 40;
		}
	  if(SCORE > 600)
	    {
			speed++;
			SCOREFACTOR = 50;
		}
	  if(SCORE > 1000)
	    {
			speed++;
			SCOREFACTOR = 75;
		}
		if(SCORE > 1500)
	    {
			speed++;
			SCOREFACTOR = 100;
		}
		if(SCORE > 2000)
	    {
			speed++;
			SCOREFACTOR = 120;
		}
		if(SCORE > 3000)
	    {
			speed++;
			SCOREFACTOR = 150;
		}
		if(SCORE > 5000)
	    {
			speed++;
			SCOREFACTOR = 200;
		}
		if(SCORE > 7500)
	    {
			speed++;
			SCOREFACTOR = 300;
		}
		
		if(SCORE > 12000)
	    {
			speed++;
			SCOREFACTOR = 500;
		}
		
		return speed;
  };
  
  runnerFn();