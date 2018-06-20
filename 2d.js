let context = {
  canvas: null,
  context: null,
  create: function(canvas_id){
    this.canvas = document.getElementById(canvas_id);
    this.context = this.canvas.getContext('2d');
    return this.context;
  }
};

const Sprite = function(filename, isPattern){
    this.image = null;
    this.pattern = null;
    this.toRadians = Math.PI/180;

    if(filename){
      this.image = new Image();
      this.image.src = filename;
      if(isPattern){
        this.pattern = context.context.createPattern(this.image, 'repeat');
      }
    }
    else{
      console.log('Unable to load sprite.');
    };

    this.draw = function(x, y, w, h){
      if(this.pattern){
        context.context.fillStyle = this.pattern;
        context.context.fillRect(x, y, w, h);
      }
      else{
        if(!w){
          context.context.drawImage(this.image, x, y, this.image.width, this.image.height);
        }
        else{
          context.context.drawImage(this.image, x, y, w, h);
        };
      };
    };

    this.rotate = function(x, y, angle){
      context.context.save();
      context.context.translate(x, y);
      context.context.rotate(angle * this.toRadians);
      context.context.drawImage(this.image, -(this.image.width/2), -(this.image.height/2));
      context.context.restore();
    };
};

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    context.create('canvas');
    const WALL = "http://www.tigrisgames.com/wall.png";
    const CRATE = "http://www.tigrisgames.com/crate.png";
    let image = new Sprite(WALL, false);
    let image2 = new Sprite(CRATE, false);
    let pattern = new Sprite(CRATE, true);
    let angle = 0;

    setInterval(function(){
      context.context.fillStyle = "#000000";
      context.context.fillRect(0, 0, 800, 800);
      image.draw(0, 0, 64, 64);
      image.draw(0, 74, 256, 32);
      pattern.draw(160, 160, 256, 180);
      image.rotate(115, 160, angle += 4.0);
      image2.rotate(115, 260, -angle/2)

    }, 25)
    // context.context.beginPath();
    // context.context.rect(0, 0, 640, 480);
    // context.context.fillStyle = 'orange';
    // context.context.fill();
  });
