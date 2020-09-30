class SpelElement(){
    constructor(_x, _y){
        this.x = x;
        this.y = y;
    }
}

class Bal extends SpelElement(){
    constructor(_x, _y, _SpeedX, _SpeedY){
        super(_x, _y);
        this.SpeedX = _SpeedX;
        this.SpeedY = _SpeedY;
        this.diameter = 80;
    }

    show(){
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    update(){
        this.x = this.x + this.SpeedX;
        this.y = this.y + this.SpeedY;
    }
}