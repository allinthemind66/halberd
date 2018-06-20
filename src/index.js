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
