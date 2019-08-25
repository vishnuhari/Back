// JavaScript Document



var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

//BackGround Color
ctx.fillStyle = "#000099";
ctx.fillRect(0,0, canvas.width, canvas.height);

//ground
ctx.fillStyle = "#993300";
ctx.fillRect(0, canvas.height - 80, canvas.width * 2, 80);
ctx.shadowOffsetX =2;
ctx.shadowOffsetY =2;
ctx.shadowBlur = 2;
ctx.shadowColor = "#111111";
for(var i = 0; i < canvas.width *2; i+= 50)
{
	ctx.beginPath();
    ctx.fillStyle = "#551100";
	var y =  Math.random()*70;
	ctx.arc(i + y/10,canvas.height - y, y/5, 0, 360);
	ctx.fill();
	ctx.closePath();
}
ctx.fillStyle = "#248f24";
ctx.fillRect(0, canvas.height - 80, canvas.width * 2, 20);


//Charactor
/* var mario = [
    ["o o o r r r r r r o o o o"]
    ["o o r r r r r r r r r r o"]
    ["o o t t t p p p k p o o o"]
    ["o t p t p p p p k p p p o"]
    ["o t p t t p p p p k p p p"]
    ["o t t p p p p p k k k k o"]
    ["o o o p p p p p p p p o o"]
    ["o o r r b r r r r o o o o"]
    ["o r r r b r r b r r r r o"]
    ["r r r r b b b b r r r r o"]
    ["p p r b y b b y b r p p o"]
    ["p p p b b b b b b p p p o"]
    ["p p b b b b b b b b p p o"]
    ["o o b b b o o b b b o o o"]
    ["o t t t o o o o t t t o o"]
    ["t t t t o o o o t t t t o"]
  ];
 */
 var marioStartPos = {x : canvas.width - 70, y : canvas.height-150};
 var mario = [
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

for(var i=0; i<mario.length; i++)
{
	for(var j=0; j<mario[i].length; j++)
	{
		switch(mario[i][j])
		{
			case "r":
				ctx.fillStyle = "#FF0000";
				ctx.fillRect(marioStartPos.x + j*5, marioStartPos.y + i*5, 5, 5);
				break;
			case "o":
				ctx.fillStyle = "#FFFFFF";
				//ctx.fillRect(startPos.x + j*5, startPos.y + i*5, 5, 5);
				break;
			case "b":
				ctx.fillStyle = "#0000FF";
				ctx.fillRect(marioStartPos.x + j*5, marioStartPos.y + i*5, 5, 5);
				break;
			case "t":
				ctx.fillStyle = "#555555";
				ctx.fillRect(marioStartPos.x + j*5, marioStartPos.y + i*5, 5, 5);
				break;	
			case "p":
				ctx.fillStyle = "#ffd699";
				ctx.fillRect(marioStartPos.x + j*5, marioStartPos.y + i*5, 5, 5);
				break;
		}
	}
}
  
  
  
 /* 
  
  boo: (
    (o o o o o k k k k k o o o o o o)
    (o o o k k w w w w w k k o o o o)
    (o o k w w w w w w w w w k o o o)
    (o k w w w w w w w w w w w k o o)
    (o k w k w k w w w w w w w w k o)
    (k w w k w k w w w w k k k w w k)
    (k w w k w k w w w k w w k w w k)
    (k w w w w w w w w w w w k w k o)
    (k w r w r w r w w w w k w w w k)
    (k w r r r r r w w w w w w w w k)
    (k w r r r r r w w w w w w w w k)
    (o k w r r r r r w w w w w w w k)
    (o k w r w r w r w w w w w w k o)
    (o o k w w w w w w w w w w k o o)
    (o o o k k w w w w w w k k o o o)
    (o o o o o k k k k k k o o o o o)
  ),
  */
  
var ghost =[
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
var ghostStartPos = {x : 70, y : canvas.height-150};
for(var i=0; i<ghost.length; i++)
{
	for(var j=0; j<ghost[i].length; j++)
	{
		switch(ghost[i][j])
		{
			case "r":
				ctx.fillStyle = "#FF0000";
				ctx.fillRect(ghostStartPos.x + j*5, ghostStartPos.y + i*5, 5, 5);
				break;
			case "o":
				ctx.fillStyle = "#FFFFFF";
				//ctx.fillRect(startPos.x + j*5, startPos.y + i*5, 5, 5);
				break;
			case "w":
				ctx.fillStyle = "#DDDDDD";
				ctx.fillRect(ghostStartPos.x + j*5, ghostStartPos.y + i*5, 5, 5);
				break;
			case "k":
				ctx.fillStyle = "#555555";
				ctx.fillRect(ghostStartPos.x + j*5, ghostStartPos.y + i*5, 5, 5);
				break;	
		}
	}
}