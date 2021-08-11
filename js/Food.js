class Food{
    constructor(foodStock){
      this.image = loadImage("Images/Milk.png")
      width = this.width
      height = this.height  
    }

    getFoodStock(){

    }

    updateFoodStock(){

    }

    deductFood(){

    }

    display(){
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80
            y=y+50
          }
          this.image(this.image,x,y,50,50)
          x=x+30
        }
      }
    }

    
}