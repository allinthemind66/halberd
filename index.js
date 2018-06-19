let Context = {
  canvas: null,
  context: null,
  create: function(canvas_id){
    this.canvas = document.getElementById(canvas_id);
    this.context = this.canvas.getContext('2d');
    return this.context;
  }


};

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    Context.create('canvas');

    Context.context.beginPath();
    Context.context.rect(0, 0, 640, 480);
    Context.context.fillStyle = 'orange';
    Context.context.fill()
  });
