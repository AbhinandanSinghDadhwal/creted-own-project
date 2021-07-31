class Screen{
    constructor(){
        this.start = createImg("images/maxresdefault.png")
        //this.how  = createImg()
    }
    startScreen(){
        this.start.position(250,380);
        this.start.size(650,300)
        this.start.mouseClicked(()=>{
            gameState="story";
        })
    }
    storyScreen(){
        this.start.hide()


    }
}