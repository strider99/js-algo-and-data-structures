/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position

let lx = lightX, ly = lightY, tx = initialTX, ty = initialTY;
// game loop
  while(true){
    const remainingTurns = parseInt(readline());
    if(ty == ly){
      if(tx < lx){
        console.log('E')
        tx++;
      }else{
        console.log('W');
        tx--;
      }
    }else if(ty > ly){
      if(tx == lx){
        console.log('N');
        ty--;
      }else if(tx > lx){
        console.log('NW');
        tx--;
        ty--;
      }else{
        console.log('NE');
        tx++;
        ty--;

      }
    }else if(ty < ly){
      if(tx == lx){
        console.log('S');
        ty++;
      }else if(tx > lx){
        console.log('SW');
        tx--;
        ty++;
      }else{
        console.log('SE');
        tx++;
        ty++;
      }
    }
  }



// * Best Solution

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var thorX = parseInt(inputs[2]); // Thor's starting X position
var thorY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline());

    var direction = "";
    if(thorY > lightY) {
        direction = "N";
        thorY--;
    } else if(thorY < lightY ) {
        direction = "S";
        thorY++;
    }

    if(thorX > lightX) {
        direction += "W";
        thorX--;
    } else if(thorX < lightX ) {
        direction += "E";
        thorX++;
    }

    print(direction); // A single line providing the move to be made: N NE E SE S SW W or NW
}