class Vaisseau{
    x;
    y;
    image;
    l=100;
    h=100;
    vitesseX =0;
    vitesseY =0;
    
    constructor(x,y,vitesseX,vitesseY,l,h,image){
    this.x = x;
    this.y = y;
    this.l=l;
    this.h=h;
    if (vitesseX) this.vitesseX = vitesseX;
    if (vitesseY) this.vitesseY = vitesseY;
    
    this.image = image;
    }
    draw(ctx){
    ctx.save();
    
    ctx.drawImage(this.image, this.x,this.y,this.l,this.h);
    //ctx.lineWidth = 3;
    //ctx.strokeStyle = "blue";
    //ctx.strokeRect(this.x,this.y,this.l,this.h);
    ctx.restore();
    }
    
    move(){
    
    this.x += this.vitesseX;
    this.y += this.vitesseY;
    
    }
    
    setPos(x,y){
    this.x = x -this.l/2;
    this.y = y -this.h/2;
    }
    
    
   }