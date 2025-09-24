
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576


let score = 0
c.fillStyle = "black"
c.font = "20px Arial"
c.fillText("Score: " + score, 20, 40)


const gravity = 2
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }

        this.width = 30
        this.height = 30
        this.speed =10
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y <= canvas.height
        )
            this.velocity.y += gravity
        
    }
}


class Coin {
  constructor({ x, y, image }) {
    this.position = { x, y }
    this.radius = 15 // size of coin
    this.image = image
    this.collected = false
  }

  draw() {
    if (this.collected) return

    if (this.image) {
      c.drawImage(this.image, this.position.x, this.position.y, this.radius * 2, this.radius * 2)
    } else {
      // fallback if no image
      c.beginPath()
      c.arc(this.position.x + this.radius, this.position.y + this.radius, this.radius, 0, Math.PI * 2)
      c.fillStyle = "gold"
      c.fill()
      c.strokeStyle = "orange"
      c.stroke()
    }
  }

  collect(player) {
    if (this.collected) return false

    // simple collision detection (circle vs player rectangle)
    if (
      player.position.x < this.position.x + this.radius * 2 &&
      player.position.x + player.width > this.position.x &&
      player.position.y < this.position.y + this.radius * 2 &&
      player.position.y + player.height > this.position.y
    ) {
      this.collected = true
      return true
    }
    return false
  }
}


class Platform {
    constructor({image, x, y,width ,height} ) {
        this.position = {
            x,
            y 
        }

        this.width = width 
        this.height = height
        this.image =image
    }

    draw() {
        
  c.drawImage(this.image,this.position.x ,this.position.y,this.width ,this.height);

    }
}
// class object {
//     constructor({img, x, y} ) {
//         this.position = {
//             x,
//             y 
//         }

//         // this.width = 300
//         // this.height = 100
//         this.img =img
//     }

//     draw() {
        
//   c.drawImage(this.img,this.position.x ,this.position.y);

//     }
// }
let player = new Player()
let platformImage = new Image();
platformImage.src = "./img/=platform.png"; 

let coinImage = new Image()
coinImage.src = "./img/coin.png"



let platforms = []
    platforms.push(
      new Platform({x:-1,y:480, image: platformImage,width:300,height:100
      }),
    
      new Platform({x:300,y:480 ,image: platformImage,width:300,height:100
      }),
    
      new Platform({x:596,y:480 ,image: platformImage,width:300,height:100
      }),
    
      new Platform({x:1000,y:480 ,image: platformImage,width:300,height:100
      }),
    
      new Platform({x:1300,y:480 ,image: platformImage,width:300,height:100
      })
    ,
      new Platform({x:1600,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:2000,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:2300,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:2600,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:2900,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:3400,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:3700,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:4000,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:4400,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:4700,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:5000,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:5000,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:5000,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:5000,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:5000,y:480 ,image: platformImage,width:300,height:100
      }),

    //  obstacle
     new Platform({x:200,y:300 ,image: platformImage,width:300,height:50  //1
      }),

      new Platform({x:550,y:200 ,image: platformImage,width:300,height:50  //2
      }),
      
      new Platform({x:850,y:120,image: platformImage,width:150,height:40  //3
      }),
      
      new Platform({x:1100,y:200 ,image: platformImage,width:100,height:40  //4
      }),
      
      new Platform({x:1200,y:300 ,image: platformImage,width:200,height:40  //5
      }),
      
    
      new Platform({x:2500,y:250 ,image: platformImage,width:200,height:40  //9
      }),
      
      new Platform({x:2100,y:230 ,image: platformImage,width:150,height:40  //7
      }),
      
      new Platform({x:1700,y:360 ,image: platformImage,width:200,height:40  //6
      }),
      
      new Platform({x:2300,y:310 ,image: platformImage,width:160,height:40  //8
      }),
      new Platform({x:2700,y:400,image: platformImage,width:130,height:30  //10
      }),
      
      new Platform({x:3000,y:230 ,image: platformImage,width:130,height:40 //11
      }),
      new Platform({x:3300,y:350 ,image: platformImage,width:160,height:40  //12
      }),
      new Platform({x:3600,y:170 ,image: platformImage,width:170,height:50  //13
      }),
      new Platform({x:4000,y:330 ,image: platformImage,width:140,height:40 //14
      }),
      new Platform({x:4400,y:230 ,image: platformImage,width:160,height:40 //15
      }),
     
      
       new Platform({x:4700,y:350 ,image: platformImage,width:250,height:60 //15
      }),

    )


    // const objectImage =new Image();
    // objectImage.src ="./img/trees.png";

    // const objects =[]
    // objects.push(
    //   new object({x:-1,y:480,img:objectImage}),
    // )
  
let keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }

}
let scrollOffset = 0
let coins = []
function init(){
 player = new Player()
 platformImage = new Image();
platformImage.src = "./img/=platform.png"; 



 platforms = []
    platforms.push(
      new Platform({x:-1,y:480, image: platformImage,width:300,height:100
      }),
    
      new Platform({x:300,y:480 ,image: platformImage,width:300,height:100
      }),
    
      new Platform({x:596,y:480 ,image: platformImage,width:300,height:100
      }),
    
      new Platform({x:1000,y:480 ,image: platformImage,width:300,height:100
      }),
    
      new Platform({x:1300,y:480 ,image: platformImage,width:300,height:100
      })
    ,
      new Platform({x:1600,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:2000,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:2300,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:2600,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:2900,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:3400,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:3700,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:4000,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:4400,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:4700,y:480 ,image: platformImage,width:300,height:100
      }),
      new Platform({x:5000,y:480 ,image: platformImage,width:300,height:100
      }),

      //obstacle
       new Platform({x:200,y:300 ,image: platformImage,width:300,height:50  //1
      }),

      new Platform({x:550,y:200 ,image: platformImage,width:300,height:50  //2
      }),
      
      new Platform({x:850,y:120,image: platformImage,width:150,height:40  //3
      }),
      
      new Platform({x:1100,y:200 ,image: platformImage,width:100,height:40  //4
      }),
      
      new Platform({x:1200,y:300 ,image: platformImage,width:200,height:40  //5
      }),
      
    
      new Platform({x:2500,y:250 ,image: platformImage,width:200,height:40  //9
      }),
      
      new Platform({x:2100,y:230 ,image: platformImage,width:150,height:40  //7
      }),
      
      new Platform({x:1700,y:360 ,image: platformImage,width:200,height:40  //6
      }),
      
      new Platform({x:2300,y:310 ,image: platformImage,width:160,height:40  //8
      }),
      new Platform({x:2700,y:400,image: platformImage,width:130,height:30  //10
      }),
      
      new Platform({x:3000,y:230 ,image: platformImage,width:130,height:40 //11
      }),
      new Platform({x:3300,y:350 ,image: platformImage,width:160,height:40  //12
      }),
      new Platform({x:3600,y:170 ,image: platformImage,width:170,height:50  //13
      }),
      new Platform({x:4000,y:330 ,image: platformImage,width:140,height:40 //14
      }),
      new Platform({x:4400,y:230 ,image: platformImage,width:160,height:40 //15
      }),
      new Platform({x:4700,y:350 ,image: platformImage,width:250,height:60 //15
      }),
     
      
      

    )



    // const objectImage =new Image();
    // objectImage.src ="./img/trees.png";

    // const objects =[]
    // objects.push(
    //   new object({x:-1,y:480,img:objectImage}),
    // )
  coins = [
    new Coin({ x: 350, y: 350, image: coinImage }),
    new Coin({ x: 650, y: 300, image: coinImage }),
    new Coin({ x: 1000, y: 200, image: coinImage })
  ]



scrollOffset = 0
}
function animate() {
    requestAnimationFrame(animate)
c.fillStyle ='skyblue'
    c.fillRect(0, 0, canvas.width, canvas.height)

    //  objects.forEach(object => {
    //     object.draw()
    // })
    platforms.forEach(platform => {
        platform.draw()
    })
   
player.update()

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed
    }
    else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -player.speed
    }

    else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset +=player.speed
            platforms.forEach(platform => {
         platform.position.x -= player.speed
    })
    
        } else if (keys.left.pressed) {
            scrollOffset -=player.speed
            platforms.forEach(platform => {
         platform.position.x +=player.speed
    })
        
        }

    }
    //platform collision detection
     platforms.forEach(platform => {
    if (player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x +
        platform.width
    ) {
        player.velocity.y = 0
    }
})


// Draw and check coins
coins.forEach(coin => {
  coin.draw()
  if (coin.collect(player)) {
    score++ // add points
    console.log("Score:", score)
  }
})




//win codition
if(scrollOffset >2000){
    console.log('you win')
}


//lose condition
if(player.position.y>canvas.height){
  init()
}}

animate()

addEventListener('keydown', ({ keyCode }) => {
    // console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = true
            break

        case 83:
            console.log('down')
            break

        case 68:
            console.log('right')
            keys.right.pressed = true
            break

        case 87:
            console.log('up')
            player.velocity.y -= 10
            break

    }
    console.log(keys.right.pressed)
})
addEventListener('keyup', ({ keyCode }) => {
    // console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = false
            break

        case 83:
            console.log('down')
            break

        case 68:
            console.log('right')
            keys.right.pressed = false

            break

        case 87:
            console.log('up')
            player.velocity.y -= 20
            break

    }
    console.log(keys.right.pressed)
})
