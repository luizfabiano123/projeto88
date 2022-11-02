var canvas= new fabric.Canvas('myCanvas');

ballY=0;
ballX=0;
holeY=400;
holeX=800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	
fabric.Image.fromURL("golf-h.png", function(Img){
holeObj= img;
holeObj.scaleToWidht(50);
holeObj.scaleToHeight(50);
holeObj.set({
	top:holeY,
	left:holeX
});
canvas.add(holeObj);
});

	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ballObj= img;
		ballObj.scaleToWidht(50);
		ballObj.scaleToHeight(50);
		ballObj.set({
			top:ballY,
			left:ballX
		});
		canvas.add(ballObj);
		});




}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
	{ 
		canvas.remove(ball_obj);
		 console.log("Você atingiu o objetivo!!!"); 
		 document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
	 document.getElementById("myCanvas").style.borderColor="red";
	}
	
}else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY>=0)
		{
ballY=ballY-blockImageHeight;
console.log("altura da imagem do bloco="+block_image_height);
canvas.remove(ballObj);
newimage()
	}
	}
	function down()
	{
		if(ballY<=450)
		{
ballY=ballY+blockImageHeight;
console.log("altura da imagem do bloco="+block_image_height);
canvas.remove(ballObj);
newimage()
		}


	}

	function left()
	{
		if(ballX >5)
		{
			ballX=ballX-blockImageWidth;
console.log("altura da imagem do bloco="+block_image_Width);
canvas.remove(ballObj);
newimage()
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX=ballX+blockImageWidth;
			console.log("altura da imagem do bloco="+block_image_Width);
			canvas.remove(ballObj);
			newimage()
		}
	}
	


