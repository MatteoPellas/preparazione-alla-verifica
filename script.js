function buttonFunction() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = "#00FF00";
  
    
    for (let i=0;i<150;i+=20){
      ctx.fillRect(i,i,10,10);
      ctx.fillRect(140-i,i,10,10)
    }

    
  }
  function button2Function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = "blue";

    for (let i=0;i<130;i+=20){
      for (let j=0;j<130;j+=20){
        ctx.fillRect(i,j,10,10)

      }
    }
    for (let i=0;i<150;i+=20){
      ctx.fillRect(140-i,i,10,10);
      ctx.fillStyle = "orange";
    }
  }
  