window.onload=function(){
    var x=120;
    var y=120;
    var key,pos=0;
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    var img=new Image();
    img.onload=function()
    {
      ctx.drawImage(img,x,y);
    }
    img.src="http://www.infogridpacific.com/blog/i/ball_online.png";
    document.onkeydown=function(e)
    {
      pos=1;
      key=window.event?e.keyCode:e.which;
    }
    document.onkeyup=function(e){pos=0;}
    setInterval(function()
    {
      if(pos==0)return;
      if(key==37)x-=2;
      if(key==38)y-=2;
      if(key==39)x+=2;
      if(key==40)y+=2;
        canvas.width=canvas.width;
      ctx.drawImage(img,x,y);
    },5);
    }
    
