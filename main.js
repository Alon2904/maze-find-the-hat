const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


function generateField(x,y) {
    
    //raising the value of x,y since arr index starting from 0
   x++;
   y++;

    let arr = []; // returned value
    let randomHatLocation; // holds the index number for hat location
    let twoThirds; //holds number represent 30% of cells number. will be used to set holes

    //generating array full of ░
    for (let i = 0; i < y; i++) {
      let subarray = [];
  
      for (let j = 0; j < x; j++) {
        subarray.push(fieldCharacter);
      }
  
      arr.push(subarray);
    }

     //setting holes in random places
     twoThirds = (x * y) /4;
     


     for (let i = 0; i< twoThirds;i++){
     randomX = Math.floor(Math.random() * x); 
     randomY = Math.floor(Math.random() * y);

   

     arr[randomX][randomY] = hole;
     }

    // initializing player
    arr[0][0] = pathCharacter;


    //setting random location for hat 
    randomHatLocation = Math.floor(Math.random() * x);
    arr[x-1][randomHatLocation] = hat;

   
  
    return arr;
  };
        
    
    
   



class Field {
    constructor(arr){
        this.arr = arr;
        this.userLocation = [0,0]
          //player haswnt won or failed
        this.gameOn = true;
    }

    
           

    print() {
        console.log('getting into print function');
       for(let i in this.arr) {
           console.log(this.arr[i].join(" "));

        }
       }
       //TODO - 2 function isHole
       isHole(){
         console.log("got into isHole");
        if(this.arr[this.userLocation[0]][this.userLocation[1]] == hole)
        return true;
        return false;
       }

       isOutOfBoundries(location,axis){
         if(axis == 'x'){
           if(location < 0 || location >this.arr[0].length-1) {
              return false;
           }
         }

         if(axis == 'y'){
          if(location < 0 || location >this.arr.length-1) {
             return false;
          }
        }

        return true;
         
       }

      loseGame() {
        field1.gameOn = false;
        console.log("Were sorry but you losed.. :(");
      }


       /**
        * @param userStep - direction user choosed
        * @param userlocation - current location of user
        * 
        * @return false if user lose / win if user still on game
        */
       updateStep(userStep) {
        switch(userStep) {
        case 'w' :
            this.arr[this.userLocation[0]][this.userLocation[1]] = fieldCharacter;
            this.userLocation[0]--;

            //checking if not out of boundries
            if(this.isOutOfBoundries(this.userLocation[0], 'x') == false){
              this.loseGame();
              break;
            }
            //checking if user hit a hole
            if(this.isHole() == true){
              this.loseGame();
              break;
            }
            
            this.arr[this.userLocation[0]][this.userLocation[1]] = pathCharacter;
           
        break;

        case 's':
            this.arr[this.userLocation[0]][this.userLocation[1]] = fieldCharacter;
            this.userLocation[0]++;
            //checking if not out of boundies
            if(this.isOutOfBoundries(this.userLocation[0], 'x') == false){
              this.loseGame();
              break;
            }
            this.arr[this.userLocation[0]][this.userLocation[1]] = pathCharacter;
            
                        break;

        case 'a':
            console.log('this is a');
            this.arr[this.userLocation[0]][this.userLocation[1]] = fieldCharacter;
            this.userLocation[1]--;
            //checking if not out of boundies
            if(this.isOutOfBoundries(this.userLocation[1], 'y') == false){
              this.loseGame();
              break;
            }
            
            this.arr[this.userLocation[0]][this.userLocation[1]] = pathCharacter;
            console.log(this.userLocation[0] );
            console.log(this.userLocation[1])  
                     break;

        case 'd':
            this.arr[this.userLocation[0]][this.userLocation[1]] = fieldCharacter;
            this.userLocation[1]++;
            //checking if not out of boundies
            if(this.isOutOfBoundries(this.userLocation[1], 'y') == false){
              this.loseGame();
              break;
            }
            this.arr[this.userLocation[0]][this.userLocation[1]] = pathCharacter;
            console.log(this.userLocation[0] );
            console.log(this.userLocation[1])

       }
}
}






  console.log('Welcome to amazing maze game!');
  console.log('Win the game by getting to')
  console.log('the hat and avoid holes or fall from the sides.')

  console.log('keys are:')
  console.log('W - up');
  console.log('S - down');
  console.log('A - left');
  console.log('D - right');




// winStatus is false till player win
let winStatus = false;


//setting up a new field for the upcoming game
 //let myField = new Field();

//generating a random field
//myField.generateField();

//runs the game while player hasnt failed neither won
let field1 = new Field(generateField(5,5));
console.log(field1.gameOn);


while(field1.gameOn){
    field1.print()

  // recive the next step of user
  let nextStep = prompt('please enter your next step..');

// updating the field according to user input
  field1.updateStep(nextStep);
//checking if user hit a hole


}



