class Screen{
    constructor(){
        this.start = createImg("images/maxresdefault.png")

        this.bank = createImg("images/vault.jpg")
        this.thief = createImg("images/giphy.gif")
        this.police = createImg("images/police.webp")

        this.storyText1=createElement("h4") 
        this.storyText2=createElement("h4") 

        this.play=createImg("images/play.png")
        this.how=createImg("images/instructions.png")
        this.howText = createImg("images/how.png")
        this.rule1 = createElement("h4")
        this.rule2 = createElement("h4")
        this.rule3 = createElement("h4")
        this.rule4 = createElement("h4")
        this.rule5 = createElement("h4")
        this.rule6 = createElement("h4")
    }
    startScreen(){
        this.how.hide();
        this.howText.hide();
        this.thief.hide();
        this.police.hide();
        this.bank.hide();
        this.play.hide();
        this.start.position(250,380);
        this.start.size(650,300)
        this.start.mouseClicked(()=>{
            gameState="story";
        })
    }
    storyScreen(){
        this.howText .hide()
        this.start.hide();
        this.how.show();
        this.bank.show();
        this.police.show();
        this.play.hide();

        this.thief.show();
        this.thief.position(450,150);

    
        this.police.position(80,180);
        this.police.size(250,250)

        this.bank.position(0,0)
        this.bank.size(800,600)

        this.storyText1.html("This is corrupt bank full of the black money and gold")
        this.storyText1.position(10,10)
        this.storyText1.style("color","navy")
        this.storyText1.style("font-size","24px")

        this.storyText2.html("Robin Hood is a saviour. Help Robin Hood to escape from the police")
        this.storyText2.position(10,70)
        this.storyText2.style("color","navy")
        this.storyText2.style("font-size","24px")
               
        this.how.position(100,420);
        this.how.size(200,200)
        this.how.mouseClicked(()=>{
            gameState="rules";
        })


    }

    ruleScreen(){  
        this.howText.show();  
        this.bank.hide();
        this.thief.hide();
        this.police.hide();
        this.storyText1.hide();
        this.storyText2.hide();
        this.how.hide();
        this.play.show();
       
        this.play.position(500,350)
        this.play.size(250,250)

        this.howText.position(50,20);
        this.howText.size(250,250);

        this.rule1.html("1. Press Space to jump")
        this.rule1.position(400, 40)
        this.rule1.style("color","yellow")
        this.rule1.style("font-size","24px")

        this.rule2.html("2. Avoid Obstacles")
        this.rule2.position(400, 80)
        this.rule2.style("color","yellow")
        this.rule2.style("font-size","24px")

        this.rule3.html("3. Collect coins")
        this.rule3.position(400, 120)
        this.rule3.style("color","yellow")
        this.rule3.style("font-size","24px")

        this.rule4.html("4. Will get 3 chances")
        this.rule4.position(400, 160)
        this.rule4.style("color","yellow")
        this.rule4.style("font-size","24px")

        this.rule5.html("5. Collect cups on scoring 100, 200, 300 points")
        this.rule5.position(300, 200)
        this.rule5.style("color","yellow")
        this.rule5.style("font-size","24px")


        this.rule6.html("6. Police will catch you on losing all chances")
        this.rule6.position(300, 240)
        this.rule6.style("color","yellow")
        this.rule6.style("font-size","24px")

        this.play.mouseClicked(()=>{
            gameState="game";
        })
        
    }
}