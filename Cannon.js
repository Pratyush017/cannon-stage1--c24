class Cannon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("White");
      rect(pos.x, pos.y, this.width, this.height);

        //Create semicircle 
        arc(70, 465, 90, 100, 180, 360);
         //Create rectangles 
         rect(70, 470, 100, 20);
         rect(70, 490, 100, 20);
    }
  };