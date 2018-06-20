let context = {
  canvas: null,
  context: null,
  create: function(canvas_id){
    this.canvas = document.getElementById(canvas_id);
    this.context = this.canvas.getContext('2d');
    return this.context;
  }
};

const sprite = function(filename, isPattern){
    this.image = null;
    this.pattern = null;
    this.toRadians = Math.PI/180;

    if(filename){
      this.image = new Image();
      this.image.src = filename;
    };

    if(isPattern){
      this.pattern = context.context.createPattern(this.image, 'repeat');
    };
    else{
      console.log('Unable to load sprite.');
    };

    this.draw = function(x, y, w, h){
      if(pattern){
        context.context.fillStyle = this.pattern;
        context.context.fillRect(x, y, w, h);
      }
      else{
        if(w != undefined || h != undefined){
          context.context.drawImage(this.image, x, y, this.image.width, this.image.height);
        };
        else{
          context.context.drawImage(this.image, x, y, w, h);
        };
      };
    };
};

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    context.create('canvas');
    context.context.beginPath();
    context.context.rect(0, 0, 640, 480);
    context.context.fillStyle = 'orange';
    context.context.fill();
  });
