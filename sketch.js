var box;


function setup() 
{
  createCanvas(400, 400);
  box=new Box(100,100,20,20,2)
}

function draw() 
{
  background(220);
  box.show();
  box.move()

}

