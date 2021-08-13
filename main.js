const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//TODO - 1
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
        
    }

    
           

    print() {
        console.log('getting into print function');
       for(let i in this.arr) {
           console.log(this.arr[i].join(" "));

        }
       }


         // TODO 
       isOutOfBoundries(playerLoc , inputStep){
           switch(inputStep) {


                case w:
                    this.playerLocation[1] = this.playerLocation + 1;
                    break;

                case s:
                    this.playerLocation[1] = this.playerLocation -1;
                    break;

                case a:
                    this.playerLocation[0] = this.playerLocation -1;
                    break;

                case d:
                    this.playerLocation[0] = this.playerLocation +1;

           }

           if(this.playerLocation[0] < 0 || this.playerLocation[0] > 2 || this.playerLocation[1] < 0 || this.playerLocation[1] > 2){
               return false;
           }

           return true;
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
            console.log('this is w');
            this.arr[this.userLocation[0]][this.userLocation[1]] = fieldCharacter;
            this.userLocation[0]--;
            this.arr[this.userLocation[0]][this.userLocation[1]] = pathCharacter;
            console.log('updating array');
            console.log(this.userLocation[0] );
            console.log(this.userLocation[1])
        break;

        case 's':
            console.log('this is s');
            this.arr[this.userLocation[0]][this.userLocation[1]] = fieldCharacter;
            this.userLocation[0]++;
            this.arr[this.userLocation[0]][this.userLocation[1]] = pathCharacter;
            console.log('updating array');
            console.log(this.userLocation[0] );
            console.log(this.userLocation[1])
                        break;

        case 'a':
            console.log('this is a');
            this.arr[this.userLocation[0]][this.userLocation[1]] = fieldCharacter;
            this.userLocation[1]--;
            this.arr[this.userLocation[0]][this.userLocation[1]] = pathCharacter;
            console.log('updating array');
            console.log(this.userLocation[0] );
            console.log(this.userLocation[1])  
                     break;

        case 'd':
            console.log('this is d');
            this.arr[this.userLocation[0]][this.userLocation[1]] = fieldCharacter;
            this.userLocation[1]++;
            this.arr[this.userLocation[0]][this.userLocation[1]] = pathCharacter;
            console.log('updating array');
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


  //player haswnt won or failed
let gameOn = true;

// winStatus is false till player win
let winStatus = false;


//setting up a new field for the upcoming game
 //let myField = new Field();

//generating a random field
//myField.generateField();

//runs the game while player hasnt failed neither won
let field1 = new Field(generateField(5,5));

while(gameOn){
    field1.print()

  // recive the next step of user
  let nextStep = prompt('please enter your next step..');

// updating the field according to user input
  field1.updateStep(nextStep);




 



}



