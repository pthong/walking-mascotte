
class Mascotte{
    constructor(){
        //write your application...
        window.onkeydown = this.keyDown.bind(this);
        this.position = {top: 75, left:60}
    }

    keyDown(e){
        let key = e.keyCode ? e.keyCode : e.which;
        switch(key){
            case 37:
                this.move("left");
                break;
            case 38:
                this.move("up")
                break;
            case 39:
                this.move("right")
                break;
            case 40:
                this.move("down")
                break;

        }

    }

    move(direction){
        let speed = 5;
        if(direction === "left"){
              this.position.left = this.position.left - speed;
        }

        if(direction === "up"){
            this.position.top = this.position.top - speed;
        }

        if(direction === "right"){
            this.position.left = this.position.left + speed;
        }

        if(direction === "down"){
             this.position.top = this.position.top + speed;
        }

        document.getElementById("mascotte").style
                .setProperty("top", this.toPx(this.position.top));
            document.getElementById("mascotte").style
                .setProperty("left", this.toPx(this.position.left));

    }

    toPx(n){
        return n + "px";
    }
}