const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(twodArr){
        this.arr = twodArr;
        this.playerLocation = [2,2];
    }

    print() {
       for(let i in this.arr) {
           console.log(this.arr[i].join(" "));

        }
       }

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

       updateStep(userStep) {
        


       }
}




const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);


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

//get a number represent the location of the hat 
let hatLocation = myField.getHatLocation;

//setting up a new field for the upcoming game
let myField = new Field();

//generating a random field
myField.generateField();

//runs the game while player hasnt failed neither won
while(gameOn){


  // recive the next step of user
  let nextStep = prompt('please enter your next step..');

// updating the field according to user input
  myField.updateStep(nextStep);




 myField.print()

if(winStatus) {
    gameOn = false;

}

}



